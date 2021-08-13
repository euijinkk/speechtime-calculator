import React from "react";
import styled from "@emotion/styled";
import Description from "./Desription/Description";
import ScriptContainer from "./ScriptContainer/ScriptContainer";

function Main() {
  return (
    <Styled.Root>
      <Description />
      <ScriptContainer />
    </Styled.Root>
  );
}

export default Main;

const Styled = {
  Root: styled.main`
    display: flex;
    width: 100%;
    height: 643px;
  `,
};
