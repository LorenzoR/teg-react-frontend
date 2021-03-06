import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from 'src/helpers/shadeColor';
import Country from "src/models/Country";

interface Props {
    countryState: Country["state"];
    isSelected: boolean;
    countryClicked: (id: string) => void;
}

const China = (props: Props) => {
    const [borderFill, setBorderFill] = useState("#caa265");
    const [fill, setFill] = useState("#d7b989");

    return (
        <g
            id="CHINA"
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
                id="china-border"
                fill={props.isSelected ? shadeColor("#caa265", -50) : borderFill}
                fillRule="evenodd"
                stroke="#000"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeOpacity="1"
                strokeWidth="2.352"
                d="M2029.966 667.278c-5.04 3.766-11.547 2.64-17.493 3.381 3.155 3.763 9.232 5.847 6.027 11.246-5.152 5.116-9.94 6.144-16.611 6.909-2.208.526-4.3 1.06-6.395 1.69 2.428 1.568 4.939 3.425 6.762 7.056.953 6.162-1.722 15.63 3.234 20.727 3.006 4.445 1.527 10.293 2.352 15.582 1.081 6.685 9.313 6.793 11.025 14.847 5.384 1.016 9.73 5.871 7.718 11.834-1.386 7.032 8.67 7.856 8.158 14.332-.042 5.768-7.1 7.943-6.027 13.965.25 5.292-3.592 8.767-7.203 11.98-4.472 3.152-8.972 7.015-11.613 11.76-.272 5.957-2.735 10.135-6.1 14.774-.683 3.78-1.057 7.188-5.954 5.586-6.117-1.028-10.549 3.513-13.818 8.012.095 1.085.851 2.27 1.323 3.307 3.541 7.929 10.955 12.61 18.596 16.023 3.916 1.713 7.259-2.134 10.878-3.601 5.502-.54 11.154 2.479 16.096 2.205 2.894-.161 6.63-2.504 8.453-2.94 6.42-1.538 3.638 1.05 8.82 4.336 5.182 3.286 17.906-.94 27.195-3.675 4.179-1.23 6.165-4.23 10.657-6.394 7.097-3.42 7.927-6.243 15.068-5.586 2.953-.25 7.97-2.485 11.025-3.749 3.582-1.482 3.519.865 7.644-.808 6.292-2.553 12.568-9.793 16.905-12.716 2.456-3.033 8.862-8.188 13.156-8.011 6.412.263 6.913-3.555 10.217-6.836 2.35-2.333 6.875-3.995 6.394-8.452-15.247-11.048.905-9.809 2.205-17.567-2.617-6.133-9.253-9.61-11.613-18.154-4.54-2.964-11.046 1.659-14.553 1.25-2.585-.303-2.012-5.924-5.733-6.028-10.428 3.222-7.628-3.176-13.083-6.835-6.477-3.958-5.265 7.755-15.067 3.16-10.44 3.54-8.147-7.523-14.7-11.466-5.483 1.455-13.014-2.403-13.965-6.027-.892-3.397 4.69-6.459 3.16-9.702-1.24-2.63-6.414.116-6.835-3.895-.227-5.875 16.684-5.076 9.334-10.143-6.767-.043-11.785.93-16.023-4.851-3.01-4.108-6.02-14.425-7.13-18.375-5.015-9.368 4.353-4.025 8.233-2.205 9.088-3.63 2.261-7.196-11.246-19.551-9.411-7.565-15.058.315-23.814-.735a229.401 229.401 0 01-5.66-5.66z"
            ></path>
            <path
                id="china-filling"
                fill={props.isSelected ? shadeColor("#d7b989", -50) : fill}
                fillRule="evenodd"
                stroke="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeOpacity="1"
                strokeWidth="1"
                d="M234.63-8.1c-2.563 1.89-6.76.853-8.804 1.429-.623 4.255-7.562 3.655-6.728 7.846-.173 3.483 2.546 6.15 2.268 9.67.499 4.09 5.162 5.414 7.062 8.729 1.087 3.6 2.473 6.937 4.492 10.17.928 3.46-1.97 5.976-2.734 9.062-.3 4.714-4.832 7.118-7.552 10.298-1.92 3.04-2.384 6.843-4.45 9.743-.98 1.29-5.891 3.177-1.857 2.873 3.674-2.113 7.279.613 10.94-.484 4.06-2.817 7.078 1.91 11.107 1.348 4.526-.538 8.067-3.576 11.943-5.653 3.693-.892 7.383-2.031 11.04-2.737 3.819-1.405 6.224-5.033 9.579-7.207 2.285-1.86 7.388-1.152 5.15-5.416-2.076-2.894 4.418-6.358-.526-7.486-3.812.966-6.807-2.456-10.344-3.223-2.856-1.5-6.28.356-9.337-.546-4.076-1.332-5.561-6.009-10.073-6.557-4.302-1.66-3.381-6.253-4.81-9.563-1.11-2.44-.299-4.508-2.848-6.107-2.31-3.412-2.89-7.637-4.651-11.302-.289-1.76 1.517-3.17 1.132-4.887z"
                filter="url(#filter22047)"
                transform="translate(1499.1 701.199) scale(2.352)"
            ></path>
            <g
                id="china-troops-group"
                transform="matrix(.49 0 0 .49 2517.498 1015.362)"
            >
                <circle
                    id="canada-troops-5-1-9-6-6-3-7-7-88"
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
                    id="canada-troops-number-6-2-3-2-1-1-8-4-5"
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
                    <tspan id="tspan3745-2-7-6-6-2-9-4-5-09" x="-898.215" y="-432.383">
                        {props.countryState
                            ? props.countryState.troops + props.countryState.newTroops
                            : "0"}
                    </tspan>
                </text>
            </g>
        </g>
    );
};

China.propTypes = {
    countryState: PropTypes.object,
    isSelected: PropTypes.bool,
    countryClicked: PropTypes.func,
};

export default China;
