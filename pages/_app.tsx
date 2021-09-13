import "../styles/globals.css";
import "reset-css";
import Head from "next/head";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Head>
        <title>발표시간 계산기</title>
        <link rel="icon" href="/assets/images/mobileLogo.svg" />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta
          name="description"
          content="여러분의 발표 대본이 몇 분 걸리는지 궁금하다면?"
        />
        <meta
          name="keywords"
          content="발표시간 계산기, 글자수세기, 단어수세기, PT시간 측정"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="발표시간 계산기" />
        <meta property="og:url" content="https://www.speechtime.co.kr" />
        <meta property="og:site_name" content="발표시간 계산기" />
        <meta
          property="og:description"
          content="여러분의 발표 대본이 몇 분 걸리는지 궁금하다면?"
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
