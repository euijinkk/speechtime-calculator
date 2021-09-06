import useWindowSize from "./useWindowSize";

export const useMobile = () => {
  const size = useWindowSize();
  const isMobile = size && size.width <= 480;

  return isMobile;
};

export const useHorizontalTablet = () => {
  const size = useWindowSize();
  const isHorizontalTablet = size && size.width <= 900;

  return isHorizontalTablet;
};
