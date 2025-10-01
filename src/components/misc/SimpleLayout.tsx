import { miscImages } from "@/assets";
import { AppImage } from "@/components";
import { appName } from "@/constants";
import { useLayout } from "@/hooks";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  title?: string | null;
  showNav?: boolean;
}

/**
 * @author traj3ctory
 * @function @SimpleLayout
 **/

export default function SimpleLayout({ children, showNav = true }: IProps) {
  const { isMobile, isTablet } = useLayout();

  return (
    <div className="picture_bg min-h-[100dvh] relative bg-white dark:bg-gray-950 transition-colors">
      {showNav && (
        <div className="flex items-center lg:px-8 px-3 h-14 shadow-md w-full py-3 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          {isTablet && (
            <AppImage
              src={miscImages.Me}
              alt="logo"
              className="md:block hidden mb-0"
              width={120}
              preview={false}
            />
          )}
          {isMobile && (
            <AppImage
              src={miscImages.Me}
              alt="logo"
              preview={false}
              width={40}
            />
          )}
        </div>
      )}
      <div className="content">
        <img src={miscImages.svgTriangle} alt="arrow" className="arrow one" />

        <img src={miscImages.svgTriangle} alt="arrow" className="arrow two" />

        <img src={miscImages.svgTriangle} alt="arrow" className="arrow three" />

        <img src={miscImages.svgTriangle} alt="arrow" className="arrow four" />

        {children}
      </div>
      <p className="h-8 leading-8 text-xs md:text-sm absolute bottom-0 right-0 w-full text-right shadow-inner pr-4 text-gray-600 dark:text-gray-300 bg-white/70 dark:bg-gray-900/60 backdrop-blur">
        {appName} ©{new Date().getFullYear()}
      </p>
    </div>
  );
}
