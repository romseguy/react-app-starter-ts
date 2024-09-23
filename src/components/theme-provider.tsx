import { ChakraProvider, cookieStorageManager } from "@chakra-ui/react";
//import { GlobalStyles } from "features/layout";
import theme from "utils/theme";

export function ThemeProvider({ cookies, children, isMobile, ...props }: any) {
  return (
    <ChakraProvider
      resetCSS
      theme={theme}
      colorModeManager={cookieStorageManager(cookies)}
      {...props}
    >
      {/* <GlobalStyles isMobile={isMobile} /> */}
      {children}
    </ChakraProvider>
  );
}
