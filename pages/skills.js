import Layout from "@/components/Article";
import Skill from "@/components/Skill";
import { fetchSkills } from "@/utils/fetchSkillss";
import { Container, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
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
  return {
    props: { skills },
    revalidate: 10,
  };
};
