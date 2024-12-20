import { useEffect } from "react";
import { Pogo, useMenuStore, usePogoStore, useViewStore } from "../../stores";
import { MdShareLocation } from "react-icons/md";
import { Loader } from "./Loader";

export function PogoList() {
  const isOpen = useMenuStore((state) => state.isOpen);
  const year = usePogoStore((state) => state.year);
  const filteredPogo = usePogoStore((state) => state.filteredPogo);
  const setPogo = usePogoStore((state) => state.setPogo);
  const setZoom = useViewStore((state) => state.setZoom);
  const setPitch = useViewStore((state) => state.setPitch);
  const setFilteredPogo = usePogoStore((state) => state.setFilteredPogo);
  const setSelectedPogo = usePogoStore((state) => state.setSelectedPogo);
  const setMenuOpen = useMenuStore((state) => state.setMenuOpen);
  const setSideOpen = useMenuStore((state) => state.setSideOpen);

  const handleSelectedPogo = (pogo: Pogo) => {
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
    setPitch(60);
    setZoom(18);
    setMenuOpen();
    setSideOpen();
  };

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(
          `https://pogoph-api.onrender.com/locations?year=${year}`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();

        setPogo(data);
        setFilteredPogo(data);
      } catch (error) {
        console.error("Failed to fetch locations:", error);
        setPogo([]);
      }
    };

    fetchLocations();
  }, [year]);

  return (
    <div
      className={`absolute top-[52px] ${
        isOpen === true ? "block border-t" : "hidden"
      }`}
    >
      <ul className="h-[217px] w-[376px] bg-white rounded-bl-3xl rounded-br-3xl py-2 overflow-y-scroll">
        {filteredPogo.map((location, index) => (
          <li
            onClick={() => handleSelectedPogo(location)}
            key={index}
            className="flex items-center px-5 gap-5 hover:bg-mapsMenu-shadow cursor-pointer"
          >
            <MdShareLocation className="text-mapsMenu-tertiary size-[21px]" />
            <p className="py-3 text-[0.95rem] truncate">{location.name}</p>
          </li>
        ))}
        <Loader />
      </ul>
    </div>
  );
}
