import { Pogo, useMenuStore, usePogoStore, useViewStore } from "../../stores";
import pogoMarker from "../../assets/pogo_marker.svg";
import pogoMarkerSelected from "../../assets/pogo_marker_selected.gif";
import { Marker } from "react-map-gl";

export function MarkerList() {
  const pogo = usePogoStore((state) => state.pogo);
  const setSelectedPogo = usePogoStore((state) => state.setSelectedPogo);
  const setZoom = useViewStore((state) => state.setZoom);
  const setPitch = useViewStore((state) => state.setPitch);
  const setMenuOpen = useMenuStore((state) => state.setMenuOpen);
  const selectedPogo = usePogoStore((state) => state.selectedPogo);

  const handleMarkerClick = (pogo: Pogo) => {
    setPitch(60);
    setZoom(18);
    setSelectedPogo({
      name: pogo.name,
      latitude: pogo.latitude,
      longitude: pogo.longitude,
      description: pogo.description,
      image: pogo.image,
      address: pogo.address,
      years: pogo.years,
      region: pogo.region,
    });
    setMenuOpen();
  };
  return (
    <>
      {pogo.map((pogo, index) => {
        const isSelected =
          selectedPogo?.latitude === pogo.latitude &&
          selectedPogo?.longitude === pogo.longitude;
        return (
          <Marker
            key={index}
            longitude={pogo.longitude}
            latitude={pogo.latitude}
          >
            <img
              onClick={() => handleMarkerClick(pogo)}
              className="size-16"
              src={isSelected ? pogoMarkerSelected : pogoMarker}
              alt=""
            />
          </Marker>
        );
      })}
    </>
  );
}
