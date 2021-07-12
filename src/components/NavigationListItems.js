import { List, ListItem, Link } from "@chakra-ui/react";

const NavigationListItems = ({ sx }) => {
  return (
    <List
      sx={{
        textTransform: "uppercase",
        a: { fontSize: "20px", p: 2, display: "inline-block" },
        ...sx,
      }}
    >
      <ListItem>
        <Link href="/#home">Home</Link>
      </ListItem>
      <ListItem>
        <Link href="/#portfolio">Portfolio</Link>
      </ListItem>
      <ListItem>
        <Link href="/#experience">Experience</Link>
      </ListItem>
      <ListItem>
        <Link href="/#socialMedia">Social Media</Link>
      </ListItem>
      <ListItem>
        <Link href="/#about">About</Link>
      </ListItem>
      <ListItem>
        <Link href="/#contact">Contact</Link>
      </ListItem>
    </List>
  );
};

export default NavigationListItems;

/*
 <ListItem>
<Link href="/#skills">Skills</Link>
</ListItem>
*/
