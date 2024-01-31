import { Container } from "@/components/Layout/Layout.styled";
import { Header } from "@/components/Header/Header.styled";

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
