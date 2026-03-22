import styled from 'styled-components';

const UseCasesSectionWrapper = styled.section`
  padding: 100px 0;
  background-color: #111111;
  overflow: hidden;

  @media (max-width: 990px) { padding: 72px 0; }
  @media (max-width: 767px) { padding: 56px 0; }
`;

export const UseCaseCard = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 32px 0;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  &:first-child { padding-top: 0; }
  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const UseCaseNumber = styled.div`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(16,172,132,0.10);
  border: 1px solid rgba(16,172,132,0.20);
  color: #10ac84;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  margin-right: 24px;
  margin-top: 2px;
  font-variant-numeric: tabular-nums;
`;

export const UseCaseContent = styled.div`
  flex: 1;
`;

export default UseCasesSectionWrapper;
