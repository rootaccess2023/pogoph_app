import { Map } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export function MapBox() {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoicG9sb3JldmlsbzE5IiwiYSI6ImNtM2xydzVyZTByZ2Qyc3BlZ2gwaGcwZnEifQ.pQZoqD9Md_xq2JAlYZzoLw";
  return (
    <div className="h-screen">
      <Map
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          longitude: 121.7744,
          latitude: 12.8797,
          zoom: 5,
          pitch: 0,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/polorevilo19/cm3qjcahc003s01r23ylb492w"
        minZoom={5}
      ></Map>
    </div>
  );
}
