import React, { useState, useLayoutEffect } from "react";
import {
  CarrouselSection,
  InvoicesSection,
  InvoicesText,
  SectionTitle,
  StationTextContainer,
  StrongText,
  StationText,
  StationItem,
  StationLink,
  StationImg,
} from "./styles"; // Import Swiper styles
import { Footer } from "../../components/Footer";
import { yellowSecondary } from "../../assets/styles/colors";
import SwiperCore, { Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import StationImage from "../../assets/images/estacion.jpg";
import Popup from "reactjs-popup";
import { InvoiceMenu } from "../../components/InvoiceMenu";

import "../../assets/styles/swiper.css";

// install Swiper modules
SwiperCore.use([Autoplay, A11y]);

const contentStyle = {
  background: "rgba(232,191,19,0)",
  width: "100vw",
  height: "100vh",
  border: "none",
};

export const Stations = () => {
  const [items, setItems] = useState(5);

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth > 1440) {
        setItems(5);
      }
      if (window.innerWidth <= 1440) {
        setItems(4);
      }
      if (window.innerWidth <= 1080) {
        setItems(3);
      }
      if (window.innerWidth <= 768) {
        setItems(2);
      }
      if (window.innerWidth <= 580) {
        setItems(2);
      }
      if (window.innerWidth <= 375) {
        setItems(1);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      <CarrouselSection>
        <SectionTitle>
          Estaciones de <StrongText>Petro Darka</StrongText>
        </SectionTitle>
        <Swiper
          autoHeight
          spaceBetween={30}
          loop
          slidesPerView={items}
          freeMode={true}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          centeredSlides={true}
          speed={6500}
          freeModeMomentum={false}
        >
          <SwiperSlide>
            <StationItem>
              <StationImg src={StationImage} alt="" />
              <StationTextContainer>
                <StationText>Av. Base aérea militar # 330</StationText>
                <StationText>Zapopan, Jalisco</StationText>
                <StationText>33 3636 4996 Ext. 101</StationText>
                <StationLink
                  href="https://goo.gl/maps/MQL2sych3FyJK6qc9"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Ver estación
                </StationLink>
              </StationTextContainer>
            </StationItem>
          </SwiperSlide>
          <SwiperSlide>
            <StationItem>
              <StationImg src={StationImage} alt="" />
              <StationTextContainer>
                <StationText>Av. Alcalde #2157</StationText>
                <StationText>Guadalajara, Jalisco</StationText>
                <StationText>33 3280 0158</StationText>
                <StationLink
                  href="https://goo.gl/maps/CGBq2qobCcGxmDDe9"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Ver estación
                </StationLink>
              </StationTextContainer>
            </StationItem>
          </SwiperSlide>
          <SwiperSlide>
            <StationItem>
              <StationImg src={StationImage} alt="" />
              <StationTextContainer>
                <StationText>
                  Carretera Guadalajara-Jocotepec Km. 60.5
                </StationText>
                <StationText>Ajijic Chapala, Jalisco</StationText>
                <StationText>37 6106 2016</StationText>
                <StationLink href="#">Ver estación</StationLink>
              </StationTextContainer>
            </StationItem>
          </SwiperSlide>
          <SwiperSlide>
            <StationItem>
              <StationImg src={StationImage} alt="" />
              <StationTextContainer>
                <StationText>
                  Carretera Encarnación San Juan, Km. 515
                </StationText>
                <StationText>San Sebastián Del Álamo, Jalisco</StationText>
                <StationText>475 74 29 59</StationText>
                <StationLink
                  href="https://goo.gl/maps/3rYsDBwLLKrHw43W9"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Ver estación
                </StationLink>
              </StationTextContainer>
            </StationItem>
          </SwiperSlide>
          <SwiperSlide>
            <StationItem>
              <StationImg src={StationImage} alt="" />
              <StationTextContainer>
                <StationText>Blv Francisco J Mujica S/N</StationText>
                <StationText>35 4688 2210</StationText>
                <StationLink
                  href="https://goo.gl/maps/mjWXxBZUNCtgy272A"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Ver estación
                </StationLink>
              </StationTextContainer>
            </StationItem>
          </SwiperSlide>
          <SwiperSlide>
            <StationItem>
              <StationImg src={StationImage} alt="" />
              <StationTextContainer>
                <StationText>Calle Chicharo 5454</StationText>
                <StationText>Zapopan, Jalisco</StationText>
                <StationText>33 3625 1021</StationText>
                <StationLink
                  href="https://www.bing.com/maps?osid=150d12af-288c-46c2-86cf-9a50fd97d254&cp=20.763022~-103.340128&lvl=20&imgid=66b2bbea-df7f-4be3-941a-95a5c0b08cec&v=2&sV=2&form=S00027"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Ver estación
                </StationLink>
              </StationTextContainer>
            </StationItem>
          </SwiperSlide>
        </Swiper>
      </CarrouselSection>

      <InvoicesSection>
        <Popup
          modal
          overlayStyle={{ background: "rgba(232,191,19,1)" }}
          contentStyle={contentStyle}
          closeOnDocumentClick={false}
          trigger={(open) => (
            <InvoicesText open={open}>FACTURA TU SERVICIO </InvoicesText>
          )}
        >
          {(close) => <InvoiceMenu close={close} />}
        </Popup>
      </InvoicesSection>
      <Footer color={yellowSecondary} />
    </>
  );
};
