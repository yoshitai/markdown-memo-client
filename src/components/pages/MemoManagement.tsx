import { Box, Wrap, WrapItem } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMemo } from "../../api";
import { MemoCard } from "../organisms/memo/MemoCard";

type Memo = {
  title: string;
  content: string;
  ins_ts: Date;
};

export const MemoManagement = () => {
  const [memoArray, setMemoArray] = useState<Array<Memo>>();

  useEffect(() => {
    const read = async () => {
      console.log("3333")
      const url = `${process.env.REACT_APP_API_ORIGIN}/memo/list`;
      const response = await fetch(url, {});
      const results: Array<Memo> = await response.json();
      setMemoArray(results);
    };

    read();
  }, []);

  return (
    <Wrap p={{ base: 4, md: 10 }} spacing="30px">
      {memoArray?.map((memo) => (
        <WrapItem key={memo.title}>
          <Link to={`/home/${memo.title}`}>
            <MemoCard title={memo.title} />
          </Link>
        </WrapItem>
      ))}
    </Wrap>
  );
};