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

const timeLineData = [
  { date: "2012. 02", description: "동서울대학교 마케팅과 12학번" },
  {
    date: "2013. 03 ~ 2014. 12",
    description: "육군훈련소 헌병대 입대 만기전역",
  },
  {
    date: "2016. 11 ~ 2018. 04",
    description:
      "위즈도메인 입사 (특허검색솔루션사이트 웹퍼블리싱 및 프론트개발 담당)",
  },
  {
    date: "2018. 05 ~ 2018. 10",
    description: "그린컴퓨터학원 JAVA 양성반 교육과정 수료",
  },
  {
    date: "2018. 11 ~ 2019. 08",
    description: "누리콘 입사 (C#을 사용하여 영상표출제어시스템 개발담당)",
  },
  {
    date: "2019. 09 ~ 2020. 05",
    description: "경기방송 입사 (웹퍼블리싱 및 프론트개발 담당)",
  },
  {
    date: "2020. 11 ~ 2022. 12",
    description: "위즈클라쓰 입사 (웹퍼블리싱 및 프론트개발 담당)",
  },
];
export default function TimeLine(props) {
  const classes = useStyles();

  return (
    <Timeline className={classes.root} sx={{ padding: 0 }}>
      {timeLineData.map((data, index) => {
        return (
          <TimelineItem
            data-aos="fade-bottom"
            data-aos-duration="1000"
            key={index}
          >
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
              fontSize="0.7rem"
            >
              {data.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <SchoolIcon />
              </TimelineDot>
              {index != 6 ? <TimelineConnector /> : ""}
            </TimelineSeparator>
            <TimelineContent sx={{ m: "auto 0", lineHeight: "10px" }}>
              <Typography
                variant="h6"
                component="span"
                sx={{ fontSize: "0.7rem", lineHeight: "15px" }}
              >
                {data.description}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
