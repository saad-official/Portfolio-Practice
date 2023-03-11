import React, { use } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import FootprintIcon from "./icons/footprint";
const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  transform: translateY(-4px) rotate(-7deg);
`;

const Logo = () => {
  //   const footPrintImg = `/images/footprint.svg`;
  return (
    <Link href={"/"}>
      <LogoBox>
        <FootprintIcon />
        {/* <Text
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontFamily={"cursive"}
          ml={3}
        >
          Saad Khan
        </Text> */}
        <Image
          src="/nameLogo.png"
          alt="A random image"
          width={80}
          height={80}
        />
      </LogoBox>
    </Link>
  );
};

export default Logo;
