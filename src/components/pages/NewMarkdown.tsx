import { Box, Button, Container, Flex, Spacer, Text } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMemo } from "../../api";
import Editor from "../organisms/Editor";

export const NewMarkdown = () => {

  const [title, setTitle] = useState("");
  const [markdownValue, setMarkdownValue] = useState("");
  const navigate = useNavigate();
  const onClickCreate = () => {
    const obj = {
      title: title,
      content: markdownValue
    };
    createMemo(obj);
    navigate(`/home/${title}`);
  };

  return (
    <>
      <Flex>
        <Spacer />
        <Button colorScheme={"teal"} mr={20} mt={5} onClick={onClickCreate} >保存</Button>
      </Flex>
      <Editor title={title} setTitle={setTitle} markdownValue={markdownValue} setMarkdownValue={setMarkdownValue} />
    </>
  );
};