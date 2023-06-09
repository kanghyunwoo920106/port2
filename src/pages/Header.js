import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../store/store.js";

const useStyles = makeStyles(() => ({
  header: {
    width: "100%",
    height: "50px",
    position: "fixed",
    top: "0",
    boxShadow: "4px 1px 5px -2px rgba(255, 255, 255, 0.5);",
    backgroundColor: "#121212",
    zIndex: 10,
  },
}));

export default function Header(props) {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state);
  const { handleChange } = props;
  const classes = useStyles();

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        className={classes.header}
      >
        <Tab label="&lt;header/&gt;" value="1" />
        <Tab label="&lt;skill/&gt;" value="2" />
        <Tab label="&lt;timeline/&gt;" value="3" />
        <Tab label="&lt;project/&gt;" value="4" />
        <Tab label="&lt;footer/&gt;" value="5" />
      </Tabs>
    </Box>
  );
}
