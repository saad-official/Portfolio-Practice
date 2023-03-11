import { urlFor } from "@/sanity";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Link,
  Divider,
  Container
} from "@chakra-ui/react";
import Section from "./section";
// export default function ProjectCard({
//   image,
//   name,
//   linkToBuild,
//   key,
//   details,
// }) {
//   return (
//     <Center py={8}>
//       <Box
//         key={key}
//         role={"group"}
//         p={6}
//         maxW={"270px"}
//         w={"full"}
//         bg={useColorModeValue("white", "whitesmoke")}
//         boxShadow={"2xl"}
//         rounded={"lg"}
//         pos={"relative"}
//         zIndex={1}
//       >
//         <Box
//           rounded={"lg"}
//           mt={-12}
//           pos={"relative"}
//           height={"180px"}
//           _after={{
//             transition: "all .3s ease",
//             content: '""',
//             w: "full",
//             h: "full",
//             pos: "absolute",
//             top: 5,
//             left: 0,
//             backgroundImage: `url(${image})`,
//             filter: "blur(15px)",
//             zIndex: -1,
//           }}
//           _groupHover={{
//             _after: {
//               filter: "blur(20px)",
//             },
//           }}
//         >
//           <Image
//             rounded={"lg"}
//             height={180}
//             width={222}
//             objectFit={"cover"}
//             src={image}
//           />
//         </Box>
//         <Stack pt={5} align={"center"}>
//           {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
//               Brand
//             </Text> */}
//           <Heading
//             fontSize={"20px"}
//             color={useColorModeValue("black", "black")}
//             fontFamily={"body"}
//             fontWeight={500}
//           >
//             {name.length > 14 ? name.substring(0, 14) + ".." : name}
//           </Heading>
//           <Stack direction={"row"} align={"center"}>
//             {/* <Text fontWeight={800} fontSize={'xl'}>
//                 $57
//               </Text>
//               <Text textDecoration={'line-through'} color={'gray.600'}>
//                 $199
//               </Text> */}
//             <Link href={details}>
//               <Button
//                 bg={"pink.500"}
//                 mt="2"
//                 color="white"
//                 _hover={{
//                   color: "black",
//                   backgroundColor: "white",
//                   border: "1px solid gray",
//                 }}
//               >
//                 View More
//               </Button>
//             </Link>
//           </Stack>
//         </Stack>
//       </Box>
//     </Center>
//   );
// }

export const ProjectCard = ({ image, name, linkToBuild, key, details }) => (
  <Section delay={0.1}>
    <Box
      m="4"
      key={key}
      flex
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      mx="auto"
      h={"288px"}
      overflow={"hidden"}
      // maxW={"200px"}
      // w={'240px'}
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
        w={'full'}
        h={'200px'}
        p={'0'}
        objectFit={'cover'}
      >
        <Image
          // src={'https://hamna.dev/static/media/hulu.bc092a5ed72105e1514f.png'}
          src={urlFor(image).url()}
          w={'full'}
          h={'full'}
          objectFit={'cover'}
         alt="Green double couch with wooden legs"
        />
      </Container>
      <Text
        textTransform={'capitalize'}
        fontFamily={'monospace'}
        color={useColorModeValue("black", "#f0f7fe")}
        textAlign="center"
        w={'full'}
        my={"2"}
        fontSize={"20px"}
      >
        {name.length > 30 ? name.substring(0, 24) + ".." : name}
      </Text>
      <Divider />
      <Link textDecoration={'none'} href={details}>
        <Button
          bg={"pink.500"}
          color="white"
          minW={'full'}
          _hover={{
            color: "white",
            backgroundColor: "#a90057",
            border: "1px solid pink",
          }}
          borderRadius="0px"
        >
          View More
        </Button>
      </Link>
    </Box>
  </Section>
);
