import React from "react";
import { Loader } from "@googlemaps/js-api-loader";
import googleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";
import useStyles from "./style";

import GoogleMapReact from "google-map-react";
const api_url = "AIzaSyAh_644EfIuOvtLq-h-EwkIbMgYKKb6O4Y";

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");
  return (
    // Important! Always set the container height explicitly

    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCjngiEr-BT84j7LE_9ttatz8Z7tg1vrgY" }}
        //"AIzaSyAh_644EfIuOvtLq-h-EwkIbMgYKKb6O4Y"

        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

/*  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");
  const coordinates = { lat: 0, lng: 0 };
  return (
    <div className={classes.mapContainer}>
      <googleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAh_644EfIuOvtLq-h-EwkIbMgYKKb6O4Y" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></googleMapReact>
    </div>
  );
};
*/

export default Map;
