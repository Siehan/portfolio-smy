import Icon from "@chakra-ui/icon";
import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import SlideFadeOnScroll from "./SlideFadeOnScroll";
import social_media3 from "../assets/images/social_media3.jpg";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";

function SocialMedia() {
  return (
    <>
      <Box as="section" w={"100%"}>
        <Container borderRadius="md" maxW="container.lg" id="socialMedia" pt="20" pb="10">
          <SlideFadeOnScroll>
            <Box flex="1">
              <Heading
                mb="10"
                p={1}
                borderRadius="md"
                textShadow="1px 4px orange"
                align="center"
                bgGradient="linear(to-l, #48BB78, #81E6D9)"
                _hover={{
                  bgGradient: "linear(to-r, #ED64A6, #805AD5)",
                }}
              >
                SOCIAL MEDIA
              </Heading>
            </Box>

            <Box flex="1" align="center" borderRadius="md" boxShadow="xl" p="10" pb="20" overflow="hidden">
              <Box flex="1" pb="10">
                <img src={social_media3} alt="contact" width="300" height="278" />
              </Box>

              <Box alignItems="center" textAlign="center">
                <Icon as={FaGithub} boxSize="50" />
                <Icon as={FaLinkedin} boxSize="50" />
                <Icon as={FaTwitter} boxSize="50" />
                <Icon as={FaFacebookF} boxSize="50" />
                <Icon as={FaInstagram} boxSize="50" />
                <Icon as={FaGoogle} boxSize="50" />
              </Box>
            </Box>
          </SlideFadeOnScroll>
        </Container>
      </Box>
    </>
  );
}

export default SocialMedia;

/*
import React from "react";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Sylvie Mémain-Yé. All Rights Reserved.`,
  author: {
    name: "Sylvie Mémain-Yé",
    accounts: [
      {
        url: "https://github.com/MA-Ahmad",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/muhammad_ahmaad",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://dev.to/m_ahmad",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />
      },
      {
        url: "https://linkedin.com/in/muhammad-ahmad20",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "https://www.quora.com/profile/Muhammad-Ahmad-66",
        label: "Quora Account",
        type: "red",
        icon: <FaQuora />
      },
      {
        url: "mailto:muhammad.ahmad8043@gmail.com",
        label: "Mail ahmad",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
*/
