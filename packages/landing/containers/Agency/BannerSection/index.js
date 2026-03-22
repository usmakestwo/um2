import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import BannerWrapper from './bannerSection.style';

const BannerSection = ({ row, col, title, description, btnPrimary, btnSecondary }) => {
  return (
    <BannerWrapper>
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            {/* Eyebrow badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              border: '1px solid rgba(16,172,132,0.35)',
              borderRadius: '100px',
              marginBottom: '32px',
              fontSize: '13px',
              color: '#10ac84',
              letterSpacing: '0.04em',
              fontWeight: '500',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10ac84', display: 'inline-block' }} />
              OpenClaw AI Automation
            </div>

            <Heading
              content="Boutique AI Automation for the OpenClaw Era"
              {...title}
            />
            <Text
              content="I help founders and operators design and implement end-to-end OpenClaw strategies that turn autonomous AI agents into real business results – not just demos."
              {...description}
            />
            <Box className="button__wrapper">
              <a
                href="https://calendly.com/small-maze7244/30min?month=2026-03"
                target="_blank"
                rel="noopener noreferrer"
                style={btnPrimary}
              >
                Book a 30-Minute Consultation
              </a>
              <a
                href="mailto:hello@usmakestwo.com"
                style={btnSecondary}
              >
                Email Me Directly
              </a>
            </Box>
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnPrimary: PropTypes.object,
  btnSecondary: PropTypes.object,
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
    width: ['100%', '85%', '72%', '60%'],
  },
  title: {
    fontSize: ['36px', '48px', '58px', '68px'],
    fontWeight: '600',
    color: '#f0f0f0',
    letterSpacing: '-0.03em',
    mb: '24px',
    lineHeight: '1.12',
    as: 'h1',
  },
  description: {
    fontSize: ['16px', '18px'],
    color: 'rgba(240,240,240,0.58)',
    lineHeight: '1.8',
    mb: '0',
    maxWidth: '580px',
    fontWeight: '400',
  },
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '13px 28px',
    backgroundColor: '#10ac84',
    color: '#ffffff',
    fontSize: '15px',
    fontWeight: '500',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    letterSpacing: '0.01em',
    transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
    textDecoration: 'none',
  },
  btnSecondary: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '13px 28px',
    backgroundColor: 'transparent',
    color: 'rgba(240,240,240,0.70)',
    fontSize: '15px',
    fontWeight: '400',
    borderRadius: '6px',
    border: '1px solid rgba(255,255,255,0.12)',
    cursor: 'pointer',
    letterSpacing: '0.01em',
    transition: 'border-color 0.2s ease, color 0.2s ease',
    textDecoration: 'none',
  },
};

export default BannerSection;
