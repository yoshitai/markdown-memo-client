import { AddIcon } from "@chakra-ui/icons";
import { Flex, Heading, IconButton } from "@chakra-ui/react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate("/home/list"), []);
  const onClickNew = useCallback(() => navigate("/home/new"), []);

  return (
    <Flex
      as="nav"
      bg="teal.500"
      color="gray.50"
      align="center"
      justify="space-between"
      p={3}
    >
      <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}
        onClick={onClickHome}>
        <Heading as={"h1"} fontSize={{ base: "md", md: "lg" }}>
          マークダウンメモ
        </Heading>
      </Flex>
      <IconButton
        as="a"
        aria-label="create"
        shadow="lg"
        bg="white"
        color="gray.400"
        rounded="full"
        icon={<AddIcon />}
        onClick={onClickNew}
      />
    </Flex>
  );
};
