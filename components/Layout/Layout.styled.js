import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

export const Header = styled.header`
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

export const Content = styled.main`
  padding: 20px;
`;

export const Footer = styled.footer`
  padding: 20px;
  background-color: #333;
  color: #fff;
`;
