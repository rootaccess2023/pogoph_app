import { useEffect } from "react";
import { useMenuStore, usePogoStore } from "../../stores";
import { MdShareLocation } from "react-icons/md";

export function PogoList() {
  const isOpen = useMenuStore((state) => state.isOpen);
  const year = usePogoStore((state) => state.year);
  const filteredPogo = usePogoStore((state) => state.filteredPogo);
  const setPogo = usePogoStore((state) => state.setPogo);
  const setFilteredPogo = usePogoStore((state) => state.setFilteredPogo);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/locations?year=${year}`
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
      <ul className="h-[290px] w-[376px] bg-white rounded-bl-3xl rounded-br-3xl py-2 overflow-y-scroll">
        {filteredPogo.map((location, index) => (
          <li
            key={index}
            className="flex items-center px-5 gap-5 hover:bg-mapsMenu-shadow cursor-pointer"
          >
            <MdShareLocation className="text-mapsMenu-tertiary size-[21px]" />
            <p className="py-3 text-[0.95rem]">{location.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
