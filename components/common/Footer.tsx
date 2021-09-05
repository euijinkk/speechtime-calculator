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
          <a
            href="https://github.com/euijinkk"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/icons/github.svg" alt="github" />
          </a>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <img src="/assets/icons/github.svg" alt="youtube" />
          </a>
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
    margin-top: 50px;
    padding-bottom: 32px;
    width: 100%;
    font-size: 12px;
  `,
  Top: styled.div`
    font-size: 14px;
    font-weight: bold;
  `,
  Middle: styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 10px;
    img {
      cursor: pointer;
    }
    a:nth-of-type(1) > img {
      margin-right: 12px;
    }
    @media (max-width: 610px) {
      flex-direction: column-reverse;
      align-items: flex-start;
      margin-top: 24px;
      & > div:nth-of-type(1) {
        margin-top: 12px;
      }
    }
  `,
  Bottom: styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    @media (max-width: 610px) {
      flex-direction: column;
      & > div:nth-of-type(2) {
        margin-top: 24px;
      }
    }
  `,
};
