import { useCallback, useState } from "react";

export const useAllMemos = () => {
  const [loading, setLoading] = useState();
  const [users, setUsers] = useState();

  // APIサーバーにメモ情報リクエスト
  const getMemos = useCallback(() => {}, []);

  return getMemos;
}