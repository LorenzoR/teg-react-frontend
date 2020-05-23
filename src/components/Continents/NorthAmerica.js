import React from 'react';
import PropTypes from 'prop-types';

const northAmerica = props => {
    return (
        <g id="north-america">
                    <g id="canada" onclick="countryClicked('canada')">
                        <path
                        id="canada-border"
                        fill="#d89a61"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeDasharray="none"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="2.352"
                        d="M1123.306 582.49c-4.474-.185-12.772.375-15.55 2.977-2.651 2.483.221 7.004-4.098 7.246-3.332.214-7.885-5.768-10.84-2.377-2.279 2.616-2.166 7.512-4.605 8.282-4.744 1.497-10.333-6.052-15.438-6.457-1.355-.003-9.052-.332-13.225 3.363-2.016 1.785-.767 8.173-2.23 9.02-6.045 3.497-7.883.114-10.55.475-4.782.647 8.005-16.863-9.385-13.866-20.85 3.145-4.676 12.715-5.127 15.963-.57 4.12-3.392 4.825-6.51 7.365-2.06 2.388 1.456 6.758-.573 9.765-2.045 3.03-8.838 3.1-10.798 3.994-2.654 1.212-10.473-2.394-13.163.968-2.847 3.425-3.672 12.364-6.496 15.653 5.055-.089 10.117-.248 15.068.588 7.508.986 7.575 9.17 9.775 14.626 1.055 8.207-5.245 14.532-6.1 21.977 3.754 4.063-1.684 7.769-.956 11.098 4.835 4.276 7.558 10.307 12.128 14.7 4.441 5.056 14.433 6.13 13.597 14.553-2.703 8.454 3.584 14.388 3.602 22.27 4.083 1.774 8.658 4.258 11.54 8.086 3.891 1.222 7.67 2.305 11.539 2.352 9.354-4.846 6.775-16.196 11.392-23.667 8.932.065 14.009-9.823 13.083-18.008-3.373-12.941 12.56-9.223 20.36-9.481 10.101 1.082 13.689-10.81 20.653-15.435l.809-.882.955-.882c2.683-6.314 8.186-15.307 14.7-7.644 7.543 1.183 21.91-11.418 12.863-16.979-12.055 3.802-4.21-16.55 4.63-12.568 5.638 3.525 16.841-7.174 6.321-7.203-8.827.624-8.764-11.92-.955-13.01-5.25-7.851 3.588-7.61 8.746-7.644 6.906-3.672 1.344-11.69-5.145-9.481-7.05-4.511-10.574-12.72-16.758-17.567-6.118.193-9.663 4.83-15.508.588-8.91.092 5.661-15.321-6.836-12.715-1.263-.22-9.666.009-10.915-.043z"
                        onclick="countryClicked"
                        onmouseout="countryMouseOut"
                        onmouseover="countryMouseOver"
                        ></path>
                        <path
                        id="canada-filling"
                        fill="#e0b881"
                        fillRule="evenodd"
                        stroke="none"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="1"
                        d="M-159.996-45.131c-3.583.185-4.708 5.82-9.008 4.279-2.91 1.607-6.267 4.124-9.616 1.92-1.622-1.14-4.189-2.802-4.318.371-1.95 3.104-6.63 3.978-9.72 3.05 2.387-.43-3.762-.774-3.305 1.847.553 3.864-3.076 6.132-6.05 7.653 2.582 2.867 3.647 6.962 3.48 10.75-.25 3.517-3.302 6.557-2.072 10.176.73 3.778 4.586 5.039 7.167 7.256 2.733 2.183 3.087 5.768 2.694 8.987-.158 1.974 2.832 7.298 4.39 4.627.56-3.344 1.966-7.543 5.785-8.2 2.522-1.915-.315-5.85 2.096-8.11 2.186-3.381 6.644-4.049 10.361-3.794 3.59 1.667 5.02-3.018 7.39-4.644 1.647-2.41 2.932-5.729 6.159-6.307 4.468-.2 1.106-5.67 3.95-7.996 1.45-2.066 3.638-2.693 2.854-5.474.327-2.893 3.588-5.51 2.192-8.359-1.785-3.285-5.791-1.298-8.576-2.835-3.262-.275-3.534-3.798-5.488-5.249l-.365.052zm20 25.375c.472.672.472-.493 0 0z"
                        filter="url(#filter4368)"
                        onclick="countryClicked"
                        onmouseout="countryMouseOut"
                        onmouseover="countryMouseOver"
                        transform="translate(1499.1 701.199) scale(2.352)"
                        ></path>
                        <g
                        id="canada-troops-group"
                        onclick="countryClicked('canada')"
                        onmouseout="countryMouseOut('canada')"
                        onmouseover="countryMouseOver('canada')"
                        transform="matrix(.49 0 0 .49 1531.139 867.982)"
                        >
                        <circle
                            id="canada-troops"
                            cx="-899.478"
                            cy="-446.178"
                            r="37.706"
                            fill="#e03981"
                            stroke="#000"
                            onclick="countryClicked('canada')"
                            onmouseout="countryMouseOut('canada')"
                            onmouseover="countryMouseOver('canada')"
                        ></circle>
                        <text
                            id="canada-troops-number"
                            x="-898.215"
                            y="-432.383"
                            style={{
                            lineHeight: "125%",
                            WebkitTextAlign: "center",
                            textAlign: "center",
                            }}
                            fill="#fff"
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
                            <tspan id="tspan3745" x="-898.215" y="-432.383">
                            1
                            </tspan>
                        </text>
                        </g>
                    </g>
                    <g id="yukon" onclick="countryClicked('yukon')">
                        <path
                        id="yukon-border"
                        fill="#d89a61"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeDasharray="none"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="2.352"
                        d="M988.397 644.86c-7.33-.615-11.854 7.282-19.44 5.072-4.014-.97-12.398.408-8.308 6.044 3.825-.18 12.071 1.203 7.099 6.259-5.59 3.778-8.559 12.997-17.35 10.262-6.541.244-8.766 11.466-5.468 14.745 4.028 1.498 12.384-3.673 9.17 3.935-3.76 2.08-6.229 5.787-1.238 8.389 1.954 6.921-.085 15.754-7.919 17.656-3.701.972-11.859-7.2-11.295.887 1.883 5.976-1.9 10.587-2.728 15.834 6.16 1.947 10.862 9.781 9.356 16.405-1.824 5.784-5.503 13.885 1.345 18.102 5.961 4.826 14.147 6.059 19.141 12.14 2.726 3.561 1.693-4.791 6.247-5.046 6.153-3.512 12.659-7.169 19.85-7.621 10.636.192 21.423.908 31.894-1.273 7.463-1.148 13.102-7.908 20.894-7.739 4.501-1.064 13.769.748 15.282-3.662-2.519-5.3-8.174-8.41-13.08-10.541-.019-7.883-6.295-13.838-3.591-22.292.835-8.424-9.184-9.51-13.625-14.566-4.57-4.393-7.263-10.45-12.097-14.727-.729-3.329 4.677-6.98.924-11.043.855-7.445 7.157-13.803 6.102-22.01-2.2-5.456-2.268-13.635-9.776-14.621-7.018-1.185-14.286-.344-21.389-.588z"
                        onclick="countryClicked"
                        onmouseout="countryMouseOut"
                        onmouseover="countryMouseOver"
                        ></path>
                        <path
                        id="yukon-filling"
                        fill="#e0b881"
                        fillRule="evenodd"
                        stroke="none"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="1"
                        d="M-212.527-17.819c-2.127.282-4.775-.69-6.385 1.189-.797 1.836-1.767 3.631-3.213 5.055-.962 1.562-3.347 2.138-3.522 4.058.668 2.253-.027 4.477-.408 6.707.273 2.602.38 5.35-.988 7.735-1.238 2.492-3.394 4.56-6.029 5.507-.465 2.184 2.17 3.716 1.702 6.046.757 2.14-1.403 4.489-.005 6.322 1.428 1.484 4.002 1.084 5.336-.325 4.044-2.302 8.834-2.492 13.362-2.18 2.63.038 5.305.025 7.858-.69 1.732-.95 5.389-1.717 3.829-4.442-.671-2.13-1.438-4.3-1.375-6.565-1.522-2.184-4.271-3.157-5.61-5.512-1.535-2.06-3.267-4.004-4.602-6.196-1.154-2.7-.07-5.626.101-8.404.337-2.216 1.233-4.296 2.307-6.243.556-1.422-1.09-2.532-2.358-2.062z"
                        filter="url(#filter5355)"
                        onclick="countryClicked"
                        onmouseout="countryMouseOut"
                        onmouseover="countryMouseOver"
                        transform="translate(1499.1 701.199) scale(2.352)"
                        ></path>
                        <g
                        id="yukon-troops-group"
                        onclick="countryClicked('yukon')"
                        onmouseout="countryMouseOut('yukon')"
                        onmouseover="countryMouseOver('yukon')"
                        transform="matrix(.49 0 0 .49 1424.786 933.714)"
                        >
                        <circle
                            id="canada-troops-5"
                            cx="-899.478"
                            cy="-446.178"
                            r="37.706"
                            fill="#e03981"
                            stroke="#000"
                            onclick="countryClicked('canada')"
                            onmouseout="countryMouseOut('canada')"
                            onmouseover="countryMouseOver('canada')"
                        ></circle>
                        <text
                            id="canada-troops-number-6"
                            x="-898.215"
                            y="-432.383"
                            style={{
                            lineHeight: "125%",
                            WebkitTextAlign: "center",
                            textAlign: "center",
                            }}
                            fill="#fff"
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
                            <tspan id="tspan3745-2" x="-898.215" y="-432.383">
                            1
                            </tspan>
                        </text>
                        </g>
                    </g>
                    <g id="alaska" transform="matrix(.49 0 0 .49 781.677 458.12)">
                        <path
                        id="alaska-border"
                        fill="#d89a61"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeDasharray="none"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="4.8"
                        d="M232.278 774.403c-7.503 8.734-19.197 5.806-16.447-6.643-.481-12.894.954-26.016-13.039-31.658-9.34-1.435-14.42 19.72-26.857 6.062-2.364-2.597-2.63-13.57-5.88-16.145-6.82-5.407-17.003-2.192-18.668-5.994-4.742-10.836-8.061-18.078-9.684-22.588-5.435-15.099 1.082-24.851 2.846-37.309.53-2.416 7.185-5.703 7.853-10.335.75-5.195-4.547-12.083-5.278-21.333-.488-6.179 12.477-3.991 14.525-7.94 3.324-6.413-3.328-17.724-2.906-23.198.49-15.858 18.478-6.605 20.473-22.346 3.474-10.526 14.978-15.938 17.739-27.045 5.244-10.13 7.106-23.722 18.869-28.465 6.39-8.885 14.363-16.035 23.992-21.222 7.413-7.199 24.081-17.441 27.575-1.132-.36 14.816 14.183 14.825 21.5 4.665 3.88-3.846 13.264-11.5 9.654-.002 4.173 16.649-18.35 11.686-21.752 24.752-3.001 12.36 7.07 23.672 12.018 34.408 8.397 6.54 21.118-2.298 27.204 9.53 7.94 9.146 10.554 21.735 5.963 33.087-9.114 13.153-1.429 30.66 13.492 35.462 9.802 6.533 22.92 8.626 29.443 19.513-2.65 12.415-16.478 20.173-24.742 29.716-10.09 9.06-20.904 16.278-34.037 19.18-9.339 6.992-25.813 12.332-26.314 25.403 1.359 11.79-17.009 15.48-23.713 23.844-7.856 6.058-17.082 10.319-23.829 17.732z"
                        onclick="countryClicked"
                        onmouseout="countryMouseOut"
                        onmouseover="countryMouseOver"
                        ></path>
                        <path
                        id="alaska-filling"
                        fill="#e0b881"
                        fillRule="evenodd"
                        stroke="none"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="1"
                        d="M-253.714 7.431c-1.764 1.563-3.796 3.13-4.397 5.53-1.022 2.06-2.088 4.18-3.827 5.737-.1 2.45-3.394 3.575-2.855 6.193.072 2.151-.881 4.256-2.359 5.79.405 2.324-.245 4.92-2.031 6.532-1.273 2.105.194 4.663 2.389 5.095 1.459 1.877 3.85 1.384 5.84 1.702 2.54.8 4.416 2.935 5.615 5.234 2.068-1.295 3.405-3.31 4.35-5.475 1.925-2.541 4.778-4.22 7.6-5.57 1.635-.64 4.35-1.338 4.767-3.04-1.162-1.117-2.827-1.644-3.675-3.123-2.587-3.211-3.444-7.936-1.574-11.698-3.137-.108-6.035-2.218-7.217-5.107-1.408-2.368-2.626-4.99-2.626-7.8zm-15.094 28.094c-.596.525.271.173 0 0z"
                        filter="url(#filter6332)"
                        onclick="countryClicked"
                        onmouseout="countryMouseOut"
                        onmouseover="countryMouseOver"
                        transform="matrix(4.8 0 0 4.8 1464.129 496.08)"
                        ></path>
                        <g
                        id="alaska-troops-group"
                        onclick="countryClicked('alaska')"
                        onmouseout="countryMouseOut('alaska')"
                        onmouseover="countryMouseOver('alaska')"
                        transform="translate(1139.132 1088.166)"
                        >
                        <circle
                            id="canada-troops-5-1"
                            cx="-899.478"
                            cy="-446.178"
                            r="37.706"
                            fill="#e03981"
                            stroke="#000"
                            onclick="countryClicked('canada')"
                            onmouseout="countryMouseOut('canada')"
                            onmouseover="countryMouseOver('canada')"
                        ></circle>
                        <text
                            id="canada-troops-number-6-2"
                            x="-898.215"
                            y="-432.383"
                            style={{
                            lineHeight: "125%",
                            WebkitTextAlign: "center",
                            textAlign: "center",
                            }}
                            fill="#fff"
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
                            <tspan id="tspan3745-2-7" x="-898.215" y="-432.383">
                            1
                            </tspan>
                        </text>
                        </g>
                    </g>
                    <g id="oregon" onclick="countryClicked('oregon')">
                        <path
                        id="oregon-border"
                        fill="#d89a61"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeDasharray="none"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="2.352"
                        d="M1070.423 749.598c-1.17 2.204-2.84 4.128-5.512 5.513-3.868-.047-7.648-1.13-11.54-2.352.581.773 1.121 1.61 1.544 2.499-1.514 4.41-10.787 2.61-15.288 3.675-7.792-.17-13.411 6.57-20.874 7.717-10.471 2.18-21.264 1.442-31.899 1.25-7.192.452-13.692 4.132-19.845 7.644-4.554.255-3.521 8.632-6.248 5.071-2.543-2.658-2.67-2.767-.294.147-1.297 6.084-8.078 9.95-12.127 14.627-4.944 4.439-10.25 7.913-16.685 9.334-4.576 3.427-12.617 6.09-12.862 12.495.665 5.778-8.328 7.588-11.613 11.687-3.85 2.968-8.38 5.04-11.687 8.673-.023.026-.05.047-.073.073.197 1.086.417 2.157.956 3.234 1.083 2.166 3.086 3.234 4.189 5.439 1.088 2.175 2.499 3.435 2.499 6.32 0 2.407-.583 5.682 0 8.012.746 2.984 1.634 4.96 2.94 7.57.896 1.794 1.76 4.676 4.19 4.19 2.658-.531 5.169-1.972 7.57-2.572 1.669-.417 4.63-1.61 4.63-4.19v-6.688c0-1.26 1.11-5.652 3.382-3.381.94.94 2.283 2.648 3.748 3.38 1.701.851 4.63 2.295 4.63 4.19v13.891c0 2.292.708 3.575 2.132 4.999 1.29 1.29 2.406 4.547 4.19 5.439 2.358 1.179 4.931.939 7.938 1.69 2.154.539 4.717.441 7.13.441h14.7c1.454 0 4.863-.575 5.88.441.85.851 1.812 2.94 3.38 2.94h6.321c2.134 0 4.448.055 6.321-.882 1.74-.87 2.706-1.663 3.749-3.748.286-.573 1.858-4.09 2.94-4.63.494-.248.967-.406 1.47-.589-4.415-8.077 12.5-15.643 16.17-23.373 6.73-9.72 3.075-23.126 13.597-31.384 3.248-13.004 11.29-24.773 26.534-21.536 12-.213 24.184-4.827 34.986-8.232 4.25-3.198 8.67-6.261 13.303-8.82-.028-.048-.046-.097-.073-.147-1.566-4.759-3.424-8.213-10.143-8.085-8.106-1.26-9.994-3.975-11.613-12.274-4.33-5.846-11.126-11.985-12.642-19.698z"
                        onclick="countryClicked"
                        onmouseout="countryMouseOut"
                        onmouseover="countryMouseOver"
                        ></path>
                        <path
                        id="oregon-filling"
                        fill="#e0b881"
                        fillRule="evenodd"
                        stroke="none"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="1"
                        d="M-186.433 28.588c-2.616 2.233-6.24 1.28-9.302 2-2.857 1.366-5.653 3.01-8.89 3.285-4.577.785-9.249.253-13.84.547-5.172 1.457-7.599 6.795-11.663 9.863-2.99 3.263-7.5 4.116-10.993 6.617-.294 3.83-3.89 5.932-6.71 7.86-2.607 1.518.897 2.45 2.114.97 2.564-1.096 5.162.951 7 2.512 3.314 1.474 5.111 5.26 4.3 8.77-.974 4.39 3.894 3.227 6.548 3.238 3.342-.25 6.683-.165 9.666.994.797-2.027 1.2-4.441 3.02-5.982 2.05-2.402 5.36-4.044 5.968-7.388.654-3.339 1.423-6.752 3.632-9.458 2.052-2.736 2.415-6.414 4.971-8.833 2.94-3.348 7.475-4.922 11.867-4.552 3.17-.007 6.365-.791 9.25-1.946-1.88-2.136-2.495-5.637-4.746-7.712-.602-.605-1.39-.696-2.192-.785z"
                        filter="url(#filter7318)"
                        onclick="countryClicked"
                        onmouseout="countryMouseOut"
                        onmouseover="countryMouseOver"
                        transform="translate(1499.1 701.199) scale(2.352)"
                        ></path>
                        <g
                        id="oregon-troops-group"
                        onclick="countryClicked('oregon')"
                        onmouseout="countryMouseOut('oregon')"
                        onmouseover="countryMouseOver('oregon')"
                        transform="matrix(.49 0 0 .49 1432.91 1031.204)"
                        >
                        <circle
                            id="canada-troops-5-1-9"
                            cx="-899.478"
                            cy="-446.178"
                            r="37.706"
                            fill="#e03981"
                            stroke="#000"
                            onclick="countryClicked('canada')"
                            onmouseout="countryMouseOut('canada')"
                            onmouseover="countryMouseOver('canada')"
                        ></circle>
                        <text
                            id="canada-troops-number-6-2-3"
                            x="-898.215"
                            y="-432.383"
                            style={{
                            lineHeight: "125%",
                            WebkitTextAlign: "center",
                            textAlign: "center",
                            }}
                            fill="#fff"
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
                            <tspan id="tspan3745-2-7-6" x="-898.215" y="-432.383">
                            1
                            </tspan>
                        </text>
                        </g>
                    </g>
                    <g id="california" onclick="countryClicked('california')">
                        <path
                        id="california-border"
                        fill="#d89a61"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeDasharray="none"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="2.352"
                        d="M1104.895 789.803c-4.633 2.558-9.054 5.622-13.304 8.82-10.801 3.404-22.985 8.018-34.986 8.232-15.243-3.238-23.285 8.531-26.533 21.535-10.522 8.258-6.867 21.663-13.598 31.385-4.131 8.703-25.1 17.21-13.45 26.46 9.538.737 19.188-.63 28.444 2.499 6.73 8.552 20.78-.49 30.43 3.16 9.117 7.023 19.043 11.722 29.62 16.023 1.888 9.413 8.832 3.722 13.083 10.878 4.575-5.153 12.202-7.707 18.08-.367 5.55-9.824 13.578.26 19.478 4.483 12.233-2.2-2.656-12.231-3.454-18.595-5.508-13.825-24.25-.53-28.592-14.333-8.38-3.453-13.752-9.792-24.916-8.379-10.652 1.576-20.633-14.12-8.82-18.89 3.847.273 7.756.544 11.686.736-1.889-4.232 1.58-11.334 3.896-14.847 6.781-6.918 11.547 12.729 16.684 1.543 3.238-5.558 7.963-10.518 13.304-14.038 5.683-1.752 11.804-1.594 17.713-1.764 6.809-.334 13.373-1.8 20.213-1.03 2.914-.803 5.46-.628 7.497.368 6.31-5.073 13.438-8.867 20.58-13.524-.662-4.719 2.362-6.942 4.336-10.07-8.79-.617-17.565-1.775-26.386-2.351-8.457-.938-17.038-2.125-24.77-5.954-6.147-3.83-10.898-1.522-16.684-3.822-5.134-6.38-15.664-1.396-19.551-8.158z"
                        onclick="countryClicked"
                        onmouseout="countryMouseOut"
                        onmouseover="countryMouseOver"
                        ></path>
                        <path
                        id="california-filling"
                        fill="#e0b881"
                        fillRule="evenodd"
                        stroke="none"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="1"
                        d="M-167.277 45.619c-1.798 1.317-3.751 2.447-5.943 2.94-5.128 1.718-10.45 3.397-15.928 3.07-2.55-.895-3.158 2.7-3.734 4.434-.366 2.102-2.65 2.972-3.143 4.922-.72 2.807-1.005 5.765-2.473 8.333-.397 1.375-3.092 3.564-.277 3.408 2.528.197 4.324 2.601 6.912 1.45 1.293-.573 4.174.521 3.15-1.676-.545-5.016 3.532-9.975 8.499-10.569.996-2.896 3.106-5.598 6.201-6.363 2.387-1.17 5.256 1.516 6.71-1.272 2.058-2.115 4.685-3.777 7.674-4.08 2.242-.383 4.525-.322 6.79-.41-1.947-.886-3.918-1.65-6.09-1.547-2.748-.245-4.728-2.383-7.49-2.432l-.43-.103-.428-.105z"
                        filter="url(#filter9264)"
                        onclick="countryClicked"
                        onmouseout="countryMouseOut"
                        onmouseover="countryMouseOver"
                        transform="translate(1499.1 701.199) scale(2.352)"
                        ></path>
                        <g
                        id="california-troops-group"
                        onclick="countryClicked('california')"
                        onmouseout="countryMouseOut('california')"
                        onmouseover="countryMouseOver('california')"
                        transform="matrix(.49 0 0 .49 1500.858 1057.792)"
                        >
                        <circle
                            id="canada-troops-5-1-9-6"
                            cx="-899.478"
                            cy="-446.178"
                            r="37.706"
                            fill="#e03981"
                            stroke="#000"
                            onclick="countryClicked('canada')"
                            onmouseout="countryMouseOut('canada')"
                            onmouseover="countryMouseOver('canada')"
                        ></circle>
                        <text
                            id="canada-troops-number-6-2-3-2"
                            x="-898.215"
                            y="-432.383"
                            style={{
                            lineHeight: "125%",
                            WebkitTextAlign: "center",
                            textAlign: "center",
                            }}
                            fill="#fff"
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
                            <tspan id="tspan3745-2-7-6-6" x="-898.215" y="-432.383">
                            1
                            </tspan>
                        </text>
                        </g>
                    </g>
                    <g id="nueva-york" onclick="countryClicked('newYork')">
                        <path
                        id="nueva-york-border"
                        fill="#d89a61"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeDasharray="none"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="2.352"
                        d="M1114.744 703.293c-.48.18-.954.404-1.47.515.527-.122.98-.32 1.47-.515zm-15.73.368c-6.275.11-11.736 1.687-9.628 9.775.926 8.185-4.151 18.073-13.083 18.008-3.298 5.337-2.953 12.643-5.88 18.154 1.517 7.713 8.312 13.852 12.642 19.698 1.62 8.3 3.508 11.015 11.613 12.275 6.72-.129 8.578 3.325 10.143 8.085 3.818 6.982 14.455 1.88 19.625 8.305 5.786 2.3 10.537-.007 16.684 3.822 7.732 3.829 16.313 5.016 24.77 5.954 9.686.633 19.298 2.036 28.959 2.572 9.274 3.012 12.46-6.55 15.655-12.2 1.577 8.434 10.011 3.863 15.362 6.247 11.146.47 9.51-6.397 16.684 1.029 1.04 4.12 3.926 7.57 4.116 11.98-2.74 2.646-4.962 10.225 2.132 8.38 7.247.528 15.93-6.448 8.452-12.937 4.798-2.703 4.805-8.41 2.205-13.083-8.362-1.878 1.26-6.119.074-10.804.883-7.128-9.52-2.842-8.306-8.012 6.258-2.99 5.458-10.808-.44-13.156-1.019 3.182-3.238 5.68-7.571 6.027-6.583-.522-11.084 4.762-17.493 4.777-5.412 2.662-11.784 2.327-16.832-1.029-6.213-1.244-12.267-2.986-18.154-5.292-6.893-1.237-11.486-7.395-18.449-8.452-5.126-2.986-10.346.747-15.729-.147-5.216.51-11.186.599-13.23-5.292-2.333-7.825-15.42-.954-14.48-9.555-.992-6.399.664-12.606.662-18.963-.99-6.315-7.504-9.943-11.76-14.112-1.562-2.219-3.854-3.73-5.218-6.101a16.239 16.239 0 01-.662-5.586c-.673.052-1.392.005-2.131-.073-2.925.097-6.966-.361-10.731-.294z"
                        ></path>
                        <path
                        id="nueva-york-filling"
                        fill="#e0b881"
                        fillRule="evenodd"
                        stroke="none"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="1"
                        d="M-169.683 5.65c.327 4.482-2.15 9.28-6.438 10.969-1.868 2.933-.399 6.52 2.256 8.33 1.142 2.369 1.574 5.632 5.015 5.15 3.828.557 4.081 5.491 7.938 5.15 3.418 1.932 7.424 1.775 10.922 3.452 4.812 2.172 10.228 1.996 15.376 2.632 3.03.01 6.754 1.903 7.778-2.02 1.318-1.55 2.814-2.988-.176-3.046-3.808-1.053-7.727-2.127-10.998-4.411-3.447-2.145-7.364.009-11.038-.772-4-.31-5.523-4.868-9.615-5.002-3.055-1.376-3.317-5.401-3.391-8.351 1.076-3.438-.424-6.803-3.565-8.569-1.638-.853-1.848-3.732-4.064-3.512zm59.937 30c-2.317 1.62-8.126 1.525-8.734 3.143 3.403 1.486 7.058-1.78 10.404.297 1.371-.18-2.177-2.277-1.67-3.44zm5.938 16.688c-.906.518.007.438 0 0z"
                        filter="url(#filter12196)"
                        onclick="countryClicked"
                        onmouseout="countryMouseOut"
                        onmouseover="countryMouseOver"
                        transform="translate(1499.1 701.199) scale(2.352)"
                        ></path>
                        <g
                        id="nueva-york-troops-group"
                        onclick="countryClicked('nuevaYork')"
                        onmouseout="countryMouseOut('nuevaYork')"
                        onmouseover="countryMouseOver('nuevaYork')"
                        transform="matrix(.49 0 0 .49 1543.694 969.165)"
                        >
                        <circle
                            id="canada-troops-5-1-9-6-8"
                            cx="-899.478"
                            cy="-446.178"
                            r="37.706"
                            fill="#e03981"
                            stroke="#000"
                            onclick="countryClicked('canada')"
                            onmouseout="countryMouseOut('canada')"
                            onmouseover="countryMouseOver('canada')"
                        ></circle>
                        <text
                            id="canada-troops-number-6-2-3-2-7"
                            x="-898.215"
                            y="-432.383"
                            style={{
                            lineHeight: "125%",
                            WebkitTextAlign: "center",
                            textAlign: "center",
                            }}
                            fill="#fff"
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
                            <tspan id="tspan3745-2-7-6-6-9" x="-898.215" y="-432.383">
                            1
                            </tspan>
                        </text>
                        </g>
                    </g>
                    <g id="terranova" onclick="countryClicked('terranova')">
                        <path
                        id="terranova-border"
                        fill="#d89a61"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeDasharray="none"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="2.352"
                        d="M1123.784 695.355c-3.307 4.115-6.673 8.27-11.907 8.673a16.24 16.24 0 00.662 5.586c1.364 2.372 3.656 3.882 5.218 6.1 4.256 4.17 10.77 7.798 11.76 14.113 0 6.357-1.654 12.564-.661 18.963-.94 8.6 12.146 1.73 14.48 9.555 2.043 5.89 8.013 5.803 13.23 5.292 5.382.894 10.603-2.839 15.728.147 6.963 1.057 11.556 7.215 18.449 8.452 5.887 2.306 11.941 4.048 18.154 5.292 5.048 3.356 11.42 3.69 16.832 1.03 6.409-.017 10.91-5.3 17.493-4.778 8.542-.683 8.906-9.592 7.938-16.023-1.475-6.936 7.575-10.925 5.439-17.273-2.847-5.298-12.038-.139-16.097-3.969-4.296-2.946-10.704-1.713-15.655-.808-6.59 3.356-6.858-6.635-13.965-5.807-5.23 3.296-11.21 4.417-16.758.735-6.074-1.274-4.094-8.525-8.247-12.546-6.384-.889-9.97-3.38-14.759-2.007-6.848 3.238-5.743-6.654-9.775-8.379-5.049-1.831-9.226 5.102-14.774 1.764-3.503-5.81-10.653-3.594-15.582-7.57-1.451-3.003-4.125-5.922-7.203-6.542z"
                        onclick="countryClicked"
                        ></path>
                        <path
                        id="terranova-filling"
                        fill="#e0b881"
                        fillRule="evenodd"
                        stroke="none"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="1"
                        d="M-156.902 4.963c2.74 2.109 4.61 5.561 4.138 9.076-.363 1.92-.746 5.076 2.114 4.807 1.835.839 2.454 3.785 4.825 3.444 3.405-.558 7.017-.603 10.236.796 2.286 1.035 4.265 2.677 6.72 3.342 1.936.685 3.931 1.196 5.925 1.641 1.729.943 3.708 1.514 5.613.73 2.45-.637 4.75-1.792 7.257-2.18 1.018-1.35-.288-3.525.62-5.193.811-2.366-2.858-2.573-4.519-2.746-2.329.31-5.065 1.17-7.135-.403-1.294-2.179-3.84-.163-5.744-.626-2.586-.23-5.313-.994-7.23-2.82-1.79-1.115-1.072-4.508-3.615-4.233-2.081-.038-4.597.925-6.25-.856-1.062-1.598-2.748-2.324-4.512-1.46-3-.368-5.539-2.286-8.443-3.32z"
                        filter="url(#filter13177)"
                        onclick="countryClicked"
                        onmouseout="countryMouseOut"
                        onmouseover="countryMouseOver"
                        transform="translate(1499.1 701.199) scale(2.352)"
                        ></path>
                        <g
                        id="terranova-troops-group"
                        onclick="countryClicked('terranova')"
                        onmouseout="countryMouseOut('terranova')"
                        onmouseover="countryMouseOver('terranova')"
                        transform="matrix(.49 0 0 .49 1607.948 955.87)"
                        >
                        <circle
                            id="canada-troops-5-1-9-6-8-0"
                            cx="-899.478"
                            cy="-446.178"
                            r="37.706"
                            fill="#e03981"
                            stroke="#000"
                            onclick="countryClicked('canada')"
                            onmouseout="countryMouseOut('canada')"
                            onmouseover="countryMouseOver('canada')"
                        ></circle>
                        <text
                            id="canada-troops-number-6-2-3-2-7-2"
                            x="-898.215"
                            y="-432.383"
                            style={{
                            lineHeight: "125%",
                            WebkitTextAlign: "center",
                            textAlign: "center",
                            }}
                            fill="#fff"
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
                            <tspan id="tspan3745-2-7-6-6-9-3" x="-898.215" y="-432.383">
                            1
                            </tspan>
                        </text>
                        </g>
                    </g>
                    <g id="labrador" onclick="countryClicked('labrador')">
                        <path
                        id="labrador-border"
                        fill="#d89a61"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeDasharray="none"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="2.352"
                        d="M1230.065 668.307c-5.47 3.135-5.907 1.266-12.789 1.323-4.689-3.431-5.533 3.512-9.555 3.602-3.867 1.28-7.452 3.645-11.686 2.205-6.537-1.913-4.778 6.255-4.557 10.069.246 3.292 3.365 9.64-1.176 10.878-4.21.37-5.009 5.421-4.998 8.82-.344 4.136 4.16 8.976.955 12.716-.13.052-.244.09-.367.147 4.153 4.02 2.158 11.294 8.232 12.568 5.549 3.682 11.527 2.56 16.758-.735 7.107-.828 7.375 9.163 13.965 5.807 4.951-.905 11.359-2.138 15.655.808 3.996 3.77 12.955-1.15 15.95 3.749 2.22-1.902 5.101-2.944 6.541-5.807 3.587-.556 8.4-1.535 9.188-5.806-.003-4.255 1.472-9.342-1.69-12.863-2.747-3-8.058-4.634-7.645-9.628-1.879-3.812 3.167-8.744 0-11.393-3.705-1.63-8.956 5.251-10.584-1.102-.333-3.046 1.365-10.958-3.822-9.555-3.804 3.122-2.087-3.083-4.924-3.602-4.987-.53-5.747-6.242-8.012-9.702-1.045-1.681-3.298-2.558-5.439-2.499z"
                        onclick="countryClicked"
                        onmouseout="countryMouseOut"
                        onmouseover="countryMouseOver"
                        ></path>
                        <path
                        id="labrador-filling"
                        fill="#e0b881"
                        fillRule="evenodd"
                        stroke="none"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="1"
                        d="M-119.683-8.225c-.589.462-1.505.884-2.594 1.188l.031.093c-.37.123-1.186.526-2.562.938-.151.045-.393.052-.563.094.106.42.168.309.282 1.312.102.907.222 2.155-.47 3.813-.435 1.044-1.412 1.978-2.468 2.718.054.241.088.479.25 1 .218.702.514 1.7.469 3.094-.005.163-.105.358-.125.531.292.707.401 1.116.5 1.532.053.03.105.061.156.093.521.346.306.358 1.469-.375a5.198 5.198 0 012.187-.75c1.953-.227 4.053.455 5.313 1.313.667.454.801.695 1.156 1.062 2.105-.46 5.392-1.203 9.125 1.063.154-.002.344-.005.906-.031.566-.027 1.5.04 2.47.156a5.198 5.198 0 012.405-1.469c-.267-.187-.247-.123-.968-.75-1.028-.893-2.454-2.932-2.782-5.281-.023-.083-.073-.168-.093-.25-.11-.033-.168.009-.282-.031-2.342-.824-3.698-3.206-4.093-4.75a5.188 5.188 0 01-.125-.657c-.924-.578-1.645-1.284-1.969-1.812-.122-.2-.108-.246-.188-.406-1.438-.91-2.548-2.129-3.062-3.032-.15-.262-.069-.181-.188-.406-.546.093-1.14.237-1.593.219-1.44-.06-1.687-.216-2.594-.219zm-8.531 10.25v.125c.01-.13.024-.037.03-.125-.007.005-.022-.005-.03 0z"
                        filter="url(#filter14154)"
                        onclick="countryClicked"
                        onmouseout="countryMouseOut"
                        onmouseover="countryMouseOver"
                        transform="translate(1499.1 701.199) scale(2.352)"
                        ></path>
                        <g
                        id="labrador-troops-group"
                        onclick="countryClicked('labrador')"
                        onmouseout="countryMouseOut('labrador')"
                        onmouseover="countryMouseOver('labrador')"
                        transform="matrix(.49 0 0 .49 1664.818 922.636)"
                        >
                        <circle
                            id="canada-troops-5-1-9-6-8-0-5"
                            cx="-899.478"
                            cy="-446.178"
                            r="37.706"
                            fill="#e03981"
                            stroke="#000"
                            onclick="countryClicked('canada')"
                            onmouseout="countryMouseOut('canada')"
                            onmouseover="countryMouseOver('canada')"
                        ></circle>
                        <text
                            id="canada-troops-number-6-2-3-2-7-2-9"
                            x="-898.215"
                            y="-432.383"
                            style={{
                            lineHeight: "125%",
                            WebkitTextAlign: "center",
                            textAlign: "center",
                            }}
                            fill="#fff"
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
                            <tspan id="tspan3745-2-7-6-6-9-3-2" x="-898.215" y="-432.383">
                            1
                            </tspan>
                        </text>
                        </g>
                    </g>
                    <g id="groenlandia" onclick="countryClicked('groenlandia')">
                        <path
                        id="groenlandia-border"
                        fill="#d89a61"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeDasharray="none"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="2.352"
                        d="M1296.03 543.454c-3.392 2.74-7.81 6.983-7.35 10.143.174 1.194-.068 3.738-1.323 4.263-3.192 1.335-9.961-.62-10.951.882-1.647 2.497-.785 7.06-1.838 9.334-4.819 10.406-2.445 6.353-1.543 11.54.901 5.186 7.08 2.859 5.218 9.187-1.844 6.264-13.954 1.482-19.477 5.145-5.81-2.498-10.962-1.26-13.818 4.778-7.745 6.35 10.59 14.819-1.911 16.758-8.013 2.038-11.186 21.758.147 19.698 7.2 1.189 18.77-5.165 22.564 3.528 3.906 10.937 8.311-8.63 14.553-.882 7.28 3.31 7.56 14.289 17.42 12.568 8.672 1.641 4.006 14.245 6.615 20.58 2.991 10.742-1.175 21.46-2.72 32.046 4.716 3.449 15.41.029 15.288 9.555 4.27 4.671 10.95 2.074 13.892-1.764 5.46 6.36 7.344 14.49 7.79 22.565 2.318 7.855 22.816 11.246 17.42-.809 1.653-8.73 4.77-17.099 9.629-24.475 5.598-3.742 15.777-2.844 16.023-12.716 2.43-9.015-13.954-14.33-5.807-23.152 10.1.676 7.484-9.664 1.985-14.186-5.302-6.167 8.903-3.294 4.704-10.951 1.387-7.106-6.288-12.75-3.675-19.11 1.934-1.061 12.388.913 16.243-3.16 2.327-2.46-9.708-4.044-8.305-7.424.737-1.778 6.684-.31 8.526-2.205.817-.84 1.075-3.394 1.837-4.337 2.465-3.05 6.74 4.718 8.526 2.573.73-.878 5.702-4.294 5.733-7.57.012-1.166-.117-3.139-.294-5.146-34.294-25.343-73.118-44.924-115.027-57.256-.017.014-.057-.014-.074 0z"
                        onclick="countryClicked"
                        onmouseout="countryMouseOut"
                        onmouseover="countryMouseOver"
                        ></path>
                        <path
                        id="groenlandia-filling"
                        fill="#e0b881"
                        fillRule="evenodd"
                        stroke="none"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="1"
                        d="M-84.59-60.1c.73 4.167-9.042 3.69-4.795 8.095 2.561 4.386-.881 10.508-5.873 10.926-2.714-.135-7.916-.397-6.377 3.823-.738 1.753-1.957 4.299 1.19 3.9 3.695 1.275 8.366-.592 11.307 2.692 2.226 3.523 6.452 4.035 9.182 6.724 2.23 2.71 1.913 6.357 2.25 9.594 1.618 3.831-.468 8.081.75 11.685 2.539 3.328 7.703.007 9.868 3.8 1.135 1.654 2.975 7.042 4.044 2.39.728-3.477 3.783-5.108 6.484-6.897-.065-2.584-3.697-6.244-1.475-9.597 2.901-2.878-.704-7.26 2.07-10.078 1.852-3.347-2.662-7.527.376-10.78 2.763-1.716 2.804-5.334 5.757-6.602 1.942-.386 3.536-2.408.744-3.143-10.973-7.158-23.02-12.594-35.501-16.532z"
                        filter="url(#filter15135)"
                        onclick="countryClicked"
                        onmouseout="countryMouseOut"
                        onmouseover="countryMouseOver"
                        transform="translate(1499.1 701.199) scale(2.352)"
                        ></path>
                        <g
                        id="groenlandia-troops-group"
                        onclick="countryClicked('groenlandia')"
                        onmouseout="countryMouseOut('groenlandia')"
                        onmouseover="countryMouseOver('groenlandia')"
                        transform="matrix(.49 0 0 .49 1770.431 831.054)"
                        >
                        <circle
                            id="canada-troops-5-1-9-6-8-0-5-8"
                            cx="-899.478"
                            cy="-446.178"
                            r="37.706"
                            fill="#e03981"
                            stroke="#000"
                            onclick="countryClicked('canada')"
                            onmouseout="countryMouseOut('canada')"
                            onmouseover="countryMouseOver('canada')"
                        ></circle>
                        <text
                            id="canada-troops-number-6-2-3-2-7-2-9-9"
                            x="-898.215"
                            y="-432.383"
                            style={{
                            lineHeight: "125%",
                            WebkitTextAlign: "center",
                            textAlign: "center",
                            }}
                            fill="#fff"
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
                            1
                            </tspan>
                        </text>
                        </g>
                    </g>
                    <g id="mexico" onclick="countryClicked('mexico')">
                        <path
                        id="mexico-border"
                        fill="#d89a61"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeDasharray="none"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="2.352"
                        d="M1089.624 865.368c-4.688-3.576-.382-12.6 2.343-16.735 6.781-6.918 11.51 12.734 16.647 1.548 3.238-5.558 7.956-10.583 13.298-14.103 5.683-1.752 11.807-1.574 17.717-1.745 6.808-.334 13.426-1.78 20.266-1.011 6.816-1.88 11.455 1.705 12.875 8.22 1.448 7.995 7.669 13.203 15.95 11.597 6.376 1.98 5.013 15.802 13.668 13.24 3.819-1.337 7.339.25 6.104 4.78 4.003 4.147 1.933 12.335 9.664 12.86 2.728 5.502 8.683 1.147 12.016 6.444 3.25 3.687-2.209 9.13 2.766 11.861-4.16 4.253 7.962 5.223 3.007 11.2-5.599 4.57 7.789 1.488 7.792 6.921 3.748 5.88-.021 15.101-6.828 16.43-6.257-.876-7.875-10.408-14.615-12.078-6.166-1.253-13.55.975-17.28-5.82-6.452-5.324-15.177-3.994-21.765-7.725-3.829-9.12-14.889-.358-19.25-8.089-6.531-.486-10.154-5.467-8.667-11.81-2.058-6.746-10.19-7.767-16.199-6.956-7.961-.718-15.384-9.758-23.217-5.872-6.692 7.25-12.25-3.174-17.212-6.82-2.985-2.17-5.992-4.316-9.08-6.337z"
                        onclick="countryClicked"
                        onmouseout="countryMouseOut"
                        onmouseover="countryMouseOver"
                        ></path>
                        <path
                        id="mexico-filling"
                        fill="#e0b881"
                        fillRule="evenodd"
                        stroke="none"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="1"
                        d="M-143.62 61.338c-3.837-.133-7.627.59-11.461.577-2.035-.087-4.035.423-5.164 2.282-1.524 1.59-1.997 4.103-4.241 4.941-2.263 1.408 1.606 1.391 2.574.806 1.769-.367 3.557.287 5.22.86 1.38.552 2.687 1.266 4.04 1.877 4.77-.662 10.386 2.01 11.534 6.97.356 2.324 3.113 2.573 5.001 2.6 2.3-.1 3.772 1.825 5.56 2.894 2.265.543 4.657.872 6.747 2.011.735 1.202 7.103 4.485 5.595 1.36-.807-1.806-.417-4.778-2.781-5.23-1.979-1.272-4.369-2.323-5.42-4.57-1.157-1.901-.522-3.84-3.16-3.747-2.461-.72-4.026-3.032-4.888-5.319-3.833-.192-7.31-2.851-8.57-6.464a13.91 13.91 0 01-.587-1.848z"
                        filter="url(#filter11213)"
                        onclick="countryClicked"
                        onmouseout="countryMouseOut"
                        onmouseover="countryMouseOver"
                        transform="translate(1499.1 701.199) scale(2.352)"
                        ></path>
                        <g
                        id="mexico-troops-group"
                        onclick="countryClicked('mexico')"
                        onmouseout="countryMouseOut('mexico')"
                        onmouseover="countryMouseOver('mexico')"
                        transform="matrix(.49 0 0 .49 1619.027 1099.15)"
                        >
                        <circle
                            id="canada-troops-5-1-9-6-6"
                            cx="-899.478"
                            cy="-446.178"
                            r="37.706"
                            fill="#e03981"
                            stroke="#000"
                            onclick="countryClicked('canada')"
                            onmouseout="countryMouseOut('canada')"
                            onmouseover="countryMouseOver('canada')"
                        ></circle>
                        <text
                            id="canada-troops-number-6-2-3-2-1"
                            x="-898.215"
                            y="-432.383"
                            style={{
                            lineHeight: "125%",
                            WebkitTextAlign: "center",
                            textAlign: "center",
                            }}
                            fill="#fff"
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
                            <tspan id="tspan3745-2-7-6-6-2" x="-898.215" y="-432.383">
                            1
                            </tspan>
                        </text>
                        </g>
                    </g>
                    </g>
    );
};

northAmerica.propTypes = {
    
};

export default northAmerica;