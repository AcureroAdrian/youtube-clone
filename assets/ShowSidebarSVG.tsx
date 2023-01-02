import { Props } from "interfaces";

export const ShowSidebarSVG = ({ className }:Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      style={{
        pointerEvents: "auto",
        display: "block",
      }}
      className={className}
    >
      <g>
        <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" />
      </g>
    </svg>
  );
};
