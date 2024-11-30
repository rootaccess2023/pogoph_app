import { usePogoStore } from "../../stores";
import pogoMarker from "../../assets/pogo_marker.svg";
import { Marker } from "react-map-gl";

export function MarkerList() {
  const pogo = usePogoStore((state) => state.pogo);
  return (
    <>
      {pogo.map((pogo, index) => {
        return (
          <Marker
            key={index}
            longitude={pogo.longitude}
            latitude={pogo.latitude}
          >
            <img className="size-16" src={pogoMarker} alt="" />
          </Marker>
        );
      })}
    </>
  );
}
