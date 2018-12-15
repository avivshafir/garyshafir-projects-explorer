import React from "react";
import GoogleMap from "google-map-react";

import getProjectsList from "./projects_list";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import MapMarker from "./MapMarker";

const Map = () => {
  return (
    <div
      css={css`
        flex: 1 1 30%;
      `}
    >
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMap
          center={[32.1673107, 34.8430355]}
          zoom={13}
          bootstrapURLKeys={{ key: "AIzaSyA87S5KG4Pjd5w7fbeILEYwHpCV0L4Az-A" }}
        >
          {getProjectsList().map(project => (
            <MapMarker
              lat={project.location.lat}
              lng={project.location.lng}
              text={project.title} /* Kreyser Avrora */
            />
          ))}
        </GoogleMap>
      </div>
    </div>
  );
};

export default Map;
