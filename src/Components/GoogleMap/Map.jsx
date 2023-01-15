import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY,
  });
  console.log(process.env.GOOGLE_MAP_API_KEY);
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="">
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Map;
