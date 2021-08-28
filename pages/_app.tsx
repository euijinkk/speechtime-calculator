import "../styles/globals.css";
import "reset-css";
import Head from "next/head";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Head>
        <title>발표시간 계산기</title>
        <link rel="icon" href="/assets/icons/logo.svg" />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta
          name="description"
          content="Learn Korean through your favorite K-Pop artists and songs!"
        />
        <meta
          name="keywords"
          content="Learn Korean through your favorite K-Pop artists and songs!"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kyrics" />
        <meta property="og:url" content="https://www.kyrics.org" />
        <meta property="og:site_name" content="Kyrics" />
        <meta
          property="og:description"
          content="케이팝 가사로 배우는 우리말, 키릭스"
        />
        <meta
          property="og:image"
          content="https://kyrics.s3.ap-northeast-2.amazonaws.com/kyrics_og_image.png"
        />
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
