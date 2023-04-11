import styled from "styled-components";
import { deviceDF } from "../../assets/styles/breakPoints";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: transparent;
  padding: 0 3rem 0 2.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${deviceDF.laptop} {
    padding: 0 1rem;
    justify-content: center;
  }
`;
export const Logo = styled.img`
  width: 420px;
  height: auto;
  cursor: pointer;
  @media ${deviceDF.mobileM} {
    width: 360px;
  }
  @media ${deviceDF.mobileS} {
    width: 280px;
  }
`;
