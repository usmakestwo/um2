import styled from 'styled-components';

const ContactSectionWrapper = styled.section`
  padding: 100px 0;
  background-color: #111111;
  overflow: hidden;

  @media (max-width: 990px) { padding: 72px 0; }
  @media (max-width: 767px) { padding: 56px 0; }
`;

export const ContactForm = styled.form`
  max-width: 620px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 18px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 18px;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  label {
    font-size: 12px;
    font-weight: 500;
    color: rgba(240,240,240,0.50);
    margin-bottom: 8px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  input, textarea {
    width: 100%;
    padding: 12px 16px;
    font-size: 15px;
    color: #f0f0f0;
    background: #171717;
    border: 1px solid rgba(255,255,255,0.09);
    border-radius: 8px;
    outline: none;
    transition: border-color 0.2s ease;
    font-family: inherit;
    box-sizing: border-box;
    &::placeholder { color: rgba(240,240,240,0.25); }
    &:focus { border-color: rgba(16,172,132,0.50); }
  }

  textarea {
    resize: vertical;
    min-height: 110px;
  }
`;

export const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 32px;
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  background-color: #10ac84;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  font-family: inherit;
  letter-spacing: 0.01em;
  &:hover {
    background-color: #0d9b76;
    box-shadow: 0 8px 24px rgba(16,172,132,0.35);
  }
`;

export const DirectContact = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 32px;
  border-top: 1px solid rgba(255,255,255,0.07);
  a {
    color: rgba(240,240,240,0.55);
    text-decoration: none;
    transition: color 0.2s ease;
    &:hover { color: #10ac84; }
  }
`;

export default ContactSectionWrapper;
