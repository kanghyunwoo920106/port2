import React from "react";
import Typed from "react-typed";

const contactText = [
  "안녕하세요! 프론트엔드 개발자 강현우입니다. 끊임없이 직장생활을 하며 최신기술을 적용하며 습득하며, 이를 통해 웹 개발 업무 프로세스에 전반적인 이해력을 습득하였습니다. 개발을 진행하면서 유저의 입장으로서 어떤 부분이 개선 되었으면 더 편할 지 늘 생각하며, 유저의 관점을 고안한 개발을 진행해왔습니다. 물론 모든 분야를 다 알면 최고이겠지만 현재는 하나의 기술이라도 완벽하게 내것으로 만들자 라는 생각을 하고있는 개발자입니다. 이런 저의 성장가능성을 믿고 이끌어줄 회사를 찾고 있습니다.",
];

export default function Contact(props) {
  return (
    <div>
      <Typed
        strings={contactText}
        typeSpeed={40}
        backSpeed={50}
        attr="placeholder"
        smartBackspace
      >
        <textarea
          row="6"
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            width: "100%",
            textAlign: "left",
            height: "250px",
            fontSize: "1rem",
          }}
        />
      </Typed>
    </div>
  );
}
