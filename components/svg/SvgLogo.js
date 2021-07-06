import { memo } from "react";

const Logo = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="89.947"
      height="100.178"
      viewBox="0 0 89.947 100.178"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#a4fff9" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
      </defs>
      <path
        id="icon"
        d="M72.6.5H23.149A20.749,20.749,0,0,1,2.9,21.175V57.41c0,31.972,44.974,43.268,44.974,43.268s44.974-11.3,44.974-43.268V21.175A20.607,20.607,0,0,1,72.6.5Zm4.689,59.467H57.252V80H38.5V59.967H18.46V41.211H38.5V21.175H57.252V41.211H77.288V59.967Z"
        transform="translate(-2.9 -0.5)"
        fill="url(#linear-gradient)"
      />
    </svg>
  );
};

export default memo(Logo);
