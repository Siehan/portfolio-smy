import { Box, Link, useMediaQuery, useColorModeValue } from "@chakra-ui/react";
import MobileNavigation from "./MobileNavigation";
import NavigationListItems from "./NavigationListItems";
import SwitchColorMode from "./SwitchColorMode";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import smyPhoto2 from "../assets/images/smyPhoto2.jpg";
//import { Flex, VStack, Spacer } from "@chakra-ui/react";
//import { IconButton } from "@chakra-ui/button";
//import { useColorMode } from "@chakra-ui/color-mode";
//import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from "@chakra-ui/react";
//import Header from "./components/Header";
//import Social from "./components/Social";
//import Profile from "./components/Profile";
//import Footer from "./components/Footer";
//import { useState } from "react";
//import { chakra } from "@chakra-ui/react";
//import NextLink from "next/link";

const Navigation = () => {
  const [isMobile] = useMediaQuery("(max-width: 720px)");
  console.log(isMobile);
  const bg = useColorModeValue("whiteAlpha.800", "blackAlpha.200");
  return (
    <>
      <Box
        as="nav"
        mx="auto"
        display="flex"
        alignItems="center"
        sx={{
          "a:hover": {
            textDecoration: "none",
            color: "darkorange",
          },
        }}
        py="3"
        px={[4, 6, 10, 14, 20]}
        w="100%"
        bg={bg}
        position="fixed"
        zIndex="sticky"
        borderRadius="md"
        bgGradient="linear(to-r, cyan.400, blue.300, purple.500)"
        _hover={{
          bgGradient: "linear(to-l, #3CAADD, #4FAA1B)",
        }}
      >
        <Wrap>
          <WrapItem>
            <Avatar marginX="4" size="md" name="Sylvie Mémain-Yé" img src={smyPhoto2} alt="Sylvie Mémain-Yé" />
          </WrapItem>
        </Wrap>

        <Link href="/" fontWeight="bold" fontSize="xl" mr="auto">
          Sylvie Mémain-Yé
        </Link>
        {isMobile ? (
          <MobileNavigation>
            <NavigationListItems />
          </MobileNavigation>
        ) : (
          <NavigationListItems sx={{ display: "flex" }} />
        )}
        <SwitchColorMode />
      </Box>
    </>
  );
};

export default Navigation;
