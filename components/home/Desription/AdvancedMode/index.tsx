import React from "react";
import styled from "@emotion/styled";
import CustomizeSection from "./CustomizeSection";
import StopWatchSection from "./StopWatchSection";
import PptSection from "./PptSection";
import { colors } from "../../../../lib/constants/colors";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { cpmState } from "../../../../store";

function AdvancedMode() {
  const setCpm = useSetRecoilState(cpmState);

  return (
    <Styled.Root>
      <StopWatchSection />
      <CustomizeSection />
      <PptSection />
    </Styled.Root>
  );
}

export default AdvancedMode;

const Styled = {
  Root: styled.article`
    color: ${colors.gray_dark};
  `,
  StopWatchText: styled.div`
    margin-bottom: 4px;
    line-height: 2;
  `,
  CustomizeText: styled.div`
    margin-bottom: 22px;
  `,
  PptText: styled.div`
    margin-bottom: 22px;
  `,
};
