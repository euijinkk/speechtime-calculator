/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

function useWindowSize() {
  const isClient = typeof window === "object";

  if (!isClient) return;

  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
