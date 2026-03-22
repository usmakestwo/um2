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
    fontSize: ['24px', '32px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px',
  },
  sectionIntro: {
    textAlign: 'center',
    fontSize: '17px',
    color: '#343d48cc',
    lineHeight: '1.85',
    maxWidth: '720px',
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
    width: '70px',
    height: '70px',
    m: '0 auto',
    borderRadius: '50%',
    bg: '#10ac84',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    color: '#ffffff',
    overflow: 'hidden',
    mb: '25px',
  },
  contentStyle: {
    textAlign: 'center',
  },
  featureTitle: {
    fontSize: ['17px', '19px'],
    fontWeight: '500',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '15px'],
    letterSpacing: '-0.020em',
  },
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.8',
    color: '#343d48cc',
  },
};

export default FeatureSection;
