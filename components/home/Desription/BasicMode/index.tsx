import React, { useEffect, useRef, useState } from "react";
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

  const isAccordianOpenedRef = useRef<boolean | null | undefined>(null);

  useEffect(() => {
    isAccordianOpenedRef.current = isAccordianOpened;
  }, [isAccordianOpened]);

  useEffect(() => {
    setIsAccordianOpened(isAccordianOpenedRef.current);
    return () => {
      // isAccordianOpenedRef.current = isAccordianOpened;
      // unMount시, state값인 isAccordianOpened는 가지고 올 수 없다.
    };
  }, []);
  // 1. useState로 선언 시, 렌더링 시 매번 초기값으로 초기화되는 문제 -> isAccordianOpened를 recoil로 선언하였음.
  // 2. isAccordianOpenedRef를 사용한 이유. Ref는 생명주기에 곤계없이, 계속 값을 유지하도록 해준다. useState는 생명주기를 타기 때문에, unMount시 값을 가지고 올 수 없는 문제.
  // 3. isAccordianOpened이 변할때마다 Ref변수를 계속 업데이트해주고 있다. 컴포넌트가 unMount될때 한번만 업데이트해주면 좋을텐데, unMount될때듣 state값은 가지고 올 수 없는 상태이다.

  return (
    <Styled.Root>
      {isMobile && !isAccordianOpened ? (
        <Styled.ClosedAccordian onClick={() => setIsAccordianOpened(true)}>
          <div>∙ 말하는 속도를 지정해주세요.</div>
          <button />
        </Styled.ClosedAccordian>
      ) : (
        <>
          <ScrollBarContent setIsAccordianOpened={setIsAccordianOpened} />
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
