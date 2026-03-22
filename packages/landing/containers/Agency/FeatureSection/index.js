import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import FeatureBlock from 'common/src/components/FeatureBlock';
import data from 'common/src/data/Agency';
import Container from 'common/src/components/UI/Container';
import FeatureSectionWrapper from './featureSection.style';

const FeatureSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  sectionIntro,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle,
}) => {
  return (
    <FeatureSectionWrapper id="whatIDoSection">
      <Container>
        <Box {...sectionHeader}>
          <Text content="MBA + ENGINEER" {...sectionSubTitle} />
          <Heading content="What I Do" {...sectionTitle} />
          <Text
            content="I'm a boutique AI automation partner who combines business process thinking with hands-on OpenClaw implementation. I map your workflows, design an OpenClaw strategy around ownership, consolidation, and economics, then build and deploy agents that actually run your operations 24/7."
            {...sectionIntro}
          />
        </Box>
        <Box className="row" {...row}>
          {data.whatIDo.map((feature, index) => (
            <Box className="col" {...col} key={`feature-${index}`}>
              <FeatureBlock
                icon={<i className={feature.icon} />}
                wrapperStyle={blockWrapperStyle}
                iconStyle={iconStyle}
                contentStyle={contentStyle}
                title={<Heading content={feature.title} {...featureTitle} />}
                description={
                  <Text content={feature.description} {...featureDescription} />
                }
              />
            </Box>
          ))}
        </Box>
      </Container>
    </FeatureSectionWrapper>
  );
};

FeatureSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  sectionIntro: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

FeatureSection.defaultProps = {
  sectionHeader: {
    mb: ['40px', '56px'],
  },
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#10ac84',
    mb: '10px',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['26px', '36px'],
    fontWeight: '600',
    color: '#f0f0f0',
    letterSpacing: '-0.025em',
    mb: '20px',
  },
  sectionIntro: {
    textAlign: 'center',
    fontSize: '17px',
    color: 'rgba(240,240,240,0.52)',
    lineHeight: '1.85',
    maxWidth: '680px',
    mx: 'auto',
    mb: '0',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 2],
    borderLeft: '1px solid #f1f4f6',
    borderBottom: '1px solid #f1f4f6',
  },
  blockWrapperStyle: {
    p: ['30px', '20px', '30px', '40px'],
  },
  iconStyle: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    bg: 'rgba(16,172,132,0.10)',
    border: '1px solid rgba(16,172,132,0.20)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    color: '#10ac84',
    overflow: 'hidden',
    mb: '20px',
  },
  contentStyle: {
    textAlign: 'left',
  },
  featureTitle: {
    fontSize: ['16px', '18px'],
    fontWeight: '500',
    color: '#f0f0f0',
    lineHeight: '1.5',
    mb: '10px',
    letterSpacing: '-0.01em',
  },
  featureDescription: {
    fontSize: '14px',
    lineHeight: '1.8',
    color: 'rgba(240,240,240,0.50)',
  },
};

export default FeatureSection;
