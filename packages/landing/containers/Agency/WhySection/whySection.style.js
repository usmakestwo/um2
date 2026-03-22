import styled from 'styled-components';

const WhySectionWrapper = styled.section`
  padding: 80px 0;
  background-color: #0f2137;
  overflow: hidden;
  @media (max-width: 990px) {
    padding: 60px 0;
  }
  @media (max-width: 767px) {
    padding: 40px 0;
  }
`;

export const WhyCard = styled.div`
  padding: 32px 28px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  height: 100%;
  transition: border-color 0.3s ease;
  &:hover {
    border-color: rgba(16, 172, 132, 0.6);
  }
`;

export const QuoteBlock = styled.div`
  margin-top: 60px;
  padding: 32px 40px;
  border-left: 4px solid #10ac84;
  @media (max-width: 767px) {
    padding: 24px 20px;
  }
`;

export default WhySectionWrapper;
