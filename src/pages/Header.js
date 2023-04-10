import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../store/store.js";

const useStyles = makeStyles(() => ({
  header: {
    width: "100%",
    position: "fixed",
    top: "0",
    boxShadow: "4px 1px 5px -2px rgba(255, 255, 255, 0.5);",
  },
}));

export default function Header(props) {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state);
  const { handleChange } = props;
  const classes = useStyles();

  console.log(value);

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList
          onChange={handleChange}
          aria-label="header"
          className={classes.header}
        >
          <Tab label="&lt;header/&gt;" value="1" />
          <Tab label="&lt;skill/&gt;" value="2" />
          <Tab label="&lt;timeline/&gt;" value="3" />
          <Tab label="&lt;project/&gt;" value="4" />
          <Tab label="&lt;footer/&gt;" value="5" />
        </TabList>
      </Box>
    </TabContext>
  );
}
