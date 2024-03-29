import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" pt="20">
      <Box
        display="flex"
        justifyContent="center"
        textAlign="center"
        borderRadius="md"
        minH="3rem"
        maxW={"100%"}
        mx="auto"
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
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
