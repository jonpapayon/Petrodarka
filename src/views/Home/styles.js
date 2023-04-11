import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  black,
  white,
  yellowPrimary,
  yellowSecondary,
} from "../../assets/styles/colors";
import { deviceDF } from "../../assets/styles/breakPoints";

export const Carousel = styled.div`
  position: relative;
`;
export const VideoContainer = styled.div`
  width: 100%;
  height: auto;
`;
export const HeroContainer = styled.div`
  background-image: ${(props) => `url(${props.background})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${deviceDF.tablet} {
    height: 600px;
  }
  @media ${deviceDF.mobileL} {
    height: 300px;
  }
  @media ${deviceDF.mobileL} {
    height: 220px;
  }
`;
export const AboutSection = styled.section`
  width: 100%;
  height: 700px;
  padding: 60px;
  background-color: ${white};
  display: flex;
  align-items: center;
  @media ${deviceDF.tablet} {
    flex-direction: column-reverse;
    height: auto;
    padding: 50px;
  }
  @media ${deviceDF.mobileL} {
    padding: 24px;
  }
  @media ${deviceDF.mobileM} {
    padding: 16px;
  }
`;
export const ProductsSection = styled.section`
  width: 100%;
  padding: 60px;
  padding-bottom: 100px;
  background-color: ${white};
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${deviceDF.tablet} {
    height: auto;
    padding: 50px;
  }
  @media ${deviceDF.mobileL} {
    padding: 24px;
  }
  @media ${deviceDF.mobileM} {
    padding: 16px;
  }
`;
export const ProductsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media ${deviceDF.tablet} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const ProductsTitle = styled.h2`
  font-size: 42px;
  font-family: "Conv_Adelle_Bold";
  display: block;
  margin: 0 4rem 3rem;
  @media ${deviceDF.tablet} {
    font-size: 30px;
    margin: 0 2rem 1rem;
  }
  @media ${deviceDF.mobileL} {
    font-size: 24px;
    margin: 0 1.4rem 0.6rem;
  }
  @media ${deviceDF.mobileM} {
    font-size: 22px;
  }
`;
export const Product = styled.div`
  margin-bottom: 0.8rem;
`;
export const ProductTitle = styled.h3`
  font-family: "Conv_Adelle_Bold";
  background-color: ${yellowPrimary};
  color: ${black};
  align-items: center;
  justify-content: center;
  border: none;
  padding: 12px 15px 8px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin: 1.5rem;
  @media ${deviceDF.laptopL} {
    font-size: 20;
  }
`;
export const ProductText = styled.li`
  font-size: 16px;
  text-align: center;
  margin: 0.1rem;
`;
export const NavbarContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: transparent;
  padding: 0 6rem 0 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 2;
  top: 0;
  @media ${deviceDF.laptop} {
    padding: 0 1rem;
    justify-content: center;
  }
  @media ${deviceDF.tablet} {
    height: 80px;
  }
  @media ${deviceDF.mobileM} {
    height: 60px;
  }
`;
export const Logo = styled.img`
  width: 420px;
  height: auto;
  cursor: pointer;
  @media ${deviceDF.tablet} {
    width: 360px;
  }
  @media ${deviceDF.mobileM} {
    width: 280px;
  }
  @media ${deviceDF.mobileS} {
    width: 240px;
  }
`;
export const SliderTitle = styled.h1`
  color: ${white};
  font-size: 108px;
  font-family: "Conv_Adelle_Bold", Sans-Serif;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.8);

  @media ${deviceDF.laptop} {
    font-size: 72px;
  }
  @media ${deviceDF.tablet} {
    font-size: 56px;
  }
  @media ${deviceDF.mobileL} {
    font-size: 32px;
  }
`;
export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  z-index: 2;
  margin-bottom: 60px;
  @media ${deviceDF.laptop} {
    display: none;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media ${deviceDF.tablet} {
    margin-bottom: 1.6rem;
    width: 100%;
  }
`;
export const ImageGif = styled.img`
  width: 100%;
  height: auto;
  max-height: 620px;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media ${deviceDF.tablet} {
    margin-bottom: 1.6rem;
    width: 100%;
  }
`;
export const StrongText = styled.strong`
  font-family: "Conv_Adelle_Bold";
  font-size: 36px;
  @media ${deviceDF.mobileL} {
    font-size: 24px;
  }
  @media ${deviceDF.mobileM} {
    font-size: 20px;
  }
`;
export const AboutText = styled.p`
  font-family: "Conv_Adelle_Light_Ita";
  font-size: 36px;
  padding: 0 2rem;
  display: inline-block;
  margin: 3rem 0;
  @media ${deviceDF.mobileL} {
    font-size: 24px;
    margin: 2rem 0;
    padding: 0;
  }

  @media ${deviceDF.mobileM} {
    font-size: 20px;
    padding: 0.9rem;
  }
`;
export const AboutButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 2rem;
  @media ${deviceDF.mobileL} {
  }

  @media ${deviceDF.mobileM} {
  }
`;
export const LinkStyled = styled(Link)`
  color: ${yellowPrimary};
  font-family: "Conv_Adelle_Reg";
  text-decoration: underline;
  font-size: 26px;
  align-self: flex-end;
  @media ${deviceDF.mobileL} {
    font-size: 18px;
  }
  @media ${deviceDF.mobileM} {
    font-size: 14px;
  }
`;

export const WorkingSection = styled.section`
  position: relative;
  width: 100%;
  height: 650px;
  padding: 60px 80px;
  background-color: ${black};
  display: flex;
  align-items: center;
  @media ${deviceDF.laptop} {
    height: auto;
  }
  @media ${deviceDF.tablet} {
    flex-direction: column;
    height: auto;
    padding: 50px;
    padding-top: 65px;
  }
  @media ${deviceDF.mobileL} {
    padding: 30px;
    padding-top: 65px;
  }
  @media ${deviceDF.mobileM} {
    padding: 2.4rem 0.9rem;
    padding-top: 65px;
  }
`;

export const WorkingText = styled.p`
  font-family: "Conv_Adelle_Light_Ita";
  font-size: 36px;
  display: inline-block;
  margin-bottom: 1.5rem;
  color: ${(props) => (props.color ? props.color : white)};
  @media ${deviceDF.mobileL} {
    font-size: 24px;
  }
  @media ${deviceDF.mobileM} {
    font-size: 20px;
  }
`;
export const WorkingButtonContainer = styled.div`
  display: flex;
  @media ${deviceDF.mobileL} {
  }
  @media ${deviceDF.mobileM} {
  }
`;

export const AStyled = styled.a`
  color: ${yellowPrimary};
  font-family: "Conv_Adelle_Reg";
  text-decoration: underline;
  font-size: 26px;
  @media ${deviceDF.mobileL} {
    font-size: 18px;
  }
  @media ${deviceDF.mobileM} {
    font-size: 14px;
  }
`;
export const CirclesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${deviceDF.tablet} {
    flex-direction: column;
  }
`;
export const CircleData = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
  padding: 12px;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => (props.color ? props.color : white)};
  @media ${deviceDF.mobileL} {
    width: 200px;
    height: 200px;
    padding: 18px;
  }
`;
export const CountText = styled.span`
  font-family: "Conv_Adelle_Light_Ita";
  font-size: 28px;
  font-weight: bold;
  color: ${black};
  text-align: center;
  @media ${deviceDF.mobileL} {
    font-size: 18px;
  }
`;
export const Counter = styled.span`
  font-family: "Conv_Adelle_Light_Ita";
  font-size: 56px;
  font-weight: bolder;
  color: ${black};
  text-align: center;
  @media ${deviceDF.mobileL} {
    font-size: 48px;
  }
`;
export const InvoicesSection = styled.section`
  width: 100%;
  height: 600px;
  background-color: ${yellowSecondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${deviceDF.mobileL} {
    height: 360px;
  }
`;
export const InvoicesText = styled.h2`
  font-size: 60px;
  cursor: pointer;
  text-decoration: underline;
  @media ${deviceDF.tablet} {
    font-size: 48px;
  }
  @media ${deviceDF.mobileL} {
    font-size: 32px;
  }
  @media ${deviceDF.mobileM} {
    font-size: 26px;
  }
`;
export const TextLink = styled(Link)`
text-align: center;
font-size: 68px;
color: ${black};
border: 2px black solid;
border-radius: 15px;
font-family: "Conv_Adelle_Bold";
margin: 80px 0px 20px;
padding: 5px;
@media ${deviceDF.tablet} {
  font-size: 52px;
}
@media ${deviceDF.mobileL} {
  margin: 40px;
  font-size: 38px;
}
@media ${deviceDF.mobileM} {
  font-size: 32px;
}
`;
