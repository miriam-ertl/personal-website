import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
  }
 

  :root {
    --me-color-primary-color-gray-700: #131011;
    --me-color-primary-color-gray-600: #2F292B;
    --me-color-primary-color-gray-500: #51484C;
    --me-color-primary-color-gray-400: #76696E;
    --me-color-primary-color-gray-300: #9B8D93;
    --me-color-primary-color-gray-200: #BDB5B8;
    --me-color-primary-color-gray-100: #E1DDDF;

    --me-color-primary-color-white: #FFFFFF;

    --me-text-primary-text-inverted: #FFFFFF;
    --me-text-primary-text-gray-700: #131011;
  }

  h1 {
    font-size: 1.75rem;
    font-style: normal;
  }

  h2 {
    font-size: 1.6rem;
    font-style: normal;
  }

  h3 {
    font-size: 1.4rem;
    font-style: normal;
  }

  h4 {
    font-size: 1.2rem;
    font-style: normal;
  }

  h5 {
    font-size: 1.1rem;
    font-style: normal;
  }

  p {
    font-size: 1rem;
    font-style: normal;
  }

  .miscellaneous {
    font-size: 0.75rem;
    font-style: normal;
  }

  .copyright {
    font-size: 0.5rem;
    font-style: normal;
  }

`;