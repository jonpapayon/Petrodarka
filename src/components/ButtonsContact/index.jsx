import React from "react";
import { Icon, ButtonsContainer, ButtonWrapper } from "./styles";
import { Button } from "../Button";
import ArrowRight from "../../assets/images/icons/arrow-point-to-right.png";
import { useHistory } from "react-router-dom";
import Popup from "reactjs-popup";
import { InvoiceMenu } from "../InvoiceMenu";

const contentStyle = {
  background: "rgba(232,191,19,0)",
  width: "100vw",
  height: "100vh",
  border: "none",
};

export const ButtonsContact = ({ isNav = false }) => {
  const history = useHistory();

  function handleRedirect(dir = "/") {
    history.push(dir);
  }

  return (
    <>
      <ButtonsContainer isNav={isNav}>
        <Popup
          modal
          overlayStyle={{ background: "rgba(232,191,19,1)" }}
          contentStyle={contentStyle}
          closeOnDocumentClick={false}
          trigger={(open) => (
            <ButtonWrapper open={open} color="primary">
              FACTURACÍON EN LÍNEA
              <Icon src={ArrowRight} alt="Icono de flecha" />
            </ButtonWrapper>
          )}
        >
          {(close) => <InvoiceMenu close={close} />}
        </Popup>

        {history.location.pathname === "/" && (
          <Button onClick={() => handleRedirect("/estaciones")}>
            ESTACIONES
          </Button>
        )}
        {history.location.pathname === "/nosotros" && (
          <Button onClick={() => handleRedirect("/estaciones")}>
            ESTACIONES
          </Button>
        )}
        {history.location.pathname === "/estaciones" && (
          <Button onClick={() => handleRedirect("/nosotros")}>NOSOTROS</Button>
        )}
      </ButtonsContainer>
    </>
  );
};
