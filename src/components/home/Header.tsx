import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="header"
      position="relative"
      mb=".5rem"
      w="100vw"
      h="90vh"
      objectFit="cover"
      objectPosition="center top"
    >
      <Flex
        position="absolute"
        top={0}
        w="100vw"
        h="90vh"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        zIndex={2}
        textAlign="center"
      >
        <Text fontSize="2rem">Photographer</Text>
        <Text as="h1" fontSize="5rem" mb="1rem">
          Mana Ohmoto
        </Text>
        <Text fontSize="1.25rem">
          <Link>Twitter</Link> / <Link>Instagram</Link> / <Link>YouTube</Link>
        </Text>
      </Flex>
      <Box
        w="100vw"
        h="90vh"
        position="absolute"
        zIndex={1}
        bgGradient="repeating-linear(to-b, transparent, transparent 2px, var(--bg) 2px, var(--bg) 4px)"
        backgroundSize="auto auto"
      ></Box>
      <video
        style={{
          width: "100vw",
          height: "90vh",
          objectFit: "cover",
          objectPosition: "center top",
          opacity: "var(--video-opacity)",
        }}
        src="/photo-movie.mp4"
        autoPlay
        loop
        muted
      ></video>
    </Box>
  );
};

export default Header;
