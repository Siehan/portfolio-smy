import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import { Button, Center } from "@chakra-ui/react";
import SylvieMemainYeComputer from "../assets/images/SylvieMemainYeComputer.jpg";

import SlideFadeOnScroll from "./SlideFadeOnScroll";

const About = () => {
  return (
    <Box as="section" w={"100%"}>
      <Container borderRadius="md" maxW="container.lg" id="about" pt="20" pb="10">
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
              ABOUT
            </Heading>
          </Box>

          <Box flex="1" align="center" borderRadius="md" boxShadow="xl" p="10" pb="20" overflow="hidden">
            <Box flex="1" pb="10">
              <img src={SylvieMemainYeComputer} alt="contact" width="400" height="278" />
            </Box>
            <Box>
              <Heading textAlign="center" pt="5" fontWeight="bold" fontSize={40} textShadow="1px 3px orange">
                <Text as="span" color="teal">
                  I am a Web Junior Developper
                </Text>
              </Heading>
            </Box>
            <Text fontSize="xl" mb="10" pt="5" textAlign="center">
              You can download my CV for more informations :
            </Text>
            <Center>
              <Button colorScheme="teal" size="lg">
                Download CV
              </Button>
            </Center>
          </Box>
        </SlideFadeOnScroll>
      </Container>
    </Box>
  );
};

export default About;
