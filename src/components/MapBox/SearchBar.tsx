import { FaAngleDown, FaBook } from "react-icons/fa";

export function SearchBar() {
  return (
    <div className="relative w-[376px] flex items-center bg-white text-sm px-6 outline-none rounded-full shadow">
      <div className="absolute left-[77px] w-[1px] h-[20px] bg-mapsMenu-tertiary"></div>
      <div className="relative ml-2 mr-5 ">
        <select className="relative left-1 appearance-none bg-white font-medium text-mapsMenu-primary">
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
        <FaAngleDown className="absolute top-1 right-8 text-mapsMenu-primary" />
      </div>
      <input
        className="w-full tracking-tight py-3 placeholder:text-gray-500 outline-none focus:outline-none"
        placeholder="Seach POGO locations"
        type="text"
      />
      <FaBook className="size-4 text-mapsMenu-primary ml-2 cursor-pointer" />
    </div>
  );
}
