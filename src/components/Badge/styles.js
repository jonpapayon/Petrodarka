import styled from "styled-components";
import { deviceDF } from "../../assets/styles/breakPoints";
import { black, yellowPrimary } from "../../assets/styles/colors";

export const BadgeStyled = styled.div`
  font-family: "Conv_Adelle_Bold", Sans-Serif;
  background-color: ${(props) =>
    props.color !== "primary" ? black : yellowPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  text-align: center;
  padding: 12px 18px 8px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  font-weight: bold;
  font-size: 24px;
  color: ${(props) => (props.color !== "primary" ? yellowPrimary : black)};
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, 0);
  margin: 10px;
  margin-left: ${(props) => props.marginLeft};
  min-width: 220px;

  cursor: pointer;
  @media ${deviceDF.laptopL} {
    font-size: 20px;
  }
  @media ${deviceDF.tablet} {
    font-size: 18px;
  }
  @media ${deviceDF.mobileL} {
    font-size: 16px;
  }
`;
