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
    mb: ['48px', '64px'],
  },
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '12px',
    letterSpacing: '0.14em',
    fontWeight: '600',
    color: '#10ac84',
    mb: '12px',
    textTransform: 'uppercase',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['26px', '36px'],
    fontWeight: '600',
    color: '#f0f0f0',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-12px',
    mr: '-12px',
    alignItems: 'stretch',
  },
  col: {
    pr: '12px',
    pl: '12px',
    mb: '24px',
    width: [1, 1, 1 / 3],
  },
  cardTitle: {
    fontSize: ['17px', '19px'],
    fontWeight: '500',
    color: '#f0f0f0',
    lineHeight: '1.4',
    mb: '12px',
    letterSpacing: '-0.01em',
  },
  cardDescription: {
    fontSize: '14px',
    lineHeight: '1.8',
    color: 'rgba(240,240,240,0.50)',
    mb: '0',
  },
  quoteStyle: {
    fontSize: ['17px', '20px'],
    fontWeight: '300',
    color: 'rgba(240,240,240,0.75)',
    lineHeight: '1.65',
    fontStyle: 'italic',
    mb: '0',
  },
};

export default WhySection;
