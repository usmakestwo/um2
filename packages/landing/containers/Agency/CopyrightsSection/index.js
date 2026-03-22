import React from 'react';
import Text from 'reusecore/src/elements/Text';
import CopyrightWrapper from './copyrightSection.style';
import data from 'common/src/data/Agency/';

const CopyrightSection = () => {
  return (
    <CopyrightWrapper className="copyright_section">
      <ul>
        {data.social_profile.map((profile, index) => (
          <li key={`profile_key_${index}`}>
            <a href={profile.link} target="_blank" rel="noopener noreferrer">
              <i className={profile.icon} />
            </a>
          </li>
        ))}
      </ul>
      <Text content="© 2026 UsMakesTwo" />
    </CopyrightWrapper>
  );
};

export default CopyrightSection;
