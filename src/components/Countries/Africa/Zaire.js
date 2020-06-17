import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Zaire = (props) => {
  const [borderFill, setBorderFill] = useState("#fdb456");
  const [fill, setFill] = useState("#fec883");

  return (
    <g
      id="ZAIRE"
      onClick={(e) => props.countryClicked(e.currentTarget.id)}
      onMouseOver={() => {
        setBorderFill(shadeColor("#fdb456", -50));
        setFill(shadeColor("#fec883", -50));
      }}
      onMouseOut={() => {
        setBorderFill("#fdb456");
        setFill("#fec883");
      }}
    >
      <path
        id="zaire-border"
        fill={props.isSelected ? shadeColor("#fdb456", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1768.38 1064.472c-.891-.021-1.812.024-2.72.073-4.55.914-9.178 1-13.818.735a10.83 10.83 0 00-.809 1.617c-6.073 3.498-11.914 8.276-17.052 13.671-3.66 5.656-7.82 10.274-14.406 12.79-7.495-2.707-4.36 5.627-8.158 8.525-8.166-.65-2.405 9.746-5.513 12.275.507.6 1.072 1.156 1.691 1.69 4.962 2.596 11.256-.066 16.684 1.323 5.043.629 10.153 1.768 13.524 5.954 2.732 2.198 12.607 9.643 11.54 1.617-.51-5.373 5.485-6.371 6.909-1.323 4.263 3.51 3.781 9.436 6.982 13.597 2.883 3.74 8.116 4.592 11.687 7.57 3.42 3.59 6.548 9.122 12.421 7.792 6.715-.433 8.044-7.402 7.791-12.936.508-4.161 3.938-8.033 7.424-9.85 5.122 2.12 8.534-1.021 11.833-4.63 3.579-5.425 8.458-9.918 11.76-15.508.377-4.868 1.277-10.488-1.69-14.774-4.42-1.144-9.216-2.654-13.818-3.822-6.342-.141-12.015-3.628-17.126-7.056-4.93-2.199-7.14-7.219-9.555-11.613-3.636-5.513-9.347-7.56-15.582-7.717z"
      ></path>
      <path
        id="zaire-filling"
        fill={props.isSelected ? shadeColor("#fec883", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M114.38 159.056c-2.282.379-4.95-.107-6.81 1.58-3.07 1.955-5.123 5.032-7.627 7.586-1.257 1.443-3.467 1.983-4.664 3.18.507 2 3.627.644 5.072 1.758 1.351.535 2.554 2.3 4.136 1.565 2.369-2.1 6.374-1.176 7.997 1.416 1.513 1.62 2.334 3.652 3.212 5.628 1.037 1.893 3.402 1.881 4.684 3.474 1.76 1.05 1.012-2.305 2.099-3.056 1.214-2.124 3.233-3.79 5.575-4.516 1.879.556 3.208-1.225 4.143-2.564 1.068-1.166 3.197-3.14 1.321-4.563-1.816-.25-3.673-.563-5.43-1.183-2.773-.935-5.289-2.546-7.516-4.423-1.416-1.235-2.438-2.84-3.223-4.529-.627-.977-1.824-1.502-2.97-1.353z"
        filter="url(#filter7335)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="zaire-troops-group"
        transform="matrix(.49 0 0 .49 2210.028 1320.418)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-90"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-81"
          x="-898.215"
          y="-432.383"
          style={{
            lineHeight: "125%",
            WebkitTextAlign: "center",
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-311" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Zaire.propTypes = {
  countryState: PropTypes.object,
  isSelected: PropTypes.bool,
  countryClicked: PropTypes.func,
};

export default Zaire;
