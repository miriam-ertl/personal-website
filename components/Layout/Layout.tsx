import { Container } from "@/components/Layout/Layout.styled";
import { Content } from "@/components/Layout/Layout.styled";
import { Footer } from "@/components/Footer/Footer.styled";
import Header from "../Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
}
