import styled from 'styled-components';

const BannerWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #0b0b0b;
  padding-top: 120px;
  padding-bottom: 100px;
  overflow: hidden;
  position: relative;

  /* Subtle grid texture */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  /* Radial glow behind headline */
  &::after {
    content: '';
    position: absolute;
    top: 20%;
    left: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(16,172,132,0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  .row {
    position: relative;
    z-index: 1;
  }

  .button__wrapper {
    margin-top: 44px;
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    align-items: center;
  }

  @media (max-width: 990px) {
    padding-top: 130px;
    padding-bottom: 80px;
    min-height: auto;
  }
  @media (max-width: 480px) {
    padding-top: 110px;
    padding-bottom: 60px;
  }
`;

export default BannerWrapper;
