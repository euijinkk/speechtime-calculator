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
        <Styled.ClosedAccordian onClick={() => setIsAccordianOpened(true)}>
          <div>•&nbsp; 말하는 속도를 지정해주세요.</div>
          <button />
        </Styled.ClosedAccordian>
      ) : (
        <>
          <ScrollBarContent />
          <SpeedContent />
        </>
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
  `,
  ClosedAccordian: styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 22px 0px;
    & > button {
      background-color: white;
      background-image: url("/assets/icons/arrowBottom.svg");
      width: 20px;
      height: 20px;
    }
  `,
};
