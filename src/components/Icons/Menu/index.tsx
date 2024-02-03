import React from "react";
import type { SVGProps } from "react";
type Props = {
  scrollColor: string;
};
export function Menu({ scrollColor }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3em"
      height="3em"
      viewBox="0 0 24 24"
    >
      <path
        fill={`${scrollColor}`}
        d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
      ></path>
    </svg>
  );
}
