import React from "react";
import Write from "./Write";
import listdatajson from "../json/listdata.json";

function Main() {
  // props 받아와서 띄우기.
  // 띄운 내용 저장. (JSON 활용)

  let datas = listdatajson.listdata;

  console.log("json data", datas[0].title);
  // 왜 datas(0).title을 하면 오류가 날까??

  return (
    <div>
      <ul>
        {datas.map((data) => {
          <li key={data}>
            <h3>제목 : {datas[0].title}</h3>
            <p>내용 : {datas[0].content}</p>
          </li>;
        })}
      </ul>
      <h2>Main</h2>
    </div>
  );
}

export default Main;
