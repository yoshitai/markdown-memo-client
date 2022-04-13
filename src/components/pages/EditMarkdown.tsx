import { Button, Flex, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMemo, updateMemo } from "../../api";
import Editor from "../organisms/Editor";


export const EditMarkdown = () => {
  const { memo_title } = useParams();
  const [title, setTitle] = useState("");
  const [markdownValue, setMarkdownValue] = useState("");

  useEffect(() => {
    const read = async () => {
      const url = `${process.env.REACT_APP_API_ORIGIN}/memo/get/${memo_title}`;
      const response = await fetch(url, {});
      const memo = await response.json();
      setTitle(memo.title);
      setMarkdownValue(memo.content);
    };

    read();
  }, []);

  const onClickUpdate = () => {
    const obj = {
      title: title,
      content: markdownValue
    };
    updateMemo(title, obj);
  };

  return (
    <>
      <Flex>
        <Spacer />
        <Button colorScheme={"teal"} mr={20} mt={5} onClick={onClickUpdate}>更新</Button>
      </Flex>
      <Editor title={title} setTitle={setTitle} markdownValue={markdownValue} setMarkdownValue={setMarkdownValue} />
    </>
  );
};