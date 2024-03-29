import type { AppProps } from "next/app";
import GlobalStyle from "../styles";
import Layout from "../components/Layout/Layout";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
