import { deviceEnum } from "@/constants";
import { useEffect, useState } from "react";

/**
 * @function useLayout
 * @description This function is used to get the device type
 */

const useLayout = () => {
  const [deviceType, setDeviceType] = useState<string>(deviceEnum.DESKTOP);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDeviceType(deviceEnum.MOBILE);
      } else if (window.innerWidth < 1024) {
        setDeviceType(deviceEnum.IPAD);
      } else {
        setDeviceType(deviceEnum.DESKTOP);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = deviceType === deviceEnum.MOBILE;
  const isIpad = deviceType === deviceEnum.IPAD;
  const isDesktop = deviceType === deviceEnum.DESKTOP;
  // bigger then mobile view
  const isTablet =
    deviceType === deviceEnum.IPAD || deviceType === deviceEnum.DESKTOP;

  return { deviceType, isMobile, isIpad, isDesktop, isTablet };
};

export default useLayout;
