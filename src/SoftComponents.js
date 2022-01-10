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
import curved6 from "assets/images/curved-images/curved6.jpg";

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
	CoverLayout,
} from "./SoftElements";

const SoftComponents = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<PropsContext.Provider value={{}}>
				<PageLayout>
					<CoverLayout
						title="Dashboard"
						description="Sign Up"
						image={curved6}
						top={30}
					></CoverLayout>
				</PageLayout>

				<SuiBox
					width="100vw"
					height="100%"
					minHeight="100vh"
					sx={{ overflowX: "hidden" }}
				>
					<SuiBox pt={3} pb={8}>
						<Grid container justifyContent="center">
							<Grid item xs={12} lg={12}>
								Create Landing Page from Components
								(specifically Header with Sub Header and then
								Sign Up Button)
								http://localhost:3000/authentication/sign-in/cover
								http://localhost:3000/authentication/sign-up/cover
							</Grid>
							<Grid item xs={12} lg={12}>
								Sign In Landing Page -
								http://localhost:3000/authentication/sign-in/cover
							</Grid>
							<Grid item xs={12} lg={12}>
								Convert Form to Produce from Array
								http://localhost:3000/authentication/sign-in/basic
							</Grid>
							<Grid item xs={12} lg={12}>
								Header - Authentication Sign In Basic
								http://localhost:3000/authentication/sign-in/basic
							</Grid>
							<Grid item xs={12} lg={12}>
								Line Chart Over Time -
								http://localhost:3000/applications/analytics
							</Grid>
							<Grid item xs={12} lg={12}>
								Table with Add Feature -
								http://localhost:3000/applications/analytics
							</Grid>
							<Grid item xs={12} lg={12}>
								Config Box Toggle Array so that I can have
								configuration to show different items on whether
								they are utilied:
								http://localhost:3000/pages/account/security
							</Grid>
							<Grid item xs={12} lg={12}>
								Frequently Asked Questions Box Section
								http://localhost:3000/pages/pricing-page
							</Grid>
							<Grid item xs={12} lg={12}>
								Data Tables
							</Grid>
							<Grid item xs={12} lg={12}>
								Form From Array
							</Grid>
						</Grid>
					</SuiBox>
				</SuiBox>
			</PropsContext.Provider>
		</ThemeProvider>
	);
};
export default SoftComponents;
