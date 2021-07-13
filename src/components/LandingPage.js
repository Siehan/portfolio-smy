import Navigation from "./Navigation";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import ListFeatures from "./ListFeatures";
import Features from "./Features";
//import Profile from "./Profile"; <Profile />
import SocialMedia from "./SocialMedia";
import Contact from "./Contact";
import Footer from "./Footer";

import { Box } from "@chakra-ui/react";
const LandingPage = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Box as="main" maxW={"100%"} mx="auto">
        <About />
        <Portfolio />
        <ListFeatures />
        <Features />
        <SocialMedia />
        <Contact />
      </Box>
      <Footer />
    </>
  );
};

export default LandingPage;
