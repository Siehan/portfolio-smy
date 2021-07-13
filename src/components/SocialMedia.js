import Icon from "@chakra-ui/icon";
import { Box, Button, Container, Heading, Image, Link as ChakraLink } from "@chakra-ui/react";
import React from "react";
import SlideFadeOnScroll from "./SlideFadeOnScroll";
import social_media3 from "../assets/images/social_media3.jpg";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const socialAccounts = [
  { Icon: FaLinkedin, path: "https://www.linkedin.com/in/sylvie-mémain-yé-9714501b9/", title: "Linkedin" },
  { Icon: FaGithub, path: "https://github.com/Siehan", title: "Github" },
  { Icon: FaTwitter, path: "https://twitter.com/memainye", title: "Twitter" },
  { Icon: FaFacebookF, path: "https://www.facebook.com/SylvieMemainYe/", title: "Facebook" },
  { Icon: FaInstagram, path: "https://www.instagram.com/memainye/?hl=fr", title: "Instagram" },
];

function SocialMedia() {
  return (
    <>
      <Box as="section" w={"100%"}>
        <Container borderRadius="md" maxW="container.xl" id="socialMedia" pt="20" pb="10">
          <SlideFadeOnScroll>
            <Box flex="1">
              <Heading
                mb="10"
                p={1}
                borderRadius="md"
                textShadow="1px 4px orange"
                align="center"
                bgGradient="linear(to-l, orange, yellow)"
                _hover={{
                  bgGradient: "linear(to-l, #48BB78, #81E6D9)",
                }}
              >
                SOCIAL MEDIA
              </Heading>
            </Box>

            <Box flex="1" align="center" borderRadius="md" boxShadow="xl" pt="5" pb="20">
              <Box pb="20">
                <Image
                  src={social_media3}
                  alt="Social media"
                  width="330"
                  height="230"
                  borderRadius="md"
                  boxShadow="md"
                />
              </Box>

              <Box>
                {socialAccounts.map((item, index) => (
                  <ChakraLink
                    href={item.path}
                    aria-label={item.title}
                    mx="6"
                    _focus={{ outline: "none" }}
                    key={index}
                    isExternal
                  >
                    <Button aria-label={item.title} bg="transparent" boxSize="55" m={5}>
                      <Icon as={item.Icon} boxSize="55" />
                    </Button>
                  </ChakraLink>
                ))}
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

          <Box mx="2">
                <Icon as={FaGithub} boxSize="50" />
                <Icon as={FaLinkedin} boxSize="50" />
                <Icon as={FaTwitter} boxSize="50" />
                <Icon as={FaFacebookF} boxSize="50" />
                <Icon as={FaInstagram} boxSize="50" />
                <Icon as={FaGoogle} boxSize="50" />
              </Box>
      }
    ]
  }
};

export default siteConfig;
*/
