import { FC, MouseEventHandler, useCallback } from "react";
import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Connected: FC = () => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      if (event.defaultPrevented) {
        return;
      }
      console.log("Mint NFT!");
    },
    []
  );
  return (
    <VStack spacing={20}>
      <Container>
        <VStack spacing={8}>
          <Heading
            color="white"
            as="h1"
            size="2xl"
            noOfLines={1}
            textAlign="center"
          >
            Welcome
          </Heading>

          <Text color="bodyText" fontSize="xl" textAlign="center">
            Mint your NFTs.
          </Text>
        </VStack>
      </Container>

      <HStack spacing={10}>
        <Image src="avatar1.png" alt="" />
        <Image src="avatar2.png" alt="" />
        <Image src="avatar3.png" alt="" />
        <Image src="avatar4.png" alt="" />
        <Image src="avatar5.png" alt="" />
      </HStack>

      <Button bgColor="accent" color="white" maxW="380px" onClick={handleClick}>
        <HStack>
          <Text>Mint NFT</Text>
          <ArrowForwardIcon />
        </HStack>
      </Button>
    </VStack>
  );
};

export default Connected;
