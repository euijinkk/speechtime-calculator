/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: 1440, height: 960 });

  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    setWindowSize(getSize);

    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
