import React from "react";
import {
  FooterContainer,
  GroupContainer,
  Text,
  TextAnchor,
  TextLink,
  TextLinkStations,
  Logo,
} from "./styles";
import LogoPetrodarka from "../../assets/images/logos/logo.petrodarka.png";

export const Footer = ({ color, colorText }) => {
  return (
    <FooterContainer color={color}>
      <GroupContainer>
        <TextAnchor
          color-text={colorText}
          href="tel:+3319411400"
          font-family="Conv_Adelle_Reg"
        >
            33 1941 1400
        </TextAnchor>
        <TextAnchor 
          color-text={colorText}
          href="mailto:info@petrodarka.com"
          font-family="Conv_Adelle_Reg"
        >
            info@petrodarka.com
        </TextAnchor>
        <Text color-text={colorText}>Guadalajara, Jalisco</Text>
      </GroupContainer>
      <GroupContainer>
        <TextAnchor
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/petrodarka/ "
          color-text={colorText}
        >
          Instagram
        </TextAnchor>
        <TextAnchor
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/gasolinerapetrodarka "
          color-text={colorText}
        >
          Facebook
        </TextAnchor>
      </GroupContainer>
      <GroupContainer>
        <TextLink to="/nosotros" color-text={colorText}>
          Nosotros
        </TextLink>
        <TextAnchor href="mailto:ventas@petrodarka.com " color-text={colorText}>
          Trabajemos juntos
        </TextAnchor>
      </GroupContainer>
      <Logo src={LogoPetrodarka} alt="Logo de pretrodarka" />
    </FooterContainer>
  );
};
