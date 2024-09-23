import { Box, Heading, useColorMode, useTheme } from "@chakra-ui/react";
import { Link } from "./link";

export const Header = (props: any) => {
  const theme = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      py={5}
      textAlign="center"
      bg={theme[colorMode].bg}
      style={{ filter: "brightness(120%)" }}
      {...props}
    >
      <Heading as="h1">
        <Link href="/">Home</Link>
      </Heading>
    </Box>
  );
};
