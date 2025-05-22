import React, { useState, useEffect } from 'react';
import TabFeed from './TabFeed';
import ProfileTabs from './ProfileTabs';
import { profileTabs as initialProfileTabs } from '../../constants/profileTabs';

const CounterPosts = () => {
  const [postCount, setPostCount] = useState(0);

  useEffect(() => {
    setPostCount(cardsData.length);
  }, []);

  const updatedProfileTabs = initialProfileTabs.map(tab => {
    if (tab.text.startsWith('Лента')) {
      return { ...tab, text: `Лента ${postCount}` };
    }
    return tab;
  });

  return (
    <div>
      <ProfileTabs profileTabs={updatedProfileTabs} />
      <TabFeed setPostCount={setPostCount} />
    </div>
  );
};

export default CounterPosts;
