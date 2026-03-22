import styled from 'styled-components';

const ContactSectionWrapper = styled.section`
  padding: 80px 0;
  background-color: #f9fafb;
  overflow: hidden;
  @media (max-width: 990px) {
    padding: 60px 0;
  }
  @media (max-width: 767px) {
    padding: 40px 0;
  }
`;

export const ContactForm = styled.form`
  max-width: 640px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  label {
    font-size: 13px;
    font-weight: 600;
    color: #0f2137;
    margin-bottom: 8px;
    letter-spacing: 0.05em;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px 16px;
    font-size: 15px;
    color: #0f2137;
    background: #ffffff;
    border: 1px solid #e0e6ed;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.2s ease;
    font-family: inherit;
    box-sizing: border-box;
    &::placeholder {
      color: #343d4860;
    }
    &:focus {
      border-color: #10ac84;
    }
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
  padding: 14px 32px;
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  background-color: #10ac84;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  font-family: inherit;
  &:hover {
    background-color: #0d9b76;
    box-shadow: 0px 9px 20px -5px rgba(16, 172, 132, 0.57);
  }
`;

export const DirectContact = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 32px;
  border-top: 1px solid #e0e6ed;

  a {
    color: #10ac84;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default ContactSectionWrapper;
