import { useMenuStore } from "../../stores";

export function PogoList() {
  const isOpen = useMenuStore((state) => state.isOpen);
  return (
    <div
      className={`absolute top-[52px] ${
        isOpen === true ? "block border-t" : "hidden"
      }`}
    >
      <ul className="h-[290px] w-[376px] bg-white rounded-bl-3xl rounded-br-3xl px-4 py-2">
        <li className="h-full">list</li>
      </ul>
    </div>
  );
}
