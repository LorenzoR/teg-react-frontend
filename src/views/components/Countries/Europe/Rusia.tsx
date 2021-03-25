import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from 'src/helpers/shadeColor';
import Country from "src/models/Country";

interface Props {
    countryState: Country["state"];
    isSelected: boolean;
    countryClicked: (id: string) => void;
}

const Rusia = (props: Props) => {
    const [borderFill, setBorderFill] = useState("#eeca93");
    const [fill, setFill] = useState("#f3d9b0");

    return (
        <g
            id="RUSIA"
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
                id="rusia-border"
                fill={props.isSelected ? shadeColor("#eeca93", -50) : borderFill}
                fillRule="evenodd"
                stroke="#000"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeOpacity="1"
                strokeWidth="2.352"
                d="M1793.957 630.381c-1.443.433-5.896 1.54-8.238.465-2.34-1.075-2.57-4.332-4.58-3.62-4.192 1.488-6.415 4.36-9.272 4.95-3.788.782-4.038 4.185-5.349 4.44-2.632.078-7.133-1.46-9.135.174-1.622 1.325.296 5.417-1.074 6.76-4.02 3.938-7.47 6.834-14.022 4.692-8.216 2.359-16.603 13.722-11.76 21.903 7.223 6.588 8.655 16.509 3.601 24.696-1.125 2.095-2.314 4.288-2.205 6.762-2.774 10.686 9.355 16.622 9.923 27.048 3.055 9.357 9.15 18.978 3.969 28.959-4.016 5.084-2.473 9.16 2.058 15.729a21.18 21.18 0 014.116-.441c2.178-.015 4.404.225 6.615.44 7.381.492 9.186 11.98 17.199 9.63 6.698-4.648 15.335-2.007 18.816 5.218 3.483 5.299 9.064 7.437 15.214 6.174 6.618-.914 12.809 1.988 19.184 3.234 8.3 2.622 10.701 11.075 14.92 17.493 4.417 5.865 10.08 10.703 14.333 16.61 2.577 5.261 6.59 13.502 2.425 19.258.171-.01.344.011.515 0 9.577-.302 19.156-6.818 26.092-13.083 1.767-10.326 12.833-14.357 23.08-12.936 2.637-.803 17.216 1.604 12.42-1.103-8.329-7.024-8.944-16.32-17.954-22.886-3.202-.768-7.608-5.225-9.745-8.304-1.886-2.718-1.765-6.954-3.567-9.297-1.823-2.37-6.56-2.79-6.638-3.73-.201-2.39 1.078-5.761-.496-7.248-1.754-1.259-5.072.598-7.493-.357-1.724-.68-1.503-3.86-1.777-5.036-1.5-6.435 4.164-13.64 1.072-19.802-7.905-3.091-4.444-6.168-4.094-16.204 0-3.36-2.682-2.761-4.798-2.442-2.571.387-4.904 2.616-4.557-1.935.125-1.633 4.11-2.368 4.589-3.303.939-1.836-1.414-3.304-1.43-5.884 3.721-13.312-11.402-9.747-17.934-16.17-8.753-2.2-21.024-6.618-14.26-18.228 1.843-10.315-7.062-13.686-12.553-17.044-3.044-1.862-7.423-6.539-12.683-6.171-6.345.443-9.033-.207-10.043-4.494-.626-3.044 4.233-7.069 5.264-11.483 1.51-6.46-1.321-13.111-9.748-13.434z"
            ></path>
            <path
                id="rusia-filling"
                fill={props.isSelected ? shadeColor("#f3d9b0", -50) : fill}
                fillRule="evenodd"
                stroke="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeOpacity="1"
                strokeWidth="1"
                d="M119.598-25.475c-2.907 2.172-6.104 3.08-8.38 6.057-1.851 2.856-8.421.951-8.188 4.098 3.48 4.116 3.937 10.446 1.35 15.001-2.08 1.902 2.592 5.574 3.192 8.68 1.254 4.834 4.167 9.617 2.837 14.799-2.5 4.129 4.604 1.816 5.988 5.275 1.929 1.848 5.815-.587 8.407 1.362 3.084.444 4.001 4.875 6.638 4.853 4.293-.55 8.608.829 12.496 2.51 3.666 1.877 5.144 5.87 7.338 9.05 2.843 3.158 6.217 6.145 7.26 10.44 3.262-1.637 3.864-5.977 7.412-7.429 1.692-1.285 7.056-1.167 2.906-3.092-3.538-1.584-4.883-5.733-6.988-8.16-1.951-3.024-6.092-3.915-6.768-7.944-1.542-2.192 1.735-6.943-.97-9.226-.97-2.725-.998-4.52-3.498-6.135-2.55-2.33.236-6.363-.134-7.987-3.352-1.507-6.883-2.606-10.043-4.542-3.542-2.212-5.135-7.216-3.087-10.833-3.264-1.785-5.204-4.593-8.533-3.858-5.399-.372-8.876-7.833-4.922-11.888-.216-.435-3.304.047-4.313-1.03z"
                filter="url(#filter22998)"
                transform="translate(1499.1 701.199) scale(2.352)"
            ></path>
            <g
                id="rusia-troops-group"
                transform="matrix(.49 0 0 .49 2239.809 950.166)"
            >
                <circle
                    id="canada-troops-5-1-9-6-6-3-7-7-0"
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
                    id="canada-troops-number-6-2-3-2-1-1-8-4-48"
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
                    <tspan id="tspan3745-2-7-6-6-2-9-4-5-71" x="-898.215" y="-432.383">
                        {props.countryState
                            ? props.countryState.troops + props.countryState.newTroops
                            : "0"}
                    </tspan>
                </text>
            </g>
        </g>
    );
};

Rusia.propTypes = {
    countryState: PropTypes.object,
    isSelected: PropTypes.bool,
    countryClicked: PropTypes.func,
};

export default Rusia;
