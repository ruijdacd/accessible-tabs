import React from 'react';
import styled from 'styled-components';

const StyledPanels = styled.div`
  background-color: #fff;
  padding: 12px;

  border: 1px solid #eee;
`;

const StyledPanelsItem = styled.section`
  display: ${props => (props.active ? 'block' : 'none')};
`;

class TabsPanels extends React.Component {
  isActive(index) {
    return index === this.props.selectedTab;
  }

  accessibilityAttributes = index => {
    return {
      'aria-selected': !this.isActive(index),
      tabIndex: this.isActive(index) ? 0 : -1,
      role: 'tabpanel'
    };
  };

  render() {
    return (
      <StyledPanels>
        {this.props.tabs.map((tab, index) => (
          <StyledPanelsItem
            key={tab.id}
            active={this.isActive(index)}
            {...this.accessibilityAttributes(index)}
          >
            <h3>{tab.content.title}</h3>
            <p>{tab.content.text}</p>
          </StyledPanelsItem>
        ))}
      </StyledPanels>
    );
  }
}

export default TabsPanels;
