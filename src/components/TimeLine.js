import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import SchoolIcon from "@mui/icons-material/School";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ApartmentIcon from "@mui/icons-material/Apartment";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    justifyContent: "center",
  },
  title: {
    fontSize: "0.7rem",
  },
}));

export default function TimeLine(props) {
  const classes = useStyles();

  return (
    <Timeline className={classes.root}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2012. 02
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ m: "auto 0" }}>
          <Typography variant="h6" component="span" sx={{ fontSize: "0.7rem" }}>
            동서울대학교 마케팅과 12학번
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2013. 03 ~ 2014. 12
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <WhatshotIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ m: "auto 0" }}>
          <Typography variant="h6" component="span" sx={{ fontSize: "0.7rem" }}>
            육군훈련소 헌병대 입대 만기전역
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2016. 11 ~ 2018. 04
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <ApartmentIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ m: "auto 0" }}>
          <Typography variant="h6" component="span" sx={{ fontSize: "0.7rem" }}>
            위즈도메인 입사 (특허검색솔루션사이트 웹퍼블리싱 및 프론트개발 담당)
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2018. 05 ~ 2018. 10
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ m: "auto 0" }}>
          <Typography variant="h6" component="span" sx={{ fontSize: "0.7rem" }}>
            두드림컴퓨터학원 JAVA 양성반 교육과정 수료
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2018. 11 ~ 2019. 08
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <ApartmentIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ m: "auto 0" }}>
          <Typography variant="h6" component="span" sx={{ fontSize: "0.7rem" }}>
            누리콘 입사 (C#을 사용하여 영상표출제어시스템 개발담당)
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2019. 09 ~ 2020. 05
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <ApartmentIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ m: "auto 0" }}>
          <Typography variant="h6" component="span" sx={{ fontSize: "0.7rem" }}>
            경기방송 입사 (웹퍼블리싱 및 프론트개발 담당)
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2020. 11 ~ 2022. 12
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <ApartmentIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ m: "auto 0" }}>
          <Typography variant="h6" component="span" sx={{ fontSize: "0.7rem" }}>
            위즈클라쓰 입사 (웹퍼블리싱 및 프론트개발 담당)
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
