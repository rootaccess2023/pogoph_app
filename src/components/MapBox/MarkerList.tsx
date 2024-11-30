import { Pogo, usePogoStore, useViewStore } from "../../stores";
import pogoMarker from "../../assets/pogo_marker.svg";
import { Marker } from "react-map-gl";

export function MarkerList() {
  const pogo = usePogoStore((state) => state.pogo);
  const setSelectedPogo = usePogoStore((state) => state.setSelectedPogo);
  const setZoom = useViewStore((state) => state.setZoom);
  const setPitch = useViewStore((state) => state.setPitch);

  const handleMarkerClick = (pogo: Pogo) => {
    setPitch(60);
    setZoom(18);
    setSelectedPogo({
      latitude: pogo.latitude,
      longitude: pogo.longitude,
    });
  };
  return (
    <>
      {pogo.map((pogo, index) => {
        return (
          <Marker
            key={index}
            longitude={pogo.longitude}
            latitude={pogo.latitude}
          >
            <img
              onClick={() => handleMarkerClick(pogo)}
              className="size-16"
              src={pogoMarker}
              alt=""
            />
          </Marker>
        );
      })}
    </>
  );
}
