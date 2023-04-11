import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { makeStyles } from "@mui/styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 600,
    position: "relative",
    overflow: "hidden",
    margin: "0 auto",
  },
}));

export default function Project(props) {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <>
      <Box className={classes.root}>
        <SwipeableViews index={activeStep} onChangeIndex={handleStepChange}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardMedia
              sx={{ height: 240 }}
              image="http://xkaizew.hgodo.com/port/main_bg1.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                원클릭 리딩
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">VISIT SITE</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: "100%" }}>
            <CardMedia
              sx={{ height: 240 }}
              image="http://xkaizew.hgodo.com/port/main_bg2.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                원클릭 리딩
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">VISIT SITE</Button>
            </CardActions>
          </Card>
        </SwipeableViews>
      </Box>
    </>
  );
}
