import { useEffect, useRef, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./pages/Header";
import Main from "./pages/Main";
import { FullPage, Slide } from "react-full-page";
import { setValue, setProgress } from "./store/store.js";
import Typed from "react-typed";
import blue from "@mui/material/colors/blue";
import red from "@mui/material/colors/red";
import green from "@mui/material/colors/green";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AOS from "aos";

export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Roboto",
      button: {
        textTransform: "none",
        fontWeight: "bold",
      },
    },
    palette: {
      primary: red,
      background: {
        paper: "#ff0000",
      },
    },
  });

  const fullPageRef = useRef(null);
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state);

  // const handleChange = (event, newValue) => {
  //   fullPageRef.current.scrollToSlide(newValue - 1);
  //   dispatch(setValue(newValue));
  //   console.log(newValue);
  // };

  useEffect(() => {
    AOS.init();
  });

  const handleChange = (event, newValue) => {
    fullPageRef.current.scrollToSlide(newValue - 1);
    dispatch(setValue(newValue));
  };

  const beforeChange = (e) => {
    AOS.refresh();
    dispatch(setValue((e.to + 1).toString()));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Header handleChange={handleChange} />
        <Main fullPageRef={fullPageRef} beforeChange={beforeChange} />
      </Container>
    </ThemeProvider>
  );
}
