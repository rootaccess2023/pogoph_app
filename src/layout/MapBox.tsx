import { Map } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MarkerList, PogoList, SearchBar } from "../components";
import { useViewStore } from "../stores";

export function MapBox() {
  const zoom = useViewStore((state) => state.zoom);
  const pitch = useViewStore((state) => state.pitch);
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoicG9sb3JldmlsbzE5IiwiYSI6ImNtM2xydzVyZTByZ2Qyc3BlZ2gwaGcwZnEifQ.pQZoqD9Md_xq2JAlYZzoLw";
  return (
    <div className="relative h-screen">
      <Map
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          longitude: 121.7744,
          latitude: 12.8797,
          zoom: zoom,
          pitch: pitch,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/polorevilo19/cm3qjcahc003s01r23ylb492w"
        minZoom={5}
      >
        <MarkerList />
      </Map>
      <div className="absolute top-4 left-4 w-full flex justify-start">
        <SearchBar />
        <PogoList />
      </div>
    </div>
  );
}
