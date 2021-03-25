import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from 'src/helpers/shadeColor';
import Country from "src/models/Country";

interface Props {
    countryState: Country["state"];
    isSelected: boolean;
    countryClicked: (id: string) => void;
}

const Chile = (props: Props) => {
    const [borderFill, setBorderFill] = useState("#6bb682");
    const [fill, setFill] = useState("#9be09e");

    return (
        <g
            id="CHILE"
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
                id="chile-border"
                fill={props.isSelected ? shadeColor("#6bb682", -50) : borderFill}
                fillRule="evenodd"
                stroke="#000"
                strokeDasharray="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="4"
                strokeOpacity="1"
                strokeWidth="2.352"
                d="M1278.812 1040.679c-5.175-6.995-5.91-2.502-3.498-7.366s8.617-6.142 13.66-5.827c4.42 1.988 10.752 2.756 12.757 7.652-1.168 5.22 1.567 9.551 6.715 10.753 6.157 6.209-5.61 10.283-2.165 16.89 4.15 3.154 4.057 8.249 3.78 13-.873 4.987-4.666 8.871-5.646 13.939-.62 4.69-4.042 8.447-3.951 13.219.127 4.565-1.75 8.91-.844 13.485 1.2 5.304-2.285 9.358-2.766 14.082-.436 5.358-.134 10.915-.948 16.223-3.884 6.389-6.55 13.46-6.214 21.137-1.122 2.913 6.76 6.008 5.062 5.3-4.582 1.264-13.314 1.38-12.828-5.149-1.782-2.15-1.454-5.651-3.563-8.554-2.153-2.963-6.728-5.335-7.057-8.329-.843-6.96 4.692-7.503 5.291-12.561 4.065-25.815-8.83-9.146-6.382-27.677 8.82-6.078 6.422-10.695 3.597-21.465 4.197-9.276 1.661-13.06.71-22.916-1.724-7.915 9.466-18.84 4.29-25.836z"
            ></path>
            <path
                id="chile-filling"
                fill={props.isSelected ? shadeColor("#9be09e", -50) : fill}
                fillRule="evenodd"
                stroke="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="4"
                strokeOpacity="1"
                strokeWidth="1"
                d="M-89.933 142.619c.146 1.816 1.235 3.585.536 5.445-.442 2.31-1.789 4.353-2.215 6.652.13 2.791 1.299 5.605.348 8.378-.797 1.942.208 3.813.405 5.744.354 2.335-.498 4.729-2.196 6.357-.779 1.508 2.06 2.009 2.114 3.675 1.052 2.798.566 5.9-.04 8.738-.088 1.4-2.92 3.49-.473 3.668.773-1.752 1.676-3.601 1.417-5.597.004-2.591.207-5.248 1.304-7.63.178-1.96-.478-3.941.213-5.873.145-2.188.47-4.37 1.459-6.354.79-1.937.877-4.115 2.17-5.842 1.444-1.798.245-3.69-.938-5.172-.812-2.063.12-4.127.686-6.115-2.207-1.045-2.032-4.095-3.192-5.477-.53-.208-1.066-.397-1.598-.597zm-3.188 48.187c.112-.275.228.264 0 0z"
                filter="url(#filter28915)"
                transform="translate(1499.1 701.199) scale(2.352)"
            ></path>
            <g
                id="chile-troops-group"
                transform="matrix(.49 0 0 .49 1726.286 1292.246)"
            >
                <circle
                    id="canada-troops-5-1-9-6-6-3-06"
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
                    id="canada-troops-number-6-2-3-2-1-1-32"
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
                    <tspan id="tspan3745-2-7-6-6-2-9-0" x="-898.215" y="-432.383">
                        {props.countryState
                            ? props.countryState.troops + props.countryState.newTroops
                            : "0"}
                    </tspan>
                </text>
            </g>
        </g>
    );
};

Chile.propTypes = {
    countryState: PropTypes.object,
    isSelected: PropTypes.bool,
    countryClicked: PropTypes.func,
};

export default Chile;
