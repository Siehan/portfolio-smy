import alyra_logo from "../assets/images/alyra_logo.png";
import ironHack from "../assets/images/ironHack.png";
import francs10_logo from "../assets/images/francs10_logo.png";
import calendar1 from "../assets/images/calendar1.jpg";
import calendar3 from "../assets/images/calendar3.png";
import calendar4 from "../assets/images/calendar4.png";
import Feature from "./Feature";
import { Container, SimpleGrid } from "@chakra-ui/react";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

const Features = () => {
  const features = [
    {
      icon: alyra_logo,
      title: "2021",
      text: "A development school at the heart of the blockchain",
    },
    {
      icon: ironHack,
      title: "2020",
      text: "An Immersive Web Development school",
    },
    {
      icon: francs10_logo,
      title: "2019-1997",
      text: "Television programs distribution company",
    },
    {
      icon: calendar1,
      title: "1997",
      text: "Association of families of disabled children",
    },
    {
      icon: calendar3,
      title: "1997-1993",
      text: "Various trips abroad (USA, JAPAN, AFRICA)",
    },
    {
      icon: calendar4,
      title: "1992-1991",
      text: "DPAM - (Du Pareil au Même) French children's fashion company",
    },
  ];
  return (
    <Container as="section" maxW="container.lg" py="10" pb="-5">
      <SlideFadeOnScroll>
        <SimpleGrid columns={[1, null, 3]} gap="8">
          {features.map((el, index) => {
            return <Feature key={index} {...el}></Feature>;
          })}
        </SimpleGrid>
      </SlideFadeOnScroll>
    </Container>
  );
};

export default Features;
