import React, { useState } from "react";
import PropTypes from "prop-types";
import { Popover } from "antd";

import shadeColor from "../../../helpers/shadeColor";

const Argentina = (props) => {
  const [borderFill, setBorderFill] = useState("#6bb682");
  const [fill, setFill] = useState("#9be09e");

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  return (
    <Popover content={content} title="Argentina">
      <g
        id="ARGENTINA"
        onClick={(e) => props.countryClicked(e.currentTarget.id)}
        onMouseOver={() => {
          setBorderFill(shadeColor("#6bb682", -50));
          setFill(shadeColor("#9be09e", -50));
        }}
        onMouseOut={() => {
          setBorderFill("#6bb682");
          setFill("#9be09e");
        }}
      >
        <path
          id="argentina-border"
          fill={props.isSelected ? shadeColor("#6bb682", -50) : borderFill}
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="2.352"
          d="M1322.16 1019.637c-2.948-.014-5.823 1.036-7.937 3.381-4.448 5.243-1.598 12.777-6.321 18.155a39.624 39.624 0 00-2.058 3.675c.786.43 1.607.803 2.572 1.029 6.158 6.208-5.575 10.297-2.131 16.905 4.15 3.153 4.025 8.257 3.748 13.009-.873 4.987-4.606 8.897-5.586 13.965-.62 4.691-4.059 8.385-3.969 13.157.127 4.565-1.787 8.95-.882 13.524 1.2 5.304-2.237 9.314-2.72 14.038-.435 5.358-.14 10.936-.955 16.244-3.73 6.136-7.228 13.09-7.203 20.433 3.718 4.903 11.749 15.227 14.847 4.704 6.682-2.229 9.09-10.721 16.538-12.054 8.42-1.503 3.287-12.85 9.922-14.994 5.553 5.948 11.56-1 15.803-4.851-.55-7.103 9.631-7.213 7.423-14.774-.512-1.709-2.808-12.759-.294-8.379 3.233 8.096 12.552 9.871 17.934 2.867 8.721-2.438 6.089-11.455-.147-15.141-5.349-3.517-7.033-9.87-6.541-15.95a12.756 12.756 0 011.25-5.439c-.36-3.112.243-6.525-1.912-8.673-4.183.967-7.085-4.946-2.793-6.762 3.07-3.662-.74-9.479 3.014-12.789 3.416-1.499 7.872.083 11.025-2.866 2.155-3.494 1.605-7.941.588-11.687-5.45-.385-12.276-.273-16.832-3.822-4.48 1.385-9.466 1.468-13.524-.294-4.45-3.738-8.061-8.315-12.789-11.76-2.38-3.052-6.277-4.832-10.07-4.851z"
        ></path>
        <path
          id="argentina-filling"
          fill={props.isSelected ? shadeColor("#9be09e", -50) : fill}
          fillRule="evenodd"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1"
          d="M-74.933 140.494c.353 2.202-1.663 4.254-.64 6.266 1.29 2.847-2.107 5.23-.252 7.725 1.156 3.861.294 8.179-1.954 11.482-.194 2.085-1.806 3.836-1.643 5.917-.51 2.487-.162 5.008-.494 7.49-.556 2.107-1.425 4.17-1.222 6.396.016 2.568-.148 5.271-1.621 7.473.384.13 2.188-1.958 3.301-2.203 1.997-1.147 1.238-3.97 3.186-5.293 1.579-1.69 4.194-2.693 6.401-1.66.354-1.911 2.99-3.05 2.538-5.058-.579-2.423-.25-5.4 1.979-6.899 1.128-1.249 3.845-.156 4.448-.78a13.738 13.738 0 01-1.058-9.106c-2.868-1.838-3.697-6.375-1.282-8.906-.521-1.861.952-4.467 1.254-5.447-3.01.25-6.274-.63-8.259-3.028-1.529-1.49-3.06-2.98-4.682-4.37z"
          filter="url(#filter27935)"
          transform="translate(1499.1 701.199) scale(2.352)"
        ></path>
        <g
          id="argentina-troops-group"
          transform="matrix(.49 0 0 .49 1769.75 1329.272)"
        >
          <circle
            id="canada-troops-5-1-9-6-6-3-1"
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
            id="canada-troops-number-6-2-3-2-1-1-5"
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
            <tspan id="tspan3745-2-7-6-6-2-9-5" x="-898.215" y="-432.383">
              {props.countryState
                ? props.countryState.troops + props.countryState.newTroops
                : "0"}
            </tspan>
          </text>
        </g>
      </g>
    </Popover>
  );
};

Argentina.propTypes = {
  countryState: PropTypes.object,
  isSelected: PropTypes.bool,
  countryClicked: PropTypes.func,
};

export default Argentina;
