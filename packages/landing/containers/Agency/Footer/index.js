import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Logo from 'reusecore/src/elements/UI/Logo';
import Container from 'common/src/components/UI/Container';
import FooterWrapper from './footer.style';

import LogoImage from 'common/src/assets/image/agency/um2long.png';

const Footer = ({ row, colOne, colTwo, logoStyle }) => {
  return (
    <FooterWrapper id="footerSection">
      <Container>
        <Box className="row" {...row}>
          <Box {...colOne}>
            <Logo href="#" logoSrc={LogoImage} title="UsMakesTwo" logoStyle={logoStyle} />
            <Text
              content="Boutique AI automation for founders and operators."
              fontSize="13px"
              color="rgba(240,240,240,0.35)"
              mt="12px"
              mb="0"
            />
          </Box>
          <Box {...colTwo}>
            <Text
              content={
                <span>
                  <a href="mailto:hello@usmakestwo.com" style={{ color: 'rgba(240,240,240,0.45)', textDecoration: 'none', marginRight: '24px', fontSize: '13px' }}>
                    hello@usmakestwo.com
                  </a>
                  <a href="tel:+14169102047" style={{ color: 'rgba(240,240,240,0.45)', textDecoration: 'none', fontSize: '13px' }}>
                    +1 416-910-2047
                  </a>
                </span>
              }
              mb="0"
            />
            <Text
              content="© 2026 UsMakesTwo. All rights reserved."
              fontSize="13px"
              color="rgba(240,240,240,0.25)"
              mt="8px"
              mb="0"
            />
          </Box>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  row: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  logoStyle: PropTypes.object,
};

Footer.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  colOne: {
    pl: '15px',
    pr: '15px',
    width: ['100%', '100%', 'auto'],
    mb: ['24px', '24px', '0'],
  },
  colTwo: {
    pl: '15px',
    pr: '15px',
    width: ['100%', '100%', 'auto'],
    textAlign: ['left', 'left', 'right'],
  },
  logoStyle: {
    width: '160px',
    mb: '0',
  },
};

export default Footer;
