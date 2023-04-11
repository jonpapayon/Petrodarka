import styled from "styled-components";
import { deviceDF } from "../../assets/styles/breakPoints";
import { black, yellowPrimary } from "../../assets/styles/colors";

export const ButtonStyled = styled.button`
  font-family: "Conv_Adelle_Bold", Sans-Serif;
  background-color: ${(props) =>
    props.color !== "primary" ? black : yellowPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 12px 15px 8px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  font-weight: bold;
  font-size: 24px;
  color: ${(props) => (props.color !== "primary" ? yellowPrimary : black)};
  margin: 10px;
  margin-left: ${(props) => props.marginLeft};
  cursor: pointer;
  @media ${deviceDF.laptopL} {
    font-size: 20px;
  }
`;
