import React from "react";
import CancelIcon from "../../assets/images/icons/cancel.png";
import {
  MenuContainer,
  MenuTitle,
  CloseContainer,
  StationLink,
  MenuRow,
  Icon,
} from "./styles";

export const InvoiceMenu = ({ close }) => {
  return (
    <>
      <CloseContainer>
        <Icon onClick={close} src={CancelIcon} />
      </CloseContainer>
      <MenuContainer>
        <MenuTitle>SELECCIONA TU ESTACIÓN</MenuTitle>
        <div>
          <MenuRow>
            <StationLink
              rel="noopener noreferrer"
              target="_blank"
              href="http://sba.noip.us:83/controlgasfe/"
            >
              AVIACIÓN
            </StationLink>
            <StationLink
              rel="noopener noreferrer"
              target="_blank"
              href="http://p02244extrarapido.ddns.net:83/ControlgasFE/"
            >
              ALCALDE
            </StationLink>
          </MenuRow>
          <MenuRow>
            <StationLink
              rel="noopener noreferrer"
              target="_blank"
              href="http://www.gasolineros.mx/facturacion/facturacion.aspx"
            >
              JOCOTEPEC
            </StationLink>
            <StationLink
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:servicioextrarapido@hotmail.com"
            >
              SAN JUAN
            </StationLink>
          </MenuRow>
          <MenuRow>
            <StationLink 
              rel="noopener noreferrer" 
              target="_blank" 
              href="http://gl-operacion.com.mx/"
            >
              TINGUINDIN
            </StationLink>
          
          
            <StationLink 
              rel="noopener noreferrer" 
              target="_blank" 
              href="mailto:servicioextrarapido@hotmail.com"
            >
              MESA COLORADA
            </StationLink>
          </MenuRow>
        </div>
      </MenuContainer>
    </>
  );
};
