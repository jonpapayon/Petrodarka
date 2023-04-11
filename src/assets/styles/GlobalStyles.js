import { createGlobalStyle } from "styled-components";
import { black, white } from "./colors";

import AdelleBoldTtf from "../fonts/Adelle_Bold.ttf";
import AdelleBoldWoff from "../fonts/Adelle_Bold.woff";
import AdelleBoldEot from "../fonts/Adelle_Bold.eot";
import AdelleRegTtf from "../fonts/Adelle_Reg.ttf";
import AdelleRegWoff from "../fonts/Adelle_Reg.woff";
import AdelleRegEot from "../fonts/Adelle_Reg.eot";
import AdelleLightItalicTtf from "../fonts/Adelle-LightItalic.ttf";
import AdelleLightItalicWoff from "../fonts/Adelle-LightItalic.woff";
import AdelleLightItalicEot from "../fonts/Adelle-LightItalic.eot";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Conv_Adelle_Bold';
    src: url(${AdelleBoldEot});
    src: 
        url(${AdelleBoldWoff}) format('woff'),
        url(${AdelleBoldTtf}) format("truetype"),
        font-weight: normal;
        font-style: normal;
    }
  @font-face {
    font-family: 'Conv_Adelle_Reg';
    src: url(${AdelleRegEot});
    src: 
        url(${AdelleRegWoff}) format('woff'),
        url(${AdelleRegTtf}) format("truetype"),
        font-weight: normal;
        font-style: normal;
    }
  @font-face {
    font-family: 'Conv_Adelle_Light_Ita';
    src: url(${AdelleLightItalicEot});
    src: 
        url(${AdelleLightItalicWoff}) format('woff'),
        url(${AdelleLightItalicTtf}) format("truetype"),
        font-weight: normal;
        font-style: normal;
    }

  html {
    box-sizing: border-box;
    font-family: 'Conv_Adelle_Reg',Sans-Serif;
    background-color: ${black};
    scroll-behavior: smooth;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {
    cursor: pointer;
    text-decoration:none;
  }
 
  ul, li, h1, h2, h3, p  {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button {
    border: 0;
    outline: 0;
  }

  body {
    max-width: 1920px;
    margin: 0 auto;
    background-color: ${white};
    color: ${black};
    overscroll-behavior: none;
    width: 100%;
  }

  body {
    margin: 0 auto;
    /* overscroll-behavior: none; */
    width: 100%;
  }

  #app {
    box-shadow: 0 0 10px rgba(0,0,0,.05);
    overflow-x: hidden;
  }
`;
