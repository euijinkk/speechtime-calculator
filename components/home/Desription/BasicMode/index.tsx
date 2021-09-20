import React from "react";
import styled from "@emotion/styled";

import ScrollBarContent from "./ScrollBarContent";
import SpeedContent from "./SpeedContent";
import { responsiveSize } from "../../../../lib/constants/size";
import { useMobile } from "../../../../hooks/DeviceType";
import { useRecoilState } from "recoil";
import { isAccordianOpenedState } from "../../../../store";
import useWindowSize from "../../../../hooks/useWindowSize";

function BasicMode() {
  const isMobile = useMobile();
  const [isAccordianOpened, setIsAccordianOpened] = useRecoilState(
    isAccordianOpenedState
  );

  const isClient = typeof window === "object";
  if (!isClient) return <>Loading...</>;

  return (
    <Styled.Root>
      {isMobile && !isAccordianOpened ? (
        <Styled.ClosedAccordian
          isMobile={isMobile}
          isAccordianOpened={isAccordianOpened}
          onClick={() => setIsAccordianOpened(true)}
        >
          <div>•&nbsp; 말하는 속도를 지정해주세요.</div>
          <button className="down" />
        </Styled.ClosedAccordian>
      ) : (
        <Styled.Open isMobile={isMobile}>
          <ScrollBarContent />
          <SpeedContent />
        </Styled.Open>
      )}
    </Styled.Root>
  );
}

export default BasicMode;

const Styled = {
  Root: styled.article`
    margin: auto;
    padding: 0;
    width: 100%;
    max-width: 450px;
    font-size: 14px;
    @media ${responsiveSize.mobile} {
      font-size: 13px;
    }
  `,
  ClosedAccordian: styled.div<{
    isMobile: boolean;
    isAccordianOpened: boolean;
  }>`
    display: ${({ isMobile }) => (isMobile ? "flex" : "none")};
    position: relative;
    align-items: center;
    justify-content: space-between;
    height: 63px;
    .down {
      background-color: white;
      background-image: url("/assets/icons/arrowBottom.svg");
      width: 20px;
      height: 20px;
    }
  `,
  Open: styled.div<{
    isMobile: boolean;
  }>`
    /* display: ${({ isMobile }) => (!isMobile ? "block" : "none")}; */
  `,
};
