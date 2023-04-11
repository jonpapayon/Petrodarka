import styled, { css } from "styled-components";
import {
  yellowPrimary,
  yellowSecondary,
  white,
  black,
} from "../../assets/styles/colors";
import { deviceDF } from "../../assets/styles/breakPoints";

const left = css`
  margin-right: -10px;
  z-index: 1;
  @media ${deviceDF.mobileL} {
    margin-right: 0;
    margin-bottom: -6px;
  }
`;
const right = css`
  margin-left: -10px;
  z-index: 1;
  @media ${deviceDF.mobileL} {
    margin-left: 0;
    margin-top: -6px;
  }
`;

export const InfoSection = styled.section`
  padding: 4rem 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${deviceDF.tablet} {
    padding: 2rem;
  }
  @media ${deviceDF.mobileL} {
    padding: 1rem;
  }
  @media ${deviceDF.mobileM} {
    padding: 0.8rem;
  }
`;
export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: flex-end;
  margin-bottom: 3.5rem;
  @media ${deviceDF.tablet} {
    /* justify-content: center; */
    margin-bottom: 2.6rem;
  }
  @media ${deviceDF.mobileL} {
    margin-bottom: 1.8rem;
  }
`;
export const TitleTextContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-250px, -50%);
  @media ${deviceDF.tablet} {
    /* top: 0; */
    transform: translate(-100px, -50%);
    /* transform: translate(0, 0); */
  }
  @media ${deviceDF.mobileM} {
    /* top: 0; */
    transform: translate(-10px, -50%);
    /* transform: translate(0, 0); */
  }
`;
export const TitleTextBrand = styled.h2`
  font-family: "Conv_Adelle_Bold";
  font-size: 48px;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.8);
  @media ${deviceDF.laptop} {
    font-size: 28px;
  }
  @media ${deviceDF.mobileL} {
    font-size: 20px;
  }
`;
export const TitleImage = styled.img`
  width: 550px;
  height: auto;
  border-radius: 250px 250px 4rem 4rem;

  @media ${deviceDF.laptop} {
    width: 400px;
    border-radius: 200px 200px 3rem 3rem;
    margin-left: 0;
  }
  @media ${deviceDF.mobileL} {
    width: 280px;
    border-radius: 140px 140px 2.2rem 2.2rem;
  }
`;
export const TitleText = styled.h2`
  font-family: "Conv_Adelle_Bold";
  font-size: 62px;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.8);
  color: ${yellowPrimary};
  @media ${deviceDF.laptop} {
    font-size: 42px;
  }
  @media ${deviceDF.mobileL} {
    font-size: 28px;
  }
`;
export const TextContainer = styled.div`
  padding: 0 2.6rem;
  margin-bottom: 3.5rem;
  @media ${deviceDF.tablet} {
    padding: 0;
  }
`;
export const Text = styled.p`
  font-family: "Conv_Adelle_Light_Ita";
  font-size: 32px;
  text-align: justify;
  word-wrap: break-word;
  margin-bottom: 2.4rem;
  @media ${deviceDF.tablet} {
    font-size: 28px;
    margin-bottom: 2rem;
  }
  @media ${deviceDF.mobileL} {
    font-size: 20px;
    margin-bottom: 1.2rem;
  }
`;
export const CirclesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  @media ${deviceDF.mobileL} {
    flex-direction: column;
  }
`;
export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 4px solid ${yellowSecondary};
  background-color: ${(props) =>
    props.hasBackground ? yellowSecondary : white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  ${(props) => props.isLeft && left}
  ${(props) => props.isRight && right}
  @media ${deviceDF.tablet} {
    width: 180px;
    height: 180px;
  }
  @media ${deviceDF.mobileL} {
    width: 150px;
    height: 150px;
  }
`;
export const CircleTitle = styled.h3`
  font-size: 28px;
  @media ${deviceDF.tablet} {
    font-size: 24px;
  }
  @media ${deviceDF.mobileL} {
    font-size: 18px;
  }
`;
export const TextCircles = styled.span`
  font-family: "Conv_Adelle_Light_Ita";
  font-size: 18px;
  margin-bottom: 6rem;
  @media ${deviceDF.tablet} {
    font-size: 16px;
    margin-bottom: 3rem;
  }
  @media ${deviceDF.mobileL} {
    font-size: 14px;
    margin-bottom: 2rem;
  }
`;
export const TextVideo = styled.h2`
  font-family: "Conv_Adelle_Light_Ita";
  font-size: 32px;
  margin-bottom: 3.5rem;
`;
export const TextVideoStrong = styled.strong`
  font-family: "Conv_Adelle_Bold";
  font-size: 32px;
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
export const TextWorkingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media ${deviceDF.tablet} {
    margin-bottom: 1.6rem;
    width: 100%;
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
