import {
  Container,
  Link,
  Text,
  Heading,
  Tooltip,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/Paragraph";
import Layout from "../../components/Article";
import { useRouter } from "next/router";
import { fetchSpecificProject } from "@/utils/fetchSpecificProject";
import { urlFor } from "@/sanity";
import Skill from "@/components/Skill";
const Work = ({ project }) => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <Layout title={project?.title}>
      <Container>
        <Heading
          textAlign={{ sm: "center", md: "left" }}
          as="h2"
          fontSize={{ sm: "28px", md: "3xl" }}
          fontFamily={"cursive"}
          mb="2.5"
          fontWeight={"bold"}
          color={"lightcoral"}
        >
          {project?.title}
        </Heading>

        <Text
          fontFamily={"cursive"}
          fontSize={"15px"}
          color={useColorModeValue("gray.600", "whitesmoke")}
        >
          {project?.summary}
        </Text>

        {project.linkToBuild && (
          <Box
            display={"flex"}
            flexDirection={{ sm: "column", md: "row" }}
            flexWrap={"wrap"}
            gap={"10px"}
            my={"3.5"}
          >
            <Heading fontSize={"15px"} fontStyle={"italic"}>
              It is Live Right now:
            </Heading>
            <Meta>
              <Link as={NextLink} href={project.linkToBuild}>
                {project.linkToBuild}
              </Link>
            </Meta>
          </Box>
        )}

        <WorkImage src={urlFor(project.image).url()} alt="inkdrop" />

        <Container
          style={{
            display: "flex",
            gap: "10px",
            paddingBottom: "30px",
            marginTop: "30px",
          }}
          // bgColor={useColorModeValue("black", "white")}
        >
          {project?.technologies?.map((technology) => (
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
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                    border: "1px solid lightgray",
                    position: "relative",
                  }}
                />
              </Tooltip>
            </>
          ))}
        </Container>

        {/* <Slider slides={project?.image} /> */}
      </Container>
    </Layout>
  );
};
export default Work;

// implemet ISR
export const getServerSideProps = async ({ params }) => {
  const { name } = params;
  const query = groq`
  *[_type == 'myproject' && _id == '${name}'][0]{
    ...,
    technologies[]->
}`;
  const project = await sanityClient.fetch(query);
  // const project = await fetchSpecificProject(name);
  // console.log("pae", project);
  return {
    props: { project },
  };
};
