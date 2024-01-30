import {
  Content,
  Footer,
  GridContainer,
  Header,
} from "@/components/Layout/Layout.styled.js";

export default function Layout({ children }) {
  return (
    <GridContainer>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </GridContainer>
  );
}
