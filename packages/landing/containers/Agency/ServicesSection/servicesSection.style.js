import styled from 'styled-components';

const ServicesSectionWrapper = styled.section`
  padding: 80px 0;
  background-color: #f9fafb;
  overflow: hidden;
  @media (max-width: 990px) {
    padding: 60px 0;
  }
  @media (max-width: 767px) {
    padding: 40px 0;
  }
`;

export const ServiceCard = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 40px 36px;
  height: 100%;
  box-shadow: 0px 4px 20px 0px rgba(16, 66, 97, 0.07);
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0px 12px 40px 0px rgba(16, 66, 97, 0.15);
  }
`;

export const ServiceTag = styled.span`
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #10ac84;
  margin-bottom: 16px;
`;

export const ServiceDuration = styled.p`
  font-size: 13px;
  color: #343d4880;
  margin-bottom: 0;
  margin-top: 8px;
  font-style: italic;
`;

export const DeliverableBox = styled.div`
  margin-top: 20px;
  padding: 16px 20px;
  background: #f0faf6;
  border-left: 3px solid #10ac84;
  border-radius: 0 4px 4px 0;
  font-size: 14px;
  color: #343d48cc;
  line-height: 1.7;
`;

export default ServicesSectionWrapper;
