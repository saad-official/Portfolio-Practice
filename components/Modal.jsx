import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { Button, Image } from "@chakra-ui/react";
import Contact from "./Contact";
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
const styles = {
    width: 'clamp(33%, 250px, 70%)',
    height: 'auto',
    // margin: "5rem 0px",
    padding: "4rem 2rem",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    position:'relative',
    alignItems: "center",
    color:'white',
    zIndex: '2',
    backgroundColor:'rgb(42 46 53 / 1)'
    // background: "linear-gradient(10deg, #ffaa00, #ff6a00)",
  };

const Modal = ({ handleClose, text }) => {
 
  return (
      <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        style={styles}
              variants={dropIn}
              initial='hidden'        
              animate='visible'
          exit='exit'
      >
              <Button position={'absolute'} right={'3.5'} top={'3.5'} bg='#676767' _hover={{backgroundColor:'black', color:'white'}} color={'white'} onClick={handleClose}>Close</Button>
             <Contact />
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
