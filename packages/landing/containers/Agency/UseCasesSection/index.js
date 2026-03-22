import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import data from 'common/src/data/Agency';
import UseCasesSectionWrapper, {
  UseCaseCard,
  UseCaseNumber,
  UseCaseContent,
} from './useCasesSection.style';

const UseCasesSection = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  sectionIntro,
  row,
  col,
  useCaseTitle,
  useCaseDescription,
}) => {
  return (
    <UseCasesSectionWrapper id="useCasesSection">
      <Container>
        <Box {...sectionHeader}>
          <Text content="REAL-WORLD RESULTS" {...sectionSubTitle} />
          <Heading content="Example Use Cases" {...sectionTitle} />
          <Text
            content="Instead of generic chatbots, I help you deploy OpenClaw agents that sit inside your real workflows – sales, support, operations – and own specific outcomes."
            {...sectionIntro}
          />
        </Box>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            {data.useCases.map((useCase, index) => (
              <UseCaseCard key={`usecase-${index}`}>
                <UseCaseNumber>{String(index + 1).padStart(2, '0')}</UseCaseNumber>
                <UseCaseContent>
                  <Heading content={useCase.title} {...useCaseTitle} />
                  <Text content={useCase.description} {...useCaseDescription} />
                </UseCaseContent>
              </UseCaseCard>
            ))}
          </Box>
        </Box>
      </Container>
    </UseCasesSectionWrapper>
  );
};

UseCasesSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  sectionIntro: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  useCaseTitle: PropTypes.object,
  useCaseDescription: PropTypes.object,
};

UseCasesSection.defaultProps = {
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
    mb: '20px',
  },
  sectionIntro: {
    textAlign: 'center',
    fontSize: '16px',
    color: 'rgba(240,240,240,0.50)',
    lineHeight: '1.85',
    maxWidth: '640px',
    mx: 'auto',
    mb: '0',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1, '64%'],
    mx: 'auto',
  },
  useCaseTitle: {
    fontSize: ['17px', '19px'],
    fontWeight: '500',
    color: '#f0f0f0',
    lineHeight: '1.4',
    mb: '8px',
    letterSpacing: '-0.01em',
  },
  useCaseDescription: {
    fontSize: '15px',
    lineHeight: '1.8',
    color: 'rgba(240,240,240,0.50)',
    mb: '0',
  },
};

export default UseCasesSection;
