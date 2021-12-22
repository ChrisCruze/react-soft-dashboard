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

import { PropsContext } from "./SoftElements";
import {
	DashboardLayout,
	SuiBox,
	SuiTypography,
	SuiButton,
	SuiAvatar,
	ProfileInfoCard,
	AutomotiveDetails,
	MiniStatisticsCard,
	ComplexProjectCard,
	PlaceholderCard,
} from "./SoftElements";

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

				<SuiBox pt={5} pb={2}>
					<Grid container>
						<Grid item xs={12} md={8}>
							<SuiBox mb={1}>
								<SuiTypography variant="h5">
									Some of Our Awesome Projects
								</SuiTypography>
							</SuiBox>
							<SuiBox mb={2}>
								<SuiTypography variant="body2" color="text">
									This is the paragraph where you can write
									more details about your projects. Keep you
									user engaged by providing meaningful
									information.
								</SuiTypography>
							</SuiBox>
						</Grid>
					</Grid>
					<SuiBox mt={{ xs: 1, lg: 3 }} mb={1}>
						<Grid container spacing={3}>
							<Grid item xs={12} md={6} lg={4}>
								<ComplexProjectCard
									image={logoSlack}
									color={"dark"}
									title="slack bot"
									description="If everything I did failed - which it doesn't, I think that it actually succeeds."
									dateTime="02.03.22"
									members={[]}
									dropdown={{}}
								/>
							</Grid>

							<Grid item xs={12} md={6} lg={4}>
								<PlaceholderCard
									title={{
										variant: "h5",
										text: "New project",
									}}
									icon={"add"}
								/>
							</Grid>
						</Grid>
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
