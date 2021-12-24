import React, { Fragment, useEffect, useState, useMemo } from "react";
import { forwardRef, createContext, useContext } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip"; //required for info card
import Avatar from "@mui/material/Avatar"; //required for events card
import Add from "@material-ui/icons/Add";
import Link from "@mui/material/Link";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import InputBase from "@mui/material/InputBase";
import Select from "react-select";

import CardContent from "@mui/material/CardContent";

import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";

// Images
import mercedesEQC from "assets/images/mercedes-eqc.png";
import wavesWhite from "assets/images/shapes/waves-white.svg";
//import backgroundImage from "assets/images/curved-images/white-curved.jpeg";
import backgroundImage from "assets/images/mercedes-eqc.png";

//Suibox
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
// react-table components
import {
	useTable,
	usePagination,
	useGlobalFilter,
	useAsyncDebounce,
	useSortBy,
} from "react-table";

//required for profile info card
// import { Link } from "react-router-dom";
// import { Route, Redirect, useLocation } from "react-router-dom";
import { useLocation, NavLink } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";

import typography from "./assets/theme/base/typography";
import breakpoints from "./assets/theme/base/breakpoints";

//used for teams card
import logoSlack from "assets/images/small-logos/logo-slack.svg";

// Soft UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";

// Soft UI Dashboard PRO React helper functions
import pxToRem from "assets/theme/functions/pxToRem";
import boxShadow from "assets/theme/functions/boxShadow";

// @emotion/react components
import { keyframes } from "@emotion/react";

import curved9 from "assets/images/curved-images/curved9.jpg";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// react-quill components
import ReactQuill from "react-quill";

// react-quill styles
import "react-quill/dist/quill.snow.css";

export const PropsContext = React.createContext({});
function SpaceShip({ color, size }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 42 42"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<title>spaceship</title>
			<g
				id="Basic-Elements"
				stroke="none"
				strokeWidth="1"
				fill="none"
				fillRule="evenodd"
			>
				<g
					id="Rounded-Icons"
					transform="translate(-1720.000000, -592.000000)"
					fill={colors[color] ? colors[color].main : colors.dark.main}
					fillRule="nonzero"
				>
					<g
						id="Icons-with-opacity"
						transform="translate(1716.000000, 291.000000)"
					>
						<g
							id="spaceship"
							transform="translate(4.000000, 301.000000)"
						>
							<path d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z" />
							<path
								d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"
								id="Path"
							/>
							<path
								d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z"
								id="color-2"
								opacity="0.598539807"
							/>
							<path
								d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z"
								id="color-3"
								opacity="0.598539807"
							/>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
}

// Setting default values for the props of SpaceShip
SpaceShip.defaultProps = {
	color: "dark",
	size: "16px",
};

function CustomerSupport({ color, size }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 42 42"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<title>customer-support</title>
			<g
				id="Basic-Elements"
				stroke="none"
				strokeWidth="1"
				fill="none"
				fillRule="evenodd"
			>
				<g
					id="Rounded-Icons"
					transform="translate(-1717.000000, -291.000000)"
					fill={colors[color] ? colors[color].main : colors.dark.main}
					fillRule="nonzero"
				>
					<g
						id="Icons-with-opacity"
						transform="translate(1716.000000, 291.000000)"
					>
						<g
							id="customer-support"
							transform="translate(1.000000, 0.000000)"
						>
							<path
								className="color-background"
								d="M45,0 L26,0 C25.447,0 25,0.447 25,1 L25,20 C25,20.379 25.214,20.725 25.553,20.895 C25.694,20.965 25.848,21 26,21 C26.212,21 26.424,20.933 26.6,20.8 L34.333,15 L45,15 C45.553,15 46,14.553 46,14 L46,1 C46,0.447 45.553,0 45,0 Z"
								id="Path"
								opacity="0.59858631"
							/>
							<path
								d="M22.883,32.86 C20.761,32.012 17.324,31 13,31 C8.676,31 5.239,32.012 3.116,32.86 C1.224,33.619 0,35.438 0,37.494 L0,41 C0,41.553 0.447,42 1,42 L25,42 C25.553,42 26,41.553 26,41 L26,37.494 C26,35.438 24.776,33.619 22.883,32.86 Z"
								id="Path"
							/>
							<path
								d="M13,28 C17.432,28 21,22.529 21,18 C21,13.589 17.411,10 13,10 C8.589,10 5,13.589 5,18 C5,22.529 8.568,28 13,28 Z"
								id="Path"
							/>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
}

// Setting default values for the props of CustomerSupport
CustomerSupport.defaultProps = {
	color: "dark",
	size: "16px",
};

function CreditCard({ color, size }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 42 42"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<title>credit-card</title>
			<g
				id="Basic-Elements"
				stroke="none"
				strokeWidth="1"
				fill="none"
				fillRule="evenodd"
			>
				<g
					id="Rounded-Icons"
					transform="translate(-2169.000000, -745.000000)"
					fill={colors[color] ? colors[color].main : colors.dark.main}
					fillRule="nonzero"
				>
					<g
						id="Icons-with-opacity"
						transform="translate(1716.000000, 291.000000)"
					>
						<g
							id="credit-card"
							transform="translate(453.000000, 454.000000)"
						>
							<path
								d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
								id="Path"
								opacity="0.593633743"
							/>
							<path d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z" />
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
}

// Setting default values for the props of CreditCard
CreditCard.defaultProps = {
	color: "dark",
	size: "16px",
};

export const routes = [
	{ type: "divider", key: "divider-1" },
	{ type: "title", title: "Docs", key: "title-docs" },
	{
		type: "collapse",
		name: "Basic",
		key: "basic",
		icon: <SpaceShip size="12px" />,
		collapse: [
			{
				name: "Getting Started",
				key: "getting-started",
				collapse: [
					{
						name: "Overview",
						key: "overview",
						href: "https://www.creative-tim.com/learning-lab/react/overview/soft-ui-dashboard/",
					},
					{
						name: "License",
						key: "license",
						href: "https://www.creative-tim.com/learning-lab/react/license/soft-ui-dashboard/",
					},
					{
						name: "Quick Start",
						key: "quick-start",
						href: "https://www.creative-tim.com/learning-lab/react/quick-start/soft-ui-dashboard/",
					},
					{
						name: "Build Tools",
						key: "build-tools",
						href: "https://www.creative-tim.com/learning-lab/react/build-tools/soft-ui-dashboard/",
					},
				],
			},
			{
				name: "Foundation",
				key: "foundation",
				collapse: [
					{
						name: "Colors",
						key: "colors",
						href: "https://www.creative-tim.com/learning-lab/react/colors/soft-ui-dashboard/",
					},
					{
						name: "Grid",
						key: "grid",
						href: "https://www.creative-tim.com/learning-lab/react/grid/soft-ui-dashboard/",
					},
					{
						name: "Typography",
						key: "base-typography",
						href: "https://www.creative-tim.com/learning-lab/react/base-typography/soft-ui-dashboard/",
					},
					{
						name: "Borders",
						key: "borders",
						href: "https://www.creative-tim.com/learning-lab/react/borders/soft-ui-dashboard/",
					},
					{
						name: "Box Shadows",
						key: "box-shadows",
						href: "https://www.creative-tim.com/learning-lab/react/box-shadows/soft-ui-dashboard/",
					},
					{
						name: "Functions",
						key: "functions",
						href: "https://www.creative-tim.com/learning-lab/react/functions/soft-ui-dashboard/",
					},
					{
						name: "Routing System",
						key: "routing-system",
						href: "https://www.creative-tim.com/learning-lab/react/routing-system/soft-ui-dashboard/",
					},
				],
			},
		],
	},
	{
		type: "collapse",
		name: "Components",
		key: "components",
		icon: <CustomerSupport size="12px" />,
		collapse: [
			{
				name: "Alerts",
				key: "alerts",
				href: "https://www.creative-tim.com/learning-lab/react/alerts/soft-ui-dashboard/",
			},
			{
				name: "Avatar",
				key: "avatar",
				href: "https://www.creative-tim.com/learning-lab/react/avatar/soft-ui-dashboard/",
			},
			{
				name: "Badge",
				key: "badge",
				href: "https://www.creative-tim.com/learning-lab/react/badge/soft-ui-dashboard/",
			},
			{
				name: "Badge Dot",
				key: "badge-dot",
				href: "https://www.creative-tim.com/learning-lab/react/badge-dot/soft-ui-dashboard/",
			},
			{
				name: "Box",
				key: "box",
				href: "https://www.creative-tim.com/learning-lab/react/box/soft-ui-dashboard/",
			},
			{
				name: "Buttons",
				key: "buttons",
				href: "https://www.creative-tim.com/learning-lab/react/buttons/soft-ui-dashboard/",
			},
			{
				name: "Date Picker",
				key: "date-picker",
				href: "https://www.creative-tim.com/learning-lab/react/datepicker/soft-ui-dashboard/",
			},
			{
				name: "Dropzone",
				key: "dropzone",
				href: "https://www.creative-tim.com/learning-lab/react/dropzone/soft-ui-dashboard/",
			},
			{
				name: "Editor",
				key: "editor",
				href: "https://www.creative-tim.com/learning-lab/react/quill/soft-ui-dashboard/",
			},
			{
				name: "Input",
				key: "input",
				href: "https://www.creative-tim.com/learning-lab/react/input/soft-ui-dashboard/",
			},
			{
				name: "Pagination",
				key: "pagination",
				href: "https://www.creative-tim.com/learning-lab/react/pagination/soft-ui-dashboard/",
			},
			{
				name: "Progress",
				key: "progress",
				href: "https://www.creative-tim.com/learning-lab/react/progress/soft-ui-dashboard/",
			},
			{
				name: "Select",
				key: "select",
				href: "https://www.creative-tim.com/learning-lab/react/select/soft-ui-dashboard/",
			},
			{
				name: "Snackbar",
				key: "snackbar",
				href: "https://www.creative-tim.com/learning-lab/react/snackbar/soft-ui-dashboard/",
			},
			{
				name: "Social Button",
				key: "social-button",
				href: "https://www.creative-tim.com/learning-lab/react/social-buttons/soft-ui-dashboard/",
			},
			{
				name: "Tag Input",
				key: "tag-input",
				href: "https://www.creative-tim.com/learning-lab/react/tag-input/soft-ui-dashboard/",
			},
			{
				name: "Typography",
				key: "typography",
				href: "https://www.creative-tim.com/learning-lab/react/typography/soft-ui-dashboard/",
			},
		],
	},
	{
		type: "collapse",
		name: "Change Log",
		key: "changelog",
		href: "https://github.com/creativetimofficial/ct-soft-ui-dashboard-pro-material-ui/blob/main/CHANGELOG.md",
		icon: <CreditCard size="12px" />,
		noCollapse: true,
	},
];

const item = {
	width: "100%",
	padding: 0,
	cursor: "pointer",
};

function itemContent(theme, ownerState) {
	const { palette, typography, transitions, functions } = theme;
	const { active, miniSidenav, name, nested } = ownerState;

	const { dark, gradients } = palette;
	const { size, fontWeightMedium, fontWeightRegular } = typography;
	const { pxToRem, rgba } = functions;

	return {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		padding: `${pxToRem(7.2)} ${pxToRem(16)}`,
		margin: `0 ${pxToRem(16)} 0 ${pxToRem(21.6)}`,
		userSelect: "none",
		position: "relative",

		"& span": {
			color: active ? dark.main : rgba(gradients.dark.state, 0.7),
			fontWeight: active ? fontWeightMedium : fontWeightRegular,
			fontSize: size.sm,
			opacity: miniSidenav ? 0 : 1,
			transition: transitions.create(["opacity", "color"], {
				easing: transitions.easing.easeInOut,
				duration: transitions.duration.standard,
			}),
		},

		"&::before": {
			content: () => {
				if (nested) {
					return nested && miniSidenav && `"${name[0]}"`;
				}

				return miniSidenav ? `"${name[0]}"` : '""';
			},
			width: () => {
				if (!miniSidenav) {
					return active ? pxToRem(8) : pxToRem(5);
				}

				return 0;
			},
			height: () => {
				if (!miniSidenav) {
					return active ? pxToRem(8) : pxToRem(5);
				}

				return 0;
			},
			backgroundColor: active
				? dark.main
				: rgba(gradients.dark.state, 0.5),
			color: active ? dark.main : rgba(gradients.dark.state, 0.5),
			fontWeight: active ? fontWeightMedium : fontWeightRegular,
			display: "flex",
			alignItems: "center",
			position: "absolute",
			top: "50%",
			transform: "translateY(-50%)",
			left: pxToRem(-18),
			opacity: 1,
			borderRadius: "50%",
			fontSize: size.sm,
		},
	};
}

function itemArrow(theme, ownerState) {
	const { typography, transitions, functions, palette } = theme;
	const { open, miniSidenav } = ownerState;

	const { dark, gradients } = palette;
	const { size } = typography;
	const { pxToRem, rgba } = functions;

	return {
		fontSize: `${size.md} !important`,
		fontWeight: 700,
		marginRight: pxToRem(-2.5),
		transform: () => {
			if (open) {
				return miniSidenav
					? `translateX(${pxToRem(-24)}) rotate(0)`
					: "rotate(0)";
			}

			return miniSidenav
				? `translateX(${pxToRem(-24)}) rotate(-180deg)`
				: "rotate(-180deg)";
		},
		color: open ? dark.main : rgba(gradients.dark.state, 0.4),
		transition: transitions.create(["color", "transform"], {
			easing: transitions.easing.easeInOut,
			duration: transitions.duration.shorter,
		}),
	};
}

function sidenavLogoLabel(theme, ownerState) {
	const { functions, transitions, typography, breakpoints } = theme;
	const { miniSidenav } = ownerState;

	const { pxToRem } = functions;
	const { fontWeightMedium } = typography;

	return {
		ml: 0.5,
		fontWeight: fontWeightMedium,
		wordSpacing: pxToRem(-1),
		transition: transitions.create("opacity", {
			easing: transitions.easing.easeInOut,
			duration: transitions.duration.standard,
		}),

		[breakpoints.up("xl")]: {
			opacity: miniSidenav ? 0 : 1,
		},
	};
}
function collapseItem(theme, ownerState) {
	const {
		palette,
		transitions,
		breakpoints,
		boxShadows,
		borders,
		functions,
	} = theme;
	const { active, transparentSidenav } = ownerState;

	const { dark, white, text, transparent } = palette;
	const { xxl } = boxShadows;
	const { borderRadius } = borders;
	const { pxToRem } = functions;

	return {
		background:
			active && transparentSidenav ? white.main : transparent.main,
		color: active ? dark.main : text.main,
		display: "flex",
		alignItems: "center",
		width: "100%",
		padding: `${pxToRem(10.8)} ${pxToRem(12.8)} ${pxToRem(10.8)} ${pxToRem(
			16
		)}`,
		margin: `0 ${pxToRem(16)}`,
		borderRadius: borderRadius.md,
		cursor: "pointer",
		userSelect: "none",
		whiteSpace: "nowrap",
		boxShadow: active && transparentSidenav ? xxl : "none",
		[breakpoints.up("xl")]: {
			boxShadow: () => {
				if (active) {
					return transparentSidenav ? xxl : "none";
				}

				return "none";
			},
			transition: transitions.create("box-shadow", {
				easing: transitions.easing.easeInOut,
				duration: transitions.duration.shorter,
			}),
		},
	};
}

function collapseIconBox(theme, ownerState) {
	const {
		palette,
		transitions,
		breakpoints,
		boxShadows,
		borders,
		functions,
	} = theme;
	const { active, transparentSidenav, color } = ownerState;

	const { white, info, light, gradients } = palette;
	const { md } = boxShadows;
	const { borderRadius } = borders;
	const { pxToRem } = functions;

	return {
		background: () => {
			if (active) {
				return color === "default" ? info.main : palette[color].main;
			}

			return light.main;
		},
		minWidth: pxToRem(32),
		minHeight: pxToRem(32),
		borderRadius: borderRadius.md,
		display: "grid",
		placeItems: "center",
		boxShadow: md,
		transition: transitions.create("margin", {
			easing: transitions.easing.easeInOut,
			duration: transitions.duration.standard,
		}),

		[breakpoints.up("xl")]: {
			background: () => {
				let background;

				if (!active) {
					background = transparentSidenav ? white.main : light.main;
				} else if (color === "default") {
					background = info.main;
				} else if (color === "warning") {
					background = gradients.warning.main;
				} else {
					background = palette[color].main;
				}

				return background;
			},
		},

		"& svg, svg g": {
			fill: active ? white.main : gradients.dark.state,
		},
	};
}

const collapseIcon = ({ palette: { white, gradients } }, { active }) => ({
	color: active ? white.main : gradients.dark.state,
});

function collapseText(theme, ownerState) {
	const { typography, transitions, breakpoints, functions } = theme;
	const { miniSidenav, transparentSidenav, active } = ownerState;

	const { size, fontWeightMedium, fontWeightRegular } = typography;
	const { pxToRem } = functions;

	return {
		marginLeft: pxToRem(12.8),

		[breakpoints.up("xl")]: {
			opacity: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : 1,
			maxWidth:
				miniSidenav || (miniSidenav && transparentSidenav) ? 0 : "100%",
			marginLeft:
				miniSidenav || (miniSidenav && transparentSidenav)
					? 0
					: pxToRem(12.8),
			transition: transitions.create(["opacity", "margin"], {
				easing: transitions.easing.easeInOut,
				duration: transitions.duration.standard,
			}),
		},

		"& span": {
			fontWeight: active ? fontWeightMedium : fontWeightRegular,
			fontSize: size.sm,
			lineHeight: 0,
		},
	};
}

function collapseArrow(theme, ownerState) {
	const { palette, typography, transitions, breakpoints, functions } = theme;
	const { noCollapse, transparentSidenav, miniSidenav, open } = ownerState;

	const { dark, gradients } = palette;
	const { size } = typography;
	const { pxToRem, rgba } = functions;

	return {
		fontSize: `${size.md} !important`,
		fontWeight: 700,
		marginBottom: pxToRem(-1),
		transform: open ? "rotate(0)" : "rotate(-180deg)",
		color: open ? dark.main : rgba(gradients.dark.state, 0.4),
		transition: transitions.create(["color", "transform", "opacity"], {
			easing: transitions.easing.easeInOut,
			duration: transitions.duration.shorter,
		}),

		[breakpoints.up("xl")]: {
			display:
				noCollapse || (transparentSidenav && miniSidenav) || miniSidenav
					? "none !important"
					: "block !important",
		},
	};
}

function card(theme, ownerState) {
	const { borders, functions, transitions, breakpoints } = theme;
	const { miniSidenav } = ownerState;

	const { borderRadius } = borders;
	const { pxToRem } = functions;

	return {
		minWidth: "auto",
		backgroundImage: `url(${backgroundImage})`,
		backgroundPosition: "50%",
		backgroundSize: "cover",
		borderRadius: borderRadius.xl,
		boxShadow: "none",

		[breakpoints.up("xl")]: {
			maxHeight: miniSidenav ? pxToRem(64) : pxToRem(192),
			transition: transitions.create("max-height", {
				easing: transitions.easing.easeInOut,
				duration: transitions.duration.standard,
			}),
		},
	};
}

function cardContent(theme, ownerState) {
	const { palette, functions, borders } = theme;
	const { sidenavColor } = ownerState;

	const { white, dark, gradients } = palette;
	const { linearGradient } = functions;
	const { borderRadius } = borders;

	return {
		color: white.main,
		position: "relative",
		zIndex: 2,
		width: "100%",
		height: "100%",
		p: 2,

		"&::after": {
			content: '""',
			backgroundImage:
				sidenavColor === "default"
					? linearGradient(
							gradients.secondary.main,
							gradients.secondary.state
					  )
					: linearGradient(
							gradients[sidenavColor].main,
							gradients[sidenavColor].state
					  ),
			display: "block",
			height: "100%",
			width: "100%",
			borderRadius: borderRadius.xl,
			position: "absolute",
			top: 0,
			left: 0,
			opacity: 0.65,
			zIndex: -1,
		},

		"& .MuiButton-root": {
			color: dark.main,
		},

		"&:last-child": {
			pb: 2,
		},
	};
}

const cardIconBox = {
	display: "grid",
	placeItems: "center",
	transition: ({ transitions }) =>
		transitions.create("margin", {
			easing: transitions.easing.easeInOut,
			duration: transitions.duration.standard,
		}),
};

function cardIcon(theme, ownerState) {
	const { functions, palette } = theme;
	const { sidenavColor } = ownerState;

	const { linearGradient } = functions;
	const { gradients, transparent } = palette;

	return {
		backgroundImage:
			sidenavColor === "default"
				? linearGradient(gradients.dark, gradients.dark.state)
				: linearGradient(
						gradients[sidenavColor].main,
						gradients[sidenavColor].state
				  ),
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: transparent.main,
	};
}

function SidenavCard({ controller }) {
	// const [controller] = useSoftUIController();
	const { miniSidenav, sidenavColor } = controller;

	return (
		<Card sx={(theme) => card(theme, { miniSidenav })}>
			<CardContent sx={(theme) => cardContent(theme, { sidenavColor })}>
				<SuiBox
					bgColor="white"
					width="2rem"
					height="2rem"
					borderRadius="md"
					shadow="md"
					mb={2}
					sx={cardIconBox}
				>
					<Icon
						fontSize="medium"
						sx={(theme) => cardIcon(theme, { sidenavColor })}
					>
						star
					</Icon>
				</SuiBox>
				<SuiBox lineHeight={1}>
					<SuiTypography variant="h6" color="white">
						Need help?
					</SuiTypography>
					<SuiBox mb={1.825} mt={-1}>
						<SuiTypography
							variant="caption"
							color="white"
							fontWeight="medium"
						>
							Please check our docs
						</SuiTypography>
					</SuiBox>
					<SuiButton
						component={Link}
						href="https://www.creative-tim.com/learning-lab/react/quick-start/soft-ui-dashboard/"
						target="_blank"
						rel="noreferrer"
						size="small"
						color="white"
						fullWidth
					>
						documentation
					</SuiButton>
				</SuiBox>
			</CardContent>
		</Card>
	);
}

function SidenavCollapse({
	controller,
	color,
	icon,
	name,
	children,
	active,
	noCollapse,
	open,
	...rest
}) {
	//const [controller] = useSoftUIController();
	const { miniSidenav, transparentSidenav } = controller;

	return (
		<>
			<ListItem component="li">
				<SuiBox
					{...rest}
					sx={(theme) =>
						collapseItem(theme, { active, transparentSidenav })
					}
				>
					<ListItemIcon
						sx={(theme) =>
							collapseIconBox(theme, {
								active,
								transparentSidenav,
								color,
							})
						}
					>
						{typeof icon === "string" ? (
							<Icon
								sx={(theme) => collapseIcon(theme, { active })}
							>
								{icon}
							</Icon>
						) : (
							icon
						)}
					</ListItemIcon>

					<ListItemText
						primary={name}
						sx={(theme) =>
							collapseText(theme, {
								miniSidenav,
								transparentSidenav,
								active,
							})
						}
					/>

					<ArrowDropUpIcon
						sx={(theme) =>
							collapseArrow(theme, {
								noCollapse,
								transparentSidenav,
								miniSidenav,
								open,
							})
						}
					></ArrowDropUpIcon>
				</SuiBox>
			</ListItem>
			{children && (
				<Collapse in={open} unmountOnExit>
					{children}
				</Collapse>
			)}
		</>
	);
}

// Setting default values for the props of SidenavCollapse
SidenavCollapse.defaultProps = {
	color: "info",
	active: false,
	noCollapse: false,
	children: false,
	open: false,
};

function SidenavItem({
	controller,
	name,
	active,
	nested,
	children,
	open,
	...rest
}) {
	//const [controller] = useSoftUIController();
	const { miniSidenav } = controller;

	return (
		<>
			<ListItem {...rest} component="li" sx={item}>
				<SuiBox
					sx={(theme) =>
						itemContent(theme, {
							active,
							miniSidenav,
							name,
							nested,
						})
					}
				>
					<ListItemText primary={name} />
					{children && (
						<ArrowDropUpIcon
							component="i"
							sx={(theme) =>
								itemArrow(theme, { open, miniSidenav })
							}
						></ArrowDropUpIcon>
					)}
				</SuiBox>
			</ListItem>
			{children && (
				<Collapse in={open} timeout="auto" unmountOnExit>
					{children}
				</Collapse>
			)}
		</>
	);
}

// Setting default values for the props of SidenavItem
SidenavItem.defaultProps = {
	active: false,
	nested: false,
	children: false,
	open: false,
};

function SidenavList({ children }) {
	return (
		<List
			sx={{
				pl: 2,
				ml: 3,
			}}
		>
			{children}
		</List>
	);
}

const SidenavRoot = styled(Drawer)(({ theme, ownerState }) => {
	const { palette, boxShadows, transitions, breakpoints, functions } = theme;
	const { transparentSidenav, miniSidenav } = ownerState;

	const sidebarWidth = 250;
	const { white, transparent } = palette;
	const { xxl } = boxShadows;
	const { pxToRem } = functions;

	// styles for the sidenav when miniSidenav={false}
	const drawerOpenStyles = () => ({
		transform: "translateX(0)",
		transition: transitions.create("transform", {
			easing: transitions.easing.sharp,
			duration: transitions.duration.shorter,
		}),

		[breakpoints.up("xl")]: {
			backgroundColor: transparentSidenav ? transparent.main : white.main,
			boxShadow: transparentSidenav ? "none" : xxl,
			marginBottom: transparentSidenav ? 0 : "inherit",
			left: "0",
			width: sidebarWidth,
			transform: "translateX(0)",
			transition: transitions.create(["width", "background-color"], {
				easing: transitions.easing.sharp,
				duration: transitions.duration.enteringScreen,
			}),
		},
	});

	// styles for the sidenav when miniSidenav={true}
	const drawerCloseStyles = () => ({
		transform: `translateX(${pxToRem(-320)})`,
		transition: transitions.create("transform", {
			easing: transitions.easing.sharp,
			duration: transitions.duration.shorter,
		}),

		[breakpoints.up("xl")]: {
			backgroundColor: transparentSidenav ? transparent.main : white.main,
			boxShadow: transparentSidenav ? "none" : xxl,
			marginBottom: transparentSidenav ? 0 : "inherit",
			left: "0",
			width: pxToRem(96),
			overflowX: "hidden",
			transform: "translateX(0)",
			transition: transitions.create(["width", "background-color"], {
				easing: transitions.easing.sharp,
				duration: transitions.duration.shorter,
			}),
		},
	});

	return {
		"& .MuiDrawer-paper": {
			boxShadow: xxl,
			border: "none",

			...(miniSidenav ? drawerCloseStyles() : drawerOpenStyles()),
		},
	};
});

export function Sidenav({
	controller,
	setController,
	color,
	brand,
	brandName,
	routes,
	...rest
}) {
	const [openCollapse, setOpenCollapse] = useState(false);
	const [openNestedCollapse, setOpenNestedCollapse] = useState(false);
	//const [controller, dispatch] = useSoftUIController();
	const { miniSidenav, transparentSidenav } = controller;
	const location = useLocation();
	const { pathname } = location;
	const collapseName = pathname.split("/").slice(1)[0];
	const itemName = pathname.split("/").slice(1)[1];

	const closeSidenav = () =>
		setController({ ...controller, miniSidenav: true }); //setMiniSidenav(dispatch, true);

	useEffect(() => {
		// A function that sets the mini state of the sidenav.
		function handleMiniSidenav() {
			setController({
				...controller,
				miniSidenav: window.innerWidth < 1200,
			});
			// setMiniSidenav(dispatch, window.innerWidth < 1200);
		}

		/** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
		window.addEventListener("resize", handleMiniSidenav);

		// Call the handleMiniSidenav function to set the state with the initial value.
		handleMiniSidenav();

		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleMiniSidenav);
	}, [location]);

	// Render all the nested collapse items from the routes.js
	const renderNestedCollapse = (collapse) => {
		const template = collapse.map(({ name, route, key, href }) =>
			href ? (
				<Link
					key={key}
					href={href}
					target="_blank"
					rel="noreferrer"
					sx={{ textDecoration: "none" }}
				>
					<SidenavItem controller={controller} name={name} nested />
				</Link>
			) : (
				<NavLink to={route} key={key} sx={{ textDecoration: "none" }}>
					<SidenavItem
						controller={controller}
						name={name}
						active={route === pathname}
						nested
					/>
				</NavLink>
			)
		);

		return template;
	};

	// Render the all the collpases from the routes.js
	const renderCollapse = (collapses) =>
		collapses.map(({ name, collapse, route, href, key }) => {
			let returnValue;

			if (collapse) {
				returnValue = (
					<SidenavItem
						controller={controller}
						key={key}
						name={name}
						active={key === itemName}
						open={openNestedCollapse === name}
						onClick={() =>
							openNestedCollapse === name
								? setOpenNestedCollapse(false)
								: setOpenNestedCollapse(name)
						}
					>
						{renderNestedCollapse(collapse)}
					</SidenavItem>
				);
			} else {
				returnValue = href ? (
					<Link
						href={href}
						key={key}
						target="_blank"
						rel="noreferrer"
						sx={{ textDecoration: "none" }}
					>
						<SidenavItem
							controller={controller}
							name={name}
							active={key === itemName}
						/>
					</Link>
				) : (
					<NavLink
						to={route}
						key={key}
						sx={{ textDecoration: "none" }}
					>
						<SidenavItem
							controller={controller}
							name={name}
							active={key === itemName}
						/>
					</NavLink>
				);
			}
			return <SidenavList key={key}>{returnValue}</SidenavList>;
		});

	// Render all the routes from the routes.js (All the visible items on the Sidenav)
	const renderRoutes = routes.map(
		({ type, name, icon, title, collapse, noCollapse, key, href }) => {
			let returnValue;

			if (type === "collapse") {
				returnValue = href ? (
					<Link
						href={href}
						key={key}
						target="_blank"
						rel="noreferrer"
						sx={{ textDecoration: "none" }}
					>
						<SidenavCollapse
							controller={controller}
							color={color}
							name={name}
							icon={icon}
							active={key === collapseName}
							noCollapse={noCollapse}
						/>
					</Link>
				) : (
					<SidenavCollapse
						controller={controller}
						color={color}
						key={key}
						name={name}
						icon={icon}
						active={key === collapseName}
						open={openCollapse === name}
						onClick={() =>
							openCollapse === name
								? setOpenCollapse(false)
								: setOpenCollapse(name)
						}
					>
						{collapse ? renderCollapse(collapse) : null}
					</SidenavCollapse>
				);
			} else if (type === "title") {
				returnValue = (
					<SuiTypography
						key={key}
						display="block"
						variant="caption"
						fontWeight="bold"
						textTransform="uppercase"
						opacity={0.6}
						pl={3}
						mt={2}
						mb={1}
						ml={1}
					>
						{title}
					</SuiTypography>
				);
			} else if (type === "divider") {
				returnValue = <Divider key={key} />;
			}

			return returnValue;
		}
	);

	return (
		<SidenavRoot
			{...rest}
			variant="permanent"
			ownerState={{ transparentSidenav, miniSidenav }}
		>
			<SuiBox pt={3} pb={1} px={4} textAlign="center">
				<SuiBox
					display={{ xs: "block", xl: "none" }}
					position="absolute"
					top={0}
					right={0}
					p={1.625}
					onClick={closeSidenav}
					sx={{ cursor: "pointer" }}
				>
					<SuiTypography variant="h6" color="secondary">
						<Icon sx={{ fontWeight: "bold" }}>close</Icon>
					</SuiTypography>
				</SuiBox>
				<SuiBox
					component={NavLink}
					to="/"
					display="flex"
					alignItems="center"
				>
					{brand && (
						<SuiBox
							component="img"
							src={brand}
							alt="Soft UI Logo"
							width="2rem"
						/>
					)}
					<SuiBox
						width={!brandName && "100%"}
						sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
					>
						<SuiTypography
							component="h6"
							variant="button"
							fontWeight="medium"
						>
							{brandName}
						</SuiTypography>
					</SuiBox>
				</SuiBox>
			</SuiBox>
			<Divider />
			<List>{renderRoutes}</List>

			<SuiBox pt={2} my={2} mx={2}>
				<SidenavCard controller={controller} />
			</SuiBox>
		</SidenavRoot>
	);
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
	color: "info",
	brand: "",
};
const SuiTypographyRoot = styled(Typography)(({ theme, ownerState }) => {
	const { palette, typography, functions } = theme;
	const {
		color,
		textTransform,
		verticalAlign,
		fontWeight,
		opacity,
		textGradient,
	} = ownerState;

	const { gradients, transparent } = palette;
	const {
		fontWeightLight,
		fontWeightRegular,
		fontWeightMedium,
		fontWeightBold,
	} = typography;
	const { linearGradient } = functions;

	// fontWeight styles
	const fontWeights = {
		light: fontWeightLight,
		regular: fontWeightRegular,
		medium: fontWeightMedium,
		bold: fontWeightBold,
	};

	// styles for the typography with textGradient={true}
	const gradientStyles = () => ({
		backgroundImage:
			color !== "inherit" &&
			color !== "text" &&
			color !== "white" &&
			gradients[color]
				? linearGradient(gradients[color].main, gradients[color].state)
				: linearGradient(gradients.dark.main, gradients.dark.state),
		display: "inline-block",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: transparent.main,
		position: "relative",
		zIndex: 1,
	});

	return {
		opacity,
		textTransform,
		verticalAlign,
		textDecoration: "none",
		color:
			color === "inherit" || !palette[color]
				? "inherit"
				: palette[color].main,
		fontWeight: fontWeights[fontWeight] && fontWeights[fontWeight],
		...(textGradient && gradientStyles()),
	};
});

export const SuiTypography = forwardRef(
	(
		{
			color,
			fontWeight,
			textTransform,
			verticalAlign,
			textGradient,
			opacity,
			children,
			...rest
		},
		ref
	) => (
		<SuiTypographyRoot
			{...rest}
			ref={ref}
			ownerState={{
				color,
				textTransform,
				verticalAlign,
				fontWeight,
				opacity,
				textGradient,
			}}
		>
			{children}
		</SuiTypographyRoot>
	)
);

// Setting default values for the props of SuiTypography
SuiTypography.defaultProps = {
	color: "dark",
	fontWeight: false,
	textTransform: "none",
	verticalAlign: "unset",
	textGradient: false,
	opacity: 1,
};

const SuiBoxRoot = styled(Box)(({ theme, ownerState }) => {
	const { palette, functions, borders, boxShadows } = theme;
	const { variant, bgColor, color, opacity, borderRadius, shadow } =
		ownerState;

	const { gradients, grey, white } = palette;
	const { linearGradient } = functions;
	const { borderRadius: radius } = borders;

	const greyColors = {
		"grey-100": grey[100],
		"grey-200": grey[200],
		"grey-300": grey[300],
		"grey-400": grey[400],
		"grey-500": grey[500],
		"grey-600": grey[600],
		"grey-700": grey[700],
		"grey-800": grey[800],
		"grey-900": grey[900],
	};

	const validGradients = [
		"primary",
		"secondary",
		"info",
		"success",
		"warning",
		"error",
		"dark",
		"light",
	];

	const validColors = [
		"transparent",
		"white",
		"black",
		"primary",
		"secondary",
		"info",
		"success",
		"warning",
		"error",
		"light",
		"dark",
		"text",
		"grey-100",
		"grey-200",
		"grey-300",
		"grey-400",
		"grey-500",
		"grey-600",
		"grey-700",
		"grey-800",
		"grey-900",
	];

	const validBorderRadius = ["xs", "sm", "md", "lg", "xl", "xxl", "section"];
	const validBoxShadows = ["xs", "sm", "md", "lg", "xl", "xxl", "inset"];

	// background value
	let backgroundValue = bgColor;

	if (variant === "gradient") {
		backgroundValue = validGradients.find((el) => el === bgColor)
			? linearGradient(gradients[bgColor].main, gradients[bgColor].state)
			: white.main;
	} else if (validColors.find((el) => el === bgColor)) {
		backgroundValue = palette[bgColor]
			? palette[bgColor].main
			: greyColors[bgColor];
	} else {
		backgroundValue = bgColor;
	}

	// color value
	let colorValue = color;

	if (validColors.find((el) => el === color)) {
		colorValue = palette[color] ? palette[color].main : greyColors[color];
	}

	// borderRadius value
	let borderRadiusValue = borderRadius;

	if (validBorderRadius.find((el) => el === borderRadius)) {
		borderRadiusValue = radius[borderRadius];
	}

	// boxShadow value
	let boxShadowValue = boxShadows;

	if (validBoxShadows.find((el) => el === shadow)) {
		boxShadowValue = boxShadows[shadow];
	}

	return {
		opacity,
		background: backgroundValue,
		color: colorValue,
		borderRadius: borderRadiusValue,
		boxShadow: boxShadowValue,
	};
});

export const SuiBox = forwardRef(
	(
		{ variant, bgColor, color, opacity, borderRadius, shadow, ...rest },
		ref
	) => (
		<SuiBoxRoot
			{...rest}
			ref={ref}
			ownerState={{
				variant,
				bgColor,
				color,
				opacity,
				borderRadius,
				shadow,
			}}
		/>
	)
);

// Setting default values for the props of SuiBox
SuiBox.defaultProps = {
	variant: "contained",
	bgColor: "transparent",
	color: "dark",
	opacity: 1,
	borderRadius: "none",
	shadow: "none",
};

const SuiButtonRoot = styled(Button)(({ theme, ownerState }) => {
	const { palette, functions, borders } = theme;
	const { color, variant, size, circular, iconOnly } = ownerState;

	const { white, dark, text, transparent, gradients } = palette;
	const { boxShadow, linearGradient, pxToRem, rgba } = functions;
	const { borderRadius } = borders;

	// styles for the button with variant="contained"
	const containedStyles = () => {
		// background color value
		const backgroundValue = palette[color]
			? palette[color].main
			: white.main;

		// backgroundColor value when button is focused
		const focusedBackgroundValue = palette[color]
			? palette[color].focus
			: white.focus;

		// boxShadow value
		const boxShadowValue = palette[color]
			? boxShadow([0, 0], [0, 3.2], palette[color].main, 0.5)
			: boxShadow([0, 0], [0, 3.2], dark.main, 0.5);

		// color value
		let colorValue = white.main;

		if (color === "white" || !palette[color]) {
			colorValue = text.main;
		} else if (color === "light") {
			colorValue = gradients.dark.state;
		}

		// color value when button is focused
		let focusedColorValue = white.main;

		if (color === "white") {
			focusedColorValue = text.main;
		} else if (
			color === "primary" ||
			color === "error" ||
			color === "dark"
		) {
			focusedColorValue = white.main;
		}

		return {
			background: backgroundValue,
			color: colorValue,

			"&:hover": {
				backgroundColor: backgroundValue,
			},

			"&:focus:not(:hover)": {
				backgroundColor: focusedBackgroundValue,
				boxShadow: boxShadowValue,
			},

			"&:disabled": {
				backgroundColor: backgroundValue,
				color: focusedColorValue,
			},
		};
	};

	// styles for the button with variant="outlined"
	const outliedStyles = () => {
		// background color value
		const backgroundValue =
			color === "white" ? rgba(white.main, 0.1) : transparent.main;

		// color value
		const colorValue = palette[color] ? palette[color].main : white.main;

		// boxShadow value
		const boxShadowValue = palette[color]
			? boxShadow([0, 0], [0, 3.2], palette[color].main, 0.5)
			: boxShadow([0, 0], [0, 3.2], white.main, 0.5);

		// border color value
		let borderColorValue = palette[color]
			? palette[color].main
			: rgba(white.main, 0.75);

		if (color === "white") {
			borderColorValue = rgba(white.main, 0.75);
		}

		return {
			background: backgroundValue,
			color: colorValue,
			borderColor: borderColorValue,

			"&:hover": {
				background: transparent.main,
				borderColor: colorValue,
			},

			"&:focus:not(:hover)": {
				background: transparent.main,
				boxShadow: boxShadowValue,
			},

			"&:active:not(:hover)": {
				backgroundColor: colorValue,
				color: white.main,
				opacity: 0.85,
			},

			"&:disabled": {
				color: colorValue,
				borderColor: colorValue,
			},
		};
	};

	// styles for the button with variant="gradient"
	const gradientStyles = () => {
		// background value
		const backgroundValue =
			color === "white" || !gradients[color]
				? white.main
				: linearGradient(gradients[color].main, gradients[color].state);

		// color value
		let colorValue = white.main;

		if (color === "white") {
			colorValue = text.main;
		} else if (color === "light") {
			colorValue = gradients.dark.state;
		}

		return {
			background: backgroundValue,
			color: colorValue,

			"&:focus:not(:hover)": {
				boxShadow: "none",
			},

			"&:disabled": {
				background: backgroundValue,
				color: colorValue,
			},
		};
	};

	// styles for the button with variant="text"
	const textStyles = () => {
		// color value
		const colorValue = palette[color] ? palette[color].main : white.main;

		// color value when button is focused
		const focusedColorValue = palette[color]
			? palette[color].focus
			: white.focus;

		return {
			color: colorValue,

			"&:hover": {
				color: focusedColorValue,
			},

			"&:focus:not(:hover)": {
				color: focusedColorValue,
			},
		};
	};

	// styles for the button with circular={true}
	const circularStyles = () => ({
		borderRadius: borderRadius.section,
	});

	// styles for the button with iconOnly={true}
	const iconOnlyStyles = () => {
		// width, height, minWidth and minHeight values
		let sizeValue = pxToRem(38);

		if (size === "small") {
			sizeValue = pxToRem(25.4);
		} else if (size === "large") {
			sizeValue = pxToRem(52);
		}

		// padding value
		let paddingValue = `${pxToRem(11)} ${pxToRem(11)} ${pxToRem(10)}`;

		if (size === "small") {
			paddingValue = pxToRem(4.5);
		} else if (size === "large") {
			paddingValue = pxToRem(16);
		}

		return {
			width: sizeValue,
			minWidth: sizeValue,
			height: sizeValue,
			minHeight: sizeValue,
			padding: paddingValue,

			"& .material-icons": {
				marginTop: 0,
			},

			"&:hover, &:focus, &:active": {
				transform: "none",
			},
		};
	};

	return {
		...(variant === "contained" && containedStyles()),
		...(variant === "outlined" && outliedStyles()),
		...(variant === "gradient" && gradientStyles()),
		...(variant === "text" && textStyles()),
		...(circular && circularStyles()),
		...(iconOnly && iconOnlyStyles()),
	};
});

export const SuiButton = forwardRef(
	({ color, variant, size, circular, iconOnly, children, ...rest }, ref) => (
		<SuiButtonRoot
			{...rest}
			ref={ref}
			color="primary"
			variant={variant === "gradient" ? "contained" : variant}
			size={size}
			ownerState={{ color, variant, size, circular, iconOnly }}
		>
			{children}
		</SuiButtonRoot>
	)
);
// Setting default values for the props of SuiButton
SuiButton.defaultProps = {
	size: "medium",
	variant: "contained",
	color: "white",
	circular: false,
	iconOnly: false,
};

const SuiAvatarRoot = styled(Avatar)(({ theme, ownerState }) => {
	console.log({ avatarTheme: theme });
	const { palette, functions, typography, boxShadows } = theme;
	const { shadow, bgColor, size } = ownerState;

	const { gradients, transparent } = palette;
	const { pxToRem, linearGradient } = functions;
	const { size: fontSize, fontWeightBold } = typography;
	console.log({ transparent, bgColor });
	// backgroundImage value
	const backgroundValue =
		bgColor === "transparent"
			? transparent.main
			: linearGradient(gradients[bgColor].main, gradients[bgColor].state);

	// size value
	let sizeValue;

	switch (size) {
		case "xs":
			sizeValue = {
				width: pxToRem(24),
				height: pxToRem(24),
				fontSize: fontSize.xs,
			};
			break;
		case "sm":
			sizeValue = {
				width: pxToRem(36),
				height: pxToRem(36),
				fontSize: fontSize.sm,
			};
			break;
		case "lg":
			sizeValue = {
				width: pxToRem(58),
				height: pxToRem(58),
				fontSize: fontSize.sm,
			};
			break;
		case "xl":
			sizeValue = {
				width: pxToRem(74),
				height: pxToRem(74),
				fontSize: fontSize.md,
			};
			break;
		case "xxl":
			sizeValue = {
				width: pxToRem(110),
				height: pxToRem(110),
				fontSize: fontSize.md,
			};
			break;
		default: {
			sizeValue = {
				width: pxToRem(48),
				height: pxToRem(48),
				fontSize: fontSize.md,
			};
		}
	}

	return {
		background: backgroundValue,
		fontWeight: fontWeightBold,
		boxShadow: boxShadows[shadow],
		...sizeValue,
	};
});

export const SuiAvatar = forwardRef(
	({ bgColor, size, shadow, ...rest }, ref) => (
		<SuiAvatarRoot
			ref={ref}
			ownerState={{ shadow, bgColor, size }}
			{...rest}
		/>
	)
);
// Setting default values for the props of SuiAvatar
SuiAvatar.defaultProps = {
	bgColor: "transparent",
	size: "md",
	shadow: "none",
};

const SuiInputWithIconRoot = styled("div")(({ theme, ownerState }) => {
	const { palette, functions, borders } = theme;
	const { error, success, disabled } = ownerState;

	const { inputColors, grey, white } = palette;
	const { pxToRem } = functions;
	const { borderRadius, borderWidth } = borders;

	// border color value
	let borderColorValue = inputColors.borderColor.main;

	if (error) {
		borderColorValue = inputColors.error;
	} else if (success) {
		borderColorValue = inputColors.success;
	}

	return {
		display: "flex",
		alignItems: "center",
		backgroundColor: disabled ? grey[200] : white.main,
		border: `${borderWidth[1]} solid`,
		borderRadius: borderRadius.md,
		borderColor: borderColorValue,

		"& .MuiInputBase-input": {
			height: pxToRem(20),
		},
	};
});

const SuiInputRoot = styled(InputBase)(({ theme, ownerState }) => {
	const { palette, boxShadows, functions, typography, borders } = theme;
	const { size, error, success, iconDirection, direction, disabled } =
		ownerState;

	const { inputColors, grey, white, transparent } = palette;
	const { inputBoxShadow } = boxShadows;
	const { pxToRem, boxShadow } = functions;
	const { size: fontSize } = typography;
	const { borderRadius } = borders;

	// styles for the input with size="small"
	const smallStyles = () => ({
		fontSize: fontSize.xs,
		padding: `${pxToRem(4)} ${pxToRem(12)}`,
	});

	// styles for the input with size="large"
	const largeStyles = () => ({
		padding: pxToRem(12),
	});

	// styles for the focused state of the input
	let focusedBorderColorValue = inputColors.borderColor.focus;

	if (error) {
		focusedBorderColorValue = inputColors.error;
	} else if (success) {
		focusedBorderColorValue = inputColors.success;
	}

	let focusedPaddingLeftValue;

	if (direction === "rtl" && iconDirection === "left") {
		focusedPaddingLeftValue = pxToRem(12);
	} else if (direction === "rtl" && iconDirection === "right") {
		focusedPaddingLeftValue = pxToRem(12);
	} else if (direction === "ltr" && iconDirection === "right") {
		focusedPaddingLeftValue = pxToRem(12);
	} else if (direction === "ltr" && iconDirection === "left") {
		focusedPaddingLeftValue = pxToRem(12);
	}

	let focusedPaddingRightValue;

	if (direction === "rtl" && iconDirection === "left") {
		focusedPaddingRightValue = pxToRem(12);
	} else if (direction === "rtl" && iconDirection === "right") {
		focusedPaddingRightValue = pxToRem(12);
	} else if (direction === "ltr" && iconDirection === "right") {
		focusedPaddingRightValue = pxToRem(12);
	} else if (direction === "ltr" && iconDirection === "left") {
		focusedPaddingRightValue = pxToRem(12);
	}

	let focusedBoxShadowValue = boxShadow(
		[0, 0],
		[0, 2],
		inputColors.boxShadow,
		1
	);

	if (error) {
		focusedBoxShadowValue = inputBoxShadow.error;
	} else if (success) {
		focusedBoxShadowValue = inputBoxShadow.success;
	}

	// styles for the input with error={true}
	const errorStyles = () => ({
		backgroundImage:
			"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23fd5c70' viewBox='0 0 12 12'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23fd5c70' stroke='none'/%3E%3C/svg%3E\")",
		backgroundRepeat: "no-repeat",
		backgroundPosition: `right ${pxToRem(12)} center`,
		backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,
		borderColor: inputColors.error,
	});

	// styles for the input with success={true}
	const successStyles = () => ({
		backgroundImage:
			"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8'%3E%3Cpath fill='%2366d432' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\")",
		backgroundRepeat: "no-repeat",
		backgroundPosition: `right ${pxToRem(12)} center`,
		backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,
		borderColor: inputColors.success,
	});

	// styles for the input containing an icon
	const withIconStyles = () => {
		let withIconBorderRadiusValue = `0 ${borderRadius.md} ${borderRadius.md} 0`;

		if (direction === "rtl" && iconDirection === "left") {
			withIconBorderRadiusValue = `0 ${borderRadius.md} ${borderRadius.md} 0`;
		} else if (direction === "rtl" && iconDirection === "right") {
			withIconBorderRadiusValue = `${borderRadius.md} 0 0 ${borderRadius.md}`;
		} else if (direction === "ltr" && iconDirection === "right") {
			withIconBorderRadiusValue = `${borderRadius.md} 0 0 ${borderRadius.md}`;
		}

		let withIconPaddingLeftValue;
		if (direction === "rtl" && iconDirection === "left") {
			withIconPaddingLeftValue = 0;
		} else if (direction === "rtl" && iconDirection === "right") {
			withIconPaddingLeftValue = pxToRem(12);
		} else if (direction === "ltr" && iconDirection === "right") {
			withIconPaddingLeftValue = pxToRem(12);
		} else if (direction === "ltr" && iconDirection === "left") {
			withIconPaddingLeftValue = 0;
		}

		let withIconPaddingRightValue;

		if (direction === "rtl" && iconDirection === "left") {
			withIconPaddingRightValue = pxToRem(12);
		} else if (direction === "rtl" && iconDirection === "right") {
			withIconPaddingRightValue = 0;
		} else if (direction === "ltr" && iconDirection === "right") {
			withIconPaddingRightValue = 0;
		} else if (direction === "ltr" && iconDirection === "left") {
			withIconPaddingRightValue = pxToRem(12);
		}

		return {
			borderColor: transparent.main,
			borderRadius: withIconBorderRadiusValue,
			paddingLeft: withIconPaddingLeftValue,
			paddingRight: withIconPaddingRightValue,
		};
	};

	return {
		backgroundColor: disabled ? `${grey[200]} !important` : white.main,
		pointerEvents: disabled ? "none" : "auto",
		...(size === "small" && smallStyles()),
		...(size === "large" && largeStyles()),
		...(error && errorStyles()),
		...(success && successStyles()),
		...((iconDirection === "left" || iconDirection === "right") &&
			withIconStyles()),

		"&.Mui-focused": {
			borderColor: focusedBorderColorValue,
			paddingLeft: focusedPaddingLeftValue,
			paddingRight: focusedPaddingRightValue,
			boxShadow: focusedBoxShadowValue,
			outline: 0,
		},

		"&.MuiInputBase-multiline": {
			padding: `${pxToRem(10)} ${pxToRem(12)}`,
		},
	};
});

const SuiInputIconRoot = styled(Icon)(({ theme, ownerState }) => {
	const { typography } = theme;
	const { size } = ownerState;

	const { fontWeightBold, size: fontSize } = typography;

	return {
		fontWeight: fontWeightBold,
		fontSize: size === "small" && `${fontSize.md} !important`,
	};
});

const SuiInputIconBoxRoot = styled("div")(({ theme, ownerState }) => {
	const { palette, functions } = theme;
	const { size } = ownerState;

	const { dark } = palette;
	const { pxToRem } = functions;

	return {
		lineHeight: 0,
		padding:
			size === "small"
				? `${pxToRem(4)} ${pxToRem(10)}`
				: `${pxToRem(8)} ${pxToRem(10)}`,
		width: pxToRem(39),
		height: "100%",
		color: dark.main,
	};
});

const SuiInput = forwardRef(
	({ controller, size, icon, error, success, disabled, ...rest }, ref) => {
		let template;
		//const [controller] = useSoftUIController();
		const { direction } = controller;
		const iconDirection = icon.direction;

		if (icon.component && icon.direction === "left") {
			template = (
				<SuiInputWithIconRoot
					ref={ref}
					ownerState={{ error, success, disabled }}
				>
					<SuiInputIconBoxRoot ownerState={{ size }}>
						<SuiInputIconRoot
							fontSize="small"
							ownerState={{ size }}
						>
							{icon.component}
						</SuiInputIconRoot>
					</SuiInputIconBoxRoot>
					<SuiInputRoot
						{...rest}
						ownerState={{
							size,
							error,
							success,
							iconDirection,
							direction,
							disabled,
						}}
					/>
				</SuiInputWithIconRoot>
			);
		} else if (icon.component && icon.direction === "right") {
			template = (
				<SuiInputWithIconRoot
					ref={ref}
					ownerState={{ error, success, disabled }}
				>
					<SuiInputRoot
						{...rest}
						ownerState={{
							size,
							error,
							success,
							iconDirection,
							direction,
							disabled,
						}}
					/>
					<SuiInputIconBoxRoot ownerState={{ size }}>
						<SuiInputIconRoot
							fontSize="small"
							ownerState={{ size }}
						>
							{icon.component}
						</SuiInputIconRoot>
					</SuiInputIconBoxRoot>
				</SuiInputWithIconRoot>
			);
		} else {
			template = (
				<SuiInputRoot
					{...rest}
					ref={ref}
					ownerState={{ size, error, success, disabled }}
				/>
			);
		}

		return template;
	}
);

// Setting default values for the props of SuiInput
SuiInput.defaultProps = {
	size: "medium",
	icon: {
		component: false,
		direction: "none",
	},
	error: false,
	success: false,
	disabled: false,
};

const SuiEditorRoot = styled("div")(({ theme }) => {
	const { palette, borders, typography } = theme;

	const { borderRadius } = borders;
	const { size } = typography;
	const { text } = palette;

	return {
		"& .ql-toolbar": {
			borderRadius: `${borderRadius.md} ${borderRadius.md} 0 0`,
		},

		"& .ql-container": {
			borderRadius: `0 0 ${borderRadius.md} ${borderRadius.md}`,
		},

		"& .ql-editor": {
			"& p": {
				fontSize: size.md,
				color: text.main,
			},

			"& ul li": {
				color: text.main,
			},
		},
	};
});

function SuiEditor(props) {
	return (
		<SuiEditorRoot>
			<ReactQuill theme="snow" {...props} />
		</SuiEditorRoot>
	);
}

const styles = (selectSize, selectError, selectSuccess) => {
	const { dark, white, text, light, inputColors, gradients, transparent } =
		colors;
	const { size, fontWeightRegular } = typography;
	const { borderWidth, borderRadius } = borders;
	const { inputBoxShadow, lg } = boxShadows;

	let borderColorValue;
	let borderColorFocused;
	let boxShadowValue;
	let selectSizeValue;

	if (selectError) {
		borderColorValue = inputColors.error;
		borderColorFocused = inputColors.error;
	} else if (selectSuccess) {
		borderColorValue = inputColors.success;
		borderColorFocused = inputColors.success;
	} else {
		borderColorValue = inputColors.borderColor.main;
		borderColorFocused = inputColors.borderColor.focus;
	}

	if (selectError) {
		boxShadowValue = inputBoxShadow.error;
	} else if (selectSuccess) {
		boxShadowValue = inputBoxShadow.success;
	} else {
		boxShadowValue = boxShadow([0, 0], [0, 2], inputColors.boxShadow, 1);
	}

	if (selectSize === "small") {
		selectSizeValue = pxToRem(32);
	} else if (selectSize === "large") {
		selectSizeValue = pxToRem(48);
	} else {
		selectSizeValue = pxToRem(40);
	}

	// animations
	const prespective = keyframes`
	  from {
		opacity: 0;
		transform: perspective(999px) rotateX(-10deg) translateZ(0) translate3d(0, 0, 0);
	  }
	  to {
		opacity: 1;
		transform: perspective(999px) rotateX(0deg) translateZ(0) translate3d(0, 0, 5px);
	  }
	`;

	return {
		control: (provided, state) => ({
			display: "flex",
			alignItems: "center",
			width: "100%",
			height: selectSizeValue,
			padding: 0,
			fontSize: selectSize === "small" ? size.xs : size.sm,
			fontWeight: fontWeightRegular,
			backgroundColor: transparent.main,
			backgroundClip: "padding-box",
			border: `${borderWidth[1]} solid ${inputColors.borderColor.main}`,
			appearance: "none",
			borderRadius: borderRadius.md,
			transition: "box-shadow 150ms ease, border-color 150ms ease",
			cursor: "pointer",
			borderColor: state.isFocused
				? borderColorFocused
				: borderColorValue,
			boxShadow: state.isFocused ? boxShadowValue : "none",
		}),

		valueContainer: () => ({
			display: "flex",
			alignItems: "center",
			width: "100%",
			height: "max-content",
			padding: `0 ${pxToRem(12)}`,
			color: dark.main,
		}),

		placeholder: () => ({
			position: "absolute",
			top: selectSize === "small" ? "52%" : "51%",
			transform: "translateY(-50%)",
			marginLeft: 0,
			marginRight: 0,
			color: dark.main,
			opacity: 0.5,
		}),

		singleValue: () => ({
			position: "absolute",
			top: selectSize === "small" ? "52%" : "51%",
			transform: "translateY(-50%)",
			color: text.main,
		}),

		input: () => ({
			color: dark.main,
			position: "relative",
			margin: 0,
		}),

		indicatorSeparator: () => ({
			display: "none",
		}),

		dropdownIndicator: (provided, state) => ({
			display: "flex",
			padding: pxToRem(12),

			"& svg": {
				fill: text.main,
				width: pxToRem(14),
				height: pxToRem(14),
				strokeWidth: 1,
				stroke: text.main,
				transform: state.selectProps.menuIsOpen
					? "rotate(180deg)"
					: "rotate(0)",
				transition: "transform 250ms ease",
			},
		}),

		menu: (provided) => ({
			...provided,
			minWidth: pxToRem(160),
			boxShadow: lg,
			padding: `${pxToRem(16)} ${pxToRem(8)}`,
			fontSize: size.sm,
			color: text.main,
			textAlign: "left",
			backgroundColor: white.main,
			borderRadius: borderRadius.md,
			transformOrigin: "50% 0",
			animation: `${prespective} 250ms ease forwards !important`,
		}),

		menuList: (provided) => ({
			...provided,
			padding: 0,
		}),

		option: (provided, state) => ({
			...provided,
			position: "relative",
			minWidth: pxToRem(160),
			minHeight: "unset",
			padding: `${pxToRem(4.8)} ${pxToRem(100)} ${pxToRem(4.8)} ${pxToRem(
				16
			)}`,
			borderRadius: borderRadius.md,
			fontSize: size.sm,
			color: text.main,
			cursor: state.isDisabled ? "not-allowed" : "pointer",
			opacity: state.isDisabled ? 0.5 : 1,
			userSelect: state.isDisabled ? "none" : "auto",
			transition: "background-color 300ms ease, color 300ms ease",

			"&:after": {
				content: "'Press to select'",
				display: "block",
				fontSize: size.xs,
				position: "absolute",
				right: pxToRem(10),
				top: "52%",
				color: text.main,
				opacity: 0,
				transform: "translateY(-50%)",
				transition: "opacity 300ms ease",
			},

			"&:hover, &:focus": {
				backgroundColor: state.isDisabled
					? transparent.main
					: light.main,
				color: state.isDisabled ? "currentColor" : dark.main,

				"&:after": {
					content: state.isDisabled && "''",
					opacity: 0.5,
				},
			},
		}),

		multiValue: (provided) => ({
			...provided,
			margin: 0,
			marginRight: pxToRem(4),
			borderRadius: borderRadius.section,
			display: "flex",
			alignItems: "center",
			backgroundColor: gradients.dark.state,
			color: white.main,
			padding: `${pxToRem(2)} 0 ${pxToRem(2)} ${pxToRem(4)}`,

			"& div:first-of-type": {
				color: white.main,
				paddingTop: pxToRem(4),
				paddingBottom: pxToRem(2),
			},

			"& div:last-of-type": {
				paddingTop: pxToRem(1.5),
				opacity: 0.8,

				"&:hover": {
					backgroundColor: transparent.main,
					color: white.main,
				},
			},
		}),
	};
};

const SuiSelect = forwardRef(({ size, error, success, ...rest }, ref) => {
	const { light } = colors;

	return (
		<Select
			{...rest}
			ref={ref}
			styles={styles(size, error, success)}
			theme={(theme) => ({
				...theme,
				colors: {
					...theme.colors,
					primary25: light.main,
					primary: light.main,
				},
			})}
		/>
	);
});

// Setting default values for the props of SuiSelect
SuiSelect.defaultProps = {
	size: "medium",
	error: false,
	success: false,
};

function EventCard({ id, image, title, dateTime, description, action }) {
	console.log({ image });
	return (
		<Card>
			<SuiBox p={2}>
				<SuiBox display="flex" alignItems="center">
					<SuiAvatar
						theme={theme}
						bgColor={"light"}
						src={image}
						alt={title}
						size="lg"
						variant="rounded"
					/>
					<SuiBox ml={1} lineHeight={0}>
						<SuiTypography
							variant="h6"
							fontWeight="medium"
							textTransform="capitalize"
						>
							{title}
						</SuiTypography>
						{dateTime ? (
							<SuiTypography
								variant="caption"
								fontWeight="regular"
								color="text"
								textTransform="capitalize"
							>
								{dateTime}
							</SuiTypography>
						) : null}
					</SuiBox>
				</SuiBox>
				<SuiBox my={2}>
					<SuiTypography variant="body2" color="text">
						{description}
					</SuiTypography>
				</SuiBox>
				{id ? (
					<SuiBox>
						<SuiTypography
							component="span"
							variant="body2"
							fontWeight="bold"
							color="text"
						>
							Meeting ID:&nbsp;
						</SuiTypography>
						<SuiTypography
							component="span"
							variant="body2"
							color="text"
						>
							{id}
						</SuiTypography>
					</SuiBox>
				) : null}
				<Divider />
				<SuiBox
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					{action.type === "internal" ? (
						<SuiButton
							component={Link}
							to={action.route}
							variant="gradient"
							color={action.color}
							size="small"
						>
							{action.label}
						</SuiButton>
					) : (
						<SuiButton
							component="a"
							href={action.route}
							variant="gradient"
							color={action.color}
							size="small"
						>
							{action.label}
						</SuiButton>
					)}
				</SuiBox>
			</SuiBox>
		</Card>
	);
}

// The Pagination main context
const Context = createContext();

const SuiPaginationItemRoot = styled(SuiButton)(({ theme, ownerState }) => {
	const { borders, functions, typography, palette } = theme;
	const { variant, paginationSize, active } = ownerState;

	const { borderColor } = borders;
	const { pxToRem } = functions;
	const { fontWeightRegular, size: fontSize } = typography;
	const { light } = palette;

	// width, height, minWidth and minHeight values
	let sizeValue = pxToRem(36);

	if (paginationSize === "small") {
		sizeValue = pxToRem(30);
	} else if (paginationSize === "large") {
		sizeValue = pxToRem(46);
	}

	return {
		borderColor,
		margin: `0 ${pxToRem(2)}`,
		pointerEvents: active ? "none" : "auto",
		fontWeight: fontWeightRegular,
		fontSize: fontSize.sm,
		width: sizeValue,
		minWidth: sizeValue,
		height: sizeValue,
		minHeight: sizeValue,

		"&:hover, &:focus, &:active": {
			transform: "none",
			boxShadow:
				(variant !== "gradient" || variant !== "contained") &&
				"none !important",
			opacity: "1 !important",
		},

		"&:hover": {
			backgroundColor: light.main,
			borderColor,
		},
	};
});

const SuiPagination = forwardRef(
	({ item, variant, color, size, active, children, ...rest }, ref) => {
		const context = item ? useContext(Context) : null;
		const paginationSize = context ? context.size : null;

		return (
			<Context.Provider value={{ variant, color, size }}>
				{item ? (
					<SuiPaginationItemRoot
						{...rest}
						ref={ref}
						variant={active ? context.variant : "outlined"}
						color={active ? context.color : "secondary"}
						iconOnly
						circular
						ownerState={{ variant, active, paginationSize }}
					>
						{children}
					</SuiPaginationItemRoot>
				) : (
					<SuiBox
						display="flex"
						justifyContent="flex-end"
						alignItems="center"
						sx={{ listStyle: "none" }}
					>
						{children}
					</SuiBox>
				)}
			</Context.Provider>
		);
	}
);

// Soft UI Dashboard PRO React base styles
export function ProfileInfoCard({ title, description, info, action }) {
	const labels = [];
	const values = [];

	// Convert this form `objectKey` of the object key in to this `object key`
	Object.keys(info).forEach((el) => {
		if (el.match(/[A-Z\s]+/)) {
			const uppercaseLetter = Array.from(el).find((i) =>
				i.match(/[A-Z]+/)
			);
			const newElement = el.replace(
				uppercaseLetter,
				` ${uppercaseLetter.toLowerCase()}`
			);

			labels.push(newElement);
		} else {
			labels.push(el);
		}
	});

	// Push the object values into the values array
	Object.values(info).forEach((el) => values.push(el));

	// Render the card info items
	const renderItems = labels.map((label, key) => (
		<SuiBox key={label} display="flex" py={1} pr={2}>
			<SuiTypography
				variant="button"
				fontWeight="bold"
				textTransform="capitalize"
			>
				{label}: &nbsp;
			</SuiTypography>
			<SuiTypography variant="button" fontWeight="regular" color="text">
				&nbsp;{values[key]}
			</SuiTypography>
		</SuiBox>
	));

	// Render the card social media icons

	return (
		<Card sx={{ height: "100%" }}>
			<SuiBox
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				pt={2}
				px={2}
			>
				<SuiTypography
					variant="h6"
					fontWeight="medium"
					textTransform="capitalize"
				>
					{title}
				</SuiTypography>
			</SuiBox>
			<SuiBox p={2}>
				<SuiBox>{renderItems}</SuiBox>
			</SuiBox>
		</Card>
	);
}

// Soft UI Dashboard PRO React base styles
export function ProfileInfoCardOriginal({ title, description, info, action }) {
	const labels = [];
	const values = [];

	// Convert this form `objectKey` of the object key in to this `object key`
	Object.keys(info).forEach((el) => {
		if (el.match(/[A-Z\s]+/)) {
			const uppercaseLetter = Array.from(el).find((i) =>
				i.match(/[A-Z]+/)
			);
			const newElement = el.replace(
				uppercaseLetter,
				` ${uppercaseLetter.toLowerCase()}`
			);

			labels.push(newElement);
		} else {
			labels.push(el);
		}
	});

	// Push the object values into the values array
	Object.values(info).forEach((el) => values.push(el));

	// Render the card info items
	const renderItems = labels.map((label, key) => (
		<SuiBox key={label} display="flex" py={1} pr={2}>
			<SuiTypography
				variant="button"
				fontWeight="bold"
				textTransform="capitalize"
			>
				{label}: &nbsp;
			</SuiTypography>
			<SuiTypography variant="button" fontWeight="regular" color="text">
				&nbsp;{values[key]}
			</SuiTypography>
		</SuiBox>
	));

	// Render the card social media icons

	return (
		<Card sx={{ height: "100%" }}>
			<SuiBox
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				pt={2}
				px={2}
			>
				<SuiTypography
					variant="h6"
					fontWeight="medium"
					textTransform="capitalize"
				>
					{title}
				</SuiTypography>
				<SuiTypography
					component={Link}
					to={action.route}
					variant="body2"
					color="secondary"
				>
					<Tooltip title={action.tooltip} placement="top">
						<Icon>edit</Icon>
					</Tooltip>
				</SuiTypography>
			</SuiBox>
			<SuiBox p={2}>
				<SuiBox mb={2} lineHeight={1}>
					<SuiTypography
						variant="button"
						color="text"
						fontWeight="regular"
					>
						{description}
					</SuiTypography>
				</SuiBox>
				<SuiBox opacity={0.3}>
					<Divider />
				</SuiBox>
				<SuiBox>
					{renderItems}
					<SuiBox display="flex" py={1} pr={2}>
						<SuiTypography
							variant="button"
							fontWeight="bold"
							textTransform="capitalize"
						>
							social: &nbsp;
						</SuiTypography>
					</SuiBox>
				</SuiBox>
			</SuiBox>
		</Card>
	);
}

export function PlaceholderCard({ icon, title, hasBorder, outlined }) {
	return (
		<Card
			raised
			sx={({ borders: { borderWidth, borderColor } }) => ({
				height: "100%",
				backgroundColor: outlined && "transparent",
				boxShadow: outlined && "none",
				border:
					hasBorder || outlined
						? `${borderWidth[1]} solid ${borderColor}`
						: "none",
			})}
		>
			<SuiBox
				display="flex"
				flexDirection="column"
				justifyContent="center"
				textAlign="center"
				height="100%"
				p={3}
			>
				<SuiBox color="secondary" mb={0.5}>
					<Icon fontSize="default" sx={{ fontWeight: "bold" }}>
						{icon}
					</Icon>
				</SuiBox>
				<SuiTypography variant={title.variant} color="secondary">
					{title.text}
				</SuiTypography>
			</SuiBox>
		</Card>
	);
}
// Setting default values for the props of PlaceholderCard
PlaceholderCard.defaultProps = {
	icon: "add",
	hasBorder: false,
	outlined: false,
};

// Custom styles for ComplexProjectCard
export function ComplexProjectCardOriginal({
	color,
	image,
	title,
	dateTime,
	description,
	members,
	dropdown,
}) {
	const renderMembers = members.map((member, key) => {
		const memberKey = `member-${key}`;

		return (
			<SuiAvatar
				key={memberKey}
				src={member}
				alt="member profile"
				size="xs"
				sx={({ borders: { borderWidth }, palette: { white } }) => ({
					border: `${borderWidth[2]} solid ${white.main}`,
					cursor: "pointer",
					position: "relative",

					"&:not(:first-of-type)": {
						ml: -1.25,
					},

					"&:hover, &:focus": {
						zIndex: "10",
					},
				})}
			/>
		);
	});

	return (
		<Card>
			<SuiBox p={2}>
				<SuiBox display="flex" alignItems="center">
					<SuiAvatar
						src={image}
						alt={title}
						size="xl"
						variant="rounded"
						bgColor={color}
						sx={{ p: 1 }}
					/>
					<SuiBox ml={2} lineHeight={0}>
						<SuiBox mb={1} lineHeight={0}>
							<SuiTypography
								variant="h6"
								textTransform="capitalize"
								fontWeight="medium"
							>
								{title}
							</SuiTypography>
						</SuiBox>
						{members.length > -1 ? (
							<SuiBox display="flex">{renderMembers}</SuiBox>
						) : null}
					</SuiBox>
					{dropdown && (
						<SuiTypography
							color="secondary"
							onClick={dropdown.action}
							sx={{
								ml: "auto",
								alignSelf: "flex-start",
								py: 1.25,
							}}
						>
							<Icon fontSize="default" sx={{ cursor: "pointer" }}>
								more_vert
							</Icon>
						</SuiTypography>
					)}
					{dropdown.menu}
				</SuiBox>
				<SuiBox my={2} lineHeight={1}>
					<SuiTypography
						variant="button"
						fontWeight="regular"
						color="text"
					>
						{description}
					</SuiTypography>
				</SuiBox>
				<Divider />
				<SuiBox
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					{members.length > -1 ? (
						<SuiBox
							display="flex"
							flexDirection="column"
							lineHeight={0}
						>
							<SuiTypography variant="button" fontWeight="medium">
								{members.length}
							</SuiTypography>
							<SuiTypography
								variant="button"
								fontWeight="medium"
								color="secondary"
							>
								Participants
							</SuiTypography>
						</SuiBox>
					) : null}
					{dateTime ? (
						<SuiBox
							display="flex"
							flexDirection="column"
							lineHeight={0}
						>
							<SuiTypography variant="button" fontWeight="medium">
								{dateTime}
							</SuiTypography>
							<SuiTypography
								variant="button"
								fontWeight="medium"
								color="secondary"
							>
								Due date
							</SuiTypography>
						</SuiBox>
					) : null}
				</SuiBox>
			</SuiBox>
		</Card>
	);
}
// Custom styles for ComplexProjectCard
export function ComplexProjectCard({
	color,
	image,
	title,
	dateTime,
	description,
	members,
	dropdown,
}) {
	return (
		<Card>
			<SuiBox p={2}>
				<SuiBox display="flex" alignItems="center">
					<SuiBox ml={2} lineHeight={0}>
						<SuiBox mb={1} lineHeight={0}>
							<SuiTypography
								variant="h6"
								textTransform="capitalize"
								fontWeight="medium"
							>
								{title}
							</SuiTypography>
						</SuiBox>
					</SuiBox>
					{dropdown && (
						<SuiTypography
							color="secondary"
							onClick={dropdown.action}
							sx={{
								ml: "auto",
								alignSelf: "flex-start",
								py: 1.25,
							}}
						>
							<Icon
								fontSize="default"
								sx={{ cursor: "pointer" }}
							></Icon>
						</SuiTypography>
					)}
					{dropdown.menu}
				</SuiBox>

				<SuiBox my={2} lineHeight={1}>
					<SuiTypography
						variant="button"
						fontWeight="regular"
						color="text"
					>
						{description}
					</SuiTypography>
				</SuiBox>
				{/* <Divider />
        <SuiBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {dateTime ? (
            <SuiBox display="flex" flexDirection="column" lineHeight={0}>
              <SuiTypography variant="button" fontWeight="medium">
                {dateTime}
              </SuiTypography>
              <SuiTypography
                variant="button"
                fontWeight="medium"
                color="secondary"
              >
                Due date
              </SuiTypography>
            </SuiBox>
          ) : null}
          {dateTime ? (
            <SuiBox display="flex" flexDirection="column" lineHeight={0}>
              <SuiTypography variant="button" fontWeight="medium">
                {dateTime}
              </SuiTypography>
              <SuiTypography
                variant="button"
                fontWeight="medium"
                color="secondary"
              >
                Due date
              </SuiTypography>
            </SuiBox>
          ) : null}
        </SuiBox> */}
			</SuiBox>
		</Card>
	);
}
export function AutomotiveDetails() {
	return (
		<SuiBox
			position="relative"
			bgColor="secondary"
			py={3}
			px={{ xs: 3, sm: 6 }}
			mt={3}
			borderRadius="xl"
			variant="gradient"
		>
			<SuiBox
				component="img"
				src={wavesWhite}
				alt="pattern-line"
				width="100%"
				position="absolute"
				left="0"
				top="0"
				opacity={0.4}
			/>
			<Grid container alignItems="center" position="relative">
				<Grid item xs={12} lg={3}>
					<SuiBox px={{ xs: 0, md: 1.5 }}>
						<SuiTypography
							variant="h4"
							color="white"
							textTransform="capitalize"
							opacity={0.9}
						>
							since last charge
						</SuiTypography>
						<Divider light />
						<SuiBox display="flex">
							<SuiBox>
								<SuiTypography
									variant="h6"
									color="white"
									textTransform="capitalize"
									opacity={0.7}
								>
									distance
								</SuiTypography>
								<SuiTypography
									variant="h3"
									fontWeight="bold"
									color="white"
								>
									145{" "}
									<SuiTypography
										variant="button"
										color="white"
										verticalAlign="top"
									>
										Km
									</SuiTypography>
								</SuiTypography>
							</SuiBox>
							<SuiBox ml={{ xs: 3, md: 8 }} mb={{ xs: 1, md: 0 }}>
								<SuiTypography
									variant="h6"
									color="white"
									textTransform="capitalize"
									opacity={0.7}
								>
									average energy
								</SuiTypography>
								<SuiTypography
									variant="h3"
									fontWeight="bold"
									color="white"
								>
									300{" "}
									<SuiTypography
										variant="button"
										color="white"
										verticalAlign="top"
									>
										Kw
									</SuiTypography>
								</SuiTypography>
							</SuiBox>
						</SuiBox>
					</SuiBox>
				</Grid>
				<Grid item xs={12} lg={6}>
					<SuiBox textAlign="center">
						<SuiBox
							component="img"
							src={mercedesEQC}
							alt="car image"
							display={{ xs: "none", md: "block" }}
							width="auto"
							mt={{ xs: 0, lg: -16 }}
						/>
						<SuiBox
							display="flex"
							justifyContent={{ xs: "flex-start", md: "center" }}
							alignItems="center"
							mb={1}
						>
							<SuiTypography
								variant="h4"
								color="white"
								textTransform="capitalize"
								opacity={0.7}
							>
								available range
							</SuiTypography>
							<SuiBox ml={1}>
								<SuiTypography
									variant="h2"
									fontWeight="bold"
									color="white"
								>
									70
									<SuiTypography
										variant="button"
										fontWeight="bold"
										color="white"
										verticalAlign="top"
									>
										%
									</SuiTypography>
								</SuiTypography>
							</SuiBox>
						</SuiBox>
					</SuiBox>
				</Grid>
				<Grid item xs={12} lg={3}>
					<SuiBox px={{ xs: 0, md: 1.5 }}>
						<SuiTypography
							variant="h4"
							color="white"
							textTransform="capitalize"
							opacity={0.9}
						>
							nearest charger
						</SuiTypography>
						<Divider light />
						<SuiBox display="flex">
							<SuiBox>
								<SuiTypography variant="h6" color="white">
									Miclan, DW
								</SuiTypography>
								<SuiTypography variant="h6" color="white">
									891 Limarenda road
								</SuiTypography>
							</SuiBox>
							<SuiBox ml={8}>
								<SuiButton variant="outlined" circular iconOnly>
									<Icon>map</Icon>
								</SuiButton>
							</SuiBox>
						</SuiBox>
					</SuiBox>
				</Grid>
			</Grid>
		</SuiBox>
	);
}
export function PageLayout({ background, children }) {
	// const [, dispatch] = useSoftUIController();
	// const { pathname } = useLocation();

	// useEffect(() => {
	//   setLayout(dispatch, "page");
	// }, [pathname]);

	return (
		<SuiBox
			width="100vw"
			height="100%"
			minHeight="100vh"
			bgColor={background}
			sx={{ overflowX: "hidden" }}
		>
			{children}
		</SuiBox>
	);
}

// Setting default values for the props for PageLayout
PageLayout.defaultProps = {
	background: "default",
};

export function BasicLayout({ title, description, image, children }) {
	return (
		<PageLayout>
			{/* <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://creative-tim.com/product/soft-ui-dashboard-pro-react",
          label: "buy now",
        }}
        transparent
        light
      /> */}
			<SuiBox
				width="calc(100% - 2rem)"
				minHeight="50vh"
				borderRadius="lg"
				mx={2}
				my={2}
				pt={6}
				pb={28}
				sx={{
					backgroundImage: ({
						functions: { linearGradient, rgba },
						palette: { gradients },
					}) =>
						image &&
						`${linearGradient(
							rgba(gradients.dark.main, 0.6),
							rgba(gradients.dark.state, 0.6)
						)}, url(${image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<Grid
					container
					spacing={3}
					justifyContent="center"
					sx={{ textAlign: "center" }}
				>
					<Grid item xs={10} lg={4}>
						<SuiBox mt={6} mb={1}>
							<SuiTypography
								variant="h1"
								color="white"
								fontWeight="bold"
							>
								{title}
							</SuiTypography>
						</SuiBox>
						<SuiBox mb={2}>
							<SuiTypography
								variant="body2"
								color="white"
								fontWeight="regular"
							>
								{description}
							</SuiTypography>
						</SuiBox>
					</Grid>
				</Grid>
			</SuiBox>

			<SuiBox
				mt={{ xs: -26, lg: -24 }}
				px={1}
				width="calc(100% - 2rem)"
				mx="auto"
			>
				<Grid container spacing={1} justifyContent="center">
					<Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
						{children}
					</Grid>
				</Grid>
			</SuiBox>
			<Footer />
		</PageLayout>
	);
}

// Setting default values for the props of BasicLayout
BasicLayout.defaultProps = {
	title: "",
	description: "",
};

export function Basic({ children }) {
	const [rememberMe, setRememberMe] = useState(false);

	const handleSetRememberMe = () => setRememberMe(!rememberMe);

	return (
		<BasicLayout
			title="Welcome!"
			description="Use these awesome forms to login or create new account in your project for free."
			image={curved9}
		>
			{children}
			{/* <Card> */}
			{/* <SuiBox p={3} mb={1} textAlign="center">
          <SuiTypography variant="h5" fontWeight="medium">
            Sign in
          </SuiTypography>
        </SuiBox>
        <SuiBox mb={2}><Socials /></SuiBox> */}
			{/* <SuiBox p={3}>
          <SuiBox component="form" role="form">
            <SuiBox mb={2}>
              <SuiInput type="email" placeholder="Email" />
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput type="password" placeholder="Password" />
            </SuiBox>
            <SuiBox display="flex" alignItems="center">
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <SuiTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;Remember me
              </SuiTypography>
            </SuiBox>
            <SuiBox mt={4} mb={1}>
              <SuiButton variant="gradient" color="info" fullWidth>
                sign in
              </SuiButton>
            </SuiBox>
            <Separator />
            <SuiBox mt={1} mb={3}>
              <SuiButton
                component={Link}
                to="/authentication/sign-up/basic"
                variant="gradient"
                color="dark"
                fullWidth
              >
                sign up
              </SuiButton>
            </SuiBox>
          </SuiBox>
        </SuiBox> */}
			{/* </Card> */}
		</BasicLayout>
	);
}

export const DashboardLayout = ({ children }) => {
	return (
		<PropsContext.Consumer>
			{({ controller }) => {
				const { miniSidenav } = controller;
				return (
					<SuiBox
						sx={({
							breakpoints,
							transitions,
							functions: { pxToRem },
						}) => ({
							p: 3,
							position: "relative",
							[breakpoints.up("xl")]: {
								marginLeft: miniSidenav
									? pxToRem(120)
									: pxToRem(274),
								transition: transitions.create(
									["margin-left", "margin-right"],
									{
										easing: transitions.easing.easeInOut,
										duration: transitions.duration.standard,
									}
								),
							},
						})}
					>
						{children}
					</SuiBox>
				);
			}}
		</PropsContext.Consumer>
	);
};

export const TabsTopOriginal = () => {
	const [tabsOrientation, setTabsOrientation] = useState("horizontal");
	const [tabValue, setTabValue] = useState(0);
	useEffect(() => {
		// A function that sets the orientation state of the tabs.
		function handleTabsOrientation() {
			return window.innerWidth < breakpoints.values.sm
				? setTabsOrientation("vertical")
				: setTabsOrientation("horizontal");
		}

		/** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
		window.addEventListener("resize", handleTabsOrientation);

		// Call the handleTabsOrientation function to set the state with the initial value.
		handleTabsOrientation();

		// Remove event listener on cleanup
		return () =>
			window.removeEventListener("resize", handleTabsOrientation);
	}, [tabsOrientation]);

	const handleSetTabValue = (event, newValue) => setTabValue(newValue);

	return (
		<Grid container>
			<Grid item xs={12} sm={8} lg={4}>
				<AppBar position="static">
					<Tabs
						orientation={tabsOrientation}
						value={tabValue}
						onChange={handleSetTabValue}
					>
						<Tab label="Summary" />
						<Tab label="Form" />
					</Tabs>
				</AppBar>
			</Grid>
		</Grid>
	);
};
export const TabsTop = ({ pageData, setPageData }) => {
	const [tabsOrientation, setTabsOrientation] = useState("horizontal");
	//const [tabValue, setTabValue] = useState(0);
	useEffect(() => {
		// A function that sets the orientation state of the tabs.
		function handleTabsOrientation() {
			return window.innerWidth < breakpoints.values.sm
				? setTabsOrientation("vertical")
				: setTabsOrientation("horizontal");
		}

		/** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
		window.addEventListener("resize", handleTabsOrientation);

		// Call the handleTabsOrientation function to set the state with the initial value.
		handleTabsOrientation();

		// Remove event listener on cleanup
		return () =>
			window.removeEventListener("resize", handleTabsOrientation);
	}, [tabsOrientation]);

	const handleSetTabValue = (event, newValue) =>
		setPageData({ ...pageData, tabValue: newValue });

	return (
		<Grid container>
			<Grid item xs={12} sm={8} lg={4}>
				<AppBar position="static">
					<Tabs
						orientation={tabsOrientation}
						value={pageData.tabValue || 0}
						onChange={handleSetTabValue}
					>
						<Tab label="Summary" />
						<Tab label="Form" />
					</Tabs>
				</AppBar>
			</Grid>
		</Grid>
	);
};
export function BaseLayout({ stickyNavbar, children }) {
	const [tabsOrientation, setTabsOrientation] = useState("horizontal");
	const [tabValue, setTabValue] = useState(0);

	useEffect(() => {
		// A function that sets the orientation state of the tabs.
		function handleTabsOrientation() {
			return window.innerWidth < breakpoints.values.sm
				? setTabsOrientation("vertical")
				: setTabsOrientation("horizontal");
		}

		/** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
		window.addEventListener("resize", handleTabsOrientation);

		// Call the handleTabsOrientation function to set the state with the initial value.
		handleTabsOrientation();

		// Remove event listener on cleanup
		return () =>
			window.removeEventListener("resize", handleTabsOrientation);
	}, [tabsOrientation]);

	const handleSetTabValue = (event, newValue) => setTabValue(newValue);

	return (
		<DashboardLayout>
			{/* <DashboardNavbar absolute={!stickyNavbar} isMini /> */}
			<SuiBox mt={stickyNavbar ? 3 : 10}>
				<Grid container>
					<Grid item xs={12} sm={8} lg={4}>
						<AppBar position="static">
							<Tabs
								orientation={tabsOrientation}
								value={tabValue}
								onChange={handleSetTabValue}
							>
								<Tab label="Messages" />
								<Tab label="Social" />
								<Tab label="Notifications" />
								<Tab label="Backup" />
							</Tabs>
						</AppBar>
					</Grid>
				</Grid>
				{children}
			</SuiBox>
			<Footer />
		</DashboardLayout>
	);
}

// Setting default values for the props of BaseLayout
BaseLayout.defaultProps = {
	stickyNavbar: false,
};

export function MiniStatisticsCard({
	bgColor,
	title,
	count,
	percentage,
	icon,
	direction,
}) {
	return (
		<Card>
			<SuiBox bgColor={bgColor} variant="gradient">
				<SuiBox p={2}>
					<Grid container alignItems="center">
						{direction === "left" ? (
							<Grid item>
								<SuiBox
									variant="gradient"
									bgColor={
										bgColor === "white"
											? icon.color
											: "white"
									}
									color={
										bgColor === "white" ? "white" : "dark"
									}
									width="3rem"
									height="3rem"
									borderRadius="md"
									display="flex"
									justifyContent="center"
									alignItems="center"
									shadow="md"
								>
									{icon}
								</SuiBox>
							</Grid>
						) : null}
						<Grid item xs={8}>
							<SuiBox
								ml={direction === "left" ? 2 : 0}
								lineHeight={1}
							>
								<SuiTypography
									variant="button"
									color={
										bgColor === "white" ? "text" : "white"
									}
									opacity={bgColor === "white" ? 1 : 0.7}
									textTransform="capitalize"
									fontWeight={title.fontWeight}
								>
									{title.text}
								</SuiTypography>
								<SuiTypography
									variant="h5"
									fontWeight="bold"
									color={
										bgColor === "white" ? "dark" : "white"
									}
								>
									{count}{" "}
									<SuiTypography
										variant="button"
										color={percentage.color}
										fontWeight="bold"
									>
										{percentage.text}
									</SuiTypography>
								</SuiTypography>
							</SuiBox>
						</Grid>
						{direction === "right" ? (
							<Grid item xs={4}>
								<SuiBox
									variant="gradient"
									bgColor={
										bgColor === "white"
											? icon.color
											: "white"
									}
									// color={bgColor === "white" ? "white" : "dark"}
									width="3rem"
									height="3rem"
									marginLeft="auto"
									borderRadius="md"
									display="flex"
									justifyContent="center"
									alignItems="center"
									shadow="md"
								>
									{icon}
								</SuiBox>
							</Grid>
						) : null}
					</Grid>
				</SuiBox>
			</SuiBox>
		</Card>
	);
}

MiniStatisticsCard.defaultProps = {
	bgColor: "white",
	title: {
		fontWeight: "medium",
		text: "",
	},
	percentage: {
		color: "success",
		text: "",
	},
	direction: "right",
};
{
	/* <Grid item xs={4} sm={3} md={2} lg={1} sx={{ flex: "0 0 100%" }}>
<SuiBox
  bgColor="info"
  borderRadius="50%"
  width="3.625rem"
  height="3.625rem"
  display="flex"
  justifyContent="center"
  alignItems="center"
  color="white"
  mx="auto"
  variant="gradient"
  sx={{ cursor: "pointer" }}
>
  <Add />
  <Icon fontSize="small">add</Icon>
</SuiBox>
<SuiBox mt={0.75} textAlign="center" lineHeight={1}>
  <SuiTypography variant="button" color="text" fontWeight="regular">
    Add Person
  </SuiTypography>
</SuiBox>
</Grid> */
}

export function Stories({ storiesData }) {
	const { borderWidth } = borders;
	// const storiesData = [
	// 	{
	// 		image: team1,
	// 		name: "Abbie W",
	// 		color: "info",
	// 	},
	// ];

	const renderStories = storiesData.map(({ image, name, color }) => (
		<Grid
			key={name}
			item
			xs={4}
			sm={3}
			md={2}
			lg={1}
			sx={{ flex: "0 0 100%" }}
		>
			<SuiBox
				borderRadius="50%"
				width="3.625rem"
				height="3.625rem"
				display="flex"
				justifyContent="center"
				alignItems="center"
				color="white"
				mx="auto"
				border={`${borderWidth[1]} solid ${colors[color].main}`}
				sx={{ cursor: "pointer" }}
			>
				<SuiAvatar src={image} alt={name} />
			</SuiBox>
			<SuiBox mt={0.75} textAlign="center" lineHeight={1}>
				<SuiTypography
					variant="button"
					color="text"
					fontWeight="regular"
				>
					{name}
				</SuiTypography>
			</SuiBox>
		</Grid>
	));
	// sx={{ overflow: "scroll" }}
	return (
		<Card>
			<SuiBox width="100%" pt={3} pb={2.5} px={3}>
				<Grid container justifyContent="space-between" wrap="nowrap">
					{renderStories}
				</Grid>
			</SuiBox>
		</Card>
	);
}
export function FooterOriginal({ company, links }) {
	const { href, name } = company;
	const { size } = typography;

	const renderLinks = () =>
		links.map((link) => (
			<SuiBox key={link.name} component="li" px={2} lineHeight={1}>
				<Link href={link.href} target="_blank">
					<SuiTypography
						variant="button"
						fontWeight="regular"
						color="text"
					>
						{link.name}
					</SuiTypography>
				</Link>
			</SuiBox>
		));

	return (
		<SuiBox
			width="100%"
			display="flex"
			flexDirection={{ xs: "column", lg: "row" }}
			justifyContent="space-between"
			alignItems="center"
			px={1.5}
		>
			<SuiBox
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexWrap="wrap"
				color="text"
				fontSize={size.sm}
				px={1.5}
			>
				&copy; {new Date().getFullYear()}, made with
				<SuiBox fontSize={size.md} color="text" mb={-0.5} mx={0.25}>
					<Icon color="inherit" fontSize="inherit">
						favorite
					</Icon>
				</SuiBox>
				by
				<Link href={href} target="_blank">
					<SuiTypography variant="button" fontWeight="medium">
						&nbsp;{name}&nbsp;
					</SuiTypography>
				</Link>
				for a better web.
			</SuiBox>
			<SuiBox
				component="ul"
				sx={({ breakpoints }) => ({
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center",
					justifyContent: "center",
					listStyle: "none",
					mt: 3,
					mb: 0,
					p: 0,

					[breakpoints.up("lg")]: {
						mt: 0,
					},
				})}
			>
				{renderLinks()}
			</SuiBox>
		</SuiBox>
	);
}

export function Footer({ company, links }) {
	const { href, name } = company;
	const { size } = typography;

	const renderLinks = () =>
		links.map((link) => (
			<SuiBox key={link.name} component="li" px={2} lineHeight={1}>
				<Link href={link.href} target="_blank">
					<SuiTypography
						variant="button"
						fontWeight="regular"
						color="text"
					>
						{link.name}
					</SuiTypography>
				</Link>
			</SuiBox>
		));

	return (
		<SuiBox
			width="100%"
			display="flex"
			flexDirection={{ xs: "column", lg: "row" }}
			justifyContent="space-between"
			alignItems="center"
			px={1.5}
		>
			<SuiBox
				component="ul"
				sx={({ breakpoints }) => ({
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center",
					justifyContent: "center",
					listStyle: "none",
					mt: 3,
					mb: 0,
					p: 0,

					[breakpoints.up("lg")]: {
						mt: 0,
					},
				})}
			>
				{renderLinks()}
			</SuiBox>
		</SuiBox>
	);
}

// Setting default values for the props of Footer
Footer.defaultProps = {
	company: { href: "https://www.creative-tim.com/", name: "Creative Tim" },
	links: [
		{ href: "https://www.creative-tim.com/", name: "Creative Tim" },
		{ href: "https://www.creative-tim.com/presentation", name: "About Us" },
		{ href: "https://www.creative-tim.com/blog", name: "Blog" },
		{ href: "https://www.creative-tim.com/license", name: "License" },
	],
};

function PagesHeaderCell({ children }) {
	const { light } = colors;
	const { size, fontWeightBold } = typography;
	const { borderWidth } = borders;

	return (
		<SuiBox
			component="th"
			width="100%"
			textAlign="left"
			borderBottom={`${borderWidth[1]} solid ${light.main}`}
			py={1.5}
			pl={1}
			pr={3}
		>
			<SuiBox
				width="max-content"
				textAlign="left"
				fontSize={size.xxs}
				fontWeight={fontWeightBold}
				color="secondary"
				opacity={0.7}
				sx={{ textTransform: "uppercase" }}
			>
				{children}
			</SuiBox>
		</SuiBox>
	);
}

function PagesBodyCell({ rows, noBorder }) {
	const { light } = colors;
	const { borderWidth } = borders;

	const renderRows = rows.map((row) => (
		<SuiBox
			key={row}
			component="td"
			width="100%"
			textAlign="left"
			borderBottom={
				noBorder ? "none" : `${borderWidth[1]} solid ${light.main}`
			}
			p={1}
		>
			<SuiTypography
				display="block"
				variant="button"
				fontWeight="medium"
				color="text"
				sx={{ width: "max-content" }}
			>
				{row}
			</SuiTypography>
		</SuiBox>
	));

	return <TableRow>{renderRows}</TableRow>;
}

// Setting default values for the props for PagesBodyCell
PagesBodyCell.defaultProps = {
	noBorder: false,
};
export function SuiTable({ headers, rows, title }) {
	const PageHeaders = (
		<Fragment>
			{headers.map((header, index) => {
				return <PagesHeaderCell key={index}>{header}</PagesHeaderCell>;
			})}
		</Fragment>
	);

	const PageRows = (
		<Fragment>
			{rows.map((row, index) => {
				return <PagesBodyCell key={index} rows={row} />;
			})}
		</Fragment>
	);
	return (
		<Card>
			<SuiBox
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				pt={2}
				px={2}
			>
				<SuiTypography variant="h6">{title}</SuiTypography>
				<Tooltip
					title="Data is based from sessions and is 100% accurate"
					placement="left"
				>
					<SuiButton
						variant="outlined"
						color="white"
						size="small"
						circular
						iconOnly
					>
						<Icon sx={{ fontWeight: "bold" }}>done</Icon>
					</SuiButton>
				</Tooltip>
			</SuiBox>
			<SuiBox py={1} px={2}>
				<TableContainer sx={{ boxShadow: "none" }}>
					<Table>
						<SuiBox component="thead">
							<TableRow>{PageHeaders}</TableRow>
						</SuiBox>
						<TableBody>{PageRows}</TableBody>
					</Table>
				</TableContainer>
			</SuiBox>
		</Card>
	);
}
export function Pages() {
	return (
		<Card>
			<SuiBox
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				pt={2}
				px={2}
			>
				<SuiTypography variant="h6">Pages</SuiTypography>
				<Tooltip
					title="Data is based from sessions and is 100% accurate"
					placement="left"
				>
					<SuiButton
						variant="outlined"
						color="success"
						size="small"
						circular
						iconOnly
					>
						<Icon sx={{ fontWeight: "bold" }}>done</Icon>
					</SuiButton>
				</Tooltip>
			</SuiBox>
			<SuiBox py={1} px={2}>
				<TableContainer sx={{ boxShadow: "none" }}>
					<Table>
						<SuiBox component="thead">
							<TableRow>
								<PagesHeaderCell>page</PagesHeaderCell>
								<PagesHeaderCell>pages view</PagesHeaderCell>
								<PagesHeaderCell>avg. time</PagesHeaderCell>
								<PagesHeaderCell>bounce rate</PagesHeaderCell>
							</TableRow>
						</SuiBox>
						<TableBody>
							<PagesBodyCell
								rows={["1. /bits", 345, "00:17:07", "40.91%"]}
							/>
							<PagesBodyCell
								rows={[
									"2. /pages/argon-dashboard",
									520,
									"00:23:13",
									"31.14%",
								]}
							/>
							<PagesBodyCell
								rows={[
									"3. /pages/soft-ui-dashboard",
									122,
									"00:3:10",
									"54.10%",
								]}
							/>
							<PagesBodyCell
								rows={[
									"4. /bootstrap-themes",
									"1,900",
									"00:30:42",
									"20.93%",
								]}
							/>
							<PagesBodyCell
								rows={[
									"5. /react-themes",
									"1,442",
									"00:31:50",
									"34.98%",
								]}
							/>
							<PagesBodyCell
								rows={[
									"6. /product/argon-dashboard-angular",
									"201",
									"00:12:42",
									"21.4%",
								]}
							/>
							<PagesBodyCell
								rows={[
									"7. /product/material-dashboard-pro",
									"2,115",
									"00:50:11",
									"34.98%",
								]}
								noBorder
							/>
						</TableBody>
					</Table>
				</TableContainer>
			</SuiBox>
		</Card>
	);
}

function DataTableHeadCell({ width, children, sorted, align, ...rest }) {
	const { light } = colors;
	const { size, fontWeightBold } = typography;
	const { borderWidth } = borders;

	return (
		<SuiBox
			component="th"
			width={width}
			borderBottom={`${borderWidth[1]} solid ${light.main}`}
			py={1.5}
			px={3}
		>
			<SuiBox
				{...rest}
				position="relative"
				textAlign={align}
				fontSize={size.xxs}
				fontWeight={fontWeightBold}
				color="secondary"
				opacity={0.7}
				className={`text-uppercase ${
					sorted && "cursor-pointer user-select-none"
				}`}
			>
				{children}
				{sorted && (
					<SuiBox
						fontSize={size.lg}
						position="absolute"
						top={0}
						right={align !== "right" ? "16px" : 0}
						left={align === "right" ? "-5px" : "unset"}
					>
						<SuiBox
							position="absolute"
							top={-6}
							color={sorted === "asce" ? "text" : "secondary"}
							opacity={sorted === "asce" ? 1 : 0.5}
						>
							<ArrowDropUpIcon></ArrowDropUpIcon>
						</SuiBox>
						<SuiBox
							position="absolute"
							top={0}
							color={sorted === "desc" ? "text" : "secondary"}
							opacity={sorted === "desc" ? 1 : 0.5}
						>
							<ArrowDropDownIcon></ArrowDropDownIcon>
						</SuiBox>
					</SuiBox>
				)}
			</SuiBox>
		</SuiBox>
	);
}

function DataTableBodyCell({ noBorder, align, children }) {
	const { light } = colors;
	const { size } = typography;
	const { borderWidth } = borders;

	return (
		<SuiBox
			component="td"
			textAlign={align}
			fontSize={size.sm}
			borderBottom={
				noBorder ? "none" : `${borderWidth[1]} solid ${light.main}`
			}
			py={1.5}
			px={3}
		>
			<SuiBox
				display="inline-block"
				width="max-content"
				color="text"
				sx={{ verticalAlign: "middle" }}
			>
				{children}
			</SuiBox>
		</SuiBox>
	);
}

function DataTable({
	entriesPerPage,
	canSearch,
	showTotalEntries,
	table,
	pagination,
	isSorted,
	noEndBorder,
}) {
	console.log({ table });
	const defaultValue = entriesPerPage.defaultValue
		? entriesPerPage.defaultValue
		: 10;
	const entries = entriesPerPage.entries
		? entriesPerPage.entries
		: [5, 10, 15, 20, 25];
	console.log({ entries, defaultValue });
	const columns = useMemo(() => table.columns, [table]);
	const data = useMemo(() => table.rows, [table]);
	console.log({ data, columns, entries, defaultValue });
	const tableInstance = useTable(
		{ columns, data, initialState: { pageIndex: 0 } },
		useGlobalFilter,
		useSortBy,
		usePagination
	);
	console.log({ tableInstance });

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		rows,
		page,
		pageOptions,
		canPreviousPage,
		canNextPage,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		setGlobalFilter,
		state: { pageIndex, pageSize, globalFilter },
	} = tableInstance;

	// Set the default value for the entries per page when component mounts
	useEffect(() => setPageSize(defaultValue || 10), [defaultValue]);

	// Set the entries per page value based on the select value
	const setEntriesPerPage = ({ value }) => setPageSize(value);

	// Render the paginations
	// const renderPagination = pageOptions.map((option) => (
	//   <SuiPagination
	//     item
	//     key={option}
	//     onClick={() => gotoPage(Number(option))}
	//     active={pageIndex === option}
	//   >
	//     {option + 1}
	//   </SuiPagination>
	// ));

	// Handler for the input to set the pagination index
	const handleInputPagination = ({ target: { value } }) =>
		value > pageOptions.length || value < 0
			? gotoPage(0)
			: gotoPage(Number(value));

	// Customized page options starting from 1
	// const customizedPageOptions = pageOptions.map((option) => option + 1);

	// Setting value for the pagination input
	// const handleInputPaginationValue = ({ target: value }) => gotoPage(Number(value.value - 1));

	// Search input value state
	const [search, setSearch] = useState(globalFilter);

	// Search input state handle
	const onSearchChange = useAsyncDebounce((value) => {
		setGlobalFilter(value || undefined);
	}, 100);

	// A function that sets the sorted value for the table
	const setSortedValue = (column) => {
		let sortedValue;

		if (isSorted && column.isSorted) {
			sortedValue = column.isSortedDesc ? "desc" : "asce";
		} else if (isSorted) {
			sortedValue = "none";
		} else {
			sortedValue = false;
		}

		return sortedValue;
	};

	// Setting the entries starting point
	const entriesStart =
		pageIndex === 0 ? pageIndex + 1 : pageIndex * pageSize + 1;

	// Setting the entries ending point
	let entriesEnd;

	if (pageIndex === 0) {
		entriesEnd = pageSize;
	} else if (pageIndex === pageOptions.length - 1) {
		entriesEnd = rows.length;
	} else {
		entriesEnd = pageSize * (pageIndex + 1);
	}

	return (
		<TableContainer sx={{ boxShadow: "none" }}>
			{entriesPerPage || canSearch ? (
				<SuiBox
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					p={3}
				>
					{entriesPerPage && (
						<SuiBox display="flex" alignItems="center">
							<SuiSelect
								defaultValue={{
									value: defaultValue,
									label: defaultValue,
								}}
								options={entries.map((entry) => ({
									value: entry,
									label: entry,
								}))}
								onChange={setEntriesPerPage}
								size="small"
							/>
							<SuiTypography variant="caption" color="secondary">
								&nbsp;&nbsp;entries per page
							</SuiTypography>
						</SuiBox>
					)}
					{canSearch && (
						<SuiBox width="12rem" ml="auto">
							<SuiInput
								controller={controller}
								placeholder="Search..."
								value={search}
								onChange={({ currentTarget }) => {
									setSearch(search);
									onSearchChange(currentTarget.value);
								}}
							/>
						</SuiBox>
					)}
				</SuiBox>
			) : null}
			<Table {...getTableProps()}>
				<SuiBox component="thead">
					{headerGroups.map((headerGroup) => (
						<TableRow {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<DataTableHeadCell
									{...column.getHeaderProps(
										isSorted &&
											column.getSortByToggleProps()
									)}
									width={column.width ? column.width : "auto"}
									align={column.align ? column.align : "left"}
									sorted={setSortedValue(column)}
								>
									{column.render("Header")}
								</DataTableHeadCell>
							))}
						</TableRow>
					))}
				</SuiBox>
				<TableBody {...getTableBodyProps()}>
					{page.map((row, key) => {
						prepareRow(row);
						return (
							<TableRow {...row.getRowProps()}>
								{row.cells.map((cell) => (
									<DataTableBodyCell
										noBorder={
											noEndBorder &&
											rows.length - 1 === key
										}
										align={
											cell.column.align
												? cell.column.align
												: "left"
										}
										{...cell.getCellProps()}
									>
										{cell.render("Cell")}
									</DataTableBodyCell>
								))}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>

			<SuiBox
				display="flex"
				flexDirection={{ xs: "column", sm: "row" }}
				justifyContent="space-between"
				alignItems={{ xs: "flex-start", sm: "center" }}
				p={!showTotalEntries && pageOptions.length === 1 ? 0 : 3}
			>
				{showTotalEntries && (
					<SuiBox mb={{ xs: 3, sm: 0 }}>
						<SuiTypography
							variant="button"
							color="secondary"
							fontWeight="regular"
						>
							Showing {entriesStart} to {entriesEnd} of{" "}
							{rows.length} entries
						</SuiTypography>
					</SuiBox>
				)}
				{/* {pageOptions.length > 1 && (
          <SuiPagination
            variant={pagination.variant ? pagination.variant : "gradient"}
            color={pagination.color ? pagination.color : "info"}
          >
            {canPreviousPage && (
              <SuiPagination item onClick={() => previousPage()}>
                <Icon sx={{ fontWeight: "bold" }}>chevron_left</Icon>
              </SuiPagination>
            )}
            {renderPagination.length > 6 ? (
              <SuiBox width="5rem" mx={1}>
                <SuiInput
                  inputProps={{ type: "number", min: 1, max: customizedPageOptions.length }}
                  value={customizedPageOptions[pageIndex]}
                  onChange={(handleInputPagination, handleInputPaginationValue)}
                />
              </SuiBox>
            ) : (
              renderPagination
            )}
            {canNextPage && (
              <SuiPagination item onClick={() => nextPage()}>
                <Icon sx={{ fontWeight: "bold" }}>chevron_right</Icon>
              </SuiPagination>
            )}
          </SuiPagination>
        )} */}
			</SuiBox>
		</TableContainer>
	);
}
const dataTableData = {
	columns: [
		{ Header: "name", accessor: "name", width: "20%" },
		{ Header: "position", accessor: "position", width: "25%" },
		{ Header: "office", accessor: "office" },
		{ Header: "age", accessor: "age", width: "7%" },
		{ Header: "start date", accessor: "startDate" },
		{ Header: "salary", accessor: "salary" },
	],

	rows: [
		{
			name: "Hanny Baniard",
			position: "Data Coordiator",
			office: "Baorixile",
			age: 42,
			startDate: "4/11/2021",
			salary: "$474,978",
		},
	],
};
const Dashboard = () => {
	const { values } = breakpoints;
	const { size } = typography;
	return (
		<Fragment>
			<DashboardLayout>
				<SuiBox pt={3}>
					<SuiBox mb={3}>
						<AutomotiveDetails />
					</SuiBox>
				</SuiBox>

				<SuiBox mb={3}>
					<Grid container spacing={3}>
						<Grid item xs={12} lg={4}>
							<Grid item xs={12}>
								<SuiBox mb={3}>
									<EventCard
										id="902-128-281"
										image={logoSlack}
										title="slack meet"
										dateTime="11:00 AM"
										description="You have an upcoming meet for Marketing Planning"
										action={{
											type: "internal",
											route: "/",
											color: "success",
											label: "join",
										}}
									/>
								</SuiBox>
							</Grid>
						</Grid>
					</Grid>
				</SuiBox>

				<SuiBox mt={5} mb={3}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={6} xl={4}>
							<ProfileInfoCard
								title="profile information"
								description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
								info={{
									fullName: "Alec M. Thompson",
									mobile: "(44) 123 1234 123",
									email: "alecthompson@mail.com",
									location: "USA",
								}}
								action={{ route: "", tooltip: "Edit Profile" }}
							/>
						</Grid>
					</Grid>
				</SuiBox>

				<SuiBox pt={6} pb={3}>
					<SuiBox mb={3}>
						{/* <Card>
            <SuiBox p={3} lineHeight={1}>
              <SuiTypography variant="h5" fontWeight="medium">
                Datatable Simple
              </SuiTypography>
              <SuiTypography variant="button" fontWeight="regular" color="text">
                A lightweight, extendable, dependency-free javascript HTML table plugin.
              </SuiTypography>
            </SuiBox>
            <DataTable table={dataTableData} />
          </Card> */}
					</SuiBox>
					<Card>
						<SuiBox p={3} lineHeight={1}>
							<SuiTypography variant="h5" fontWeight="medium">
								Datatable Search
							</SuiTypography>
							<SuiTypography
								variant="button"
								fontWeight="regular"
								color="text"
							>
								A lightweight, extendable, dependency-free
								javascript HTML table plugin.
							</SuiTypography>
						</SuiBox>
						{/* <DataTable table={dataTableData} entriesPerPage={{defaultValue:10}} canSearch /> */}
					</Card>
				</SuiBox>

				<SuiBox py={3}>
					<Grid container>
						<Grid item xs={12} lg={7}>
							<SuiBox mb={3} p={1}>
								<SuiTypography
									variant={
										window.innerWidth < values.sm
											? "h3"
											: "h2"
									}
									textTransform="capitalize"
									fontWeight="bold"
								>
									general statistics
								</SuiTypography>
							</SuiBox>
							<Grid container>
								<Grid item xs={12}>
									{/*<Globe*/}
									{/*    display={{ xs: "none", md: "block" }}*/}
									{/*    position="absolute"*/}
									{/*    top="10%"*/}
									{/*    right={0}*/}
									{/*    mt={{ xs: -12, lg: 1 }}*/}
									{/*    mr={{ xs: 0, lg: 10 }}*/}
									{/*    canvasStyle={{ marginTop: "3rem" }}*/}
									{/*/>*/}
								</Grid>
							</Grid>
							<Grid container spacing={3}>
								<Grid item xs={12} sm={5}>
									<SuiBox mb={3}>
										<MiniStatisticsCard
											bgColor="white"
											title={{
												text: "today's money",
												fontWeight: "bold",
											}}
											count="$53,000"
											percentage={{
												color: "success",
												text: "+55%",
											}}
											icon={{
												color: "info",
												component: "paid",
											}}
										/>
									</SuiBox>
									<MiniStatisticsCard
										bgColor="white"
										title={{
											text: "today's users",
											fontWeight: "bold",
										}}
										count="2,300"
										percentage={{
											color: "success",
											text: "+3%",
										}}
										icon={{
											color: "info",
											component: "public",
										}}
									/>
								</Grid>
								<Grid item xs={12} sm={5}>
									<SuiBox mb={3}>
										<MiniStatisticsCard
											bgColor="white"
											title={{
												text: "new clients",
												fontWeight: "bold",
											}}
											count="+3,462"
											percentage={{
												color: "error",
												text: "-2%",
											}}
											icon={{
												color: "info",
												component: "emoji_events",
											}}
										/>
									</SuiBox>
									<SuiBox mb={3}>
										<MiniStatisticsCard
											bgColor="white"
											title={{
												text: "sales",
												fontWeight: "bold",
											}}
											count="$103,430"
											percentage={{
												color: "success",
												text: "+5%",
											}}
											icon={{
												color: "info",
												component: "shopping_cart",
											}}
										/>
									</SuiBox>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</SuiBox>
			</DashboardLayout>
		</Fragment>
	);
};
const ConfiguratorRoot = styled(Drawer)(({ theme, ownerState }) => {
	const { boxShadows, functions, transitions } = theme;
	const { openConfigurator } = ownerState;

	const configuratorWidth = 360;
	const { lg } = boxShadows;
	const { pxToRem } = functions;

	// drawer styles when openConfigurator={true}
	const drawerOpenStyles = () => ({
		width: configuratorWidth,
		left: "initial",
		right: 0,
		transition: transitions.create("right", {
			easing: transitions.easing.sharp,
			duration: transitions.duration.short,
		}),
	});

	// drawer styles when openConfigurator={false}
	const drawerCloseStyles = () => ({
		left: "initial",
		right: pxToRem(-350),
		transition: transitions.create("all", {
			easing: transitions.easing.sharp,
			duration: transitions.duration.short,
		}),
	});

	return {
		"& .MuiDrawer-paper": {
			height: "100vh",
			margin: 0,
			padding: `0 ${pxToRem(10)}`,
			borderRadius: 0,
			boxShadow: lg,
			overflowY: "auto",
			...(openConfigurator ? drawerOpenStyles() : drawerCloseStyles()),
		},
	};
});

export function Configurator({ controller, setController, children }) {
	// const [controller, dispatch] = useSoftUIController();
	const {
		openConfigurator,
		transparentSidenav,
		miniSidenav,
		fixedNavbar,
		sidenavColor,
	} = controller;
	const [disabled, setDisabled] = useState(false);
	const sidenavColors = [
		"primary",
		"dark",
		"info",
		"success",
		"warning",
		"error",
	];

	// Use the useEffect hook to change the button state for the sidenav type based on window size.
	useEffect(() => {
		// A function that sets the disabled state of the buttons for the sidenav type.
		function handleDisabled() {
			return window.innerWidth > 1200
				? setDisabled(false)
				: setDisabled(true);
		}

		// The event listener that's calling the handleDisabled function when resizing the window.
		window.addEventListener("resize", handleDisabled);

		// Call the handleDisabled function to set the state with the initial value.
		handleDisabled();

		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleDisabled);
	}, []);

	const handleCloseConfigurator = () =>
		setController({ ...controller, openConfigurator: false }); //setOpenConfigurator(dispatch, false);
	const handleTransparentSidenav = () =>
		setController({ ...controller, transparentSidenav: false }); //setTransparentSidenav(dispatch, true);
	const handleWhiteSidenav = () =>
		setController({ ...controller, transparentSidenav: false }); //setTransparentSidenav(dispatch, false);
	const handleMiniSidenav = () =>
		setController({ ...controller, transparentSidenav: false }); //setMiniSidenav(dispatch, !miniSidenav);
	const handleFixedNavbar = () =>
		setController({ ...controller, transparentSidenav: false }); //setFixedNavbar(dispatch, !fixedNavbar);

	// sidenav type buttons styles
	const sidenavTypeButtonsStyles = ({
		functions: { pxToRem },
		boxShadows: { buttonBoxShadow },
	}) => ({
		height: pxToRem(42),
		boxShadow: buttonBoxShadow.main,

		"&:hover, &:focus": {
			opacity: 1,
		},
	});

	return (
		<ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
			<SuiBox
				display="flex"
				justifyContent="space-between"
				alignItems="baseline"
				pt={3}
				pb={0.8}
				px={3}
			>
				<SuiBox>
					<SuiTypography variant="h5">Configurator</SuiTypography>
					<SuiTypography variant="body2" color="text">
						Set options.
					</SuiTypography>
				</SuiBox>

				<CloseIcon
					sx={({
						typography: { size, fontWeightBold },
						palette: { dark },
					}) => ({
						fontSize: `${size.md} !important`,
						fontWeight: `${fontWeightBold} !important`,
						stroke: dark.main,
						strokeWidth: "2px",
						cursor: "pointer",
						mt: 2,
					})}
					onClick={handleCloseConfigurator}
				>
					close
				</CloseIcon>
			</SuiBox>

			<Divider />
			{children}
			{/* <SuiBox pt={1.25} pb={3} px={3}>
				<SuiBox>
					<SuiTypography variant="h6">Sidenav Colors</SuiTypography>

					<SuiBox mb={0.5}>
						{sidenavColors.map((color) => (
							<IconButton
								key={color}
								sx={({
									borders: { borderWidth },
									palette: { white, dark },
									transitions,
								}) => ({
									width: "24px",
									height: "24px",
									padding: 0,
									border: `${borderWidth[1]} solid ${white.main}`,
									borderColor:
										sidenavColor === color && dark.main,
									transition: transitions.create(
										"border-color",
										{
											easing: transitions.easing.sharp,
											duration:
												transitions.duration.shorter,
										}
									),
									backgroundImage: ({
										functions: { linearGradient },
										palette: { gradients },
									}) =>
										linearGradient(
											gradients[color].main,
											gradients[color].state
										),

									"&:not(:last-child)": {
										mr: 1,
									},

									"&:hover, &:focus, &:active": {
										borderColor: dark.main,
									},
								})}
								onClick={() => setSidenavColor(dispatch, color)}
							/>
						))}
					</SuiBox>
				</SuiBox>

				<SuiBox mt={3} lineHeight={1}>
					<SuiTypography variant="h6">Sidenav Type</SuiTypography>
					<SuiTypography
						variant="button"
						color="text"
						fontWeight="regular"
					>
						Choose between 2 different sidenav types.
					</SuiTypography>

					<SuiBox
						sx={{
							display: "flex",
							mt: 2,
						}}
					>
						<SuiButton
							color="info"
							variant={
								transparentSidenav ? "gradient" : "outlined"
							}
							onClick={handleTransparentSidenav}
							disabled={disabled}
							fullWidth
							sx={{
								mr: 1,
								...sidenavTypeButtonsStyles,
							}}
						>
							Transparent
						</SuiButton>
						<SuiButton
							color="info"
							variant={
								transparentSidenav ? "outlined" : "gradient"
							}
							onClick={handleWhiteSidenav}
							disabled={disabled}
							fullWidth
							sx={sidenavTypeButtonsStyles}
						>
							White
						</SuiButton>
					</SuiBox>
				</SuiBox>
				<SuiBox mt={3} mb={2} lineHeight={1}>
					<SuiTypography variant="h6">Navbar Fixed</SuiTypography>

					<Switch
						checked={fixedNavbar}
						onChange={handleFixedNavbar}
					/>
				</SuiBox>

				<Divider />

				<SuiBox mt={2} mb={3} lineHeight={1}>
					<SuiTypography variant="h6">Sidenav Mini</SuiTypography>

					<Switch
						checked={miniSidenav}
						onChange={handleMiniSidenav}
					/>
				</SuiBox>

				<Divider />

				<SuiBox mt={3} mb={2}>
					<SuiBox mb={2}>
						<SuiButton
							component={Link}
							href="https://www.creative-tim.com/product/soft-ui-dashboard-pro-react"
							target="_blank"
							rel="noreferrer"
							color="info"
							variant="gradient"
							fullWidth
						>
							buy now
						</SuiButton>
					</SuiBox>
					<SuiBox mb={2}>
						<SuiButton
							component={Link}
							href="https://www.creative-tim.com/product/soft-ui-dashboard-react"
							target="_blank"
							rel="noreferrer"
							color="dark"
							variant="gradient"
							fullWidth
						>
							free download
						</SuiButton>
					</SuiBox>
					<SuiButton
						component={Link}
						href="https://www.creative-tim.com/learning-lab/react/quick-start/soft-ui-dashboard/"
						target="_blank"
						rel="noreferrer"
						color="dark"
						variant="outlined"
						fullWidth
					>
						view documentation
					</SuiButton>
				</SuiBox>
				<SuiBox display="flex" justifyContent="center">
					<GitHubButton
						href="https://github.com/creativetimofficial/ct-soft-ui-dashboard-pro-react"
						data-icon="octicon-star"
						data-size="large"
						data-show-count="true"
						aria-label="Star creativetimofficial/ct-soft-ui-dashboard-pro-react on GitHub"
					>
						Star
					</GitHubButton>
				</SuiBox>
				<SuiBox mt={3} textAlign="center">
					<SuiBox mb={0.5}>
						<SuiTypography variant="h6">
							Thank you for sharing!
						</SuiTypography>
					</SuiBox>

					<SuiBox display="flex" justifyContent="center">
						<SuiBox mr={1.5}>
							<SuiButton
								component={Link}
								href="//twitter.com/intent/tweet?text=Check%20Soft%20UI%20Dashboard%20PRO%20React%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23react%20%mui&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard-pro-react"
								target="_blank"
								rel="noreferrer"
								color="dark"
							>
								<TwitterIcon />
								&nbsp; Tweet
							</SuiButton>
						</SuiBox>
						<SuiButton
							component={Link}
							href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/soft-ui-dashboard-pro-react"
							target="_blank"
							rel="noreferrer"
							color="dark"
						>
							<FacebookIcon />
							&nbsp; Share
						</SuiButton>
					</SuiBox>
				</SuiBox>
			</SuiBox> */}
		</ConfiguratorRoot>
	);
}

export const ConfigurationButton = ({ handleConfiguratorOpen }) => {
	const configsButton = (
		<SuiBox
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="3.5rem"
			height="3.5rem"
			bgColor="white"
			shadow="sm"
			borderRadius="50%"
			position="fixed"
			right="2rem"
			bottom="2rem"
			zIndex={99}
			color="dark"
			sx={{ cursor: "pointer" }}
			onClick={handleConfiguratorOpen}
		>
			<SettingsIcon />
			{/* <Icon fontSize="default" color="inherit">
				settings
			</Icon> */}
		</SuiBox>
	);
	return <Fragment>{configsButton}</Fragment>;
};

export function NewProject({ controller }) {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [editorValue, setEditorValue] = useState(
		"<p>Hello World!</p><p>Some initial <strong>bold</strong> text</p><br><br>"
	);

	const handleSetStartDate = (newDate) => setStartDate(newDate);
	const handleSetEndDate = (newDate) => setEndDate(newDate);

	return (
		<SuiBox mt={3} mb={4}>
			<Grid container spacing={3} justifyContent="center">
				<Grid item xs={12} lg={9}>
					<Card sx={{ overflow: "visible" }}>
						<SuiBox p={2} lineHeight={1}>
							<SuiTypography variant="h6" fontWeight="medium">
								New Project
							</SuiTypography>
							<SuiTypography
								variant="button"
								fontWeight="regular"
								color="text"
							>
								Create new project
							</SuiTypography>
							<Divider />
							<SuiBox
								display="flex"
								flexDirection="column"
								justifyContent="flex-end"
								height="100%"
							>
								<SuiBox
									mb={1}
									ml={0.5}
									lineHeight={0}
									display="inline-block"
								>
									<SuiTypography
										component="label"
										variant="caption"
										fontWeight="bold"
									>
										Project Name
									</SuiTypography>
								</SuiBox>
								<SuiInput
									controller={controller}
									placeholder="Soft UI Dashboard PRO Material"
								/>
							</SuiBox>
							<SuiBox mt={3} mb={2}>
								<Grid container spacing={3}>
									<Grid item xs={12} md={6}>
										<SuiBox
											mb={1}
											ml={0.5}
											lineHeight={0}
											display="inline-block"
										>
											<SuiTypography
												component="label"
												variant="caption"
												fontWeight="bold"
											>
												Private Project
											</SuiTypography>
										</SuiBox>
										<SuiBox pl={0.5} pb={1.5}>
											<SuiTypography
												component="label"
												variant="caption"
												fontWeight="regular"
												color="text"
											>
												If you are available for hire
												outside of the current
												situation, you can encourage
												others to hire you.
											</SuiTypography>
										</SuiBox>
										<SuiBox ml={0.5} mb={0.25}>
											<Switch />
										</SuiBox>
									</Grid>
								</Grid>
							</SuiBox>
							<SuiBox
								display="flex"
								flexDirection="column"
								justifyContent="flex-end"
								height="100%"
							>
								<SuiBox
									mb={1}
									ml={0.5}
									mt={3}
									lineHeight={0}
									display="inline-block"
								>
									<SuiTypography
										component="label"
										variant="caption"
										fontWeight="bold"
									>
										Project Description
									</SuiTypography>
								</SuiBox>
								<SuiBox
									mb={1.5}
									ml={0.5}
									mt={0.5}
									lineHeight={0}
									display="inline-block"
								>
									<SuiTypography
										component="label"
										variant="caption"
										fontWeight="regular"
										color="text"
									>
										This is how others will learn about the
										project, so make it good!
									</SuiTypography>
								</SuiBox>
								<SuiEditor
									value={editorValue}
									onChange={setEditorValue}
								/>
							</SuiBox>
							<SuiBox
								display="flex"
								flexDirection="column"
								justifyContent="flex-end"
								height="100%"
							>
								<SuiBox
									mb={1}
									ml={0.5}
									mt={3}
									lineHeight={0}
									display="inline-block"
								>
									<SuiTypography
										component="label"
										variant="caption"
										fontWeight="bold"
									>
										Project Tags
									</SuiTypography>
								</SuiBox>
								<SuiSelect
									defaultValue={[
										{
											value: "choice 1",
											label: "Choice 1",
										},
										{
											value: "label two",
											label: "label two",
										},
									]}
									options={[
										{
											value: "choice 1",
											label: "Choice 1",
										},
										{
											value: "choice 2",
											label: "Choice 2",
										},
										{
											value: "choice 3",
											label: "Choice 3",
										},
										{
											value: "choice 4",
											label: "Choice 4",
										},
										{
											value: "label one",
											label: "Label One",
											isDisabled: true,
										},
										{
											value: "label two",
											label: "Tabel Two",
										},
										{
											value: "label three",
											label: "Label Three",
										},
									]}
									isMulti
								/>
							</SuiBox>
							{/* 
							



								<Grid container spacing={3}>
									<Grid item xs={6}>
										<SuiBox
											display="flex"
											flexDirection="column"
											justifyContent="flex-end"
											height="100%"
										>
											<SuiBox
												mb={1}
												ml={0.5}
												mt={3}
												lineHeight={0}
												display="inline-block"
											>
												<SuiTypography
													component="label"
													variant="caption"
													fontWeight="bold"
												>
													Start Date
												</SuiTypography>
											</SuiBox>
											<SuiDatePicker
												value={startDate}
												onChange={handleSetStartDate}
											/>
										</SuiBox>
									</Grid>
									<Grid item xs={6}>
										<SuiBox
											display="flex"
											flexDirection="column"
											justifyContent="flex-end"
											height="100%"
										>
											<SuiBox
												mb={1}
												ml={0.5}
												mt={3}
												lineHeight={0}
												display="inline-block"
											>
												<SuiTypography
													component="label"
													variant="caption"
													fontWeight="bold"
												>
													End Date
												</SuiTypography>
											</SuiBox>
											<SuiDatePicker
												value={endDate}
												onChange={handleSetEndDate}
											/>
										</SuiBox>
									</Grid>
								</Grid>
								<SuiBox>
									<SuiBox
										display="flex"
										flexDirection="column"
										justifyContent="flex-end"
										height="100%"
									>
										<SuiBox
											mb={1}
											ml={0.5}
											mt={3}
											lineHeight={0}
											display="inline-block"
										>
											<SuiTypography
												component="label"
												variant="caption"
												fontWeight="bold"
											>
												Starting Files
											</SuiTypography>
										</SuiBox>
										<SuiDropzone
											options={{ addRemoveLinks: true }}
										/>
									</SuiBox>
								</SuiBox>
								<SuiBox
									display="flex"
									justifyContent="flex-end"
									mt={3}
								>
									<SuiBox mr={1}>
										<SuiButton color="light">
											cancel
										</SuiButton>
									</SuiBox>
									<SuiButton variant="gradient" color="info">
										create project
									</SuiButton>
								</SuiBox> */}
						</SuiBox>
					</Card>
				</Grid>
			</Grid>
		</SuiBox>
	);
}

export const Sandbox = () => {
	const controller = {
		miniSidenav: false,
		transparentSidenav: true,
		sidenavColor: "info",
		transparentNavbar: true,
		fixedNavbar: true,
		openConfigurator: false,
		direction: "ltr",
		layout: "dashboard",
	};
	return (
		<Fragment>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<PropsContext.Provider
					value={{
						controller,
					}}
				>
					<Dashboard />
				</PropsContext.Provider>
			</ThemeProvider>
		</Fragment>
	);
};
export default Sandbox;
