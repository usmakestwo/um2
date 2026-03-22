import styled from 'styled-components';

const UseCasesSectionWrapper = styled.section`
  padding: 80px 0;
  overflow: hidden;
  @media (max-width: 990px) {
    padding: 60px 0;
  }
  @media (max-width: 767px) {
    padding: 40px 0;
  }
`;

export const UseCaseCard = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 30px 0;
  border-bottom: 1px solid #f1f4f6;
  &:last-child {
    border-bottom: none;
  }
`;

export const UseCaseNumber = styled.div`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #10ac84;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  margin-right: 24px;
  margin-top: 4px;
`;

export const UseCaseContent = styled.div`
  flex: 1;
`;

export default UseCasesSectionWrapper;
