import React from "react";
import { Outlet, Link } from "react-router-dom";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AiOutlineMenu } from "react-icons/ai";
import navStyles from "./navbar.module.css";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <>
      <div className={navStyles.mobileNav}>
        <chakra.header
          bg={bg}
          // backgroundColor="rgba(255,
          //   255, 255, 0.8)"
          // backdropFilter="saturate(180%) blur(5px)"
          w="full"
          px={{ base: 2, sm: 4 }}
          py={4}
          shadow="md"
        >
          <Flex
            // as="header"
            // position="fixed"

            // w="100%"
            // zIndex={2}
            // // h="7%"

            alignItems="center"
            justifyContent="space-between"
            mx="auto"
          >
            <Flex>
              <Link to="/">
                <chakra.a
                  href="/"
                  title="Choc Home Page"
                  display="flex"
                  alignItems="center"
                >
                  <img
                    className="logo"
                    hidden
                    src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg"
                    alt=""
                  />
                  <VisuallyHidden>Choc</VisuallyHidden>
                </chakra.a>
                <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                  Deepanshu Yadav
                </chakra.h1>
              </Link>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}
                color="brand.500"
                display={{ base: "none", md: "inline-flex" }}
              >
                <Button variant="ghost">Features</Button>
                <Button variant="ghost">Pricing</Button>
                <Button variant="ghost">Blog</Button>
                {/* <Linkk href="http://me.deepanshucs.tech" isExternal> */}
                <a target="blank" href="http://me.deepanshucs.tech">
                  <Button variant="ghost"> Portfolio </Button>
                </a>
                {/* </Linkk> */}
                <Link to="/signin">
                  <Button variant="ghost"> Sign in</Button>
                </Link>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </HStack>
              <Link to="/signup">
                <Button colorScheme="brand" size="sm">
                  Get Started
                </Button>
              </Link>
              <Box display={{ base: "inline-flex", md: "none" }}>
                <IconButton
                  display={{ base: "flex", md: "none" }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color={useColorModeValue("gray.800", "inherit")}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />

                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />

                  <Button w="full" variant="ghost">
                    Features
                  </Button>
                  <Button w="full" variant="ghost">
                    Pricing
                  </Button>
                  <Button w="full" variant="ghost">
                    Blog
                  </Button>
                  <Button w="full" variant="ghost">
                    Company
                  </Button>
                  <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                  </Button>
                  <Button w="full" variant="ghost">
                    <Link to="/signin">Sign in</Link>
                  </Button>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
      </div>
      <Outlet />
    </>
  );
}
