import React from "react";
import styled from "@emotion/styled";

function ScriptContainer() {
  return <Styled.Root>123</Styled.Root>;
}

export default ScriptContainer;

const Styled = {
  Root: styled.section`
    flex: 1;
    background-color: white;
    height: 100%;
  `,
};
