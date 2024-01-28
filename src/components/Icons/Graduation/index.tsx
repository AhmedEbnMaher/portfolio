import React from "react";
import type { SVGProps } from "react";

export function Graduation(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3em"
      height="3em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#1DCBB2"
        d="M12 2L0 9l12 7l10-5.833V17.5h2V9zM3.999 13.49V18a9.985 9.985 0 0 0 8 4A9.985 9.985 0 0 0 20 18v-4.509l-8 4.667z"
      ></path>
    </svg>
  );
}
