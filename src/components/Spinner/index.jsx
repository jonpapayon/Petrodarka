import React from "react";
import { GlobalStyle } from "../../assets/styles/GlobalStyles";
import { Container, SpinnerContainer } from "./styles";

export const Spinner = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SpinnerContainer />
      </Container>
    </>
  );
};
