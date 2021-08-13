import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../../../../../lib/constants/colors";
import addZero from "../../../../../lib/utils/addZero";
import useInterval from "../../../../../hooks/useInterval";

function StopWatch() {
  //   let startTime = 0;
  //   let endTime = 0;
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [min, setMin] = useState("00");
  const [sec, setSec] = useState("00");
  const [milisec, setMilisec] = useState("00");
  const [isStart, setIsStart] = useState(false);
  let timeInterval;
  const intervalRef = useRef(null);

  const handleStart = () => {
    // if (!startTime) {
    //   startTime = Date.now();
    // } else if (!isStart && startTime) {
    //   console.log("restart");
    //   startTime += Date.now() - endTime;
    // }
    // startTime += Date.now() - endTime;

    isStart ? stopTimer() : startTimer();

    setIsStart((prev) => !prev);
  };

  function startTimer() {
    let c;
    if (startTime) {
      c = Date.now() - endTime + startTime;
    } else {
      c = Date.now();
    }
    setStartTime(c);

    intervalRef.current = setInterval(function () {
      const nowTime = new Date(Date.now() - c);
      setMin(addZero(nowTime.getMinutes()));
      setSec(addZero(nowTime.getSeconds()));
      setMilisec(addZero(Math.floor(nowTime.getMilliseconds() / 10)));
    }, 1);
    console.log(timeInterval);
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    setEndTime(Date.now());
  }

  const handleReset = () => {
    console.log("reset");
    console.log(intervalRef.current);
    clearInterval(intervalRef.current);
    setStartTime(0);
    setMin("00");
    setSec("00");
    setMilisec("00");
    setIsStart(false);
  };

  return (
    <>
      <Styled.Time>
        <span>{min}&nbsp;</span>
        <span>:&nbsp;</span>
        <span>{sec}&nbsp;</span>
        <span>.&nbsp;</span>
        <span>{milisec}</span>
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
    margin-bottom: 8px;
    border: 1px solid ${colors.gray_light};
    border-radius: 10px;
    height: 52px;
    text-align: center;
    line-height: 52px;
    color: ${colors.sub_navy};
    font-size: 24px;

    & ~ div {
      display: flex;
      margin-bottom: 44px;

      & > div {
        flex: 5;
        border-radius: 10px;
        cursor: pointer;
        height: 48px;
        text-align: center;
        line-height: 48px;
      }
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
