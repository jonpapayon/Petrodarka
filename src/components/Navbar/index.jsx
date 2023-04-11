import React from "react";
import { NavbarContainer, Logo } from "./styles";
import LogoPetrodarka from "../../assets/images/logos/logo.petrodarka.png";

import { ButtonsContact } from "../ButtonsContact";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
  const history = useHistory();
  function handleRedirect(dir = "/") {
    history.push(dir);
  }
  return (
    <>
      <NavbarContainer>
        <Logo
          onClick={() => handleRedirect("/")}
          src={LogoPetrodarka}
          alt="Logo de pretrodarka"
        />
        <ButtonsContact isNav={true} />
      </NavbarContainer>
    </>
  );
};
