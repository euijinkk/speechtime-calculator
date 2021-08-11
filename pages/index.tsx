import styled from "@emotion/styled/types/base";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Main from "../components/home/Main";
import Options from "../components/home/Options";

export default function Home() {
  return (
    <>
      <Header />
      <Options />
      <Main />
      <Footer />
    </>
  );
}
