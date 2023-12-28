import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Write from "./pages/Write";
import Board from "./pages/Board";
import Review from "./pages/Review";
import ReviewList from "./pages/ReviewList";

const Layout = () => {
  return (
    <div>
      <h1>블로그 만들어 보기.</h1>

      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}></Route>
          <Route path="/write" element={<Write />}></Route>
          <Route path="/board" element={<Board />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// 1. 필요한 기능 (기획)
// 2. 기능에 따른 폴더 구성.
// 3. 어떤 순서 작업 하는지 적기. -> 개인톡으로 전달.

// < 필요한 기능 >
// 1. 글 작성 페이지 (title, detail).
// 2. 입력한 글을 저장 (localstorage?? mongoDB??).
// 3. 작성된 글 보여주는 리스트 페이지.
// 4. 리스트 페이지에서 표시된 title 클릭 시 작성 된 글 내용을 보여주는 페이지.
// 5. 4번 페이지에서 댓글 달 수 있는 기능 추가.
// (댓글은 어떻게 저장은 mongoDB에서 글작성 component, 댓글 component 따로 관리??)

// < 기능에 따른 폴더 구성 >
// 1. api
//   - axios.js
//   - reqest.js
//   ===> JOSN 플레이스 홀더 이용해도됨.

// 2. pages(각 js의 css는 필수이므로 작성 X)
//   - list.js(글 리스트를 나열하는 페이지) ---> main.js
//   - board.js (리스트에서 클릭한 글을 보여주는 모달창.)
//   - write.js (글 작성 페이지)
//   - review.js (댓글 작성 페이지) ---> board.js 에 호출.
//   - reviewList.js (해당 글에 저장된 댓글 관리 페이지.) ---> board.js 에 호출.

// < 작업순서 >
// 1. write.js 페이지 작업.
// 2. list.js를 임의로 만들어 저장되는지 확인.
// 3. list.js 레이아웃 설정. + list 삭제 기능 추가.
// 4. list 클릭시 모달창으로 borad.js 띄우는 페이지 작업. + 모달창 닫기 추가.
// 5. review.js, reviewList.js 페이지 작업. + reviewList 삭제 기능 추가.

// ++ 공부 관련 계획도 작성.
