import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import { fontSizes, fontFaces, lineHeights } from './fonts';

export default createGlobalStyle`
  ${fontFaces}
  * {
    margin: 0;
    padding: 0;
    font-family: PoppinsLight, Helvetica, Sans-Serif;
    font-size: 15px;
    color: ${colors.text.primary};
  }

  body {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    overflow-x: hidden;
    background: ${colors.background.default};
  }

  h1 { 
    font-size: ${fontSizes.h1} ;
    font-family: PoppinsBlack, Helvetica, Sans-Serif; 
  }
  h2 { 
    font-size: ${fontSizes.h2};
    font-family: PoppinsExtraBold, Helvetica, Sans-Serif; 
  }
  h3 {
    font-size: ${fontSizes.h3}; 
    font-family: PoppinsMedium, Helvetica, Sans-Serif; 
  }
  h4 {
     font-size: ${fontSizes.h4};
     font-family: PoppinsMedium, Helvetica, Sans-Serif;  
  }
  h5 {
     font-size: ${fontSizes.h5};
     font-family: PoppinsMedium, Helvetica, Sans-Serif;  
    }
  h6 {
     font-size: ${fontSizes.h6};
     font-family: PoppinsMedium, Helvetica, Sans-Serif;  
    }
  p {
     font-size: ${fontSizes.p} 
    }

  h1, h2, h3, h4, h5, h6 {
    line-height: ${lineHeights.heading};
  }
  a:disabled, button:disabled {
    cursor: not-allowed;
  }
  a:enabled, button:enabled {
    cursor: pointer;
  }
`;
