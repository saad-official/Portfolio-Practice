import NextLink from "next/link";
import { Heading, Box, Image, Link, Badge } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const Title = ({ children }) => (
  <Box>
    {/* <Link as={NextLink} href="/works">
      Works
    </Link> */}
    {/* 
    <span>
      {" "}
      <ChevronRightIcon />{" "}
    </span> */}

    <Heading display="flex" as="h3" fontSize={20}>
      {children}
    </Heading>
  </Box>
);

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} mt={"3.5"} />
);

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);
