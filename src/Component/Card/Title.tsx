/* eslint-disable @next/next/no-img-element */
import React, { Component, ComponentProps } from "react";

export default function Title({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className="flex items-center">
      <img src="assets/images/icon-star.svg" alt="Star" />
      <h2 className={className} {...props}>
        {children}
      </h2>
    </div>
  );
}
