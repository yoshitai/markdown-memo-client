import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <h1>このページは存在しません</h1>
      <Link to="/">Home</Link>
    </>
  );
};
