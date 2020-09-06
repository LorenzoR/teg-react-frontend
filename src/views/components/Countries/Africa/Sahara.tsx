import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from 'src/helpers/shadeColor';

interface Props {
  countryState: any;
  isSelected: boolean;
  countryClicked: (id: string) => void;
}

const Sahara = (props: Props) => {
  const [borderFill, setBorderFill] = useState("#fdb456");
  const [fill, setFill] = useState("#fec883");

  return (
    <g
      id="SAHARA"
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
        id="sahara-border"
        fill={props.isSelected ? shadeColor("#fdb456", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1702.032 1114.448c10.344 2.62-.676-13.364 9.375-12.562 3.797-2.899.648-11.246 8.144-8.54 6.586-2.516 10.777-7.132 14.438-12.788 5.138-5.395 11.001-10.14 17.074-13.637 2.213-5.595 9.325-8.215 9.1-14.983 2.616-6.138 9.31-9.552 11.98-15.76 3.127-2.834 15.08.038 12.96-6.29-5.209-3.341-11.721-3.873-17.738-4.297-6.402-2.486-4.878-10.203-7.47-14.838-3.425-5.026-14.085-2.094-12.871-9.381-3.87-6.587-11.828-1.135-17.403-1.192-4.083-1.777-9.65-13.335-13.05-3.995-2.139 4.8-7.87 7.619-9.776.835-2.738-4.438-9.95-11.784-14.697-5.87-4.48 5.52-9.783 3.905-14.2.15-3.407 3.964-15.012 10.243-6.049 14.594-3.626 5.29-8.229-7.887-11.971-4.54-5.444 3.858-5.695 10.775-5.124 16.784.772 4.453 3.2 11.525-4.084 9.91-1.657 3.738-4.98 4.857-8.234 5.437 1.811 4.646 3.274 12.62-3.316 14.919-8.125 3.494 1.7 10.55 5.292 13.488 1.735 6.898 6.324 12.266 12.23 15.926 6.134-.733 10.587.3 8.4 7.697 1.093 3.722 7.646 1.569 7.161 7.278.772 6.296 7.76 10.089 13.192 12.396 5.338 3.466 8.64 11.088 16.637 9.26z"
      ></path>
      <path
        id="sahara-filling"
        fill={props.isSelected ? shadeColor("#fec883", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M83.66 129.056c-1.858 1.328-5.17.604-5.55 3.595-1.273 1.969-3.648 3.266-6.012 3 .766 3.393-.942 7.636-4.534 8.546-.573 1.942-1.912 4.355-1.084 6.153.679 2.074 1.926 4.357 4.398 4.334 2.227.535 4.139 2.174 4.865 4.364 1.122 2.115 2.885 3.884 3.607 6.207 1.313 1.158 3.758 3.182 5.348 2.094 1.718-1.811 2.422-4.738 4.924-5.688 2.44-.515 5.025-1.717 6.111-4.108 2.145-2.36 4.664-4.357 7.334-6.09 2.219-1.964 2.693-5.082 4.438-7.297 1.638-1.122 2.395-3.354.393-4.485-.945-2.392-2.132-4.772-4.698-5.547-1.68-2.341-4.34-1.15-6.584-1.618-2.25-1.727-4.103.731-6.427.54-2.688.032-5.48-1.438-6.528-4zm-4.656 36.22c-.095.84.356.406 0 0z"
        filter="url(#filter4397)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="sahara-troops-group"
        transform="matrix(.49 0 0 .49 2141.612 1262.465)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-6"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-462"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-58" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Sahara.propTypes = {
  countryState: PropTypes.object,
  isSelected: PropTypes.bool,
  countryClicked: PropTypes.func,
};

export default Sahara;
