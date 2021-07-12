import { Box, Container, Heading, Image, Text } from "@chakra-ui/react"; //useColorModeValue
import smyPhoto2 from "../assets/images/smyPhoto2.jpg";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

function Header() {
  return (
    <>
      <Container as="header" maxW="container.lg" pt="28" pb="10" id="home">
        <SlideFadeOnScroll>
          <Box>
            <Heading as="h1" fontSize={["3xl", "4xl"]} pb={"30"} pt="10">
              <Text
                fontSize="4xl"
                pb={5}
                bgGradient="linear(to-l, yellow,orange)"
                _hover={{
                  bgGradient: "linear(to-l, cyan.500, blue.500, purple.600)",
                }}
                bgClip="text"
              >
                Hi, I'm
              </Text>
              <Text
                fontSize="6xl"
                fontWeight="bold"
                bgGradient="linear(to-r , cyan.500, blue.600, purple.600)"
                _hover={{
                  bgGradient: "linear(to-l, #3CAADD, #4FAA1B)",
                }}
                bgClip="text"
              >
                Sylvie Mémain-Yé
              </Text>
            </Heading>
          </Box>
          <Box pt="28" pb="5" d="flex" maxW={"100%"} alignItems="center" flexDir="column" textAlign="center" py="4">
            <Image alignSelf="center" borderRadius="full" boxShadow="lg" boxSize="300px" src={smyPhoto2} />
          </Box>
        </SlideFadeOnScroll>
      </Container>
    </>
  );
}

export default Header;

/*
 <Box>
            <Heading textAlign="center" pt="10" fontWeight="bold" fontSize={40} textShadow="1px 3px orange">
              <Text as="span" color="teal">
                Web Junior Developper, Fullstack Javascript, Blockchain, Solidity
              </Text>
            </Heading>
          </Box>
*/
