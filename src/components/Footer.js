import { Box, Button, Link as ChakraLink, Text } from "@chakra-ui/react";
import Icon from "@chakra-ui/icon";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const socialAccounts = [
  { Icon: FaGithub, path: "https://github.com/Siehan", title: "Github" },
  { Icon: FaLinkedin, path: "https://www.linkedin.com/in/sylvie-m%C3%A9main-y%C3%A9-9714501b9/", title: "Linkedin" },
  { Icon: FaTwitter, path: "https://twitter.com/memainye", title: "Twitter" },
  { Icon: FaFacebook, path: "https://www.facebook.com/SylvieMemainYe/", title: "Facebook" },
  { Icon: FaInstagram, path: "https://www.instagram.com/memainye/?hl=fr", title: "Instagram" },
];

const Footer = () => {
  return (
    <Box as="footer">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        borderRadius="md"
        minH="4rem"
        px={[4, 6, 10, 14, 20]}
        maxW={"100%"}
        mx="auto"
        pb="2"
        bgGradient="linear(to-l, cyan.400, blue.300, purple.500)"
        _hover={{
          bgGradient: "linear(to-l, #3CAADD, #4FAA1B)",
        }}
      >
        <Box>
          <Text fontSize="22" p="2">
            Copyright © 2021 Smy - Built with{" "}
            <span role="img" aria-label="red heart">
              ❤️
            </span>{" "}
            by Sylvie Mémain-Yé
          </Text>

          <Box py="2">
            {socialAccounts.map((item, index) => (
              <ChakraLink
                href={item.path}
                aria-label={item.title}
                mx="2"
                _focus={{ outline: "none" }}
                key={index}
                isExternal
              >
                <Button aria-label={item.title}>
                  <Icon as={item.Icon} w="6" h="6" />
                </Button>
              </ChakraLink>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
