import styled from "styled-components";
import { black, yellowSecondary } from "../../assets/styles/colors";
import { deviceDF } from "../../assets/styles/breakPoints";

export const CloseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  padding: 12px 12px;
`;
export const MenuContainer = styled.div`
  width: 100%;
  
`;
export const MenuTitle = styled.div`
  display: block;
  font-size: 58px;
  text-align: center;
  margin-bottom: 3.5rem;
  @media ${deviceDF.tablet} {
    font-size: 38px;
    margin-bottom: 2.5rem;
  }
  @media ${deviceDF.mobileL} {
    font-size: 28px;
    margin-bottom: 1.5rem;
  }
`;
export const MenuRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  align-items: center;
  @media ${deviceDF.tablet} {
    align-items: center;
    flex-direction: column;
    margin-bottom: 0;
    
  }
`;
export const StationLink = styled.a`
  width: 380px;
  font-family: "Conv_Adelle_Bold", Sans-Serif;
  background-color: ${black};
  color: ${yellowSecondary};
  border-radius: 30px;
  padding: 1rem 2.5rem 0.6rem;
  font-size: 42px;
  margin: 0 1.6rem;
  text-align: center;
  
  justify-content: center;
  &:focus {
    outline: none !important;
  }
  @media ${deviceDF.tablet} {
    width: 320px;
    font-size: 34px;
    margin: 0;
    margin-bottom: 2.5rem;
  }
  @media ${deviceDF.mobileL} {
    width: 280px;
    font-size: 28px;
    margin-bottom: 1.5rem;
  }
`;

export const Icon = styled.img`
  margin: auto 0;
  width: 32px;
  cursor: pointer;
  margin-left: 8px;
`;
