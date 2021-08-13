import React, { useState, useEffect, useRef } from "react";

export default function useInterval(callback, delay) {
  // 동적으로 타입을 받아오는 방법 - Generic 공부 후 수정할 것
  const savedCallback = useRef() as any;

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
