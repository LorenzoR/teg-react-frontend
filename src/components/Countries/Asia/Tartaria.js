import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Tartaria = (props) => {
  const [borderFill, setBorderFill] = useState("#caa265");
  const [fill, setFill] = useState("#d7b989");

  return (
    <g
      id="TARTARIA"
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
        id="tartaria-border"
        fill={props.isSelected ? shadeColor("#caa265", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1894.364 582.474c-1.223.074 1.007 4.032-.079 4.689-3.56 2.894-6.519 6.68-9.04 10.51-1.76 3.75-5.104 5.466-8.848 7.102-3.745 1.636-5.796-2.16-12.495.441-6.639 2.577-9.35-1.888-11.867-.286-1.61 1.025.28 5.776-1.188 6.856-.561 2.289-2.004 3.533-3.675 4.483.065 1.269-.78 2.856-.441 3.749-.986 7.401 1.408 15.532 10.143 16.17 5.872 1.953 16.351-1.286 17.86 6.835-.283 5.489-1.51 8.916 1.323 13.45.926 1.483 4.363 2.309 5.292 6.322.642 4.37.21 8.856-.22 13.303 4.538.206 9.028-.35 13.524-.808 4.6-.903 11.17 1.346 14.406-2.426.758-5.792.392-11.668.22-17.493-1.21-4.697 2.827-4.828 5.44-6.982 4.83-3.163-2.049-4.797-2.426-8.159-2.619-3.36-.455-6.246 2.572-8.158 4.959-4.06-3.36-6.18-2.205-10.511 1.458-4.641 6.774-7.395 7.497-12.274 1.773-4.652-2.203-5.262-5.512-6.101-.83-5.188-6.518-6.71-8.38-11.319-.991-3.753-8.232-9.614-11.9-9.393z"
      ></path>
      <path
        id="tartaria-filling"
        fill={props.isSelected ? shadeColor("#d7b989", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M169.66-43.006c-1.74 1.82-2.925 4.24-5.262 5.42-2.028 1.263-4.545 1.98-6.912 1.365-1.686.163-4.083.093-4.686 2.09-.847 2.506 2.456 1.74 3.893 2.066 2.856.219 5.793 1.608 7.054 4.309.885 1.579.982 3.455.643 5.188.388 1.708 2.266 2.579 2.65 4.324.07 1.382.715 3.513 2.303 1.97.893-1.818-.414-4.072.465-6.004 1.43-1.466 1.2-3.33.673-5.137-.202-1.936 1.666-3.652.542-5.583-.93-2.624 2.734-4.63 1.191-6.952-.728-1.12-1.885-1.892-2.553-3.056zm-16.937 8.562c-.264.112.194.303 0 0z"
        filter="url(#filter27960)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="tartaria-troops-group"
        transform="matrix(.49 0 0 .49 2329.957 840.7)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-49"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-09"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-17" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Tartaria.propTypes = {
  countryState: PropTypes.object,
  isSelected: PropTypes.bool,
  countryClicked: PropTypes.func,
};

export default Tartaria;
