import React, { useState } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCountUp } from "react-countup";
import { useHistory } from "react-router-dom";
import {
  HeroContainer,
  Carousel,
  NavbarContainer,
  Logo,
  ButtonsWrapper,
  AboutSection,
  AboutText,
  TextContainer,
  StrongText,
  WorkingSection,
  WorkingText,
  CircleData,
  CirclesContainer,
  CountText,
  Counter,
  InvoicesSection,
  InvoicesText,
  ImageContainer,
  ImageGif,
  AboutButtonsContainer,
  WorkingButtonContainer,
  Product,
  ProductsSection,
  ProductsContainer,
  ProductsTitle,
  ProductText,
  ProductTitle,
  TextLink,
} from "./styles"; // Import Swiper styles
import LogoPetrodarka from "../../assets/images/logos/logo.petrodarka.png";
import "swiper/swiper-bundle.css";
import { ButtonsContact } from "../../components/ButtonsContact";
import AboutGif from "../../assets/images/people.png";
import { yellowPrimary, yellowSecondary } from "../../assets/styles/colors";
import { Footer } from "../../components/Footer";
import honestyBg from "../../assets/images/HONESTIDAD.jpg";
import compromiseBg from "../../assets/images/COMPROMISO.jpg";
import dedicationBg from "../../assets/images/DEDICACION.jpg";
import Popup from "reactjs-popup";
import { InvoiceMenu } from "../../components/InvoiceMenu";
import { Button } from "../../components/Button";
import { LinkButton } from "../../components/LinkButton";
import { Badge } from "../../components/Badge";
import { VideoPopUp } from "../../components/VideoPopUp";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, A11y]);

const contentStyle = {
  background: "rgba(232,191,19,0)",
  width: "100vw",
  height: "100vh",
  border: "none",
};

export const Home = () => {
  const history = useHistory();

  const { countUp, start } = useCountUp({
    start: 0,
    end: 49,
    delay: 1000,
    duration: 5,
  });
  const { countUp: countNumber, start: startNumber } = useCountUp({
    start: 0,
    end: 5,
    delay: 1000,
    duration: 5,
  });
  const [isEnded, setIsEnded] = useState(false);

  const handleStart = () => {
    if (!isEnded) {
      start();
      startNumber();
      setIsEnded(true);
    }
  };

  function handleRedirect(dir = "/") {
    history.push(dir);
  }

  return (
    <>
      <Carousel>
        <NavbarContainer>
          <Logo src={LogoPetrodarka} alt="Logo de pretrodarka" />
        </NavbarContainer>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoHeight
          loop
          pagination={{ clickable: true }}
          autoplay={{
            delay: 24000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <HeroContainer background={honestyBg}></HeroContainer>
          </SwiperSlide>
          <SwiperSlide>
            <HeroContainer background={compromiseBg}></HeroContainer>
          </SwiperSlide>
          <SwiperSlide>
            <HeroContainer background={dedicationBg}></HeroContainer>
          </SwiperSlide>
        </Swiper>
        <ButtonsWrapper>
          <ButtonsContact />
        </ButtonsWrapper>
      </Carousel>
      <AboutSection>
        <ImageContainer>
          <ImageGif height="500" src={AboutGif} alt="gif" />
        </ImageContainer>
        <TextContainer>
          <AboutText>
            <StrongText>PetroDarka</StrongText> Somos una empresa mexicana con
            más de 20 años de experiencia en el mercado dedicado a la
            distribución y venta de combustible diesel y gasolina.
          </AboutText>
          <AboutButtonsContainer>
            <Button onClick={() => handleRedirect("/nosotros")}>
              MÁS SOBRE NOSOTROS
            </Button>
            <Popup
              modal
              overlayStyle={{ background: "rgba(34,34,34,.75)" }}
              contentStyle={contentStyle}
              closeOnDocumentClick={false}
              trigger={(open) => (
                <Button open={open} color="primary">
                  VER VIDEO
                </Button>
              )}
            >
              {(close) => <VideoPopUp close={close} />}
            </Popup>
          </AboutButtonsContainer>
        </TextContainer>
      </AboutSection>
      <ProductsSection>
        <ProductsTitle>Productos</ProductsTitle>
        <ProductsContainer>
          <Product>
            <ProductTitle>GASOLINA REGULAR (MAGNA PEMEX)</ProductTitle>
            <ul>
              <ProductText>Refinado de alta calidad</ProductText>
              <ProductText>Nivel bajo de azufre </ProductText>
            </ul>
          </Product>
          <Product>
            <ProductTitle>GASOLINA PREMIUM</ProductTitle>
            <ul>
              <ProductText>
                Alto octanaje que influye en la eficiencia y cuidad del motor de
                tu automóvil
              </ProductText>
              <ProductText>Reducción de contaminantes </ProductText>
              <ProductText>Nivel bajo de azufre </ProductText>
            </ul>
          </Product>
          <Product>
            <ProductTitle>DIESEL USLD</ProductTitle>
            <ul>
              <ProductText>Nivel bajo de azufre </ProductText>
              <ProductText>De combustión limpia </ProductText>
              <ProductText>
                Mejora el desempeño de los dispositivos de control de
                contaminantes{" "}
              </ProductText>
            </ul>
          </Product>
          <Product>
            <ProductTitle>ADITIVOS</ProductTitle>
            <ul>
              <ProductText>
                Todos nuestros combustibles son aditivos
              </ProductText>
              <ProductText>Brindan un mejor rendimiento</ProductText>
              <ProductText>Prolongan la vida de tu motor</ProductText>
              <ProductText>Mantiene limpio el sistema de inyección</ProductText>
            </ul>
          </Product>
        </ProductsContainer>
      </ProductsSection>
      <WorkingSection onMouseEnter={handleStart}>
        <Badge color="primary">Nuestros productos son 100% confiables</Badge>
        <TextContainer>
          <WorkingText color={yellowPrimary}>Trabajemos Juntos</WorkingText>
          <WorkingText>
            Estamos enfocados en lograr la competitividad de nuestros clientes
            ofreciendo los mejores precios tanto en franquicias o distribución
            al mayoreo con una garantía de abasto, logística eficiente y con una
            trazabilidad 100% confiable.
          </WorkingText>
          <WorkingButtonContainer>
            <LinkButton color="primary" href="mailto:ventas@petrodarka.com">
              UNETE A NUESTRO ABANDERAMIENTO
            </LinkButton>
          </WorkingButtonContainer>
        </TextContainer>
        <CirclesContainer>
          <CircleData color={yellowPrimary}>
            <Counter>{countNumber}</Counter>
            <CountText>Estaciones Nacionales</CountText>
          </CircleData>
          <CircleData color={yellowSecondary}>
            <Counter>{countUp}</Counter>

            <CountText>litros de mayor rendimiento *Tanque lleno</CountText>
          </CircleData>
        </CirclesContainer>
      </WorkingSection>
      <InvoicesSection>
        <Popup
          modal
          overlayStyle={{ background: "rgba(232,191,19,1)" }}
          contentStyle={contentStyle}
          closeOnDocumentClick={false}
          trigger={(open) => (
            <InvoicesText open={open}>FACTURA TU SERVICIO</InvoicesText>
          )}
        >
          {(close) => <InvoiceMenu close={close} />}
        </Popup>
        <TextLink to="/estaciones">
          Estaciones
        </TextLink>
      </InvoicesSection>
      <Footer color={yellowSecondary} />
    </>
  );
};
