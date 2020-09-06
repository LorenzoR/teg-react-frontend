import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from 'src/helpers/shadeColor';

interface Props {
  countryState: any;
  isSelected: boolean;
  countryClicked: (id: string) => void;
}

const Iceland = (props: Props) => {
  const [borderFill, setBorderFill] = useState("#eeca93");
  const [fill, setFill] = useState("#f3d9b0");

  return (
    <g
      id="ICELAND"
      onClick={(e) => props.countryClicked(e.currentTarget.id)}
      onMouseOver={() => {
        setBorderFill(shadeColor("#eeca93", -50));
        setFill(shadeColor("#f3d9b0", -50));
      }}
      onMouseOut={() => {
        setBorderFill("#eeca93");
        setFill("#f3d9b0");
      }}
    >
      <path
        id="islandia-border"
        fill={props.isSelected ? shadeColor("#eeca93", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1440.254 737.577c-6.576.083 1.646-8.475 5.146-4.28 4.5 2.716 10.085 1.126 11.654-4.12 1.516-3.639 5.837-11.35 8.228-3.958.988 6.661 7.43 4.893 11.932 4.378 2.526-1.078 6.086-6.17 6.756-.336-1.21 6.965 11.806.224 8.784 7.476-.016 3.118 5.909 3.643 1.502 6.58-2.856 2.348-7.768 7.234-1.599 9.169 4.547-.255 9.242 1.783 8.088 7.117-1.254 4.682-5.103 11.745-.043 15.49 5.034 1.658 10.558 4.377 8.852 10.784 1.024 6.04-3.295 11.016-7.706 14.421-5.72 1.059-9.255 6.27-14.804 7.514-3.993 1.555-12.189-2.065-12.082 4.728 2.933 3.487 5.369 10.202 1.208 13.34-5.21-1.152-5.884-10.025-11.488-8.898-5.324 1.005-2.31 11.726-9.033 7.728-4.385-3.482-9.641-5.675-14.641-8.184-6.412-1.217-3.962-7.822-4.1-12.37.666-7.594-8.327-7.627-12.515-11.464-3.396-3.08-5.448-3.704-6.445-8.578-3.572-3.874-3.04-14.436 4.108-12.624 5.117 1.295 6.144-4.577 6.654-9.04.839-4.698-2.092-10.556 2.037-14.239 2.904-3.398 6.235-6.43 11.085-5.796 1.01-1.471-.562-3.744-1.578-4.838z"
      ></path>
      <path
        id="islandia-filling"
        fill={props.isSelected ? shadeColor("#f3d9b0", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M-15.12 16.525c-1.118 1.416-3.065 2.145-4.556 2.483-.619 2.065-2.76 3.556-4.913 3.392-.956 1.579.016 3.55-.606 5.26-.313 2.693-1.705 5.482-4.288 6.621.842 1.304 2.655 1.435 3.856 2.375 2.012 1.106 3.583 3.052 3.875 5.374.206 1.64-.222 3.562 1.88 3.98 1.756.868 2.8-2.014 4.766-1.625 1.247-.085 1.509-2.314 2.948-2.764 1.628-1.137 3.66-.963 5.534-1.159-.055.744 3.829-1.978 5.249-2.654 1.272-.583 1.074-2.01-.31-2.103C-4.76 33.92-6.07 29.81-4.883 26.51c-.965-1.287-2.934-1.632-3.412-3.36-.845-1.736-.777-3.895.206-5.562-1.576-1.241-3.673.249-5.444-.544a7.643 7.643 0 01-1.588-.519z"
        filter="url(#filter16117)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="islandia-troops-group"
        transform="matrix(.49 0 0 .49 1903.363 989.606)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7"
          cx="-899.478"
          cy="-446.178"
          r="37.706"
          fill={
            props.countryState.player
              ? props.countryState.player.color
              : "#e03981"
          }
          stroke="#000"
        ></circle>
        <text
          id="canada-troops-number-6-2-3-2-1-1-8-4"
          x="-898.215"
          y="-432.383"
          style={{
            lineHeight: "125%",
            // WebkitTextAlign: "center",
            textAlign: "center",
          }}
          fill={props.countryState.player && ['pink', 'yellow'].includes(props.countryState.player.color) ? '#000' : '#FFF'}
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          fontFamily="sans-serif"
          fontSize="40"
          fontStyle="normal"
          fontWeight="normal"
          letterSpacing="0"
          textAnchor="middle"
          wordSpacing="0"
          xmlSpace="preserve"
        >
          <tspan id="tspan3745-2-7-6-6-2-9-4-5" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Iceland.propTypes = {
  countryState: PropTypes.object,
  isSelected: PropTypes.bool,
  countryClicked: PropTypes.func,
};

export default Iceland;
