import React from "react";
import styled from "@emotion/styled";

import ScrollBarContent from "./ScrollBarContent";
import SpeedContent from "./SpeedContent";
import { responsiveSize } from "../../../../lib/constants/size";
import { useMobile } from "../../../../hooks/DeviceType";
import { useRecoilState } from "recoil";
import { isAccordianOpenedState } from "../../../../store";

function BasicMode() {
  const isMobile = useMobile();
  const [isAccordianOpened, setIsAccordianOpened] = useRecoilState(
    isAccordianOpenedState
  );
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
    display: none;
    position: relative;
    align-items: center;
    justify-content: space-between;
    height: 63px;
    @media ${responsiveSize.mobile} {
      display: flex;
    }
    .down {
      background-color: white;
      background-image: url("/assets/icons/arrowBottom.svg");
      width: 20px;
      height: 20px;
    }
  `,
  Open: styled.div<{
    isMobile: boolean;
  }>``,
};
