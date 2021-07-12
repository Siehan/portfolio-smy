import { Box, Container, Heading, Image, Stack } from "@chakra-ui/react";
import francine from "../assets/images/francine.jpg";
import lossan from "../assets/images/lossan.jpg";
import anabelle from "../assets/images/anabelle.jpg";
import anabelle2 from "../assets/images/anabelle2.jpg";
import yoanne from "../assets/images/yoanne.jpg";
import francine3 from "../assets/images/francine3.jpg";
import francine2 from "../assets/images/francine2.jpg";
import francine4 from "../assets/images/francine4.jpg";

import SlideFadeOnScroll from "./SlideFadeOnScroll";

const Portfolio = () => {
  return (
    <Box as="section" w={"100%"}>
      <Container borderRadius="md" maxW="container.lg" id="portfolio" pt="20" pb="10">
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
              PORTFOLIO
            </Heading>
          </Box>
          <Stack
            direction={["column-reverse", null, "row"]}
            sx={{
              gap: "2rem",
            }}
            alignItems="center"
          >
            <Box flex="1" align="center" borderRadius="md" boxShadow="xl" p="10" pb="20" overflow="hidden">
              <Box pb="10">
                <Image src={francine} borderRadius="md" alt="francine" />
              </Box>

              <Box pb="10">
                <Image src={lossan} alt="lossan" borderRadius="md" />
              </Box>
              <Box pb="10">
                <Image src={anabelle} alt="anabelle" borderRadius="md" />
              </Box>
              <Box pb="10">
                <Image src={anabelle2} alt="anabelle2" borderRadius="md" />
              </Box>
            </Box>

            <Box flex="1" align="center" borderRadius="md" boxShadow="xl" p="10" pb="20" overflow="hidden">
              <Box pb="10">
                <Image src={yoanne} alt="yoanne" borderRadius="md" />
              </Box>

              <Box pb="10">
                <Image src={francine2} alt="francine2" borderRadius="md" />
              </Box>
              <Box pb="10">
                <Image src={francine3} alt="francine3" borderRadius="md" />
              </Box>
              <Box pb="10">
                <Image src={francine4} alt="francine4" borderRadius="md" />
              </Box>
            </Box>
          </Stack>
        </SlideFadeOnScroll>
      </Container>
    </Box>
  );
};

export default Portfolio;
