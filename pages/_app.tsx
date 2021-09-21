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
        {/* 대표/선호 url 지정 */}
        <link rel="canonical" href="https://www.speechtime.co.kr" />
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
          content="https://postfiles.pstatic.net/MjAyMTA5MThfMjIz/MDAxNjMxOTczNjM5ODAz.rGScsiUaqguQ0DgrpHHhi3yhoDZOlpRZ0inLo4zB2_0g.dNg-GtYkFALhZE8NteYigyrtld-D_ql8QLtyMM7hhO0g.PNG.gytks4/speechtime_og.png?type=w966"
        />
        {/* 네이버 SEO */}
        <meta
          name="naver-site-verification"
          content="92201c6ea9780e1726878e46cbf4189b65dbfd04"
        />
        {/* Google SEO */}
        <meta
          name="google-site-verification"
          content="8bJNAyokLD_M59AS8hBrw_8OoAKMN7KrmCViYGZavzg"
        />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-98MYW7S486"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-98MYW7S486');
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
