import styled from 'styled-components';

const WhySectionWrapper = styled.section`
  padding: 100px 0;
  background-color: #0b0b0b;
  overflow: hidden;

  @media (max-width: 990px) { padding: 72px 0; }
  @media (max-width: 767px) { padding: 56px 0; }
`;

export const WhyCard = styled.div`
  padding: 32px 28px;
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px;
  height: 100%;
  transition: border-color 0.25s ease;
  &:hover { border-color: rgba(16,172,132,0.25); }
`;

export const QuoteBlock = styled.div`
  margin-top: 64px;
  padding: 36px 40px;
  border: 1px solid rgba(16,172,132,0.20);
  border-left: 3px solid #10ac84;
  border-radius: 0 10px 10px 0;
  background: rgba(16,172,132,0.04);

  @media (max-width: 767px) { padding: 24px 20px; }
`;

export default WhySectionWrapper;
