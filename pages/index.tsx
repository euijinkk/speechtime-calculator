import styled from "@emotion/styled";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Main from "../components/home/Main";
import Options from "../components/home/Options";

export default function Home() {
  return (
    <Styled.Root>
      <Header />
      <Options />
      <Main />
      <Footer />
    </Styled.Root>
  );
}

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 44px;
    width: 100%;
    max-width: 1190px;
    font-family: "Noto Sans KR";

    @media (max-width: 415px) {
      margin: 0 16px;
    }
  `,
};
