import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
// import "../styles/globals.css";
import React, { useState } from "react";
import {
  Box,
  ChakraProvider,
  Container,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import theme from "@/components/Theme";
import Fonts from "@/components/font";
import { AnimatePresence } from "framer-motion";
import VoxelDog from "@/components/voxel-dog";
import SocailLinks from "@/components/SocailLinks";
import { motion } from "framer-motion";
import Modal from "@/components/Modal";
import { useMediaQuery } from "@chakra-ui/media-query";
import { EmailIcon } from "@chakra-ui/icons";
import { SocialIconContainer } from "@/components/SocialIconContainer";
export default function App({ Component, pageProps }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobile] = useMediaQuery("(min-width: 30em)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });
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
      <ChakraProvider theme={theme}>
        <Fonts />
        <Navbar />
        <SocailLinks />
        {isMobile && (
          <Box position={"absolute"} right={"16"} top={"20"} display={"flex"}>
            <motion.div
              initial={{
                x: 500,
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
              <motion.button
                style={styles}
                onClick={() => (modalOpen ? close() : open())}
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Text fontFamily={"cursive"}>Get in Touch</Text>
                <EmailIcon width={"7"} height={"7"} />
              </motion.button>

              <AnimatePresence
                initial={false}
                mode={"wait"}
                onExitComplete={() => null}
              >
                {modalOpen && (
                  <Modal
                    text={"contact me"}
                    modalOpen={modalOpen}
                    handleClose={close}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </Box>
        )}
        <Container maxW="container.md" pt={14}>
          <AnimatePresence mode="wait" initial={true}>
            <VoxelDog />
            <Component {...pageProps} />
            {/* <h1>Hello world</h1> */}
            {!isMobile && (
              <Box
                // position={""}
                // right={"16"}
                // top={"20"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
              >
                <motion.div
                  initial={{
                    x: 500,
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
                  <motion.button
                    style={styles}
                    onClick={() => (modalOpen ? close() : open())}
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Text fontFamily={"cursive"}>Get in Touch</Text>
                    <EmailIcon width={"7"} height={"7"} />
                  </motion.button>

                  <AnimatePresence
                    initial={false}
                    mode={"wait"}
                    onExitComplete={() => null}
                  >
                    {modalOpen && (
                      <Modal
                        text={"contact me"}
                        modalOpen={modalOpen}
                        handleClose={close}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              </Box>
            )}
            {!isMobile && (
              <Box
                display={"flex"}
                alignItems={"center"}
                mt="8"
                pb="8"
                justifyContent={"center"}
                px={"16"}
                // position={"absolute"}
                // bottom={"-32"}
                // top={"0"}
                width={"full"}
              >
                <motion.div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "13px",
                  }}
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
                  <SocialIconContainer>
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
                </motion.div>
              </Box>
            )}
          </AnimatePresence>
        </Container>
      </ChakraProvider>
    </>
  );
}
