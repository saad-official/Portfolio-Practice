import { forwardRef } from 'react'
import { motion } from 'framer-motion';
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from './Logo';
import ThemeToggleButton from './Toggle-Theme-Button';
const LinkItem = ({ href, path, children }) => {
    const active = path === href;
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
    return (
        <Link fontWeight={'semibold'} href={href} as={NextLink} p={2} bg={active ? 'grassTeal' : undefined} color={active ? '#202023' : inactiveColor}>
            {children}
        </Link>
    )
}
const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
  ))
const Navbar = props => {
    const { path } = props;
  return (
    <motion.div
      initial={{
        y: -500,
        opacity:0
      }}
      animate={{
        y: 0,
        opacity:1
      }}
      transition={{
        duration:1.5
      }}

    >
      <Box position='fixed' as="nav" w="100%" bg={useColorModeValue('#ffffff40', '20202380')} css={{ backdropFilter: 'blur(10px)'}} zIndex={2} {...props}>
          <Container display="flex" p={2} maxW={Container.md} justifyContent="space-between" alignItems='center' flexWrap='wrap'>
              <Flex align='center' mr={5}>
                  <Heading as="h1" size="lg" letterSpacing={'tight'}>
                      <Logo />
                  </Heading>
              </Flex>
              <Stack
                  direction={{ base: "column", md: 'row' }}
                  display={{ base: "none", md: "flex" }}
                  width={{ base: 'full', md: "auto" }}
                  alignItems={"center"}
                  flexGrow={1}
                  mt={{base:4, md:0}}
              >
                  <LinkItem href='/projects' path={path}>
                  Projects
                  </LinkItem>

                  <LinkItem href='/skills' path={path}>
                  Skills
                  </LinkItem>

          <LinkItem href={'/experience'}>
            Experience
          </LinkItem>
          
       
              </Stack>

              <Box flex={1} align={"right"}>
                  <ThemeToggleButton />
                  <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                      <Menu isLazy id='navbar-menu'> 
                      <MenuButton as={IconButton} icon={<HamburgerIcon />} variant={"outline"}  aria-label="Options">
                          
                          </MenuButton>
                          <MenuList>
                <MenuItem as={MenuLink} href="/">
                  Home
                </MenuItem>
                <MenuItem as={MenuLink} href="/projects">
                  Projects
                </MenuItem>
                <MenuItem as={MenuLink} href="/skills">
                  Skills
                </MenuItem>
                <MenuItem as={MenuLink} href="/experience">
                  Experience
                </MenuItem>
              </MenuList>

                      </Menu>    
                  </Box>
              </Box>
    </Container>
      </Box>
      </motion.div>
  )
}

export default Navbar