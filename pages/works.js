import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import GridItem from "@/components/grid-items";
import Section from "@/components/section";
import thumbInkdrop from "../public/images/works/inkdrop_eyecatch.png";
import thumbWalknote from "../public/images/works/walknote_eyecatch.png";
import thumbFourPainters from "../public/images/works/the-four-painters_eyecatch.jpg";
import thumbMenkiki from "../public/images/works/menkiki_eyecatch.png";
import thumbMargelo from "../public/images/works/margelo_eyecatch.png";
import thumbModeTokyo from "../public/images/works/modetokyo_eyecatch.png";
import thumbStyly from "../public/images/works/styly_eyecatch.png";
import thumbPichu2 from "../public/images/works/pichu2_eyecatch.png";
import thumbFreeDBTagger from "../public/images/works/freedbtagger_eyecatch.png";
import thumbAmembo from "../public/images/works/amembo_eyecatch.png";
import Layout from "@/components/Article";
const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} pt={"24"}>
          Works
        </Heading>

        {/* <img src={"images/works/inkdrop_eyecatch.png"} alt="" srcset="" /> */}
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <GridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </GridItem>
          </Section>
          <Section>
            <GridItem id="inkdrop" title="Inkdrop" thumbnail={thumbWalknote}>
              Music recommendation app for iOS
            </GridItem>
          </Section>

          <Section>
            <GridItem
              id="inkdrop"
              title="Inkdrop"
              thumbnail={thumbFourPainters}
            >
              Music recommendation app for iOS
            </GridItem>
          </Section>

          <Section>
            <GridItem id="inkdrop" title="Inkdrop" thumbnail={thumbMenkiki}>
              Music recommendation app for iOS
            </GridItem>
          </Section>

          <Section>
            <GridItem id="inkdrop" title="Inkdrop" thumbnail={thumbMargelo}>
              Music recommendation app for iOS
            </GridItem>
          </Section>

          <Section>
            <GridItem id="inkdrop" title="Inkdrop" thumbnail={thumbStyly}>
              Music recommendation app for iOS
            </GridItem>
          </Section>

          <Section>
            <GridItem id="inkdrop" title="Inkdrop" thumbnail={thumbPichu2}>
              Music recommendation app for iOS
            </GridItem>
          </Section>

          <Section>
            <GridItem
              id="inkdrop"
              title="Inkdrop"
              thumbnail={thumbFreeDBTagger}
            >
              Music recommendation app for iOS
            </GridItem>
          </Section>

          <Section>
            <GridItem id="inkdrop" title="Inkdrop" thumbnail={thumbAmembo}>
              Music recommendation app for iOS
            </GridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
