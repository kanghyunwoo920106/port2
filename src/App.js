import { useEffect, useRef, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./pages/Header";
import Main from "./pages/Main";
import { FullPage, Slide } from "react-full-page";
import { setValue, setProgress } from "./store/store.js";
import Typed from "react-typed";
import blue from "@mui/material/colors/blue";
import red from "@mui/material/colors/red";
import green from "@mui/material/colors/green";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AOS from "aos";
import PortDetail from "./pages/PortDetail";
import { Route, Routes } from "react-router-dom";

const projectData = [
  {
    id: 0,
    title: "나만의 추억공유",
    description: "나만의 추억과 일상을 포스트하는 사이트",
    imagePath: "http://xkaizew.hgodo.com/port/main_bg6.jpg",
    url: "http://hyunwooport.cafe24app.com/",
    detailImagePath: [
      "http://xkaizew.hgodo.com/port/cpstory/20230412_144715.png",
      "http://xkaizew.hgodo.com/port/cpstory/20230412_144752.png",
      "http://xkaizew.hgodo.com/port/cpstory/20230412_144921.png",
      "http://xkaizew.hgodo.com/port/cpstory/20230412_144955.png",
      "http://xkaizew.hgodo.com/port/cpstory/20230412_145011.png",
      "http://xkaizew.hgodo.com/port/cpstory/20230412_145109.png",
      "http://xkaizew.hgodo.com/port/cpstory/20230412_145130.png",
      "http://xkaizew.hgodo.com/port/cpstory/20230412_145159.png",
      "http://xkaizew.hgodo.com/port/cpstory/20230412_145242.png",
      "http://xkaizew.hgodo.com/port/cpstory/20230412_145257.png",
      "http://xkaizew.hgodo.com/port/cpstory/20230412_145318.png",
    ],
  },
  {
    id: 1,
    title: "LIVIT",
    description:
      "지역 + 테마 두 가지만 선택하면 내가 원하는 집 영상이 실시간으로 업데이트되어 보여지는 영상 플랫폼",
    imagePath: "http://xkaizew.hgodo.com/port/main_bg4.jpg",
    url: "",
    detailImagePath: [
      "http://xkaizew.hgodo.com/port/livit/1_1카테고리.jpg",
      "http://xkaizew.hgodo.com/port/livit/1_2카테고리.jpg",
      "http://xkaizew.hgodo.com/port/livit/1_3카테고리_로그인팝업.jpg",
      "http://xkaizew.hgodo.com/port/livit/2_0로그인.jpg",
      "http://xkaizew.hgodo.com/port/livit/2_1회원가입.jpg",
      "http://xkaizew.hgodo.com/port/livit/2_2회원가입.jpg",
      "http://xkaizew.hgodo.com/port/livit/2_3회원가입.jpg",
      "http://xkaizew.hgodo.com/port/livit/2_4회원가입.jpg",
      "http://xkaizew.hgodo.com/port/livit/3_매물상세페이지.jpg",
      "http://xkaizew.hgodo.com/port/livit/4_영상제작의뢰.jpg",
      "http://xkaizew.hgodo.com/port/livit/5_2회원정보변경.jpg.jpg",
      "http://xkaizew.hgodo.com/port/livit/5_3회원정보변경.jpg",
      "http://xkaizew.hgodo.com/port/livit/5_5이메일-문자-수신동의.jpg",
      "http://xkaizew.hgodo.com/port/livit/5_7회원탈퇴.jpg",
      "http://xkaizew.hgodo.com/port/livit/5_8알림서비스관리.jpg",
      "http://xkaizew.hgodo.com/port/livit/5_9문의내역.jpg",
      "http://xkaizew.hgodo.com/port/livit/5_10영상제작의뢰현황.jpg",
      "http://xkaizew.hgodo.com/port/livit/5_10영상제작의뢰현황_없을때.jpg",
      "http://xkaizew.hgodo.com/port/livit/6_1faq.jpg",
      "http://xkaizew.hgodo.com/port/livit/6_3faq-검색결과없음.jpg",
      "http://xkaizew.hgodo.com/port/livit/6_4공지사항.jpg",
      "http://xkaizew.hgodo.com/port/livit/6_6문의하기.jpg",
      "http://xkaizew.hgodo.com/port/livit/8회원가입_유도팝업.jpg",
      "http://xkaizew.hgodo.com/port/livit/6_5공지사항_검색결과없음.jpg",
    ],
  },
  {
    id: 2,
    title: "ESG CHAIN",
    description: "ESGC 코인을 이용한 스테이킹 및 지갑 서비스",
    imagePath: "http://xkaizew.hgodo.com/port/main_bg5.png",
    url: "https://play.google.com/store/apps/details?id=com.wallet.esg",
    detailImagePath: [
      "http://xkaizew.hgodo.com/port/esg/0_0로그인.jpg",
      "http://xkaizew.hgodo.com/port/esg/0_01회원가입완료.jpg",
      "http://xkaizew.hgodo.com/port/esg/0_1아이디찾기.jpg",
      "http://xkaizew.hgodo.com/port/esg/0_2비밀번호찾기_팝업a.jpg",
      "http://xkaizew.hgodo.com/port/esg/1_0메뉴.jpg",
      "http://xkaizew.hgodo.com/port/esg/1_1대시보드_일반회원.jpg",
      "http://xkaizew.hgodo.com/port/esg/1_1대시보드_정회원.jpg",
      "http://xkaizew.hgodo.com/port/esg/1_1대시보드_정회원s.jpg",
      "http://xkaizew.hgodo.com/port/esg/1_2대시보드_상품권더보기.jpg",
      "http://xkaizew.hgodo.com/port/esg/1_3대시보드_내역x.jpg",
      "http://xkaizew.hgodo.com/port/esg/2_0입출금.jpg",
      "http://xkaizew.hgodo.com/port/esg/2_1입출금_ESGC입금.jpg",
      "http://xkaizew.hgodo.com/port/esg/2_2입출금_ESGC입금_팝업.jpg",
      "http://xkaizew.hgodo.com/port/esg/2_3입출금_ETH출금.jpg",
      "http://xkaizew.hgodo.com/port/esg/3_1스테이킹.jpg",
      "http://xkaizew.hgodo.com/port/esg/3_1스테이킹_참여완료.jpg",
      "http://xkaizew.hgodo.com/port/esg/3_1스테이킹kyc인증미등록-팝업.jpg",
      "http://xkaizew.hgodo.com/port/esg/3_2스테이킹신청.jpg",
      "http://xkaizew.hgodo.com/port/esg/3_3참여스테이킹상세.jpg",
      "http://xkaizew.hgodo.com/port/esg/4_1상품권구매.jpg",
      "http://xkaizew.hgodo.com/port/esg/4_2상품권구매_구매상세_이용안내.jpg",
      "http://xkaizew.hgodo.com/port/esg/4_4상품권구매완료_팝업.jpg",
      "http://xkaizew.hgodo.com/port/esg/4_6상품권구매_잔액부족팝업.jpg",
      "http://xkaizew.hgodo.com/port/esg/5_1개인정보수정_KYC인증정보등록.jpg",
      "http://xkaizew.hgodo.com/port/esg/6_1공지사항.jpg",
      "http://xkaizew.hgodo.com/port/esg/7_1문의_사용자.jpg",
    ],
  },
  {
    id: 3,
    title: "원클릭 리딩",
    description: "실시간 주식종목 추천 서비스 사이트 ",
    imagePath: "http://xkaizew.hgodo.com/port/main_bg1.png",
    url: "https://oneclick-stock.com/page.php?id=dashboard",
    detailImagePath: [
      "http://xkaizew.hgodo.com/port/1_1카테고리.jpg",
      "http://xkaizew.hgodo.com/port/1_2카테고리.jpg",
    ],
  },
  {
    id: 4,
    title: "MEBION",
    description: "MEBION 회사 랜딩 페이지",
    imagePath: "http://xkaizew.hgodo.com/port/main_bg2.png",
    detailImagePath: [
      "http://xkaizew.hgodo.com/port/1_1카테고리.jpg",
      "http://xkaizew.hgodo.com/port/1_2카테고리.jpg",
    ],
    url: "",
  },
];

export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Roboto",
      button: {
        textTransform: "none",
        fontWeight: "bold",
      },
    },
    palette: {
      // primary: red,
      // background: {
      //   paper: "#ff0000",
      // },
      mode: "dark",
    },
  });

  const fullPageRef = useRef(null);
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state);

  // const handleChange = (event, newValue) => {
  //   fullPageRef.current.scrollToSlide(newValue - 1);
  //   dispatch(setValue(newValue));
  //   console.log(newValue);
  // };

  useEffect(() => {
    AOS.init();
  });

  const handleChange = (event, newValue) => {
    fullPageRef.current.scrollToSlide(newValue - 1);
    dispatch(setValue(newValue));
  };

  const beforeChange = (e) => {
    AOS.refresh();
    dispatch(setValue((e.to + 1).toString()));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Header handleChange={handleChange} /> */}
      <Routes>
        <Route
          path="/"
          element={
            <Main
              fullPageRef={fullPageRef}
              beforeChange={beforeChange}
              projectData={projectData}
            />
          }
        ></Route>
        <Route
          path="/portdetail/:idx"
          element={<PortDetail projectData={projectData} />}
        ></Route>
      </Routes>
    </ThemeProvider>
  );
}
