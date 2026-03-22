import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import data from 'common/src/data/Agency';
import WhySectionWrapper, { WhyCard, QuoteBlock } from './whySection.style';

const WhySection = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  row,
  col,
  cardTitle,
  cardDescription,
  quoteStyle,
}) => {
  return (
    <WhySectionWrapper id="whySection">
      <Container>
        <Box {...sectionHeader}>
          <Text content="WHY WORK WITH ME" {...sectionSubTitle} />
          <Heading content="The Difference" {...sectionTitle} />
        </Box>
        <Box className="row" {...row}>
          {data.whyUs.map((item, index) => (
            <Box className="col" {...col} key={`why-${index}`}>
              <WhyCard>
                <Heading content={item.title} {...cardTitle} />
                <Text content={item.description} {...cardDescription} />
              </WhyCard>
            </Box>
          ))}
        </Box>
        <QuoteBlock>
          <Text
            content="I treat OpenClaw as a strategic asset – something your company owns and controls – not another rented chatbot subscription."
            {...quoteStyle}
          />
        </QuoteBlock>
      </Container>
    </WhySectionWrapper>
  );
};

WhySection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  cardTitle: PropTypes.object,
  cardDescription: PropTypes.object,
  quoteStyle: PropTypes.object,
};

WhySection.defaultProps = {
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
    color: '#ffffff',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'stretch',
  },
  col: {
    pr: '15px',
    pl: '15px',
    mb: '30px',
    width: [1, 1, 1 / 3],
  },
  cardTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '500',
    color: '#ffffff',
    lineHeight: '1.4',
    mb: '14px',
    letterSpacing: '-0.020em',
  },
  cardDescription: {
    fontSize: '15px',
    lineHeight: '1.8',
    color: 'rgba(255,255,255,0.65)',
    mb: '0',
  },
  quoteStyle: {
    fontSize: ['18px', '22px'],
    fontWeight: '300',
    color: '#ffffff',
    lineHeight: '1.6',
    fontStyle: 'italic',
    mb: '0',
  },
};

export default WhySection;
