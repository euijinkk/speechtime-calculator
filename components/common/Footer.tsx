/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "@emotion/styled";

function Footer() {
  return (
    <Styled.Root>
      <Styled.Top>
        <div>Speech Time - Calculator</div>
      </Styled.Top>
      <Styled.Middle>
        <div>Feedback</div>
        <div>
          <img src="/assets/icons/github.svg" alt="github" />
          <img src="/assets/icons/github.svg" alt="youtube" />
        </div>
      </Styled.Middle>
      <Styled.Bottom>
        <div>speechtime-calculator@gmail.com</div>
        <div>© 2021. speechtime-calculator. all rights reserved.</div>
      </Styled.Bottom>
    </Styled.Root>
  );
}

export default Footer;

const Styled = {
  Root: styled.footer`
    width: 100%;
    font-size: 12px;
  `,
  Top: styled.div`
    font-size: 14px;
    font-weight: bold;
  `,
  Middle: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  Bottom: styled.div`
    display: flex;
    justify-content: space-between;
  `,
};
