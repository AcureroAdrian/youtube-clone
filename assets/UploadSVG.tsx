import { Props } from "interfaces";

export const UploadSVG = ({ className }:Props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      style={{
        display: "block",
      }}
      className={className}
    >
      <g>
        <path
          d="M17,18v1H6V18ZM6.49,9l.71.71L11,5.91V16h1V5.91l3.8,3.81L16.51,9l-5-5Z"
        />
      </g>
    </svg>
  );
};
