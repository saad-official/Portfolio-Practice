import Layout from "@/components/Article";
import Section from "@/components/section";
import Slider from "@/components/Slider";
import { SlideData } from "@/dummydata";
import { urlFor } from "@/sanity";
import { fetchExperience } from "@/utils/fetchExperience";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Text,
  Stack,
  Box,
  Container,
  SimpleGrid,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { RGBAFormat } from "three";

const Experience = ({ experiences }) => {
  return (
    <Layout title="experience">
      <Box>
        <Text
          textAlign={"center"}
          my={"4"}
          fontSize={"4xl"}
          fontWeight={"bold"}
        >
          Experience 💼
        </Text>
      </Box>
      <SimpleGrid columns={[1, 2, 2]} spacing="10px">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export default Experience;

// implemet ISR
export const getStaticProps = async () => {
  const experiences = await fetchExperience();
  // console.log("pae", experiences);
  return {
    props: { experiences },
    revalidate: 10,
  };
};

const ExperienceCard = ({ experience }) => (
  <Section delay={0.1}>
    <Box
      m="4"
      flex
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      mx="auto"
      h={"340px"}
      overflow={"hidden"}
      maxW={"300px"}
      p="4"
      color={"black"}
      border={useColorModeValue("1px solid lightgray", "1px solid #132293")}
      rounded={"md"}
      shadow="lg"
      cursor={"pointer"}
      _hover={{ transform: "scale(1.03)" }}
      transition={"0.2s ease-in-out"}
      bgColor={useColorModeValue("white", "#001e3c")}
    >
      <Container
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <img
          src={urlFor(experience?.companyImage).url()}
          alt="Green double couch with wooden legs"
          width={"50px"}
          height={"50px"}
          style={{
            border: "1px solid gray",
            borderRadius: "50%",
          }}
        />
        <Heading
          as={"h5"}
          size="sm"
          color={useColorModeValue("gray.800", "white")}
          fontFamily={"cursive"}
        >
          {experience?.jobTitle}
        </Heading>
      </Container>
      <Text
        color={useColorModeValue("gray", "#b2bac2")}
        textAlign="start"
        mt={"4"}
        fontSize={"small"}
      >
        {experience?.company}
      </Text>
      <Stack mt="2" spacing="3">
        <Divider color={"GrayText"} />
        <Text
          fontSize={"small"}
          color={useColorModeValue("blackAlpha.600", "gray.300")}
        >
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </Text>
        <Divider />
        <Container
          style={{ display: "flex", gap: "10px" }}
          // bgColor={useColorModeValue("black", "white")}
        >
          {experience?.technologies?.map((technology) => (
            <>
              <Tooltip
                label={`${technology?.title} 🔥`}
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
                <img
                  key={technology._id}
                  className=""
                  src={urlFor(technology?.image).url()}
                  alt="skiils"
                  style={{
                    width: "20px",
                    height: "20px",
                    objectFit: "contain",
                    border: "1px solid lightgray",
                    position: "relative",
                  }}
                />
              </Tooltip>
            </>
          ))}
        </Container>
      </Stack>
    </Box>
  </Section>
);
