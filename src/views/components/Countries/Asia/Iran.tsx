import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from 'src/helpers/shadeColor';

interface Props {
  countryState: any;
  isSelected: boolean;
  countryClicked: (id: string) => void;
}

const Iran = (props: Props) => {
  const [borderFill, setBorderFill] = useState("#caa265");
  const [fill, setFill] = useState("#d7b989");

  return (
    <g
      id="IRAN"
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
        id="iran-border"
        fill={props.isSelected ? shadeColor("#caa265", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1885.685 707.997c-3.806 8.672-13.148 5.268-19.429 7.43-.308 4.512 3.523 9.056-3.29 10.593-2.222 7.57 11.756-2.46 9.024 6.784-1.578 6.052-1.456 12.832 4.695 15.535 1.828 7.754-4.67 15.803-.309 23.312 6.065-.387 10.727 1.055 8.736 8.269 9.926 1.165 6.97 13.431 14.47 17.768 9.008 4.172 13.765 13.027 18.69 21.21 3.85 5.7 11.006 7.64 15.409 12.873 1.058 10.538 14.559 10.066 18.72 17.635 4.29 8.415 13.117 12.898 21.673 15.743 6.613 3.198 10.559 14.85 18.772 12.223 4.344-5.61 21.733-9.163 11.068-17.108-7.641-3.414-15.005-8.077-18.546-16.006-3.632-7.45-6.246-16.768-14.678-20.2-9.066-5.299-5.566-19.233-15.095-24.2-8.992-6.065-3.967-19.59-10.487-26.002-10.346.49-5.118-16.072-16.04-12.897-12.935 2.912-7.566-11.991-9.35-19.286-1.087-11.768-11.444-16.236-21.345-18.451-2.84-6.331-4.366-13.076-12.688-15.225z"
      ></path>
      <path
        id="iran-filling"
        fill={props.isSelected ? shadeColor("#d7b989", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M164.254 9.525c-2.154 1.06.581 3.996-.784 5.756 1.234 2.368 3.195 4.635 2.207 7.549-1.135 2.228.403 3.67 2.098 4.71.88 2.387 2.942 3.87 4.027 6.084.366 3.035 3.065 4.079 5.077 5.888 2.488 2.305 4.07 5.38 5.977 8.105 2.486 1.998 5.977 3.416 6.866 6.784 1.966 1.98 5.21 2.316 6.628 4.942 1.251 2.3 3.159 4.12 5.652 4.98 2.414.961-.669-1.94-.618-2.944-.705-2.716-2.627-4.515-4.962-5.832-2.52-2.17-3.485-5.457-4.442-8.5-1.835-2.104-4.376-3.735-4.874-6.739-.893-2.38-.08-5.351-2.873-6.304-1.305-2.184-2.825-3.962-5.512-3.907-3.054-1.039-4.786-4.239-4.815-7.347-.469-2.421.957-5.927-1.836-7.288-2.323-1.111-5.56-.987-6.782-3.709-.416-.707-.736-1.465-1.034-2.228z"
        filter="url(#filter20088)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="iran-troops-group"
        transform="matrix(.49 0 0 .49 2363.763 1008.118)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-44"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-7"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-631" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Iran.propTypes = {
  countryState: PropTypes.object,
  isSelected: PropTypes.bool,
  countryClicked: PropTypes.func,
};

export default Iran;
