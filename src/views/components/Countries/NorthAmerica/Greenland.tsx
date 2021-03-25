import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from 'src/helpers/shadeColor';
import Country from "src/models/Country";

interface Props {
    countryState: Country["state"];
    isSelected: boolean;
    countryClicked: (id: string) => void;
}

const Greenland = (props: Props) => {
    const [borderFill, setBorderFill] = useState("#d89a61");
    const [fill, setFill] = useState("#e0b881");

    return (
        <g
            id="GREENLAND"
            onClick={(e) => props.countryClicked(e.currentTarget.id)}
            onMouseOver={() => {
                setBorderFill(shadeColor("#d89a61", -50));
                setFill(shadeColor("#e0b881", -50));
            }}
            onMouseOut={() => {
                setBorderFill("#d89a61");
                setFill("#e0b881");
            }}
        >
            <path
                id="groenlandia-border"
                fill={props.isSelected ? shadeColor("#d89a61", -50) : borderFill}
                fillRule="evenodd"
                stroke="#000"
                strokeDasharray="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="4"
                strokeOpacity="1"
                strokeWidth="2.352"
                d="M1296.03 543.454c-3.392 2.74-7.81 6.983-7.35 10.143.174 1.194-.068 3.738-1.323 4.263-3.192 1.335-9.961-.62-10.951.882-1.647 2.497-.785 7.06-1.838 9.334-4.819 10.406-2.445 6.353-1.543 11.54.901 5.186 7.08 2.859 5.218 9.187-1.844 6.264-13.954 1.482-19.477 5.145-5.81-2.498-10.962-1.26-13.818 4.778-7.745 6.35 10.59 14.819-1.911 16.758-8.013 2.038-11.186 21.758.147 19.698 7.2 1.189 18.77-5.165 22.564 3.528 3.906 10.937 8.311-8.63 14.553-.882 7.28 3.31 7.56 14.289 17.42 12.568 8.672 1.641 4.006 14.245 6.615 20.58 2.991 10.742-1.175 21.46-2.72 32.046 4.716 3.449 15.41.029 15.288 9.555 4.27 4.671 10.95 2.074 13.892-1.764 5.46 6.36 7.344 14.49 7.79 22.565 2.318 7.855 22.816 11.246 17.42-.809 1.653-8.73 4.77-17.099 9.629-24.475 5.598-3.742 15.777-2.844 16.023-12.716 2.43-9.015-13.954-14.33-5.807-23.152 10.1.676 7.484-9.664 1.985-14.186-5.302-6.167 8.903-3.294 4.704-10.951 1.387-7.106-6.288-12.75-3.675-19.11 1.934-1.061 12.388.913 16.243-3.16 2.327-2.46-9.708-4.044-8.305-7.424.737-1.778 6.684-.31 8.526-2.205.817-.84 1.075-3.394 1.837-4.337 2.465-3.05 6.74 4.718 8.526 2.573.73-.878 5.702-4.294 5.733-7.57.012-1.166-.117-3.139-.294-5.146-34.294-25.343-73.118-44.924-115.027-57.256-.017.014-.057-.014-.074 0z"
            ></path>
            <path
                id="groenlandia-filling"
                fill={props.isSelected ? shadeColor("#e0b881", -50) : fill}
                fillRule="evenodd"
                stroke="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="4"
                strokeOpacity="1"
                strokeWidth="1"
                d="M-84.59-60.1c.73 4.167-9.042 3.69-4.795 8.095 2.561 4.386-.881 10.508-5.873 10.926-2.714-.135-7.916-.397-6.377 3.823-.738 1.753-1.957 4.299 1.19 3.9 3.695 1.275 8.366-.592 11.307 2.692 2.226 3.523 6.452 4.035 9.182 6.724 2.23 2.71 1.913 6.357 2.25 9.594 1.618 3.831-.468 8.081.75 11.685 2.539 3.328 7.703.007 9.868 3.8 1.135 1.654 2.975 7.042 4.044 2.39.728-3.477 3.783-5.108 6.484-6.897-.065-2.584-3.697-6.244-1.475-9.597 2.901-2.878-.704-7.26 2.07-10.078 1.852-3.347-2.662-7.527.376-10.78 2.763-1.716 2.804-5.334 5.757-6.602 1.942-.386 3.536-2.408.744-3.143-10.973-7.158-23.02-12.594-35.501-16.532z"
                filter="url(#filter15135)"
                transform="translate(1499.1 701.199) scale(2.352)"
            ></path>
            <g
                id="groenlandia-troops-group"
                transform="matrix(.49 0 0 .49 1770.431 831.054)"
            >
                <circle
                    id="canada-troops-5-1-9-6-8-0-5-8"
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
                    id="canada-troops-number-6-2-3-2-7-2-9-9"
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
                    <tspan id="tspan3745-2-7-6-6-9-3-2-7" x="-898.215" y="-432.383">
                        {props.countryState
                            ? props.countryState.troops + props.countryState.newTroops
                            : "0"}
                    </tspan>
                </text>
            </g>
        </g>
    );
};

Greenland.propTypes = {
    countryState: PropTypes.object,
    isSelected: PropTypes.bool,
    countryClicked: PropTypes.func,
};

export default Greenland;
