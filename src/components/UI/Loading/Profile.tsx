import React from 'react';
import ContentLoader from 'react-content-loader';
import { StyledWrapper } from './style';

const ProfileLoading: React.FC = () => {
  return (
    <StyledWrapper>
      <ContentLoader
        speed={2}
        width={1440}
        height={860}
        viewBox="0 0 1440 860"
        backgroundColor="#f3f3f3"
        foregroundColor="#039e00"
      >
        <rect x="0" y="20" rx="5" ry="5" width="50" height="50" />
        <rect x="1240" y="20" rx="5" ry="5" width="50" height="50" />
        <rect x="1180" y="20" rx="5" ry="5" width="50" height="50" />

        <circle cx="268" cy="80" r="80" />

        <rect x="390" y="40" rx="5" ry="5" width="300" height="30" />

        <rect x="390" y="90" rx="5" ry="5" width="100" height="20" />

        <rect x="390" y="140" rx="5" ry="5" width="180" height="40" />

        <rect x="390" y="200" rx="5" ry="5" width="300" height="20" />
        <rect x="390" y="230" rx="5" ry="5" width="250" height="20" />

        <rect x="390" y="270" rx="5" ry="5" width="220" height="20" />
        <rect x="390" y="300" rx="5" ry="5" width="180" height="20" />

        <rect x="390" y="340" rx="5" ry="5" width="180" height="20" />

        <rect x="390" y="380" rx="5" ry="5" width="120" height="20" />

        <rect x="390" y="420" rx="5" ry="5" width="220" height="20" />
        <rect x="500" y="420" rx="5" ry="5" width="20" height="20" />

        <rect x="0" y="480" rx="10" ry="10" width="1440" height="106" />
      </ContentLoader>
    </StyledWrapper>
  );
};

export default ProfileLoading;
