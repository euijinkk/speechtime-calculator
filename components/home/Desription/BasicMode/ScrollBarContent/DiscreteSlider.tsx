import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import styled from "@emotion/styled";
import { colors } from "../../../../../lib/constants/colors";
import { useRecoilState } from "recoil";
import { cpmState } from "../../../../../store";

function valuetext(value: number) {
  return value;
}

export default function DiscreteSlider() {
  const [cpm, setCpm] = useRecoilState(cpmState);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setCpm(newValue as number);
  };

  return (
    <Box2 sx={{ width: 390 }}>
      <Slider2
        ref={inputRef}
        aria-label="CPM"
        value={cpm}
        onChange={handleChange}
        step={10}
        min={310}
        max={550}
      />
    </Box2>
  );
}

const Box2 = styled(Box)`
  margin: auto;
`;

const Slider2 = styled(Slider)`
  color: ${colors.sub_navy};
  .MuiSlider-track,
  .MuiSlider-thumb {
    color: ${colors.main_yellow};
    &::before {
      box-shadow: none;
    }
  }
  .css-eg0mwd-MuiSlider-thumb:hover,
  .css-eg0mwd-MuiSlider-thumb.Mui-focusVisible {
    box-shadow: none;
  }
`;
