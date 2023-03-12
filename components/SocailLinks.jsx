import { Box, Button, Container, Text, Link } from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/media-query'
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIconContainer } from "./SocialIconContainer";
import { motion } from "framer-motion";
import Modal from "./Modal";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
*[_type == "social"]
`;
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { EmailIcon } from "@chakra-ui/icons";;
import { fetchSocials } from "@/utils/fetchSocials";
const SocailLinks = () => {
  const [isMobile] = useMediaQuery("(min-width: 30em)",  {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })
  const [socialUrl, setSocailUrl] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
   async function getSocailUrl(){
    //   const pageInfo = await fetchSocials();
    //  setSocailUrl(pageInfo);
     const social = await sanityClient.fetch(query);
     console.log(social);
     setSocailUrl(social);
    }
    getSocailUrl();
  }, [query]);

  const styles = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    padding: ".5rem 1rem",
    margin: "2rem auto auto 0",
    background: "linear-gradient(10deg, #ffaa00, #ff6a00)",
    color: "#101315",
  };
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);
  return (
    <>
      { isMobile  &&
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={"16"}
          position={"absolute"}
          top="28"
          width={"full"}
        >
      
          <motion.div
            style={{ display: "flex", alignItems: "center", gap: "13px" }}
            initial={{
              x: -500,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
          >
            <Link href={socialUrl[0]?.url || 'https://www.linkedin.com/in/saad-khan-539844204/'}  target="_blank">
            <SocialIconContainer >
              <FontAwesomeIcon 
                icon={faLinkedin}
                style={{
                  width: "25px",
                  height: "25px",
                  maxWidth: "25px",
                  maxHeight: "25px",
                  borderRadius: "50%",
                }}
                size="sm"
                color="#2c91e5"
                />
            </SocialIconContainer>
            </Link>
            <Link href={socialUrl[3]?.url} target="_blank">
            <SocialIconContainer>
              <FontAwesomeIcon
                icon={faInstagram}
                style={{
                  width: "25px",
                  height: "25px",
                  maxWidth: "25px",
                  maxHeight: "25px",
                  borderRadius: "50%",
                }}
                size="sm"
                color="red"
                />
          </SocialIconContainer>
          </Link>

          <Link href={socialUrl[1]?.url || 'https://github.com/labyh123456'}  target="_blank">
            <SocialIconContainer>
              <FontAwesomeIcon
                icon={faGithub}
                style={{
                  width: "25px",
                  height: "25px",
                  maxWidth: "25px",
                  maxHeight: "25px",
                  borderRadius: "50%",
                }}
                size="sm"
                color="black"
                />
            </SocialIconContainer>
            </Link>

            
            <Link href={socialUrl[2]?.url || 'https://twitter.com/tommmyy890'}  target="_blank">
            <SocialIconContainer>
              <FontAwesomeIcon
                icon={faTwitter}
                style={{
                  width: "25px",
                  height: "25px",
                  maxWidth: "25px",
                  maxHeight: "25px",
                  borderRadius: "50%",
                }}
                size="sm"
                color="#49a1eb"
                />
              </SocialIconContainer>
              </Link>
          </motion.div>
        </Box>
      }

    </>
  );
};

export default SocailLinks;


