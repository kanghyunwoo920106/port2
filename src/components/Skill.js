import React, { useEffect, useState } from "react";
import Progress from "./Progress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import JavascriptIcon from "@mui/icons-material/Javascript";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AOS from "aos";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";

import "aos/dist/aos.css";

const Title = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(0.3),
  borderRadius: "7px",
  color: red[100],
  textAlign: "center",
  width: "16%",
  border: "3px solid #cd0000",
  marginBottom: "15px",
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.4),
  textAlign: "left",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export default function Skill(props) {
  const skillArray = [
    { title: "# Language", skill: "HTML", progressValue: 80 },
    { title: "# Language", skill: "CSS", progressValue: 80 },
    { title: "# Language", skill: "JavaScript", progressValue: 70 },
    { title: "# Frontend", skill: "React", progressValue: 60 },
    { title: "# Backend", skill: "Node.js", progressValue: 60 },
    { title: "# Backend", skill: "Php", progressValue: 60 },
    { title: "# DB", skill: "Mysql", progressValue: 70 },
    { title: "# Deployment", skill: "AWS", progressValue: 50 },
    { title: "# Deployment", skill: "Cafe24", progressValue: 60 },
    { title: "# Library", skill: "Material Ui", progressValue: 80 },
    { title: "# Library", skill: "Bootstrap", progressValue: 80 },
  ];

  function groupByTitle(array) {
    const result = {};
    array.forEach((item) => {
      if (!result[item.title]) {
        result[item.title] = [item];
      } else {
        result[item.title].push(item);
      }
    });
    return result;
  }

  const groupedSkills = groupByTitle(skillArray);

  return (
    <Grid container spacing={2}>
      {Object.keys(groupedSkills).map((title, index) => {
        return (
          <Grid item xs={6} key={index}>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {title}
            </Typography>
            {groupedSkills[title].map((item, index) => (
              <Item key={index} data-aos="fade-left" data-aos-duration="2000">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    variant="contained"
                    sx={{
                      marginRight: "7px",
                      // borderRadius: "30px",
                      fontSize: "0.1rem",
                    }}
                  >
                    {Array.isArray(item.skill)
                      ? item.skill.join(", ")
                      : item.skill}
                  </Button>
                  <Progress values={item.progressValue} />
                </Box>
              </Item>
            ))}
          </Grid>
        );
      })}
    </Grid>
  );
}
