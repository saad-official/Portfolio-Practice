import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "@/components/Article";
import Section from "@/components/section";
import { fetchProjects } from "@/utils/fetchProjects";
import { ProjectCard } from "@/components/ProjectCard";
const Posts = ({ projects }) => (
  <Layout title="Projects">
    <Container maxW={"full"}>
      <Heading
        as="h1"
        fontFamily={"sans-serif"}
        fontWeight={"bold"}
        fontSize={"4xl"}
        textAlign={{ base: "center", md: "center" }}
        mt={6}
        mb={6}
      >
        Projects 💻
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {projects?.map((project) => (
            <ProjectCard
              image={project?.image}
              name={project?.title}
              key={project?._id}
              href={project?.linkToBuild}
              details={`/project/${project?._id}`}
            />
          ))}
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);
export default Posts;

// implemet ISR
export const getStaticProps = async () => {
  const projects = await fetchProjects();
  console.log("pae", projects);
  return {
    props: { projects },
    revalidate: 10,
  };
};
