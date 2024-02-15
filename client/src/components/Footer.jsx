import React from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg={"#191919"}
      color={useColorModeValue("gray.600", "gray.300")}
      py={6}
      px={4}
    >
      <Flex align="center" justify="space-between">
        <Text>&copy; 2024 Gametropolis</Text>
        <Flex>
          <Link href="https://github.com/AswarAnas101" isExternal mx={2}>
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
              size="lg"
            />
          </Link>
          <Link href="https://twitter.com/yourusername" isExternal mx={2}>
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="ghost"
              size="lg"
            />
          </Link>
          <Link
            href="www.linkedin.com/in/aswar-anas-03aa8a2a4"
            isExternal
            mx={2}
          >
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
              size="lg"
              fill={"#EEE2DE"}
            />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
