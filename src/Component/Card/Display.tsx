import React, { ComponentProps } from "react";

export default function Display({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
