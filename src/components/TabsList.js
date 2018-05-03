import React from 'react';
import styled from 'styled-components';

const StyledTabsList = styled.ul`
  list-style: none;

  display: flex;
  margin: 0;
  padding: 0;
`;

const StyledTabsListItem = styled.li`
  padding: 12px;
  cursor: pointer;

  text-align: center;

  color: #222;
  background-color: ${props => (props.active ? '#cdcdcd' : '#eee')};
`;

class TabsList extends React.Component {
  isActive(index) {
    return index === this.props.selectedTab;
  }

  accessibilityAttributes = index => {
    return {
      'aria-controls': `section${index + 1}`,
      'aria-selected': !this.isActive(index),
      tabIndex: this.isActive(index) ? 0 : -1,
      active: this.isActive(index),
      role: 'tab'
    };
  };

  render() {
    const { tabs } = this.props;
    return (
      <div>
        <StyledTabsList role="tablist">
          {tabs.map((tab, index) => (
            <StyledTabsListItem
              key={tab.id}
              id={`section${index + 1}`}
              onClick={() => this.props.selectTab(index)}
              onKeyDown={this.props.handleKeyDown}
              active={this.isActive(index)}
              {...this.accessibilityAttributes(index)}
            >
              {tab.name}
            </StyledTabsListItem>
          ))}
        </StyledTabsList>
      </div>
    );
  }
}

export default TabsList;
