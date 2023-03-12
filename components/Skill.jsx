import Layout from "@/components/Article";
import { urlFor } from "@/sanity";
import {
  Box,
  Container,
  Grid,
  Heading,
  SimpleGrid,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import Section from "./section";

const Skill = ({skill}) => {
  return (
    <Section delay={0.1}>
      <Tooltip
        label={`${skill?.title} 🔥`}
        placement="top"
        paddingX={"2"}
        paddingY={"2"}
        borderRadius={"lg"}
        color={"white"}
        bg={"teal"}
        minW={"14"}
        fontSize={"md"}
        textAlign={"center"}
        style={{ transition: "0.5s" }}
      >
        <Box
          bg={"#fff"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            width: "70px",
            height: "70px",
            position: "relative",
              cursor: "pointer",
          }}
          role="group"
        >
          {/* <Text>{skill?.title}</Text> */}
          <img
            src={urlFor(skill?.image).url()}
            alt=""
  
            style={{
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              objectFit: "cover",
            }}
          />

          <Container
            position={"absolute"}
            backgroundColor={"whitesmoke"}
            color={"black"}
            fontWeight={"bold"}
            border={"1px"}
            borderColor={"GrayText"}
            width={"16"}
            height={"16"}
            borderRadius={"full"}
            display={"none"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"ease-in-out"}
         
            _groupHover={{ display: "flex" }}
          >
            <Text>{skill.progress}%</Text>
          </Container>

          {/* <Text>{skill?.progress}</Text> */}
        </Box>
      </Tooltip>
    </Section>
  );
}

export default Skill