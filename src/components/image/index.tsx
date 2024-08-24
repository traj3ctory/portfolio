import { miscImages } from "@/assets";
import { Image, ImageProps } from "antd";
import { useState } from "react";

/**
 * @author traj3ctory
 * @function @AppImage
 **/

interface IProps extends ImageProps {
  placeholder?: string;
  eStyle?: React.CSSProperties;
  items?: Array<{ src: string; srcSet?: string; previewSrc?: string }> | null;
}

export default function AppImage({
  placeholder = miscImages._4X3,
  eStyle,
  items = [],
  ...rest
}: IProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {!isLoaded && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        >
          <div className="loader" />
        </div>
      )}
      {items && items?.length > 0 && (
        <Image.PreviewGroup items={items}>
          <Image
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 0.75s",
              ...eStyle,
            }}
            fallback={placeholder}
            {...rest}
          />
        </Image.PreviewGroup>
      )}
      {items && items?.length === 0 && (
        <Image
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.75s",
            ...eStyle,
          }}
          fallback={placeholder}
          {...rest}
        />
      )}
    </div>
  );
}
