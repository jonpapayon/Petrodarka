import styled from "styled-components";
import { deviceDF } from "../../assets/styles/breakPoints";

export const CloseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  padding: 12px 12px;
`;
export const VideoContainer = styled.div`
  width: 95%;
  height: auto;
  margin-left: 2vw;
  padding: 0 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${deviceDF.laptop} { padding: 0 };
`;

export const Icon = styled.img`
  margin: auto 0;
  width: 32px;
  cursor: pointer;
  margin-left: 8px;
`;
