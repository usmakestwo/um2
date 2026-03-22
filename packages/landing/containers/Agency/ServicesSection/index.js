import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import data from 'common/src/data/Agency';
import ServicesSectionWrapper, {
  ServiceCard,
  ServiceTag,
  ServiceDuration,
  DeliverableBox,
} from './servicesSection.style';

const ServicesSection = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  row,
  col,
  serviceTitle,
  serviceDescription,
}) => {
  return (
    <ServicesSectionWrapper id="servicesSection">
      <Container>
        <Box {...sectionHeader}>
          <Text content="WHAT YOU GET" {...sectionSubTitle} />
          <Heading content="Services" {...sectionTitle} />
        </Box>
        <Box className="row" {...row}>
          {data.services.map((service, index) => (
            <Box className="col" {...col} key={`service-${index}`}>
              <ServiceCard>
                <ServiceTag>{service.tag}</ServiceTag>
                <Heading content={service.title} {...serviceTitle} />
                <ServiceDuration>{service.duration}</ServiceDuration>
                <Text content={service.description} {...serviceDescription} />
                <DeliverableBox>
                  <strong style={{ color: '#10ac84', fontSize: '12px', letterSpacing: '0.08em', fontWeight: '700' }}>
                    DELIVERABLE
                  </strong>
                  <br />
                  {service.deliverable}
                </DeliverableBox>
              </ServiceCard>
            </Box>
          ))}
        </Box>
      </Container>
    </ServicesSectionWrapper>
  );
};

ServicesSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  serviceTitle: PropTypes.object,
  serviceDescription: PropTypes.object,
};

ServicesSection.defaultProps = {
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
  serviceTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '500',
    color: '#0f2137',
    lineHeight: '1.4',
    mb: '0',
    letterSpacing: '-0.020em',
  },
  serviceDescription: {
    fontSize: '15px',
    lineHeight: '1.8',
    color: '#343d48cc',
    mt: '16px',
    mb: '0',
  },
};

export default ServicesSection;
