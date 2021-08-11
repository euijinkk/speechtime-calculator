import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../lib/constants/colors";

function Header() {
  return (
    <Styled.Root>
      <Styled.Logo src="assets/images/logo.svg" alt="Logo" />
      <Styled.SiteName>발표시간 - 계산기</Styled.SiteName>
    </Styled.Root>
  );
}

export default Header;

const Styled = {
  Root: styled.header`
    display: flex;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 30px;
    width: 100%;
  `,
  Logo: styled.img`
    margin-right: 16px;
  `,
  SiteName: styled.h1`
    margin: 0;
    color: ${colors.sub_navy};
    font-size: 48px;
    font-weight: bold;
  `,
};
