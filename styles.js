import { Roboto } from "next/font/google";
import { createGlobalStyle } from "styled-components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export default createGlobalStyle`

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }


  *,
  *::before,
  *::after {
    box-sizing: border-box;
    border-color: theme('borderColor.DEFAULT', currentColor);
  }

  body {
    font-family: ${roboto.style.fontFamily};
    font-style: normal;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  /* .container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }

 .header, .footer {
    padding: 20px;
    background-color: #333;
    color: #fff;
  }
   
  .content {
    padding: 20px;
  }*/  

  hr {
    height: 0;
    color: inherit;
  }

  button {
	-webkit-appearance: button;
  }

  ::-moz-focus-inner {
	  border-style: none;
	  padding: 0;
  }

  :-moz-focusring {
	  outline: 1px dotted ButtonText;
  }

  :-moz-ui-invalid {
	  box-shadow: none;
  }

  progress {
    vertical-align: baseline;
  }

  :root {
    --me-color-gray-700: #131011;
    --me-color-gray-600: #2F292B;
    --me-color-gray-500: #51484C;
    --me-color-gray-400: #76696E;
    --me-color-gray-300: #9B8D93;
    --me-color-gray-200: #BDB5B8;
    --me-color-gray-100: #E1DDDF;

    --me-color-white: #FFFFFF;

    --me-text-inverted: #FFFFFF;
    --me-text-gray-700: #131011;
  }

  h1 {
    font-size: 1.75rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  h3 {
    font-size: 1.4rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  h5 {
    font-size: 1.1rem;
  }

  p {
    font-size: 1rem;
  }

  .miscellaneous {
    font-size: 0.75rem;
  }

  .copyright {
    font-size: 0.5rem;
  }
  
  section:nth-child(even) {
    background-color: var(--me-color-gray-600);
  }
`;
