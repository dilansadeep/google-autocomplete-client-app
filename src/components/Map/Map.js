import React, { memo } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import Reusable from "../";
import "./Map.scss";

const Map = memo((props) => {
  const { markerPoints, center } = props;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const centerLocation = useMemo(() => center, [center]);

  return (
    <>
      {!isLoaded ? (
        <Reusable.Spinner />
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={centerLocation}
          zoom={10}
        >
          {markerPoints?.map(({ placeId, geoCodes}) => (
            <MarkerF key={placeId} position={geoCodes} />
          ))}
        </GoogleMap>
      )}
    </>
  );
});

export default Map;
