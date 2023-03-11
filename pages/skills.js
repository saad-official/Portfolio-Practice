import Layout from "@/components/Article";
import Section from "@/components/section";
import Skill from "@/components/Skill";
import Slider from "@/components/Slider";
import { SlideData } from "@/dummydata";
import { urlFor } from "@/sanity";
import { fetchSkills } from "@/utils/fetchSkillss";
import {
  Box,
  Container,
  Grid,
  Heading,
  SimpleGrid,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";

const skills = ({ skills }) => (
  <Layout title="skills">
    <h1
      style={{
        fontFamily: "monospace",
        textAlign: "center",
        fontSize: "30px",
        letterSpacing: "10px",
      }}
    >
      SKILLS
    </h1>

    <p
      style={{
        textAlign: "center",
        fontSize: "16px",
        color: "gray",
        letterSpacing: "10px",
        marginTop: "10px",
      }}
    >
      Hover To See More Info{" "}
    </p>
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
        paddingBottom: "30px",
      }}
    >
      <SimpleGrid columns={[3, null, 4]} spacing="20px">
        {skills?.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </SimpleGrid>
      {/* <Slider slides={SlideData} /> */}
    </Container>
  </Layout>
);

export default skills;

// implemet ISR
export const getStaticProps = async () => {
  const skills = await fetchSkills();
  console.log("pae", skills);
  return {
    props: { skills },
    revalidate: 10,
  };
};

// const Skill = ({ skill }) => {
//   return (
//     <Section delay={0.1}>
//       <Tooltip
//         label={skill?.title}
//         placement="top"
//         paddingX={"2"}
//         paddingY={"2"}
//         borderRadius={"lg"}
//         color={"white"}
//         bg={"teal"}
//         minW={"14"}
//         fontSize={"md"}
//         textAlign={"center"}
//         style={{ transition: "0.5s" }}
//       >
//         <Box
//           bg={"#fff"}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             borderRadius: "50%",
//             width: "70px",
//             height: "70px",
//             position: "relative",
//             cursor: "pointer",
//           }}
//           role="group"
//         >
//           {/* <Text>{skill?.title}</Text> */}
//           <img
//             src={urlFor(skill?.image).url()}
//             alt=""
//             srcset=""
//             style={{
//               borderRadius: "50%",
//               width: "50px",
//               height: "50px",
//               objectFit: "cover",
//             }}
//           />

//           <Container
//             position={"absolute"}
//             backgroundColor={"whitesmoke"}
//             color={"black"}
//             fontWeight={"bold"}
//             border={"1px"}
//             borderColor={"GrayText"}
//             width={"16"}
//             height={"16"}
//             borderRadius={"full"}
//             display={"none"}
//             alignItems={"center"}
//             justifyContent={"center"}
//             transition={"ease-in-out"}
//             // style={{
//             //   position: "absolute",
//             //   top: "",
//             //   backgroundColor: "black",
//             //   color: "white",
//             //   width: "60px",
//             //   height: "60px",
//             //   borderRadius: "50%",
//             //   display: "flex",
//             //   justifyContent: "center",
//             //   alignItems: "center",
//             // }}
//             _groupHover={{ display: "flex" }}
//           >
//             <Text>{skill.progress}%</Text>
//           </Container>

//           {/* <Text>{skill?.progress}</Text> */}
//         </Box>
//       </Tooltip>
//     </Section>
//   );
// };
