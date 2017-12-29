import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import Head from '../components/Head';
import Navigation from '../components/Navigation';
import StyledApp from '../components/StyledApp';
import Footer from '../components/Footer';
import Project from '../components/Project';

export default function() {
  return (
    <StyledApp>
      <Head />
      <Navigation />
      <Box py={4}>
        <h1>Product <span>designer</span> and full stack <span>developer</span> from Denver.</h1>
      </Box>
      <Box py={4}>
        <Project
          photo="static/images/blink-main.svg"
          name="Blink Lending"
          link="/blink"
          description="A 21st century online mortgage experience for Canadian citizens."
        />
      </Box>
      <Box py={4}>
        <Project
          photo="static/images/nexleader-main.svg"
          name="nexleader IPSAT"
          link="/ipsat"
          description="Helping people understand their leadership potentials."
          reverse
        />
      </Box>
      <Footer />
    </StyledApp>
  );
}