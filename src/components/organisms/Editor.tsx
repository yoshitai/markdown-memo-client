import { useCallback, useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import Viewer from "./Viewer";
import { background, Box, color, Flex } from "@chakra-ui/react";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { InputTitle } from "./InputTitle";

type Props = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  markdownValue: string;
  setMarkdownValue: React.Dispatch<React.SetStateAction<string>>;
};

export const Editor = (props: Props) => {

  const onChange = useCallback((value) => {
    props.setMarkdownValue(value);
  }, []);

  return (
    <Box>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <InputTitle title={props.title} setTitle={props.setTitle} />
      </Flex>
      <Flex justify={"center"}>
        <Box m="6" w="500px">
          <EditIcon ml={3} mb={3}></EditIcon>
          <SimpleMDE value={props.markdownValue} onChange={onChange} />
        </Box>
        <Box m="6">
          <ViewIcon ml={3} mb={3}></ViewIcon>
          <Viewer value={props.markdownValue}></Viewer>
        </Box>
      </Flex>
    </Box>
  );
};

export default Editor;