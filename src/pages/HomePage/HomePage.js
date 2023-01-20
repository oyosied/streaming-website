import { NavBar } from "../../utils/components/NavBar/NavBar.js";
import "./HomePage.css";
import { ContentBody } from "./ContentBody/ContentBody.js";
export function HomePage() {
  return (
    <div className="home-page">
      <NavBar />
      <div className="content-body">
        <ContentBody></ContentBody>
      </div>
    </div>
  );
}
