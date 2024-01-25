import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
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

`;