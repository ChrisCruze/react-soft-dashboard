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

import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

// Images
import mercedesEQC from "assets/images/mercedes-eqc.png";
import wavesWhite from "assets/images/shapes/waves-white.svg";

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

import CssBaseline from "@mui/material/CssBaseline";

import typography from "./assets/theme/base/typography";
import breakpoints from "./assets/theme/base/breakpoints";

//used for teams card
import logoSlack from "assets/images/small-logos/logo-slack.svg";

// Soft UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

export const PropsContext = React.createContext({});

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
				<Divider />
				<SuiBox
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
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
					<Grid
						item
						xs={4}
						sm={3}
						md={2}
						lg={1}
						sx={{ flex: "0 0 100%" }}
					>
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
							{/* <Icon fontSize="small">add</Icon> */}
						</SuiBox>
						<SuiBox mt={0.75} textAlign="center" lineHeight={1}>
							<SuiTypography
								variant="button"
								color="text"
								fontWeight="regular"
							>
								Add Person
							</SuiTypography>
						</SuiBox>
					</Grid>
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
						color="success"
						size="small"
						circular
						iconOnly
					>
						{/* <Icon sx={{ fontWeight: "bold" }}>done</Icon> */}
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
							<Icon>arrow_drop_up</Icon>
						</SuiBox>
						<SuiBox
							position="absolute"
							top={0}
							color={sorted === "desc" ? "text" : "secondary"}
							opacity={sorted === "desc" ? 1 : 0.5}
						>
							<Icon>arrow_drop_down</Icon>
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

export function Configurator({ controller, setController }) {
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
					<SuiTypography variant="h5">
						Soft UI Configurator
					</SuiTypography>
					<SuiTypography variant="body2" color="text">
						See our dashboard options.
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
