import React from "react";
import type { SVGProps } from "react";

export function Work(props: SVGProps<SVGSVGElement>) {
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
        d="m19.65 20.196l.546-.546l-1.811-1.804v-2.73h-.77v3.046zM10 7h4V5h-4zm8 15q-1.671 0-2.836-1.164T14 18q0-1.671 1.164-2.836T18 14q1.671 0 2.836 1.164T22 18q0 1.671-1.164 2.836T18 22M3 20V7h6V4h6v3h6v5.813q-.683-.413-1.448-.613Q18.787 12 18 12q-2.496 0-4.248 1.752T12 18q0 .51.086 1.01q.085.502.262.99z"
      ></path>
    </svg>
  );
}
