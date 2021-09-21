import "../styles/globals.css";
import "reset-css";
import Head from "next/head";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
