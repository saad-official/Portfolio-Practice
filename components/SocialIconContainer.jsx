import { Box } from '@chakra-ui/react';
import React from 'react'

export const SocialIconContainer = ({ children }) => (
    <Box
      bg="#ffffffd2"
      p={"1.5"}
      rounded="full"
      cursor={"pointer"}
      display={"flex"}
      justifyContent={"center"}
      alignItems="center"
      width={"37px"}
    >
      {children}
    </Box>
    
  );