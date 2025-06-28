import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 769;
const MICROS_BREAKPOINT = 321;

export function useResponsiveStatus() {
  const [responsive, setResponsive] = useState({
    isMobile: false,
    isMicroSmart: false,
  });

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      setResponsive({
        isMobile: width < MOBILE_BREAKPOINT,
        isMicroSmart: width < MICROS_BREAKPOINT,
      });
    };

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    mql.addEventListener("change", update);
    update();

    return () => mql.removeEventListener("change", update);
  }, []);

  return responsive;
}
