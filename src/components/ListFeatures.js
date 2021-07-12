import code_review_bro from "../assets/images/code_review_bro.png";
import { CheckCircleIcon } from "@chakra-ui/icons";
import SlideFadeOnScroll from "./SlideFadeOnScroll";
import {
  Box,
  Container,
  Heading,
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
  const bg = useColorModeValue("gray.20", "teal.700");
  const color = useColorModeValue("orange");

  return (
    <Box as="section" w={"100%"} bg={bg}>
      <Container borderRadius="md" maxW="container.lg" id="experience" pt="20" pb="10">
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
              EXPERIENCE
            </Heading>
          </Box>
          <Stack
            direction={["column", null, "row"]}
            sx={{
              gap: "2rem",
            }}
            alignItems="center"
          >
            <Box flex="1">
              <img src={code_review_bro} alt="Code review" width="500" height="318" />
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
              {/*
            <SimpleGrid as={List}
              columns="2" spacing="2"
            >
              {list.map((el, index) => {
                return (
                  <MenuItem key={index}>
                    <ListIcon as={CheckCircleIcon} color="teal.300" />
                    {el}
                  </MenuItem>
                )
              })}
            </SimpleGrid>
            */}
            </Box>
          </Stack>
        </SlideFadeOnScroll>
      </Container>
    </Box>
  );
};

export default ListFeatures;
