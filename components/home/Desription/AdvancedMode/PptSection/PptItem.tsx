import React from "react";
import styled from "@emotion/styled";

interface Props {
  type: string;
  unit: string;
  pptState: number;
  setPptState: React.Dispatch<React.SetStateAction<number>>;
}

function PptItem({ type, unit, pptState, setPptState }: Props) {
  const handleClick = (operator: string) => {
    if (operator === "+") {
      setPptState((prev) => prev + 1);
    } else {
      pptState > 0 && setPptState((prev) => prev - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "" || e.target.valueAsNumber < 0) {
      e.target.valueAsNumber = 0;
    }
    e.target.valueAsNumber = parseInt(e.target.value, 10);
    setPptState(e.target.valueAsNumber);
  };

  return (
    <>
      <div>{type}</div>
      <div>
        <Styled.OperatorContainer
          operator="left"
          onClick={() => handleClick("-")}
        >
          <Styled.HLine />
        </Styled.OperatorContainer>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="number" value={pptState} onChange={handleChange} />
          {unit}
        </form>
        <Styled.OperatorContainer
          operator="right"
          onClick={() => handleClick("+")}
        >
          <Styled.HLine />
          <Styled.VLine />
        </Styled.OperatorContainer>
      </div>
    </>
  );
}

export default PptItem;

const Styled = {
  OperatorContainer: styled.div<{ operator: string }>`
    display: flex;
    position: relative;
    align-items: center;
    transform: translateY(12px);
    cursor: pointer;
    width: 15px;
    height: 15px;
  `,
  HLine: styled.div`
    background-color: #333333;
    width: 15px;
    height: 2px;
  `,
  VLine: styled.div`
    position: absolute;
    left: 6.5px;
    background-color: #333333;
    width: 2px;
    height: 15px;
  `,
};
