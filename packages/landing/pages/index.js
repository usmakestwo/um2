import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { agencyTheme } from 'common/src/theme/agency';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, AgencyWrapper } from '../containers/Agency/agency.style';
import Navbar from '../containers/Agency/Navbar';
import BannerSection from '../containers/Agency/BannerSection';
import FeatureSection from '../containers/Agency/FeatureSection';
import ServicesSection from '../containers/Agency/ServicesSection';
import UseCasesSection from '../containers/Agency/UseCasesSection';
import WhySection from '../containers/Agency/WhySection';
import ContactSection from '../containers/Agency/ContactSection';
import Footer from '../containers/Agency/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';

export default () => {
  return (
    <ThemeProvider theme={agencyTheme}>
      <Fragment>
        <Head>
          <title>UsMakesTwo | Boutique AI Automation for the OpenClaw Era</title>
          <meta name="theme-color" content="#10ac84" />
          <meta
            name="Description"
            content="Boutique AI automation partner helping founders and operators design and implement end-to-end OpenClaw strategies that turn autonomous AI agents into real business results."
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <AgencyWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <FeatureSection />
          <ServicesSection />
          <UseCasesSection />
          <WhySection />
          <ContactSection />
          <Footer />
        </AgencyWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
