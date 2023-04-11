import React from "react";
import { useHistory } from "react-router-dom";
import { black } from "../../assets/styles/colors";
import { BurgerIcon } from "../BurgerIcon";
import {
  MenuContainer,
  MenuList,
  MenuListItem,
  CloseContainer,
} from "./styles";
import Popup from "reactjs-popup";
import { InvoiceMenu } from "../InvoiceMenu";

const contentStyle = {
  background: "rgba(232,191,19,0)",
  width: "100vw",
  height: "100vh",
  border: "none",
};

export const BurgerMenu = ({ close }) => {
  let history = useHistory();

  const handleRedirect = (path) => {
    history.push(path);
    close();
  };

  return (
    <>
      <CloseContainer>
        <BurgerIcon onClick={close} open color={black} />
      </CloseContainer>
      <MenuContainer>
        <MenuList>
          <MenuListItem onClick={() => handleRedirect("/")}>
            Inicio
          </MenuListItem>
          <MenuListItem onClick={() => handleRedirect("/nosotros")}>
            Nosotros
          </MenuListItem>
          <MenuListItem onClick={() => handleRedirect("/estaciones")}>
            Estaciones
          </MenuListItem>

          <Popup
            modal
            overlayStyle={{ background: "rgba(232,191,19,1)" }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={(open) => (
              <MenuListItem open={open}>Faturacion en línea</MenuListItem>
            )}
          >
            {(closeMenu) => <InvoiceMenu close={closeMenu} />}
          </Popup>
        </MenuList>
      </MenuContainer>
    </>
  );
};
