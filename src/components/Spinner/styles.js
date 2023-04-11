import styled, { keyframes } from "styled-components";
import { black, yellowPrimary } from "../../assets/styles/colors";

export const load1 = keyframes`
   0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
`;

export const Container = styled.div`
  background-color: ${black};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  background: ${yellowPrimary};
  -webkit-animation: ${load1} 1s infinite ease-in-out;
  animation: ${load1} 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
  color: ${yellowPrimary};
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;

  &::before {
    background: ${yellowPrimary};
    -webkit-animation: ${load1} 1s infinite ease-in-out;
    animation: ${load1} 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
    position: absolute;
    top: 0;
    content: "";
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  &::after {
    background: ${yellowPrimary};
    -webkit-animation: ${load1} 1s infinite ease-in-out;
    animation: ${load1} 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
    left: 1.5em;
    position: absolute;
    top: 0;
    content: "";
  }
`;
