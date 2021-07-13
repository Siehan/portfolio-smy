import React from "react";
import { Box, Container, Flex, Heading, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { DiCodeigniter, DiAndroid, DiWebplatform } from "@chakra-ui/react";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

function Profile() {
  const color = useColorModeValue("telegram.500", "telegram.400");

  return (
    <Container as="section" maxW="container.xl" pt="28" pb="10">
      <SlideFadeOnScroll>
        <Flex
          direction={["column-reverse", null, "row"]}
          x={{ gap: "2rem" }}
          alignItems="center"
          w="100%"
          maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
        >
          <Box alignSelf="center" px="32" py="16">
            <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
              1+
            </Heading>
            <Text fontSize="2xl" color="gray.400">
              Years of Experience
            </Text>
          </Box>

          <Box alignSelf="center" px="32" py="16">
            <Text fontWeight="bold" fontSize="2xl">
              Product Designer and Developer, specialised in mobile app development.
            </Text>
            <Flex
              direction={["column-reverse", null, "row"]}
              sx={{
                gap: "2rem",
              }}
              mt={8}
            >
              <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="50%" w="30vh" justify="flex-end">
                <Icon color="white" p="4" as={DiAndroid} w="24" h="24" />
                <Text color={color} p="4" fontSize="xl" fontWeight="semibold">
                  2019 - 1997
                </Text>
                <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                  J'ai passé 22 ans dans une petite Société de "Distribution et Production de Documentaires TV". Notre
                  métier consistait à vendre des programmes aux chaînes de télévisions nationales et internationales.
                  Par exemple, nous avons été les distributeurs du magazine "C'est Pas Sorcier", si vous connaissez
                  cette série, eh bien elle a été diffusée dans de nombreux pays et traduite en autant de langues:
                  japonais, chinois, suédois, finlandais, russe, espagnol, italien, anglais, iranien, libanais etc.
                  Concernant mon poste... enfin plutôt mes postes, puisque très polyvalente, je m'occupais de la partie
                  technique, c'est à dire tout ce qui concernait la livraison du matériel de diffusion: Beta SP ou
                  Digital, HDcam, les fichiers numériques, les relevés des dialogues, des musiques, des archives, la
                  presse, les photos... Et puis aussi, de l'administration, de la comptabilité, du social, du juridique,
                  du fiscal, de la préparation des marchés de films (le avant, le pendant, le après), de la négociation
                  des contrats, de rentrer les nouveaux programmes des producteurs dans notre catalogue... enfin bref,
                  la liste est un peu longue.
                </Text>
              </Flex>
              <Flex
                rounded="xl"
                direction="column"
                mt={4}
                bg="gray.100"
                h="30vh"
                w="30vh"
                justify="flex-end"
                _hover={{ bg: "teal.400" }}
              >
                <Icon color="black" p="4" as={DiCodeigniter} w="24" h="24" />
                <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                  Flutter Apps
                </Text>
              </Flex>
              <Flex
                rounded="xl"
                direction="column"
                mt={4}
                bg="gray.100"
                h="30vh"
                w="30vh"
                justify="flex-end"
                _hover={{ bg: "green.400" }}
              >
                <Icon as={DiWebplatform} p="4" w="24" h="24" color="black" />
                <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                  Web Apps
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </SlideFadeOnScroll>
    </Container>
  );
}

export default Profile;
