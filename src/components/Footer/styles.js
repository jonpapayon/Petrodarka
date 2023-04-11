import { Link } from "react-router-dom";
import styled from "styled-components";
import { black, white } from "../../assets/styles/colors";
import { deviceDF } from "../../assets/styles/breakPoints";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 1.2rem 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.color ? props.color : white)};

  @media ${deviceDF.tablet} {
    flex-direction: column;
  }
`;
export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${deviceDF.tablet} {
    margin-bottom: 1.8rem;
    align-items: center;
  }
`;
export const Text = styled.div`
  font-size: 20px;
  color: ${(props) => (props["color-text"] ? props["color-text"] : black)};
  @media ${deviceDF.mobileL} {
    text-align: center;
    font-size: 18px;
  }
  @media ${deviceDF.mobileM} {
    font-size: 16px;
  }
`;
export const TextAnchor = styled.a`
  font-size: 20px;
  color: ${(props) => (props["color-text"] ? props["color-text"] : black)};
  font-family: ${(props) => (props["font-family"] || "Conv_Adelle_Bold")};
  @media ${deviceDF.mobileL} {
    text-align: center;
    font-size: 18px;
  }
  @media ${deviceDF.mobileM} {
    font-size: 16px;
  }
`;
export const TextLink = styled(Link)`
  font-size: 20px;
  color: ${(props) => (props["color-text"] ? props["color-text"] : black)};
  font-family: "Conv_Adelle_Bold";
  @media ${deviceDF.mobileL} {
    text-align: center;
    font-size: 18px;
  }
  @media ${deviceDF.mobileM} {
    font-size: 16px;
  }
`;
export const Logo = styled.img`
  width: 420px;
  height: auto;
  @media ${deviceDF.mobileL} {
    width: 280px;
  }
`;
