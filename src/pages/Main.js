import React, { useEffect, useRef, useState } from "react";
import { FullPage, Slide } from "react-full-page";
import Typed from "react-typed";
import { makeStyles } from "@mui/styles";
import Skill from "../components/Skill";
import TimeLine from "../components/TimeLine";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Typography from "@mui/material/Typography";
import Project from "../components/Project";

const useStyles = makeStyles(() => ({
  body: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    // alignItems: "center",
  },
  arrowButton: {
    // transform: "rotate(0deg)",
    // transition: "transform 0.2s ease",
    position: "relative", // position 설정
    overflow: "visible", // overflow 설정
    // flexFlow: "column",
  },
  arrowIcon: {
    position: "absolute",
    top: 0, // 기본 위치 설정
    left: 0,
    animation: "$bounce 1s ease-in-out infinite", // 애니메이션 설정
  },
  arrowButtonExpanded: {
    transform: "rotate(180deg)",
  },
  "@keyframes bounce": {
    // 애니메이션 키프레임 정의
    "0%, 100%": {
      top: 0,
    },
    "50%": {
      top: "-10px",
    },
  },
  reply: {
    textAlign: "center",
  },
}));

export default function Main(props) {
  const { fullPageRef, value, beforeChange } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const classes = useStyles();
  const typedRef = useRef(null);
  const [activeTyped, setActiveTyped] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
    setActiveTyped(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTyped(false);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [handleExpandClick]);

  const moveDistance = 10;
  const moveDuration = 1000;

  // 아이콘 움직이는 함수
  const animateArrowIcon = () => {
    const arrowIconElement = document.getElementById("arrow-icon");
    if (arrowIconElement) {
      const top = parseInt(arrowIconElement.style.top || 0, 10);
      arrowIconElement.style.top = `${top === 0 ? moveDistance : 0}px`;
    }
  };

  // 일정 시간마다 아이콘 위치 변경
  setInterval(animateArrowIcon, moveDuration);

  return (
    <FullPage ref={fullPageRef} beforeChange={beforeChange}>
      <Slide value="1" className={classes.body}>
        <Typed
          strings={[
            "안녕하세요.",
            "최신 트렌드를 늘 감지하며",
            "진취적으로 일을 해 나가는",
            "프론트엔드 개발자 강현우 입니다.",
          ]}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
          smartBackspace
          showCursor={true}
          cursorChar="|"
          ref={typedRef}
          loop={activeTyped && true}
        >
          <input
            type="text"
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              width: "100%",
              fontSize: "1.6rem",
              textAlign: "center",
            }}
          />
        </Typed>

        <IconButton
          aria-label="delete"
          className={`${classes.arrowButton} ${
            isExpanded ? classes.arrowButtonExpanded : ""
          }`}
          onClick={handleExpandClick}
        >
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            className={classes.reply}
          >
            다시보기
          </Typography>
          <KeyboardDoubleArrowDownIcon id="arrow-icon" />
        </IconButton>
      </Slide>
      <Slide value="2" className={classes.body}>
        <Skill />
      </Slide>
      <Slide value="3" className={classes.body}>
        <TimeLine />
      </Slide>
      <Slide value="4" className={classes.body}>
        <Project />
      </Slide>
      <Slide value="5" className={classes.body}>
        5
      </Slide>
    </FullPage>
  );
}
