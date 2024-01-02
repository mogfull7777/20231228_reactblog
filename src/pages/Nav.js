import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./nav.css";

function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const navi = useNavigate();
  // 각 페이지로 이동하는 버튼 생성
  // 1. 글쓰기 페이지로 이동
  // 2. 리스트 페이지로 이동

  const moveWrite = () => {
    setClick();
  };

  return (
    <div className="Nav">
      <h3 className="title">Free Notion</h3>
      <div className="btnBox">
        <button className="writeBtn" onClick={() => navi("/write")}>
          새 글 쓰기
        </button>
        <button className="boardBtn" onClick={() => navi("/")}>
          글 목록
        </button>
      </div>
    </div>
  );
}

export default Nav;
