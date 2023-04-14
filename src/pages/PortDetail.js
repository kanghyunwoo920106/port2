import React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import { IndeterminateCheckBoxOutlined } from "@mui/icons-material";
import Image from "../components/Image";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "100%",
    position: "relative",
    overflow: "hidden",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    lineHeight: "240px",
  },
  title: {
    color: "#fff",
    fontSize: "1.4rem",
    lineHeight: "240px",
    fontWeight: "bold",
    textShadow: "0 1px 4px #ccc",
  },
  card: {
    maxWidth: 600,
    position: "relative",
    overflow: "hidden",
    margin: "0 auto 15px",
    padding: "15px",
    textAlign: "left",
  },
  cardTitle: {
    fontSize: "0.9rem",
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function PortDetail(props) {
  const classes = useStyles();
  const { idx } = useParams();
  const { projectData } = props;
  const detailData = projectData.find(({ id }) => id == idx);
  // console.log(detailData);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <CardMedia
          sx={{ height: 240 }}
          // image={detailData.imagePath}
          title="green iguana"
          className={classes.header}
        >
          <Typography
            variant="span"
            data-aos="fade-down"
            data-aos-duration="1000"
            className={classes.title}
          >
            {detailData.title}
          </Typography>
        </CardMedia>
      </Grid>
      <Grid item xs={12} style={{ margin: "0 15px" }}>
        <Card className={classes.card}>
          <Typography variant="p" className={classes.cardTitle}>
            개발환경 <br />- {detailData.devEnv}
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} style={{ margin: "0 15px" }}>
        <Card className={classes.card}>
          <Typography variant="p" className={classes.cardTitle}>
            사용기술 <br />- {detailData.useSkill}
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} style={{ margin: "0 15px" }}>
        <Card className={classes.card}>
          <Typography variant="p" className={classes.cardTitle}>
            기능구현 <br />- {detailData.avatar[0]} <br /> -
            {detailData.avatar[1]} <br /> - {detailData.avatar[2]}
            <br /> - {detailData.avatar[3]}
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} style={{ margin: "0 15px" }}>
        <Card className={classes.card}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {detailData.detailImagePath.map((item) => {
              return (
                <ImageListItem key={item}>
                  <img
                    src={`${item}?w=248&fit=crop&auto=format`}
                    srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    loading="lazy"
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
        </Card>
      </Grid>
    </Grid>
  );
}
