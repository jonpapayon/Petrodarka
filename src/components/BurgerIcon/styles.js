import styled, { css } from "styled-components";
import { black, yellowPrimary } from "../../assets/styles/colors";
import { deviceMF } from "../../assets/styles/breakPoints";

export const BurgerWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  padding: 10px;
  border-radius: 25px;
  position: fixed;
  right: 20px;
  bottom: 40px;
  z-index: 3;
  background-color: ${yellowPrimary};

  padding: 10px;
  border-radius: 25px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  @media ${deviceMF.laptop} {
    display: none;
  }
`;
const barTopCss = css`
  -webkit-transform: rotate(-45deg) translate(-4px, 4px);
  transform: rotate(-45deg) translate(-4px, 4px);
`;
const barMiddleCss = css`
  opacity: 0;
`;
const barBottomCss = css`
  -webkit-transform: rotate(45deg) translate(-6px, -6px);
  transform: rotate(45deg) translate(-6px, -6px);
`;

export const BurgerBar = styled.div`
  width: 25px;
  height: 3px;
  background-color: ${(props) => (props.color ? props.color : black)};
  margin: 4px 0;
  transition: 0.4s;
  ${(props) => props.barTop && props.isOpen && barTopCss}
  ${(props) => props.barMiddle && props.isOpen && barMiddleCss}
  ${(props) => props.barBottom && props.isOpen && barBottomCss}
`;
