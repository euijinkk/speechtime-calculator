import React from "react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { cpmState } from "../../store";
import { colors } from "../../lib/constants/colors";

function ScrollBar() {
  const [cpm, setCpm] = useRecoilState(cpmState);

  return (
    <Styled.Root>
      <Styled.CpmContainer>
        <div>speed (Characters Per Minute)</div>
        <div>{cpm} cpm</div>
      </Styled.CpmContainer>
      <Styled.ScrollContainer></Styled.ScrollContainer>
    </Styled.Root>
  );
}

export default ScrollBar;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 62px;
    border: 1px solid ${colors.gray_light};
    border-radius: 10px;
    overflow: hidden;
  `,
  CpmContainer: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    height: 48px;
    div {
      line-height: 48px;
    }
  `,
  ScrollContainer: styled.div`
    background-color: ${colors.gray_light};
    padding: 0 20px;
    height: 52px;
  `,
};
