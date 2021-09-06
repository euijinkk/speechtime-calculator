import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../lib/constants/colors";
import { responsiveSize } from "../../lib/constants/size";
import { useHorizontalTablet, useMobile } from "../../hooks/DeviceType";

function Header() {
  const isHorizontalTablet = useHorizontalTablet();
  const isMobile = useMobile();

  return (
    <Styled.Root>
      <Styled.Logo
        src={`/assets/images/${
          isMobile
            ? "mobileLogo"
            : isHorizontalTablet
            ? "tabletLogo"
            : "desktopLogo"
        }.svg`}
        alt="Logo"
      />
      <Styled.SiteName>발표시간 - 계산기</Styled.SiteName>
    </Styled.Root>
  );
}

export default Header;

const Styled = {
  Root: styled.header`
    display: flex;
    align-items: center;
    margin-top: 24px;
    margin-bottom: 22px;
    width: 100%;
    @media ${responsiveSize.mobile} {
      margin-top: 16px;
      margin-bottom: 18px;
    }
  `,
  Logo: styled.img`
    margin-right: 12px;
  `,
  SiteName: styled.h1`
    margin: 0;
    color: ${colors.sub_navy};
    font-size: 32px;
    font-weight: bold;
    @media ${responsiveSize.mobile} {
      font-size: 22px;
    }
  `,
};
