
import React, {Fragment, useEffect, useState} from "react";
import { forwardRef } from "react";

import PropsContext from "./PropsContext";


// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";


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


const SuiButtonRoot = styled(Button)(({ theme, ownerState }) => {
    const { palette, functions, borders } = theme;
    const { color, variant, size, circular, iconOnly } = ownerState;
  
    const { white, dark, text, transparent, gradients } = palette;
    const { boxShadow, linearGradient, pxToRem, rgba } = functions;
    const { borderRadius } = borders;
  
    // styles for the button with variant="contained"
    const containedStyles = () => {
      // background color value
      const backgroundValue = palette[color] ? palette[color].main : white.main;
  
      // backgroundColor value when button is focused
      const focusedBackgroundValue = palette[color] ? palette[color].focus : white.focus;
  
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
      } else if (color === "primary" || color === "error" || color === "dark") {
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
      const backgroundValue = color === "white" ? rgba(white.main, 0.1) : transparent.main;
  
      // color value
      const colorValue = palette[color] ? palette[color].main : white.main;
  
      // boxShadow value
      const boxShadowValue = palette[color]
        ? boxShadow([0, 0], [0, 3.2], palette[color].main, 0.5)
        : boxShadow([0, 0], [0, 3.2], white.main, 0.5);
  
      // border color value
      let borderColorValue = palette[color] ? palette[color].main : rgba(white.main, 0.75);
  
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
      const focusedColorValue = palette[color] ? palette[color].focus : white.focus;
  
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

const SuiButton = forwardRef(
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

  
function AutomotiveDetails() {
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
              <SuiTypography variant="h4" color="white" textTransform="capitalize" opacity={0.9}>
                since last charge
              </SuiTypography>
              <Divider light />
              <SuiBox display="flex">
                <SuiBox>
                  <SuiTypography variant="h6" color="white" textTransform="capitalize" opacity={0.7}>
                    distance
                  </SuiTypography>
                  <SuiTypography variant="h3" fontWeight="bold" color="white">
                    145{" "}
                    <SuiTypography variant="button" color="white" verticalAlign="top">
                      Km
                    </SuiTypography>
                  </SuiTypography>
                </SuiBox>
                <SuiBox ml={{ xs: 3, md: 8 }} mb={{ xs: 1, md: 0 }}>
                  <SuiTypography variant="h6" color="white" textTransform="capitalize" opacity={0.7}>
                    average energy
                  </SuiTypography>
                  <SuiTypography variant="h3" fontWeight="bold" color="white">
                    300{" "}
                    <SuiTypography variant="button" color="white" verticalAlign="top">
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
                <SuiTypography variant="h4" color="white" textTransform="capitalize" opacity={0.7}>
                  available range
                </SuiTypography>
                <SuiBox ml={1}>
                  <SuiTypography variant="h2" fontWeight="bold" color="white">
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
              <SuiTypography variant="h4" color="white" textTransform="capitalize" opacity={0.9}>
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
                  <SuiBox pt={3}>
        <SuiBox mb={3}>
          <AutomotiveDetails />
        </SuiBox>
        </SuiBox>
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
