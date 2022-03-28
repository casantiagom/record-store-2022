import react from "react";
import "../BarLoader/BarLoader.css";

export default function BarLoader(props) {
  return (
    <div className="spinner-container">
      <svg
        width="87"
        height="50"
        viewBox="0 0 87 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="loader_bars">
          <g id="upperbar">
            <rect id="1_2" width="67" height="14" rx="7" fill="#096191" />
          </g>
          <g id="middlebar">
            <rect
              id="Rectangle 2"
              x="20"
              y="18"
              width="67"
              height="14"
              rx="7"
              fill="#53857a"
            />
          </g>
          <g id="bottombar">
            <rect
              id="3_2"
              y="36"
              width="67"
              height="14"
              rx="7"
              fill="#6768ab"
            />
          </g>
        </g>
      </svg>

      <p>{props.customText}</p>
    </div>
  );
}
