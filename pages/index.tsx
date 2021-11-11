import styled from "@emotion/styled";
import Head from "next/head";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Main from "../components/home/Main";
import Options from "../components/home/Options";
import { responsiveSize } from "../lib/constants/size";

export default function Home() {
  return (
    <>
      <Head>
        <title>발표시간 계산기</title>
      </Head>
      <Styled.Root>
        <Header />
        <Options />
        <Main />
        <Footer />
      </Styled.Root>
    </>
  );
}

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 0 44px;
    width: 100%;
    max-width: 1276px;

    @media ${responsiveSize.mobile} {
      padding: 0 16px;
    }
  `,
};
