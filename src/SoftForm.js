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
	SaveButton,
	SuiTextAreaElement,
	SuiToggleElement,
	SuiInputElement,
	SuiSelectElement,
	SuiInputHook,
	SuiTextAreaHook,
	SuiToggleHook,
	SuiDateHook,
	SuiSelectHook,
	SuiTableHook,
} from "./SoftElements";

const questionsData = [
	{
		category: "config_profile_questions",
		order: "=ROW(#REF!)",
		section: "about",
		id: "using_mtd2",
		text: "Are you using MTD2?",
		description: "description here",
		value: "True",
		type: "toggle",
		condition: "using_mtd2=TRUE",
	},
	{
		category: "config_profile_questions",
		order: "=ROW(#REF!)",
		section: "about",
		id: "key_projects_list",
		text: "What key projects are you working on MTD2?",
		description:
			"These are the key projects that your working on within MTD2",
		value: "Name,Summary",
		type: "table",
		condition: "using_mtd2=TRUE",
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A2)",
		section: "about",
		id: "team_name",
		text: "What team are you on?",
		description: null,
		value: "Please enter team name",
		type: "input",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A3)",
		section: "about",
		id: "tenant_name",
		text: "Which tenant do you leverage?",
		description: null,
		value: "AML,CCBML,CLEANROOM,ClickFox, ConCWM, CPWP, Digital Analytics, FAST (DZISTOR),MAP, MRCHSVC,OPSDATA,TDQG,TURNING",
		type: null,
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A4)",
		section: "about",
		id: "primary_stakeholder",
		text: "Who is your primary stakeholder?",
		description: null,
		value: null,
		type: "input",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A5)",
		section: "about",
		id: "challenges",
		text: "What are your biggest challenges using the MTD2 Platform?",
		description: null,
		value: null,
		type: "text-area",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A6)",
		section: "about",
		id: "key_projects",
		text: "What are your key projects you're working on in 2022?",
		description: null,
		value: null,
		type: "text-area",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A7)",
		section: "about",
		id: "key_projects_url",
		text: "Do these key projects have a URL?",
		description: null,
		value: null,
		type: "text-area",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A8)",
		section: "about",
		id: "mtd2_quote",
		text: "Could you provide us with a quote on the MTD2 Platform?",
		description: null,
		value: null,
		type: "text-area",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A9)",
		section: "about",
		id: "describe_role",
		text: "Describe your role in a couple sentences",
		description: null,
		value: null,
		type: "text-area",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A10)",
		section: "tools",
		id: "header",
		text: "Tools",
		description:
			"This will help us share updates in regards to the tools you select",
		value: "Spark,Impala,Hive,Hue,Jupyter",
		type: "multi-select",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A11)",
		section: "tools",
		id: "header_description",
		text: "Which of the following tools do you utilize?",
		description:
			"This will help us share updates in regards to the tools you select",
		value: "Spark,Impala,Hive,Hue,Jupyter",
		type: "multi-select",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A12)",
		section: "tools",
		id: "spark",
		text: "Spark",
		description: null,
		value: "False",
		type: "toggle",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A13)",
		section: "tools",
		id: "impala",
		text: "Impala",
		description: null,
		value: "False",
		type: "toggle",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A14)",
		section: "tools",
		id: "hive",
		text: "Hive",
		description: null,
		value: "False",
		type: "toggle",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A15)",
		section: "tools",
		id: "hue",
		text: "Hive",
		description: null,
		value: "False",
		type: "toggle",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A16)",
		section: "tools",
		id: "jira",
		text: "Jira",
		description: null,
		value: "False",
		type: "toggle",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A17)",
		section: "tools",
		id: "jira_key",
		text: "What is your Jira Key?",
		description: null,
		value: "e.g. ADPLAT-12",
		type: "input",
		condition: "jira=TRUE",
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A18)",
		section: "tools",
		id: "jupyter",
		text: "Jupyter",
		description: null,
		value: "False",
		type: "toggle",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A19)",
		section: "support",
		id: "documentation_rating",
		text: "How would you rate our documentation?",
		description: null,
		value: null,
		type: "rating",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A20)",
		section: "support",
		id: "support_rating",
		text: "How would you rate our support?",
		description: null,
		value: null,
		type: "rating",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A21)",
		section: "support",
		id: "additional_questions",
		text: "Would it be okay to reach out to you if any additional questions?",
		description: null,
		value: "True",
		type: "toggle",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A22)",
		section: "support",
		id: "new_feature_feedback",
		text: "Would you be able to provide feedback on new features?",
		description: null,
		value: null,
		type: "toggle",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A23)",
		section: "support",
		id: "learning_roadmap",
		text: "Are you interested in learning about our roadmap?",
		description: null,
		value: null,
		type: "toggle",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A24)",
		section: "support",
		id: "migrating_to_cloud",
		text: "Have you started efforts on migrating to the cloud?",
		description: null,
		value: null,
		type: "toggle",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A25)",
		section: "support",
		id: "cloud_date",
		text: "By which date do you anticipate on moving to the cloud?",
		description: null,
		value: null,
		type: "date",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A26)",
		section: "support",
		id: "connecting_to_other_data_scientists",
		text: "Would you be interested in connecting with other data scientists?",
		description: null,
		value: null,
		type: "toggle",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A27)",
		section: "support",
		id: "comments",
		text: "Are there any comments that you would like to share?",
		description: null,
		value: null,
		type: "text-area",
		condition: null,
	},
	{
		category: "config_profile_questions",
		order: "=ROW(A28)",
		section: "support",
		id: "questions",
		text: "Are there any questions that you may have?",
		description: null,
		value: null,
		type: "text-area",
		condition: null,
	},
];
//table
const QuestinGenerate = ({ configDict, pageData, setPageData }) => {
	switch (configDict["type"]) {
		case "input":
			return (
				<SuiInputHook
					configDict={configDict}
					pageData={pageData}
					setPageData={setPageData}
				/>
			);
		case "table":
			return (
				<SuiTableHook
					configDict={configDict}
					pageData={pageData}
					setPageData={setPageData}
				/>
			);
		case "text-area":
			return (
				<SuiTextAreaHook
					configDict={configDict}
					pageData={pageData}
					setPageData={setPageData}
				/>
			);
		case "toggle":
			return (
				<SuiToggleHook
					configDict={configDict}
					pageData={pageData}
					setPageData={setPageData}
				/>
			);
		case "date":
			return (
				<SuiDateHook
					configDict={configDict}
					pageData={pageData}
					setPageData={setPageData}
				/>
			);
		case "multi-select":
			return (
				<SuiSelectHook
					configDict={configDict}
					pageData={pageData}
					setPageData={setPageData}
				/>
			);
		default:
			return <Fragment>-</Fragment>;
	}
};
const SoftForm = () => {
	const [pageData, setPageData] = useState({});
	const saveData = (e) => {
		console.log({ e });
	};
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<PropsContext.Provider value={{ pageData, setPageData }}>
				<PageLayout>
					<SuiBox mt={3} mb={4}>
						<Grid container spacing={3} justifyContent="center">
							<Grid item xs={12} lg={9}>
								<Card sx={{ overflow: "visible" }}>
									<SuiBox p={2} lineHeight={1}>
										{questionsData.map(
											(configDict, index) => {
												return (
													<QuestinGenerate
														pageData={pageData}
														setPageData={
															setPageData
														}
														key={index}
														configDict={configDict}
													/>
												);
											}
										)}
										<SaveButton onClick={saveData} />
									</SuiBox>
								</Card>
							</Grid>
						</Grid>
					</SuiBox>
				</PageLayout>
			</PropsContext.Provider>
		</ThemeProvider>
	);
};
export default SoftForm;
