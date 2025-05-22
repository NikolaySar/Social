import { useState, useEffect } from 'react';
import { profileTabs } from '../../constants';
import { IProfileTabsProps, ITab } from './interface';
import { StyledProfileTabsInner, StyledProfileTabsContainer, StyledProfileTabs } from './style';

const ProfileTabs = ({ postCount, onTabChange, tabs }: IProfileTabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs.length > 0 ? tabs[0].text : '');
  useEffect(() => {
    setActiveTab(tabs[0].text);
  }, [postCount]);

  const handleTabChange = (tabText: string) => {
    setActiveTab(tabText);
    if (onTabChange) {
      onTabChange(tabText);
    }
  };

  return (
    <StyledProfileTabsInner>
      <StyledProfileTabsContainer>
        {tabs.map((tab: ITab) => (
          <StyledProfileTabs
            type="button"
            key={tab.text}
            isActive={activeTab === tab.text}
            onClick={() => handleTabChange(tab.text)}
          >
            {tab.text}
          </StyledProfileTabs>
        ))}
      </StyledProfileTabsContainer>
    </StyledProfileTabsInner>
  );
};

export default ProfileTabs;
