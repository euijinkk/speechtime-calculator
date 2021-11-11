import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../../../../../lib/constants/colors";
import addZero from "../../../../../lib/utils/addZero";
import { useCallback } from "react";
import { responsiveSize } from "../../../../../lib/constants/size";

function StopWatch() {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [min, setMin] = useState("00");
  const [sec, setSec] = useState("00");
  const [millisec, setMillisec] = useState("00");
  const [isStart, setIsStart] = useState(false);
  const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);
  // setInterval 을 clearInterval 하기 위해서는, useRef를 사용해야 한다. 그냥 const/let변수로 지정하면 해결되지 않는다.
  // 그 이유는 매번 렌더링될 때마다, 함수가 새롭게 정의되기 때문이다. useRef를 사용하면, 렌더링에 상관없이 값이 유지되도록 할 수 있다.
  // 값이 변해도 리렌더링 하길 원하지 않는 변수를 useRef로 지정한다.

  const handleStart = () => {
    isStart ? stopTimer() : startTimer();
    setIsStart((prev) => !prev);
  };

  const getStartTime = () => {
    const currentTime = Date.now();
    if (startTime) {
      return currentTime - endTime + startTime;
    }
    return currentTime;
  };

  const startTimer = useCallback(() => {
    const tempStartTime = getStartTime();
    setStartTime(tempStartTime);

    intervalRef.current = setInterval(function () {
      const nowTime = new Date(Date.now() - tempStartTime);
      setMin(addZero(nowTime.getMinutes()));
      setSec(addZero(nowTime.getSeconds()));
      setMillisec(addZero(Math.floor(nowTime.getMilliseconds() / 10)));
    }, 1);
  }, [startTime, endTime]);

  const stopTimer = useCallback(() => {
    clearInterval(intervalRef.current);
    setEndTime(Date.now());
  }, []);

  const handleReset = useCallback(() => {
    clearInterval(intervalRef.current);
    setStartTime(0);
    setMin("00");
    setSec("00");
    setMillisec("00");
    setIsStart(false);
  }, []);

  return (
    <>
      <Styled.Time>
        <span>{min}&nbsp;</span>
        <span>:&nbsp;</span>
        <span>{sec}&nbsp;</span>
        <span>.&nbsp;</span>
        <span>{millisec}</span>
      </Styled.Time>
      <div>
        <Styled.Reset onClick={handleReset}>Reset</Styled.Reset>
        <Styled.Start onClick={handleStart}>
          {isStart ? "Stop" : "Start"}
        </Styled.Start>
      </div>
    </>
  );
}

export default StopWatch;

const Styled = {
  Time: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    border: 2px solid ${colors.gray_light};
    border-radius: 10px;
    height: 48px;
    color: ${colors.sub_navy};
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    & ~ div {
      display: flex;
      margin-bottom: 22px;
      font-size: 16px;

      & > div {
        flex: 5;
        border-radius: 10px;
        cursor: pointer;
        height: 44px;
        text-align: center;
        line-height: 44px;
        @media ${responsiveSize.mobile} {
          height: 40px;
          line-height: 40px;
        }
      }
      @media ${responsiveSize.mobile} {
        margin-bottom: 16px;
        font-size: 14px;
      }
    }

    @media ${responsiveSize.horizontalTablet} {
      font-size: 18px;
    }
    @media ${responsiveSize.mobile} {
      height: 44px;
      line-height: 44px;
      font-size: 14px;
    }
  `,
  Reset: styled.div`
    margin-right: 8px;
    background-color: ${colors.gray_light};
    color: ${colors.sub_navy};
  `,
  Start: styled.div`
    background-color: ${colors.sub_yellow};
    color: ${colors.gray_dark};
  `,
};
