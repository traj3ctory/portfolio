import { Button, ButtonProps } from "antd";
import { ReactNode } from "react";

interface IProps extends ButtonProps {
  children?: ReactNode;
  className?: string;
  text?: string | ReactNode;
  type?: "primary" | "dashed" | "link" | "text" | "default";
}

/**
 * @author traj3ctory
 * @function @AppButton
 **/

export default function AppButton({
  children,
  text,
  type = "primary",
  className = "",
  ...rest
}: IProps) {
  const primaryColor =
    type === "primary" ? "bg-primary-600 hover:bg-primary-700 text-white" : "";
  // group tailwind css into one
  const buttonClass = `flex items-center justify-center py-3 text-sm ${primaryColor} rounded-sm ${className}`;
  return (
    <Button className={buttonClass} {...rest} type={type}>
      {children || text}
    </Button>
  );
}
