import { memo } from "react";

const SvgAlertAnimate = (props) => {
  return (
    <div {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1602 1494"
      >
        <defs>
          <radialGradient
            id="radial-gradient"
            cx="0.5"
            cy="0.5"
            r="0.489"
            gradientTransform="translate(0.011 -0.011) rotate(1.268)"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#0272c1" stopOpacity="0" />
            <stop offset="1" stopColor="#66f9f0" />
          </radialGradient>
          <radialGradient
            id="radial-gradient-4"
            cx="0.5"
            cy="0.5"
            r="0.5"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#0272c1" stopOpacity="0" />
            <stop offset="1" stopColor="#66f9f0" stopOpacity="0.588" />
          </radialGradient>
        </defs>
        <g id="Group_6" data-name="Group 6" transform="translate(-474 313)">
          <g
            id="Group_1"
            data-name="Group 1"
            transform="translate(148 68)"
            opacity="0.7"
          >
            <ellipse
              id="Ellipse_4"
              data-name="Ellipse 4"
              cx="801"
              cy="747"
              rx="801"
              ry="747"
              transform="translate(326 -381)"
              opacity="0.1"
              fill="url(#radial-gradient)"
            />
            <circle
              id="Ellipse_2"
              data-name="Ellipse 2"
              cx="574.5"
              cy="574.5"
              r="574.5"
              transform="translate(554 -208)"
              opacity="0.4"
              fill="url(#radial-gradient)"
            />
            <circle
              id="Ellipse_3"
              data-name="Ellipse 3"
              cx="379"
              cy="379"
              r="379"
              transform="translate(749 -13)"
              opacity="0.85"
              fill="url(#radial-gradient)"
            />
            <ellipse
              id="Ellipse_5"
              data-name="Ellipse 5"
              cx="114.5"
              cy="116"
              rx="114.5"
              ry="116"
              transform="translate(1014 251)"
              opacity="0.85"
              fill="url(#radial-gradient-4)"
            />
          </g>
          <circle
            cx="12"
            cy="12"
            r="12"
            transform="translate(1264 422)"
            fill="rgb(0, 255, 186, 1)"
          />
          <circle
            cx="12"
            cy="12"
            r="12"
            transform="translate(1264 422)"
            fill="none"
            stroke="rgb(0, 255, 186, 0.5)"
            strokeWidth="10"
          >
            <animate
              attributeType="SVG"
              attributeName="r"
              begin="0s"
              dur="1.5s"
              repeatCount="indefinite"
              from="10"
              to="50"
            />
            <animate
              attributeType="CSS"
              attributeName="stroke-width"
              begin="0s"
              dur="1.5s"
              repeatCount="indefinite"
              from="10"
              to="0"
            />
            <animate
              attributeType="CSS"
              attributeName="opacity"
              begin="0s"
              dur="1.5s"
              repeatCount="indefinite"
              from="10"
              to="0"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default memo(SvgAlertAnimate);
