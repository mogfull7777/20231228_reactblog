import React, { useState } from "react";
import "./write.css";

function Write() {
  // 내용 props로 main 으로 전달.

  const [makeContents, setMakeContents] = useState({
    title: "",
    contents: "",
  });

  const onChangeContents = (e) => {
    e.preventDefault();
    setMakeContents({
      ...makeContents,
      [e.target.name]: e.target.value,
    });
  };

  const onClickContents = () => {
    const contentsIndex = {
      ...makeContents,
    };
    console.log("해당 내용", contentsIndex);
  };

  return (
    <div>
      <div className="writeZone">
        <div className="titleZone">
          <div className="titleSpace">
            <p>제목</p>
            <span></span>
          </div>

          <input
            className="titleInput"
            id="title"
            name="title"
            value={makeContents.title}
            onChange={onChangeContents}
          />
        </div>
        <div className="detailZone">
          <textarea
            className="detailInput"
            id="contents"
            name="contents"
            value={makeContents.contents}
            onChange={onChangeContents}
          />
        </div>
      </div>
      <button className="uploadBtn" onClick={onClickContents}>
        UPLOAD
      </button>
    </div>
  );
}

export default Write;

// Invalid value for prop `value` on <input> tag.
// You provided a `value` prop to a form field without an `onChange` handler.
