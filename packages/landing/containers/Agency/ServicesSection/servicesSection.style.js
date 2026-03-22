import styled from 'styled-components';

const ServicesSectionWrapper = styled.section`
  padding: 100px 0;
  background-color: #0b0b0b;
  overflow: hidden;

  @media (max-width: 990px) { padding: 72px 0; }
  @media (max-width: 767px) { padding: 56px 0; }
`;

export const ServiceCard = styled.div`
  background: #111111;
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px;
  padding: 36px 32px;
  height: 100%;
  transition: border-color 0.25s ease, background 0.25s ease;
  &:hover {
    border-color: rgba(16,172,132,0.30);
    background: #141414;
  }
`;

export const ServiceTag = styled.span`
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: #10ac84;
  margin-bottom: 18px;
  text-transform: uppercase;
`;

export const ServiceDuration = styled.p`
  font-size: 13px;
  color: rgba(240,240,240,0.35);
  margin: 8px 0 0;
  font-style: italic;
  font-weight: 400;
`;

export const DeliverableBox = styled.div`
  margin-top: 24px;
  padding: 16px 18px;
  background: rgba(16,172,132,0.06);
  border: 1px solid rgba(16,172,132,0.15);
  border-radius: 8px;
  font-size: 14px;
  color: rgba(240,240,240,0.55);
  line-height: 1.7;
`;

export default ServicesSectionWrapper;
