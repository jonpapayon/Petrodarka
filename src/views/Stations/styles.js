import styled from "styled-components";
import {
  black,
  yellowPrimary,
  yellowSecondary,
} from "../../assets/styles/colors";
import { deviceDF } from "../../assets/styles/breakPoints";

export const CarrouselSection = styled.section`
  padding: 2rem 0 5rem;
`;
export const SectionTitle = styled.h2`
  font-size: 42px;
  font-family: "Conv_Adelle_Light_Ita";
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
export const StationItem = styled.div`
  margin: 10px;
  width: 350px;
`;
export const StationImg = styled.img`
  width: 310px;
  height: 425px;
  margin-bottom: 1rem;
  @media ${deviceDF.tablet} {
    width: 250px;
    height: 360px;
  }
  @media ${deviceDF.mobileL} {
    width: 180px;
    height: 280px;
  }
`;
export const StrongText = styled.strong`
  font-family: "Conv_Adelle_Bold";
  font-size: 38px;
  @media ${deviceDF.tablet} {
    font-size: 26px;
  }
  @media ${deviceDF.mobileL} {
    font-size: 22px;
  }
  @media ${deviceDF.mobileM} {
    font-size: 18px;
  }
`;
export const StationTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StationText = styled.span`
  font-size: 22px;
  text-align: start;
  @media ${deviceDF.tablet} {
    font-size: 18px;
  }
  @media ${deviceDF.mobileL} {
    font-size: 16px;
  }
`;
export const StationLink = styled.a`
  margin-top: 1.5rem;
  font-size: 22px;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: ${yellowPrimary};
  text-underline-offset: 3px;
  text-align: start;
  color: ${black};
  @media ${deviceDF.tablet} {
    font-size: 18px;
  }
  @media ${deviceDF.mobileL} {
    font-size: 16px;
  }
`;
export const InvoicesSection = styled.section`
  width: 100%;
  height: 600px;
  background-color: ${yellowSecondary};
  display: flex;
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
