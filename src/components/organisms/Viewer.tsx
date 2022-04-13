import { Box, ChakraProvider } from "@chakra-ui/react"
import DOMPurify from "dompurify"
import { marked } from "marked"
import { useEffect, useState } from "react"
import { convertMarkdownToHTML } from "../../Sanitizer"

type Props = {
  value: string;
}

const Viewer = (props: Props) => {
  return (
    <Box bg="white" w="500px" h="500px">
      <Box
        p={5}
        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked.parse(props.value)),}}
      >
      </Box>
    </Box>
  )
}

export default Viewer