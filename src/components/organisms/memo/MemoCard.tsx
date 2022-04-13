import { Box, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  title: string;
};

export const MemoCard: VFC<Props> = memo((props) => {
  const { title } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8}}
    >
      <Stack>
        <Text fontSize="lg">{title}</Text>
      </Stack>
    </Box>
  );
});
