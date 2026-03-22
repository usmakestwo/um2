import styled, { createGlobalStyle } from 'styled-components';
import {
  width,
  height,
  color,
  space,
  boxShadow,
  borderRadius,
  themeGet,
} from 'styled-system';

/* ─── Design tokens ─────────────────────────────────────────── */
// bg-primary   : #0b0b0b
// bg-surface   : #111111
// bg-raised    : #171717
// border       : rgba(255,255,255,0.07)
// text-primary : #f0f0f0
// text-muted   : rgba(240,240,240,0.50)
// accent       : #10ac84

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background-color: #0b0b0b;
    color: #f0f0f0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: #f0f0f0;
  }
  section {
    position: relative;
  }
  a {
    color: #10ac84;
    text-decoration: none;
  }

  /* ─── Drawer ──────────────────────────────────────────────── */
  .drawer {
    .drawer-content-wrapper {
      background-color: #111111 !important;
      @media only screen and (max-width: 480px) {
        width: 300px !important;
      }
      .reusecore-drawer__close {
        position: absolute;
        top: 20px;
        right: 24px;
        > button {
          box-shadow: none;
          transition: opacity 0.2s ease;
          svg {
            width: 20px;
            height: 20px;
            stroke: #f0f0f0;
          }
          &:hover { opacity: 0.7; }
        }
      }
      .scrollspy__menu {
        padding: 64px 48px;
        max-height: 520px;
        overflow-x: auto;
        @media only screen and (max-width: 320px) {
          max-height: 380px;
        }
        li {
          margin: 28px 0;
          &:first-child { margin-top: 0; }
          &:last-child  { margin-bottom: 0; }
          a {
            display: block;
            color: rgba(240,240,240,0.70);
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 0.01em;
            transition: color 0.2s ease;
            &:hover { color: #f0f0f0; }
          }
          &.is-current a {
            color: #10ac84;
          }
        }
      }
      .copyright_section {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        padding-left: 48px;
        padding-bottom: 48px;
        background-color: #111111;
        ul li a { color: rgba(240,240,240,0.50); }
        p { color: rgba(240,240,240,0.40); font-size: 13px; margin-top: 16px; }
      }
    }
  }

  /* ─── Modals ──────────────────────────────────────────────── */
  button.modalCloseBtn {
    color: #f0f0f0 !important;
    &.alt {
      background-color: #10ac84 !important;
      box-shadow: 0 8px 30px rgba(16,172,132,0.35) !important;
    }
  }
  .reuseModalHolder {
    border: 0 !important;
    background-color: transparent !important;
    &.search-modal, &.video-modal {
      background-color: rgba(11,11,11,0.97) !important;
      overflow-y: auto !important;
      .innerRndComponent {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        iframe {
          max-width: 700px !important;
          max-height: 380px !important;
          width: 100% !important;
          height: 100% !important;
          border-radius: 8px !important;
        }
      }
    }
    &.video-modal { background-color: transparent !important; }
    .innerRndComponent { padding-right: 0 !important; }
  }
  .reuseModalCloseBtn { cursor: pointer !important; }
  .reuseModalOverlay, .reuseModalParentWrapper { z-index: 99999 !important; }
  .reuseModalHolder.login-modal {
    @media (min-width: 768px) {
      top: 0 !important; left: 0 !important;
      max-width: 100% !important; max-height: 100% !important;
    }
  }
  .reuseModalHolder.search-modal {
    top: 0 !important; left: 0 !important;
    max-width: 100% !important; max-height: 100% !important;
    width: 100%; height: 100%;
  }
  .reuseModalHolder.login-modal .innerRndComponent { overflow-y: auto; }
`;

/* ─── Page wrapper ────────────────────────────────────────────── */
const AgencyWrapper = styled.div`
  overflow: hidden;
  background-color: #0b0b0b;

  /* ─── Navbar ────────────────────────────────────────── */
  .reusecore__navbar {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    transition: background 0.3s ease, box-shadow 0.3s ease;
    background-color: transparent;
    .reusecore__button {
      color: rgba(240,240,240,0.75);
      font-size: 20px;
      @media only screen and (max-width: 480px) {
        color: #10ac84;
      }
    }
    .hamburgMenu__bar > span {
      background-color: rgba(240,240,240,0.80);
      @media only screen and (max-width: 480px) {
        background-color: #10ac84;
      }
    }
  }
  .sticky-nav-active {
    .reusecore__navbar {
      background-color: rgba(11,11,11,0.92);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      box-shadow: 0 1px 0 rgba(255,255,255,0.06);
      .reusecore__button { color: rgba(240,240,240,0.80); }
      .hamburgMenu__bar > span { background-color: rgba(240,240,240,0.80); }
    }
  }

  /* ─── Styled-system props ─────────────────────────── */
  ${width}
  ${height}
  ${color}
  ${space}
  ${boxShadow}
  ${borderRadius}
`;

GlobalStyle.displayName = 'GlobalStyle';
AgencyWrapper.displayName = 'AgencyWrapper';

export { GlobalStyle, AgencyWrapper };
