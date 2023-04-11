import styled from "styled-components";
import { yellowPrimary, white } from "../../assets/styles/colors";

export const CloseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
  padding: 12px 12px;
`;
export const MenuContainer = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  padding: 0px;
`;
export const MenuList = styled.ul`
  position: relative;
  top: 0px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  padding: 0px;
  color: ${white};
`;
export const MenuListItem = styled.li`
  list-style: outside none none;
  color: ${yellowPrimary};
  margin: 10px 0px;
  padding: 0;
  cursor: pointer;
  &:hover {
    color: ${white};
  }
`;
export const MenuListItemLink = styled.a`
  display: block;
  color: ${yellowPrimary};
  width: 100%;
  margin: 10px 0px;
  padding: 0;
  cursor: pointer;
  &:hover {
    color: ${white};
  }
`;
export const Icon = styled.img`
  margin: auto 0;
  margin-left: 8px;
`;
