import { Route, Routes, Navigate } from "react-router-dom";
import { NavBar } from "../../utils/components/NavBar/NavBar.js";
import "./HomePage.css";
import { ContentBody } from "./ContentBody/ContentBody.js";
import { FullScreenVideo } from "./ContentBody/FullScreenVideo/FullScreenVideo.js";

export function HomePage() {
  let routes;
  routes = (
    <Routes>
      <Route path="/*" element={<ContentBody></ContentBody>} />
    </Routes>
  );

  return (
    <div className="home-page">
      <NavBar />
      <div className="content-body">{routes}</div>
    </div>
  );
}
