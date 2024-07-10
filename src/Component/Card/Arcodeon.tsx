/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import "./css/style.css";
function Component({ children }: React.ComponentProps<"div">) {
  if (children !== undefined) {
    return <div>{children}</div>;
  } else {
    return <>Vazio!</>;
  }
}
interface ArcodeonProps extends React.ComponentProps<"div">{
  title:string
}
export default function Arcodeon({
  children,
  title,
}: ArcodeonProps) {
  const [flipFlop, setFlipFlop] = useState(false);
  console.log(title)
  return (
    <>
      <div
        onClick={() => {
          setFlipFlop(!flipFlop);
        }}
        className="Item"
      >
        <div>
          <h2
            className={`select-none text-xl text-Dark-purple  font-bold flex items-center`}
          >
            {(title === "") && "Vazio!"}
            {title !== undefined && title}
          </h2>
        </div>
        <div>
          {!flipFlop && (
            <img
              className="select-none"
              src="assets/images/icon-plus.svg"
              alt="adad"
            />
          )}
          {flipFlop && (
            <img
              className="select-none"
              src="assets/images/icon-minus.svg"
              alt="adad"
            />
          )}
        </div>
      </div>
      {flipFlop && (
        <Component>
          <div className="text-pink font-semibold">{children}</div>
        </Component>
      )}
      <hr />
    </>
  );
}
