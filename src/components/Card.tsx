import { Center, Input, Box, Text } from "@chakra-ui/react";
import { login } from "../services/login";
import { ButtonComp } from "./Button";
import { useState } from "react";

export const Card = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box
      backgroundColor="#FFFFFF"
      borderRadius="25px"
      padding="16px 24px"
      width="80dvh"
      height="45dvh"
      display={"Flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      marginBottom={"20dvh"}
    >
      <Center>
        <Text
          fontSize={"24px"}
          fontWeight={"semibold"}
          fontStyle={"oblique"}
          marginBottom={"20px"}
        >
          Faça o login
        </Text>
      </Center>
      <form>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          padding={"10px 0px 10px 0px"}
        >
          <Input
            placeholder="Name"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Center>
          <ButtonComp onClick={() => login(email)}>Button</ButtonComp>
        </Center>
      </form>
    </Box>
  );
};
