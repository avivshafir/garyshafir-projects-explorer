import React, { useState } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import getProjectsList from "./projects_list";

import { css } from "emotion";

const styles = {
  tile: css`
    &:hover {
      cursor: pointer;
      img {
        transition: 0.5s ease all;
        transform: scale(2);
      }
    }
  `
};

const ProjectsList = ({ setSelectedProjectIndex }) => {
  return (
    <div
      className={css`
        flex: 1;
      `}
    >
      <GridList cellHeight={180} cols={1}>
        {getProjectsList().map((project, index) => (
          <GridListTile
            key={project.img}
            classes={{ tile: styles.tile }}
            onClick={() => setSelectedProjectIndex(index)}
          >
            <img src={project.img} alt={project.title} />
            <GridListTileBar
              title={project.title}
              subtitle={<span>{project.author}</span>}
              actionIcon={
                <IconButton>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default ProjectsList;
