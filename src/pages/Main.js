import React from "react";
import { FullPage, Slide } from "react-full-page";
import Typed from "react-typed";
import { makeStyles } from "@mui/styles";
import Skill from "../components/Skill";
import TimeLine from "../components/TimeLine";

const useStyles = makeStyles(() => ({
  body: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Main(props) {
  const { fullPageRef, value, afterChange } = props;
  const classes = useStyles();

  return (
    <FullPage ref={fullPageRef} afterChange={afterChange}>
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
          showCursor={true}
          loop
        >
          <input
            type="text"
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              width: "100%",
              fontSize: "2rem",
              textAlign: "center",
            }}
          />
        </Typed>
      </Slide>
      <Slide value="2" className={classes.body}>
        <Skill />
      </Slide>
      <Slide value="3" className={classes.body}>
        <TimeLine />
      </Slide>
      <Slide value="4" className={classes.body}>
        4
      </Slide>
      <Slide value="5" className={classes.body}>
        5
      </Slide>
    </FullPage>
  );
}
