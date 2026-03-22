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
                  <strong style={{ color: '#10ac84', fontSize: '11px', letterSpacing: '0.10em', fontWeight: '600', textTransform: 'uppercase' }}>
                    Deliverable
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
  serviceTitle: {
    fontSize: ['17px', '19px'],
    fontWeight: '500',
    color: '#f0f0f0',
    lineHeight: '1.4',
    mb: '0',
    letterSpacing: '-0.01em',
  },
  serviceDescription: {
    fontSize: '14px',
    lineHeight: '1.8',
    color: 'rgba(240,240,240,0.50)',
    mt: '14px',
    mb: '0',
  },
};

export default ServicesSection;
