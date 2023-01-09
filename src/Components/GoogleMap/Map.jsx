import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCzcEM8z2_imGO8TMRmJEpDEahvZ7KYY_U",
  });
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="">
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Map;
