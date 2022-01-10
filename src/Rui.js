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
import MenuIcon from "@material-ui/icons/Menu";
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

// react-table components
import {
	useTable,
	usePagination,
	useGlobalFilter,
	useAsyncDebounce,
	useSortBy,
} from "react-table";

//required for profile info card
import { Link } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";

import typography from "./assets/theme/base/typography";
import breakpoints from "./assets/theme/base/breakpoints";

//used for teams card
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import team1 from "assets/images/team-1.jpg";

import { PropsContext } from "./SoftElements";
import {
	DashboardLayout,
	PageLayout,
	SuiBox,
	SuiTypography,
	SuiButton,
	SuiAvatar,
	ProfileInfoCard,
	AutomotiveDetails,
	MiniStatisticsCard,
	ComplexProjectCard,
	PlaceholderCard,
	Stories,
	Footer,
	ConfigurationButton,
	Configurator,
	NewProject,
	SuiBackSendButton,
	SuiInput,
	SuiInputCore,
	SuiInputOriginal,
} from "./SoftElements";

const BackSendButton = () => {
	return (
		<PropsContext.Consumer>
			{({
				activeStep,
				handleBack,
				handleNext,
				isLastStep,
				handleSubmit,
			}) => (
				<SuiBackSendButton
					activeStep={activeStep}
					handleBack={handleBack}
					handleNext={handleNext}
					isLastStep={isLastStep}
					handleSubmit={handleSubmit}
				/>
			)}
		</PropsContext.Consumer>
	);
};
const InputBox = ({ id }) => {
	return (
		<PropsContext.Consumer>
			{({ controller, setController }) => {
				// const inputValue = controller[id];
				const onChange = ({ currentTarget }) => {
					const inputValue = currentTarget.value;
					var updateDict = {};
					updateDict[id] = inputValue;
					const controllerDict = { ...controller, ...updateDict };
					setController(controllerDict);
				};
				return (
					<SuiInput
						onChange={onChange}
						defaultValue={controller[id]}
					/>
				);
			}}
		</PropsContext.Consumer>
	);
};
const Why = () => {
	return (
		<SuiBox mt={20} mb={3} textAlign="center">
			<SuiBox mb={1}>
				<SuiTypography variant="h3" fontWeight="bold">
					{"Why is it your goal?"}
				</SuiTypography>
			</SuiBox>
			<SuiBox mt={3} mb={3}>
				<InputBox id="why" />
			</SuiBox>
			<BackSendButton />
		</SuiBox>
	);
};
const What = () => {
	return (
		<SuiBox mt={20} mb={3} textAlign="center">
			<SuiBox mb={1}>
				<SuiTypography variant="h3" fontWeight="bold">
					{"What is your goal?"}
				</SuiTypography>
			</SuiBox>

			<SuiBox mt={3} mb={3}>
				<InputBox id="what" />
			</SuiBox>
			<BackSendButton />
		</SuiBox>
	);
};
const Intro = () => {
	return (
		<SuiBox mt={20} mb={3} textAlign="center">
			<SuiBox mb={1}>
				<SuiTypography variant="h3" fontWeight="bold">
					Lets Begin
				</SuiTypography>
			</SuiBox>
			<SuiTypography variant="h5" fontWeight="regular" color="secondary">
				Welcome to the beginning of your self-development journey
			</SuiTypography>
			<BackSendButton />
		</SuiBox>
	);
};
const Thanks = () => {
	return (
		<SuiBox mt={20} mb={3} textAlign="center">
			<SuiBox mb={1}>
				<SuiTypography variant="h3" fontWeight="bold">
					Thanks
				</SuiTypography>
			</SuiBox>
			<SuiTypography variant="h5" fontWeight="regular" color="secondary">
				We'll get back to you with next steps
			</SuiTypography>
		</SuiBox>
	);
};
function getStepContent(stepIndex) {
	switch (stepIndex) {
		case 0:
			return <Intro />;
		case 1:
			return <What />;
		case 2:
			return <Why />;
		case 3:
			return <Thanks />;
		default:
			return null;
	}
}
const Rui = () => {
	const steps = ["Intro", "What", "Why", "Thanks"];
	const [controller, setController] = useState({
		activeStep: 0,
		what: "",
		why: "",
	});
	const { activeStep } = controller;
	const isLastStep = activeStep === steps.length - 2;
	const handleNext = () =>
		setController({ ...controller, activeStep: activeStep + 1 });
	const handleBack = () =>
		setController({ ...controller, activeStep: activeStep - 1 });
	const handleSubmit = () =>
		setController({ ...controller, activeStep: steps.length - 1 });
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<PropsContext.Provider
				value={{
					controller,
					setController,
					activeStep,
					isLastStep,
					handleNext,
					handleBack,
					handleSubmit,
				}}
			>
				<SuiBox
					width="100vw"
					height="100%"
					minHeight="100vh"
					sx={{ overflowX: "hidden" }}
				>
					<SuiBox pt={3} pb={8}>
						<Grid container justifyContent="center">
							<Grid item xs={12} lg={4}>
								{getStepContent(activeStep)}
							</Grid>
						</Grid>
					</SuiBox>
				</SuiBox>
			</PropsContext.Provider>
		</ThemeProvider>
	);
};
export default Rui;
