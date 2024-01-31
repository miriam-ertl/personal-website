import { Container } from "@/components/Layout/Layout.styled";
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
