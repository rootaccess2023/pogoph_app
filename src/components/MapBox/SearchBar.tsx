import { FaBook } from "react-icons/fa";
import { useMenuStore, usePogoStore } from "../../stores";

export function SearchBar() {
  const isOpen = useMenuStore((state) => state.isOpen);
  const year = usePogoStore((state) => state.year);
  const setYear = usePogoStore((state) => state.setYear);

  const handleValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(parseInt(e.target.value));
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
          onChange={handleValueChange}
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
        className="w-full py-4 placeholder:text-gray-500 outline-none focus:outline-none"
        placeholder="Seach POGO locations"
        type="text"
      />
      <FaBook className="size-5 ml-2 text-mapsMenu-primary cursor-pointer" />
    </div>
  );
}
