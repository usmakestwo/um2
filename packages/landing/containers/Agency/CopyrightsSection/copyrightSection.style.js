import styled from 'styled-components';

const CopyrightWrapper = styled.div`
  ul {
    display: flex;
    align-items: center;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    li {
      margin: 0 10px;
      &:first-child { margin-left: 0; }
      &:last-child  { margin-right: 0; }
      a {
        color: rgba(240,240,240,0.45);
        font-size: 16px;
        transition: color 0.2s ease;
        &:hover { color: #10ac84; }
      }
    }
  }
  p {
    color: rgba(240,240,240,0.30);
    font-size: 13px;
    margin: 14px 0 0;
  }
`;

export default CopyrightWrapper;
