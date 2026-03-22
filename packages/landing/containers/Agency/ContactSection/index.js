import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import ContactSectionWrapper, {
  ContactForm,
  FormRow,
  FormField,
  SubmitButton,
  DirectContact,
} from './contactSection.style';

const ContactSection = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  sectionIntro,
}) => {
  return (
    <ContactSectionWrapper id="contactSection">
      <Container>
        <Box {...sectionHeader}>
          <Text content="GET IN TOUCH" {...sectionSubTitle} />
          <Heading content="Let's Talk" {...sectionTitle} />
          <Text
            content="Interested? Tell me about your business and I'll reply within 24 hours."
            {...sectionIntro}
          />
        </Box>

        <ContactForm
          action="mailto:hello@usmakestwo.com"
          method="post"
          encType="text/plain"
        >
          <FormRow>
            <FormField>
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
            </FormField>
            <FormField>
              <label htmlFor="contact-company">Company</label>
              <input
                id="contact-company"
                name="company"
                type="text"
                placeholder="Your company"
              />
            </FormField>
          </FormRow>
          <FormField>
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@company.com"
              required
            />
          </FormField>
          <FormField>
            <label htmlFor="contact-message">
              Tell me about your processes
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="In 2–3 sentences, describe your current workflows, the tools you use, and where you feel the biggest friction or opportunity..."
              required
            />
          </FormField>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>

        <DirectContact>
          <Text
            content={
              <span>
                Prefer email?{' '}
                <a href="mailto:hello@usmakestwo.com">hello@usmakestwo.com</a>
                {' · '}
                <a href="tel:+14169102047">+1 416-910-2047</a>
              </span>
            }
            fontSize="16px"
            color="#343d48cc"
            mb="0"
          />
        </DirectContact>
      </Container>
    </ContactSectionWrapper>
  );
};

ContactSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  sectionIntro: PropTypes.object,
};

ContactSection.defaultProps = {
  sectionHeader: {
    mb: ['40px', '56px'],
  },
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#10ac84',
    mb: '10px',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['24px', '32px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px',
  },
  sectionIntro: {
    textAlign: 'center',
    fontSize: '17px',
    color: '#343d48cc',
    lineHeight: '1.85',
    maxWidth: '520px',
    mx: 'auto',
    mb: '0',
  },
};

export default ContactSection;
