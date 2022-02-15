import { Box } from "@chakra-ui/react";
import React from "react";
import Topbar from "../components/Topbar";
import MainContextWrapper from "./MainContext";

export default function Main() {
  return (
    <MainContextWrapper>
      <Box h="100vh" padding="24px" d="flex" flexDirection="column">
        <Topbar />
      </Box>
    </MainContextWrapper>
  );
}
