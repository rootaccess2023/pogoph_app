import { FaBook, FaPlus } from "react-icons/fa";
import { useMenuStore, usePogoStore } from "../../stores";
import { useRef, useState } from "react";

export function SearchBar() {
  const pogo = usePogoStore((state) => state.pogo);
  const isOpen = useMenuStore((state) => state.isOpen);
  const year = usePogoStore((state) => state.year);
  const setYear = usePogoStore((state) => state.setYear);
  const [searchItem, setSearchItem] = useState("");
  const setPogo = usePogoStore((state) => state.setPogo);
  const setOpen = useMenuStore((state) => state.setOpen);
  const setClose = useMenuStore((state) => state.setClose);
  const menuOpen = useMenuStore((state) => state.menuOpen);
  const setMenuClose = useMenuStore((state) => state.setMenuClose);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const handleBlur = () => {
    timeoutRef.current = setTimeout(() => {
      setClose();
    }, 200);
  };

  const handleFocus = () => {
    setOpen();
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(parseInt(e.target.value));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredPogo = pogo.filter((location) =>
      location.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setPogo(filteredPogo);
  };

  return (
    <div
      className={`relative w-[376px] flex items-center bg-white text-sm px-6 outline-none ${
        isOpen === true
          ? "rounded-tl-3xl rounded-tr-3xl"
          : "rounded-3xl drop-shadow"
      } `}
    >
      <div className="relative mx-2 ">
        <select
          value={year}
          onChange={handleYearChange}
          className="relative -left-2 appearance-none bg-mapsMenu-primary px-2 rounded-lg text-white font-medium"
        >
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={searchItem}
        onChange={handleSearchChange}
        className="w-full py-4 placeholder:text-gray-500 outline-none focus:outline-none"
        placeholder="Seach POGO locations"
        type="text"
      />
      {menuOpen === false ? (
        <FaBook className="size-5 ml-2 text-mapsMenu-primary cursor-pointer" />
      ) : (
        <FaPlus
          onClick={() => setMenuClose()}
          className="size-6 ml-2 text-mapsMenu-primary rotate-45 cursor-pointer"
        />
      )}
    </div>
  );
}
