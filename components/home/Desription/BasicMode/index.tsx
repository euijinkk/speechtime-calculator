import React, { useState } from "react";
import styled from "@emotion/styled";

import ScrollBarContent from "./ScrollBarContent";
import SpeedContent from "./SpeedContent";
import { responsiveSize } from "../../../../lib/constants/size";
import { useMobile } from "../../../../hooks/DeviceType";

function BasicMode() {
  const isMobile = useMobile();
  const [isAccordianOpened, setIsAccordianOpened] = useState(false);
  console.log(`isMobile`, isMobile);
  return (
    <Styled.Root>
      {isMobile && isAccordianOpened ? (
        <>
          <ScrollBarContent setIsAccordianOpened={setIsAccordianOpened} />
          <SpeedContent />
        </>
      ) : (
        <Styled.ClosedAccordian onClick={() => setIsAccordianOpened(true)}>
          <div>∙ 말하는 속도를 지정해주세요.</div>
          <button />
        </Styled.ClosedAccordian>
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

    /* @media ${responsiveSize.tablet} {
      max-width: 1000px;
    } */
    @media ${responsiveSize.mobile} {
      /* min-width: 0px; */
      font-size: 12px;
    }
  `,
  ClosedAccordian: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: translateY(6px);
    & > button {
      background-color: white;
      background-image: url("/assets/icons/arrowBottom.svg");
      width: 20px;
      height: 20px;
    }
  `,
};
