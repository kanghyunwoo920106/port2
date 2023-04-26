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
import { useLocation } from "react-router-dom";

const projectData = [
  {
    id: 0,
    title: "reddit 커뮤니티 사이트",
    description: "reddit 커뮤니티를 클론코딩하여 개발한 사이트입니다.",
    imagePath: "http://xkaizew.hgodo.com/port/main_bg8.jpg",
    url: "http://http://ec2-15-164-163-51.ap-northeast-2.compute.amazonaws.com",
    devEnv: "CRA, Node Express, AWS, Git",
    useSkill:
      "Next.js, Typescript, React, Postgres, Typeorm, Tailwind, Redux, Styled-Components, Jwt",
    avatar: [
      "로그인 및 회원가입 jwt 사용하여 구현",
      "게시글등록 formdata를 이용하여 개인 api 서버에 axios로 데이터요청하여 받은 데이터 바인딩",
      "개인 다이어리 data-fns를 이용하여 등록,수정,삭제 기능 구현",
      "카카오맵 api를 사용해 포스트 등록때 장소검색 기능 개발",
    ],
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
    github: "https://github.com/kanghyunwoo920106/community",
  },
  {
    id: 1,
    title: "나만의 추억공유",
    description: "나만의 추억과 일상을 포스트하는 사이트",
    imagePath: "http://xkaizew.hgodo.com/port/main_bg6.jpg",
    url: "http://hyunwooport.cafe24app.com/",
    devEnv: "CRA, Node Express,MYSQL, AWS, Cafe24, FileZila, Git",
    useSkill: "React,Redux, Styled-Components, Material Ui, Jwt",
    avatar: [
      "로그인 및 회원가입 jwt 사용하여 구현",
      "게시글등록 formdata를 이용하여 개인 api 서버에 axios로 데이터요청하여 받은 데이터 바인딩",
      "개인 다이어리 data-fns를 이용하여 등록,수정,삭제 기능 구현",
      "카카오맵 api를 사용해 포스트 등록때 장소검색 기능 개발",
    ],
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
    github: "https://github.com/kanghyunwoo920106/cpstory/tree/master",
  },
  {
    id: 2,
    title: "강현우 포트폴리오 사이트",
    description: "프론트개발자 강현우를 소개하는 리엑트 포트폴리오 사이트",
    imagePath: "http://xkaizew.hgodo.com/port/main_bg7.png",
    url: "http://kanghyunwoo920106.github.io/port2",
    devEnv: "CRA, Node, MYSQL",
    useSkill:
      "HTML, CSS, SCSS, JAVASCRIPT, React, Styled-Components, Material Ui",
    avatar: [
      "project json 데이터 가져와 메인페이지 바인딩",
      "Material Ui Typed 컴포넌트 이용하여 타이핑 효과 구현",
      "aos js 플러그인을 이용하여 페이지 스크롤시 효과 구현",
      "react-swiper 사용하여 프로젝트 데이터 슬라이드 구현",
    ],
    detailImagePath: [
      "http://xkaizew.hgodo.com/port/port/20230414_111345_1.png",
      "http://xkaizew.hgodo.com/port/port/20230414_111345_2.png",
      "http://xkaizew.hgodo.com/port/port/20230414_111345_3.png",
      "http://xkaizew.hgodo.com/port/port/20230414_111345_4.png",
      "http://xkaizew.hgodo.com/port/port/20230414_111345_5.png",
      "http://xkaizew.hgodo.com/port/port/20230414_111345_6.png",
      "http://xkaizew.hgodo.com/port/port/20230414_111345_7.png",
      "http://xkaizew.hgodo.com/port/port/20230414_111345_8.png",
    ],
    github: "https://github.com/kanghyunwoo920106/port2",
  },
  {
    id: 3,
    title: "LIVIT",
    description:
      "지역 + 테마 두 가지만 선택하면 내가 원하는 집 영상이 실시간으로 업데이트되어 보여지는 영상 플랫폼",
    imagePath: "http://xkaizew.hgodo.com/port/main_bg4.jpg",
    url: "https://play.google.com/store/apps/details?id=com.logcompany.livit",
    devEnv: "그누보드, Apache, MYSQL",
    useSkill: "HTML, CSS, SCSS, JAVASCRIPT, JQUERY, PHP, BOOTSTRAP",
    avatar: [
      "유튜브 크롤링 데이터 api로 받아와 대시보드에 바인딩",
      "영상 크게보기, 작게보기 필터링 기능 개발",
      "svg 사용하여 대한민국 행정구역 지도마다 클릭 이벤트 구현 및 데이터 추출",
      "최근 본 영상 localstorage를 이용하여 기능 개발",
    ],
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
    github: "",
  },
  {
    id: 4,
    title: "ESG CHAIN",
    description: "ESGC 코인을 이용한 스테이킹 및 지갑 서비스",
    imagePath: "http://xkaizew.hgodo.com/port/main_bg5.png",
    url: "https://play.google.com/store/apps/details?id=com.wallet.esg",
    devEnv: "그누보드, Apache, MYSQL",
    useSkill: "HTML, CSS, SCSS, JAVASCRIPT, JQUERY, PHP, BOOTSTRAP",
    avatar: [
      "로그인 및 회원가입 기능 개발",
      "swiper를 이용하여 메인 대시보드 페이지 슬라이드 구현",
      "Bootstrap을 사용하여 반응형 웹으로 제작",
      "게시글 작성, 수정 페이지 개발",
    ],
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
    github: "",
  },
  {
    id: 5,
    title: "원클릭 리딩",
    description: "실시간 주식종목 추천 서비스 사이트 ",
    imagePath: "http://xkaizew.hgodo.com/port/main_bg1.png",
    url: "https://oneclick-stock.com/page.php?id=dashboard",
    devEnv: "그누보드, Apache, MYSQL",
    useSkill: "HTML, CSS, SCSS, JAVASCRIPT, JQUERY, PHP, BOOTSTRAP",
    avatar: [
      "로그인 및 회원가입 기능 개발",
      "그누보드를 이용한 게시판 연동",
      "crud를 이용한 데이터 바인딩 작업",
      "추천종목 적중률에 따라 적중 미적중 표시",
    ],
    detailImagePath: [
      "http://xkaizew.hgodo.com/port/oneclick/20230413_112130_1.png",
      "http://xkaizew.hgodo.com/port/oneclick/20230413_112130_2.png",
      "http://xkaizew.hgodo.com/port/oneclick/20230413_112130_3.png",
      "http://xkaizew.hgodo.com/port/oneclick/20230413_112130_4.png",
      "http://xkaizew.hgodo.com/port/oneclick/20230413_112130_5.png",
      "http://xkaizew.hgodo.com/port/oneclick/20230413_112130_6.png",
      "http://xkaizew.hgodo.com/port/oneclick/20230413_112130_7.png",
      "http://xkaizew.hgodo.com/port/oneclick/20230413_112130_8.png",
      "http://xkaizew.hgodo.com/port/oneclick/20230413_112130_9.png",
      "http://xkaizew.hgodo.com/port/oneclick/20230413_112130_10.png",
      "http://xkaizew.hgodo.com/port/oneclick/20230413_112130_11.png",
      "http://xkaizew.hgodo.com/port/oneclick/20230413_112130_12.png",
      "http://xkaizew.hgodo.com/port/oneclick/20230413_112130_13.png",
      "http://xkaizew.hgodo.com/port/oneclick/20230413_112130_14.png",
      "http://xkaizew.hgodo.com/port/oneclick/20230413_112130_15.png",
      "http://xkaizew.hgodo.com/port/oneclick/20230413_112130_16.png",
      "http://xkaizew.hgodo.com/port/oneclick/20230413_112130_17.png",
      "http://xkaizew.hgodo.com/port/oneclick/20230413_112130_18.png",
      "http://xkaizew.hgodo.com/port/oneclick/20230413_112130_19.png",
      "http://xkaizew.hgodo.com/port/oneclick/20230413_112130_20.png",
      "http://xkaizew.hgodo.com/port/oneclick/20230413_112130_21.png",
    ],
    github: "",
  },
  {
    id: 6,
    title: "MEBION",
    description: "MEBION 회사 랜딩 페이지",
    imagePath: "http://xkaizew.hgodo.com/port/main_bg2.png",
    devEnv: "그누보드, Apache, MYSQL, Git",
    useSkill: "HTML, CSS, SCSS, JAVASCRIPT, JQUERY, PHP, BOOTSTRAP",
    avatar: [
      "Fullpage js 이용하여 사이트 제작",
      "svg 사용하여 대한민국 지도 구현 및 이벤트 적용",
      "bootstrap 이용하여 반응형 웹앱으로 개발",
      "",
    ],
    detailImagePath: [
      "http://xkaizew.hgodo.com/port/mebion/20230413_113036_1.png",
      "http://xkaizew.hgodo.com/port/mebion/20230413_113036_2.png",
      "http://xkaizew.hgodo.com/port/mebion/20230413_113036_3.png",
      "http://xkaizew.hgodo.com/port/mebion/20230413_113036_4.png",
      "http://xkaizew.hgodo.com/port/mebion/20230413_113036_5.png",
      "http://xkaizew.hgodo.com/port/mebion/20230413_113036_6.png",
      "http://xkaizew.hgodo.com/port/mebion/20230413_113036_7.png",
      "http://xkaizew.hgodo.com/port/mebion/20230413_113036_8.png",
      "http://xkaizew.hgodo.com/port/mebion/20230413_113036_9.png",
      "http://xkaizew.hgodo.com/port/mebion/20230413_113036_10.png",
      "http://xkaizew.hgodo.com/port/mebion/20230413_113036_11.png",
      "http://xkaizew.hgodo.com/port/mebion/20230413_113036_12.png",
    ],
    url: "",
    github: "https://github.com/kanghyunwoo920106/mebion",
  },
];

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
      mode: "dark",
    },
  });

  const fullPageRef = useRef(null);
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state);

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
      <ScrollToTop />
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
