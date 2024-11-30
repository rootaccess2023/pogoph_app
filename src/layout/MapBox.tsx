import { Map, MapRef } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Details, MarkerList, PogoList, SearchBar } from "../components";
import { useMenuStore, usePogoStore, useViewStore } from "../stores";
import { useEffect, useRef } from "react";

export function MapBox() {
  const zoom = useViewStore((state) => state.zoom);
  const pitch = useViewStore((state) => state.pitch);
  const selectedPogo = usePogoStore((state) => state.selectedPogo);
  const menuOpen = useMenuStore((state) => state.menuOpen);
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoicG9sb3JldmlsbzE5IiwiYSI6ImNtM2xydzVyZTByZ2Qyc3BlZ2gwaGcwZnEifQ.pQZoqD9Md_xq2JAlYZzoLw";
  const mapRef = useRef<MapRef>(null);

  useEffect(() => {
    if (selectedPogo && mapRef.current) {
      const map = mapRef.current.getMap();
      map.flyTo({
        center: [selectedPogo.longitude, selectedPogo.latitude],
        zoom: zoom,
        pitch: pitch,
        speed: 1.2,
      });
    }
  }, [selectedPogo]);

  return (
    <div className="relative h-screen">
      <Map
        ref={mapRef}
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
      <div className="z-50 absolute top-4 left-4 w-full flex justify-start">
        <SearchBar />
        <PogoList />
      </div>
      <div
        className={`${
          menuOpen === true ? "block" : "hidden"
        } absolute z-10 top-0 left-0 w-[408px] h-screen bg-white`}
      >
        <Details />
      </div>
    </div>
  );
}
