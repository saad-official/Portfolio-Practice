import React from 'react'
import { motion } from 'framer-motion'
const Backdrop = ({ children, onClick }) => {
    const styles = {
        position: 'fixed',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom:'0px',
        background: '#000000e1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99
    }
  return (
      <motion.div
          style={styles}
          onClick={onClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{opacity:0}}
      >
          {children}
    </motion.div>
  )
}

export default Backdrop