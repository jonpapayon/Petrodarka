import React from "react";
import {
  InfoSection,
  TitleContainer,
  TitleTextBrand,
  TitleText,
  TitleTextContainer,
  TitleImage,
  Text,
  TextContainer,
  CirclesContainer,
  Circle,
  CircleTitle,
  TextCircles,
  TextVideoStrong,
  TextVideo,
  WorkingSection,
  WorkingText,
  TextWorkingContainer,
} from "./styles";
import StationImage from "../../assets/images/nosotros.jpg";
import { black, white, yellowPrimary } from "../../assets/styles/colors";
import { Footer } from "../../components/Footer";
import { LinkButton } from "../../components/LinkButton";
import { WorkingButtonContainer } from "../Home/styles";
import { Badge } from "../../components/Badge";

export const About = () => {
  return (
    <>
      <InfoSection>
        <TitleContainer>
          <TitleTextContainer>
            <TitleTextBrand>PetroDarka</TitleTextBrand>
            <TitleText>México es primero</TitleText>
          </TitleTextContainer>
          <TitleImage src={StationImage} alt="Imagen de petrodarka" />
        </TitleContainer>
        <TextContainer>
          <Text>
            Somos una empresa mexicana con más de 10 años de experiencia en el
            mercado dedicado a la distribución y venta de combustible diesel y
            gasolina.
          </Text>
          <Text>
            Nos caracterizamos por ofrecer productos de la más alta calidad que
            cumplen con los estándares internacionales establecidos.
          </Text>
          <Text>
            Administramos de manera eficaz franquicias de gasolineras siempre
            con un enfoque hacia el cliente, ya que nos caracterizamos por
            ofrecer el mejor servicio y satisfacción total a quienes nos
            visitan.
          </Text>
          <Text>
            Todo esto no puede ocurrir sin una base de principios sólidos que
            nos ayuden a ser una empresa que siempre busca estar comprometida
            con sus colaboradores.
          </Text>
        </TextContainer>
        <CirclesContainer>
          <Circle hasBackground={true} isLeft={true}>
            <CircleTitle>Honestidad</CircleTitle>
          </Circle>
          <Circle>
            <CircleTitle>Compromiso</CircleTitle>
          </Circle>
          <Circle hasBackground={true} isRight={true}>
            <CircleTitle>Dedicación</CircleTitle>
          </Circle>
        </CirclesContainer>
        <TextCircles>
          (Son los valores que nos caracterizan y dan rumbo).
        </TextCircles>
        <TextVideo>
          Nuestra pasión <TextVideoStrong>habla sobre nosotros</TextVideoStrong>
        </TextVideo>
      </InfoSection>
      <WorkingSection>
        <TextWorkingContainer>
          <Badge color="primary">Nuestros productos son 100% confiables</Badge>
          <WorkingText color={yellowPrimary}>Trabajemos Juntos</WorkingText>
          <WorkingText>
            Estamos enfocados en lograr la competitividad de nuestros clientes
            ofreciendo los mejores precios tanto en franquicias o distribución
            al mayoreo con una garantía de abasto, logística eficiente y con una
            trazabilidad 100% confiable.
          </WorkingText>
          <WorkingButtonContainer>
            <LinkButton color="primary" href="mailto:ventas@petrodarka.com">
              NOS ENCANTARÍA HABLAR CONTIGO
            </LinkButton>
          </WorkingButtonContainer>
        </TextWorkingContainer>
      </WorkingSection>
      <Footer color={black} colorText={white} />
    </>
  );
};
