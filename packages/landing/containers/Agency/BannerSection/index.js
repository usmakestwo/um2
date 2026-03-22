import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Container from 'common/src/components/UI/Container';
import Particles from '../../Agency/Particle';
import BannerWrapper from './bannerSection.style';

const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  outlineBtnStyle,
}) => {
  const ButtonGroup = () => (
    <Fragment>
      <Button
        title="Book a 30-Minute Consultation"
        as="a"
        href="mailto:hello@usmakestwo.io?subject=Consultation Request"
        {...btnStyle}
      />
      <Button
        title="Email Me Directly"
        as="a"
        href="mailto:hello@usmakestwo.io"
        variant="outlined"
        {...outlineBtnStyle}
      />
    </Fragment>
  );

  return (
    <BannerWrapper>
      <Particles />
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <Heading
              content="Boutique AI Automation for the OpenClaw Era"
              {...title}
            />
            <Text
              content="I help founders and operators design and implement end-to-end OpenClaw strategies that turn autonomous AI agents into real business results – not just demos."
              {...description}
            />
            <Box className="button__wrapper">
              <ButtonGroup />
            </Box>
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '80%', '70%', '60%'],
  },
  title: {
    fontSize: ['28px', '36px', '46px', '58px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.25',
  },
  description: {
    fontSize: ['16px', '18px'],
    color: '#343d48cc',
    lineHeight: '1.85',
    mb: '0',
    maxWidth: '600px',
  },
  btnStyle: {
    minWidth: ['200px', '220px'],
    fontSize: '15px',
    fontWeight: '500',
    mr: '15px',
    mb: ['15px', '0'],
  },
  outlineBtnStyle: {
    minWidth: ['160px', '180px'],
    fontSize: '15px',
    fontWeight: '500',
    color: '#0f2137',
    border: '2px solid #0f2137',
  },
};

export default BannerSection;
