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
import { makeStyles } from "@mui/styles";
import { Link, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 600,
    position: "relative",
    overflow: "hidden",
    margin: "0 auto",
  },
  card: {
    margin: "15px 0",
  },
}));

export default function Project(props) {
  const classes = useStyles();
  const { projectData } = props;

  return (
    <>
      <Box className={classes.root}>
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          scrollbar={{ draggable: true }}
          // navigation
          breakpoints={{
            768: {
              slidesPerView: 7,
            },
          }}
        >
          {projectData.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <Card
                  sx={{ maxWidth: "100%" }}
                  className={classes.card}
                  key={index}
                  data-aos="fade-bottom"
                  data-aos-duration="1000"
                >
                  <CardMedia
                    sx={{ height: 240 }}
                    image={data.imagePath}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">
                      <NavLink to={`/portdetail/${data.id}`}>READ ME!</NavLink>
                    </Button>
                    <Button size="small" href={data.url} target="_blank">
                      VISIT SITE
                    </Button>
                  </CardActions>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </>
  );
}
