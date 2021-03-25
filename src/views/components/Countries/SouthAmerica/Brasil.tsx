import React, { useState } from "react";
import PropTypes from "prop-types";
import { Popover } from 'antd';

import shadeColor from 'src/helpers/shadeColor';
import Country from "src/models/Country";

interface Props {
    countryState: Country["state"];
    isSelected: boolean;
    countryClicked: (id: string) => void;
}

const Brasil = (props: Props) => {
    const [borderFill, setBorderFill] = useState("#6bb682");
    const [fill, setFill] = useState("#9be09e");

    const content = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );

    return (
        <Popover content={content} title="Brasil">
            <g
                id="BRASIL"
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
                    id="brasil-border"
                    fill={props.isSelected ? shadeColor("#6bb682", -50) : borderFill}
                    fillRule="evenodd"
                    stroke="#000"
                    strokeDasharray="none"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="4"
                    strokeOpacity="1"
                    strokeWidth="2.352"
                    d="M1369.2 912.474c-6.313 2.012-10.578 6.838-17.198 8.012.304 2.553.033 5.26 0 7.717-2.187 3.702-3.745 9.873-8.526 10.658-6.306-1.784-4.248 6.498-5.954 10.216-1.63 3.756-4.12 12.254-9.481 7.791-1.26-.173-2.209.295-3.014 1.029 1.76 4.213 4.386 7.932 8.967 10.364 3.58 7.752-3.204 17.286 2.867 24.255 8.42 2.166 10.584 10.63 15.067 16.831.543 8.214-1.386 18.16 4.263 24.696 4.398 6.368 13.475 5.836 20.066 6.395 3.468-6.594 9.353-13.99 17.86-11.32 8.964-.173 16.17 6.748 25.725 4.19 8.732-1.332 17.27 1.063 20.507 9.923 5.708 1.507 15.695 4.433 19.477-1.911 4.517 3.88 4.776-5.484 9.702-2.94 1.46-2.509 3.919-4.32 3.014-7.644 1.875-6.757-6.161 2.765-4.19-4.557 9.683.612 6.31-10.937 10.805-15.95 6.656-4.628 9.873-13.23 18.228-14.92 3.376-7.06-1.398-15.23-6.027-20.654-3.59-5.959-9.95-10.866-11.393-17.64-3.945-7.891-17.648 3.8-22.417-4.483-2.621-7.372-9.562-9.596-16.023-5.66-6.8-2.99-12.847-8.206-20.948-6.1-6.752-1.257-12.088-16.92-18.89-7.718-6.993 2.766-8.598-9.898-9.922-14.773-3.801-9.442-13.638 3.14-18.154-2.352-1.333-2.496-2.8-3.433-4.41-3.455z"
                ></path>
                <path
                    id="brasil-filling"
                    fill={props.isSelected ? shadeColor("#9be09e", -50) : fill}
                    fillRule="evenodd"
                    stroke="none"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="4"
                    strokeOpacity="1"
                    strokeWidth="1"
                    d="M-55.558 96.119c-2.799 1.085-2.428 5.01-4.624 7.03-1.841 1.776-3.734 2.927-4.164 5.642-1.936 1.987-.171 3.941-.048 6.272.3 2.654-1.524 5.35 1.697 6.506 2.279 2.116 3.638 5.001 5.128 7.67.894 2.86-.24 6.013.823 8.817 2.02 2.116 3.617-2.409 5.835-2.864 4.012-1.916 8.74-1.147 12.78.29 2.757 1.446 5.766-.357 8.669.444 3.144.414 6.012 2.21 7.841 4.787 2.058.391 3.658-1.31 3.301-3.385-.019-2.555 3.098-3.252 3.589-5.116.453-2.801 2.704-4.682 4.613-6.543 1.024-2.102 5.507-3.405 3.012-5.708-1.622-2.303-3.89-4.153-5.046-6.78-3.751 1.089-8.253-.333-10.187-3.843-3.344 1.526-6.239-1.405-9.226-2.39-3.196.888-6.39-.937-8.337-3.392-3.453 1.102-7.544-.524-8.99-3.92-.758-1.675-.611-3.393-2.846-2.467a9.202 9.202 0 01-3.82-1.05z"
                    filter="url(#filter24994)"
                    transform="translate(1499.1 701.199) scale(2.352)"
                ></path>
                <g
                    id="brasil-troops-group"
                    transform="matrix(.49 0 0 .49 1848.63 1201.293)"
                >
                    <circle
                        id="canada-troops-5-1-9-6-6-3-7"
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
                        id="canada-troops-number-6-2-3-2-1-1-8"
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
                        <tspan id="tspan3745-2-7-6-6-2-9-4" x="-898.215" y="-432.383">
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

Brasil.propTypes = {
    countryState: PropTypes.object,
    isSelected: PropTypes.bool,
    countryClicked: PropTypes.func,
};

export default Brasil;
