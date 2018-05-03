import React from 'react';
import styled from 'styled-components';

import TabsList from './TabsList';
import TabsPanels from './TabsPanels';

const StyledTabs = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
`;

class Tabs extends React.Component {
  state = {
    prevSelectedTab: null,
    selectedTab: 0,
    tabs: [
      {
        id: 1,
        name: 'Tab 1',
        content: {
          title: 'Tab 1',
          text:
            'Potenti et eros sed justo commodo bibendum non at nunc. Maecenas sit amet tellus nec mi gravida posuere non pretium magna. Nulla auctor eleifend turpis consequat pharetra.'
        }
      },
      {
        id: 2,
        name: 'Tab 2',
        content: {
          title: 'Tab 2',
          text:
            'Duis sagittis, est sit amet gravida tristique, purus lectus venenatis urna, id molestie magna risus ut nunc. Aliquam nisl enim, tristique tempus placerat at, posuere in lectus. Vestibulum sit amet ipsum lacus. Suspendisse potenti.'
        }
      },
      {
        id: 3,
        name: 'Tab 3',
        content: {
          title: 'Tab 3',
          text:
            'Suspendisse potenti cras molestie, risus a enim convallis vitae luctus libero lacinia. Nulla vel magna sit amet dui lobortis commodo vitae vel nulla. Suspendisse potenti. Sed dapibus, lectus sit amet adipiscing egestas, mauris est viverra nibh, iaculis pretium sem orci aliquet mauris. Donec a congue leo. Vestibulum sit amet ipsum lacus.'
        }
      }
    ]
  };

  handleKeyDown = e => {
    let targetIndex;

    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') e.preventDefault();
    else return;

    if (this.state.selectedTab > 0 && e.key === 'ArrowLeft')
      targetIndex = this.state.selectedTab - 1;
    else if (e.key === 'ArrowRight' && this.state.selectedTab < this.state.tabs.length - 1)
      targetIndex = this.state.selectedTab + 1;
    else return;

    this.selectTab(targetIndex, true);
  };

  selectTab = (index, forced = false) => {
    this.setState({
      prevSelectedTab: this.selectedTab,
      selectedTab: index
    });

    document.getElementById(`section${index + 1}`).focus();
  };

  render() {
    return (
      <StyledTabs>
        <TabsList
          selectedTab={this.state.selectedTab}
          tabs={this.state.tabs}
          selectTab={this.selectTab}
          handleKeyDown={this.handleKeyDown}
        />
        <TabsPanels selectedTab={this.state.selectedTab} tabs={this.state.tabs} />
      </StyledTabs>
    );
  }
}

export default Tabs;
