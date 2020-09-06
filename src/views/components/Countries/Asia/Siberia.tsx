import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from 'src/helpers/shadeColor';

interface Props {
  countryState: any;
  isSelected: boolean;
  countryClicked: (id: string) => void;
}

const Siberia = (props: Props) => {
  const [borderFill, setBorderFill] = useState("#caa265");
  const [fill, setFill] = useState("#d7b989");

  return (
    <g
      id="SIBERIA"
      onClick={(e) => props.countryClicked(e.currentTarget.id)}
      onMouseOver={() => {
        setBorderFill(shadeColor("#caa265", -50));
        setFill(shadeColor("#d7b989", -50));
      }}
      onMouseOut={() => {
        setBorderFill("#caa265");
        setFill("#d7b989");
      }}
    >
      <path
        id="siberia-border"
        fill={props.isSelected ? shadeColor("#caa265", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1968.152 625.163c3.677 1.694 5.306 2.769 6.321 6.835.298 2.95.722 6.107-.147 8.967-2.276 2.674-6.333 3.65-7.57 7.35-1.862 3.629-4.665 6.876-8.232 8.894-3.695 1.063-7.954-.015-11.246 2.572-3.85 1.627-6.271 5.236-10.143 6.836-3.645 2.291-8.068.39-12.054.661-5.238-.129-10.37-1.157-15.582-1.543-.024 2.384-.131 4.764-.44 7.13-3.236 3.77-9.807 1.522-14.407 2.425-4.496.457-8.985 1.014-13.524.808-.308 3.178-.622 6.339-.514 9.408-.22 7.76 5.33 9.228 6.468 17.86-.021.218-.046.385-.073.589 8.025.097 16.086-.16 24.108 0 12.403.767 22.203 2.029 36.247 3.488 7.65-.626 15.893-.743 21.891-3.047 5.998-2.304 9.077-5.759 13.671-8.6 7.763-4.16 12.768-5.537 18.936-7.007 6.67-.765 11.486-1.768 16.638-6.884 4.133-6.96-8.518-7.924-8.305-14.847-2.957-6.92-12.219-3.358-17.64-6.615-4.493-5.403-3.323-13.467-2.72-19.992.86-5.007 5.61-9.534 3.087-14.847-4.177-.132-6.964-2.07-11.164-2.042-2.816.018-7.042 2.005-9.857 1.968-1.259-.236-2.514-.321-3.748-.367z"
      ></path>
      <path
        id="siberia-filling"
        fill={props.isSelected ? shadeColor("#d7b989", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M203.473-20.412c-2.295 6.121-9.59 6.47-14.269 9.779-3.752 2.728-8.78-.418-12.243 2.607-1.462 3.565-10.419-.01-7.567 4.18 4.675.093 9.47-.03 14.15.776 6.532.844 14.283 1.622 19.384-3.477 2.47-1.987 9.458-2.36 9.386-4.76-4.875-.568-8.751-3.98-8.84-9.105z"
        filter="url(#filter25001)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="siberia-troops-group"
        transform="matrix(.49 0 0 .49 2397.569 898.652)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-3-4"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-65-0"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-63-0" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Siberia.propTypes = {
  countryState: PropTypes.object,
  isSelected: PropTypes.bool,
  countryClicked: PropTypes.func,
};

export default Siberia;
