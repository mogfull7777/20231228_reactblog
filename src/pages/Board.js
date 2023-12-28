import React from "react";
import { Route, Routes } from "react-router-dom";
import Review from "./Review";
import ReviewList from "./ReviewList";

function Board() {
  return (
    <div>
      <h2>Board</h2>
      <Routes>
        <Route index element={<Review />}></Route>
      </Routes>
      <Routes>
        <Route index element={<ReviewList />}></Route>
      </Routes>
    </div>
  );
}

export default Board;
