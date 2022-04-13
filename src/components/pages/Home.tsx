import { Button } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import { HeaderLayout } from "../tamplates/HeaderLayout";
import { MemoManagement } from "./MemoManagement";

export const Home = () => {
  return (
    <>
      <HeaderLayout />
      <Outlet />
    </>
  );
};