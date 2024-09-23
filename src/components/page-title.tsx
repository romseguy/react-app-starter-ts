import { Heading } from "@chakra-ui/react";

export const PageTitle = ({ children }: any) => {
  return (
    <Heading size="lg" mb={5}>
      {children}
    </Heading>
  );
};

export const PageSubTitle = ({ children }: any) => {
  return (
    <Heading size="md" my={5}>
      {children}
    </Heading>
  );
};
