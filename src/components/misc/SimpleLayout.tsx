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
    <div className="picture_bg">
      {showNav && (
        <div className="flex simple_layout_bg items-center lg:px-8 px-3 h-[5dvh] shadow-md w-full py-3 bg_white">
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
      <p className="h-[3dvh] text-sm absolute bottom-0 right-0 w-full text-right shadow-xl pr-4 text_white">
        {appName} ©{new Date().getFullYear()}
      </p>
    </div>
  );
}
