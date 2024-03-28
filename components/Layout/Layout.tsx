import Footer from "@/components/Footer/Footer";
import Header from "../Header/Header";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

export const Content = styled.div`
  justify-content: center;
`;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <PageContainer>
      <Header />
      <Content>{children}</Content>
      <Footer images={[]} />
    </PageContainer>
  );
}
