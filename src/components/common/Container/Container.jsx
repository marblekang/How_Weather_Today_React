import { ContainerWrap } from "./style";
import { AppBar } from "../AppBar/AppBar";
import React from "react";

export const Container = ({ children }) => {
  return (
    <ContainerWrap>
      <AppBar />
      {children}
    </ContainerWrap>
  );
};
