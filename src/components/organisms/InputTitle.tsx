import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { SetStateAction, useState } from "react";
import { AsyncKeyword } from "typescript";

type Props = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};

export const InputTitle = (props: Props) => {

  const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => props.setTitle(e.target.value);

  return (
    <>
      <FormControl isRequired={true} w="70%" verticalAlign={"middle"}>
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input
          id="title"
          type="text"
          borderColor={"gray.400"}
          border={"2px"}
          bgColor={"white"}
          value={props.title}
          onChange={handleInputChange}
        />
        <FormHelperText>Title is Required.</FormHelperText>
      </FormControl>
    </>
  );
};
