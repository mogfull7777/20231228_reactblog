import React, { useState } from "react";
import "./write.css";

function Write() {
  // 내용 콘솔에 띄우기

  const [makeTitle, setMakeTitle] = useState("");
  const [makeContents, setMakeContents] = useState("");

  return (
    <div>
      <div className="writeZone">
        <div className="titleZone">
          <div className="titleSpace">
            <p>제목</p>
            <span></span>
          </div>
          <input className="titleInput" />
        </div>
        <div className="detailZone">
          <textarea className="detailInput" />
        </div>
      </div>
      <button className="uploadBtn">UPLOAD</button>
    </div>
  );
}

export default Write;
