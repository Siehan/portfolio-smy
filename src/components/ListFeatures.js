import code_review_bro_gray from "../assets/images/code_review_bro_gray.png";
import { CheckCircleIcon } from "@chakra-ui/icons";
import SlideFadeOnScroll from "./SlideFadeOnScroll";
import {
  Box,
  Container,
  Heading,
  Image,
  List,
  ListItem,
  ListIcon,
  Stack,
  Text,
  useColorModeValue,
  // SimpleGrid
} from "@chakra-ui/react";

const ListFeatures = () => {
  const list = ["2021", "2020", "2019-1997", "1997", "1997-1993", "1992-1991"];
  const color = useColorModeValue("orange");

  return (
    <Box as="section" w={"100%"}>
      <Container borderRadius="md" maxW="container.xl" id="experience" pt="20" pb="10">
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
              EXPERIENCE
            </Heading>
          </Box>
          <Text fontSize="2xl" pt="5" textAlign="center">
            I summarized some of my jobs, but for the last one, I spent 23 years in the same company.
          </Text>
          <Text fontSize="2xl" textAlign="center" pb="10">
            Time has flown!
          </Text>
          <Stack
            direction={["column", null, "row"]}
            sx={{
              gap: "2rem",
            }}
            alignItems="center"
          >
            <Box flex="1">
              <Image src={code_review_bro_gray} alt="Code review" width="300" height="600" />
            </Box>
            <Box flex="1">
              <Heading mb="6" textAlign="center" fontSize={40} textShadow="1px 3px orange">
                <Text as="span" color="teal">
                  Experiences
                </Text>
              </Heading>

              <List sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {list.map((el, index) => {
                  return (
                    <ListItem key={index}>
                      <ListIcon as={CheckCircleIcon} color={color} />
                      {el}
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Stack>
        </SlideFadeOnScroll>
      </Container>
    </Box>
  );
};

export default ListFeatures;
