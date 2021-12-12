
import React, {Fragment, useEffect, useState} from "react";
import { forwardRef } from "react";

import PropsContext from "./PropsContext";


// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

//Suibox
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";




import CssBaseline from "@mui/material/CssBaseline";

import typography from "./assets/theme/base/typography";
import breakpoints from "./assets/theme/base/breakpoints";





const SuiTypographyRoot = styled(Typography)(({ theme, ownerState }) => {
    const { palette, typography, functions } = theme;
    const { color, textTransform, verticalAlign, fontWeight, opacity, textGradient } = ownerState;

    const { gradients, transparent } = palette;
    const { fontWeightLight, fontWeightRegular, fontWeightMedium, fontWeightBold } = typography;
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
            color !== "inherit" && color !== "text" && color !== "white" && gradients[color]
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
        color: color === "inherit" || !palette[color] ? "inherit" : palette[color].main,
        fontWeight: fontWeights[fontWeight] && fontWeights[fontWeight],
        ...(textGradient && gradientStyles()),
    };
});


const SuiTypography = forwardRef(
    (
        { color, fontWeight, textTransform, verticalAlign, textGradient, opacity, children, ...rest },
        ref
    ) => (
        <SuiTypographyRoot
            {...rest}
            ref={ref}
            ownerState={{ color, textTransform, verticalAlign, fontWeight, opacity, textGradient }}
        >
            {children}
        </SuiTypographyRoot>
    )
);


const SuiBoxRoot = styled(Box)(({ theme, ownerState }) => {
    console.log({ownerState})
    const { palette, functions, borders, boxShadows } = theme;
    const { variant, bgColor, color, opacity, borderRadius, shadow } = ownerState;

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
        backgroundValue = palette[bgColor] ? palette[bgColor].main : greyColors[bgColor];
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


const SuiBox = forwardRef(
    ({ variant, bgColor, color, opacity, borderRadius, shadow, ...rest }, ref) => (
        <SuiBoxRoot
            {...rest}
            ref={ref}
            ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow }}
        />
    )
);


const DashboardLayout = ({children}) => {
    return (
        <PropsContext.Consumer>{({controller}) => {
            const {miniSidenav} = controller
            return (
                <SuiBox
                    sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
                        p: 3,
                        position: "relative",
                        [breakpoints.up("xl")]: {
                            marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
                            transition: transitions.create(["margin-left", "margin-right"], {
                                easing: transitions.easing.easeInOut,
                                duration: transitions.duration.standard,
                            }),
                        },
                    })}
                >
                    {children}
                </SuiBox>
            )
        }}
        </PropsContext.Consumer>
    )
}



function MiniStatisticsCard({ bgColor, title, count, percentage, icon, direction }) {
    console.log({bgColor})
    return (
        <Card>
            <SuiBox bgColor={bgColor} variant="gradient">
                <SuiBox p={2}>
                    <Grid container alignItems="center">
                        {direction === "left" ? (
                            <Grid item>
                                <SuiBox
                                    variant="gradient"
                                    bgColor={bgColor === "white" ? icon.color : "white"}
                                    color={bgColor === "white" ? "white" : "dark"}
                                    width="3rem"
                                    height="3rem"
                                    borderRadius="md"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    shadow="md"
                                >
                                    <Icon fontSize="small" color="inherit">
                                        {icon.component}
                                    </Icon>
                                </SuiBox>
                            </Grid>
                        ) : null}
                        <Grid item xs={8}>
                            <SuiBox ml={direction === "left" ? 2 : 0} lineHeight={1}>
                                <SuiTypography
                                    variant="button"
                                    color={bgColor === "white" ? "text" : "white"}
                                    opacity={bgColor === "white" ? 1 : 0.7}
                                    textTransform="capitalize"
                                    fontWeight={title.fontWeight}
                                >
                                    {title.text}
                                </SuiTypography>
                                <SuiTypography
                                    variant="h5"
                                    fontWeight="bold"
                                    color={bgColor === "white" ? "dark" : "white"}
                                >
                                    {count}{" "}
                                    <SuiTypography variant="button" color={percentage.color} fontWeight="bold">
                                        {percentage.text}
                                    </SuiTypography>
                                </SuiTypography>
                            </SuiBox>
                        </Grid>
                        {direction === "right" ? (
                            <Grid item xs={4}>
                                <SuiBox
                                    variant="gradient"
                                    bgColor={bgColor === "white" ? icon.color : "white"}
                                    color={bgColor === "white" ? "white" : "dark"}
                                    width="3rem"
                                    height="3rem"
                                    marginLeft="auto"
                                    borderRadius="md"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    shadow="md"
                                >
                                    <Icon fontSize="small" color="inherit">
                                        {icon.component}
                                    </Icon>
                                </SuiBox>
                            </Grid>
                        ) : null}
                    </Grid>
                </SuiBox>
            </SuiBox>
        </Card>
    );
}

const Dashboard = () => {
    const { values } = breakpoints;
    const { size } = typography;
    return (
        <Fragment><DashboardLayout>
            <SuiBox py={3}>
                <Grid container>
                    <Grid item xs={12} lg={7}>
                        <SuiBox mb={3} p={1}>
                            <SuiTypography
                                variant={window.innerWidth < values.sm ? "h3" : "h2"}
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
                                        bgColor='white'
                                        title={{ text: "today's money", fontWeight: "bold" }}
                                        count="$53,000"
                                        percentage={{ color: "success", text: "+55%" }}
                                        icon={{ color: "info", component: "paid" }}
                                    />
                                </SuiBox>
                                <MiniStatisticsCard
                                    bgColor='white'
                                    title={{ text: "today's users", fontWeight: "bold" }}
                                    count="2,300"
                                    percentage={{ color: "success", text: "+3%" }}
                                    icon={{ color: "info", component: "public" }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <SuiBox mb={3}>
                                    <MiniStatisticsCard
                                        bgColor='white'
                                        title={{ text: "new clients", fontWeight: "bold" }}
                                        count="+3,462"
                                        percentage={{ color: "error", text: "-2%" }}
                                        icon={{ color: "info", component: "emoji_events" }}
                                    />
                                </SuiBox>
                                <SuiBox mb={3}>
                                    <MiniStatisticsCard
                                        bgColor='white'
                                        title={{ text: "sales", fontWeight: "bold" }}
                                        count="$103,430"
                                        percentage={{ color: "success", text: "+5%" }}
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
        </DashboardLayout></Fragment>
    )
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
    }
    return (
        <Fragment>
                <ThemeProvider theme={theme}>
                <CssBaseline />

            <PropsContext.Provider value={{
                controller
            }}>
                    <Dashboard/>
            </PropsContext.Provider>
            </ThemeProvider>




        </Fragment>
    )
}
export default Sandbox
