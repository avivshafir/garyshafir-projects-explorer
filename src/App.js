import React, { Component, useState } from "react";
import ProjectsList from "./ProjectsList";
import Map from "./Map";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const containerStyles = css`
  display: flex;
`;

const App = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  console.log(selectedProjectIndex);
  return (
    <div css={containerStyles}>
      <ProjectsList
        selectedProjectIndex={selectedProjectIndex}
        setSelectedProjectIndex={setSelectedProjectIndex}
      />
      <Map />
    </div>
  );
};

export default App;
