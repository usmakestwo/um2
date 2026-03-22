import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  padding: 100px 0;
  background-color: #111111;
  overflow: hidden;

  @media (max-width: 990px) { padding: 72px 0; }
  @media (max-width: 767px) { padding: 56px 0; }

  .row {
    margin-top: 64px;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 12px;
    overflow: hidden;

    > .col {
      border-right: 1px solid rgba(255,255,255,0.07);
      border-bottom: 1px solid rgba(255,255,255,0.07);

      &:nth-child(2n) { border-right: none; }
      &:nth-last-child(-n+2) { border-bottom: none; }

      @media (max-width: 767px) {
        border-right: none;
        border-bottom: 1px solid rgba(255,255,255,0.07);
        &:last-child { border-bottom: none; }
      }
    }
  }

  .feature__block {
    padding: 40px 36px;
    transition: background 0.2s ease;
    &:hover { background: rgba(255,255,255,0.02); }
  }
`;

export default FeatureSectionWrapper;
