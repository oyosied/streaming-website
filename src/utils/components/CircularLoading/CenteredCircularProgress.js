import React from "react";
import { CircularProgress } from "@material-ui/core";
import "./CenteredCircularProgress.css";

const CenteredCircularProgress = ({ children, ...rest }) => {
  return (
    <div className="centered-circular-progress-container">
      <CircularProgress {...rest}>{children}</CircularProgress>
    </div>
  );
};

export { CenteredCircularProgress };
