import {
  MdKey,
  MdLocationSearching,
  MdOutlineLocationOn,
  MdOutlineQueryBuilder,
} from "react-icons/md";
import { usePogoStore } from "../../stores";

export function Details() {
  const selectedPogo = usePogoStore((state) => state.selectedPogo);
  const years = selectedPogo?.years || {};
  const operatingYears = Object.keys(years).filter((year) => years[year]);
  const numberOfYears = operatingYears.length;
  return (
    <div>
      <img
        className="h-[300px] w-full"
        src={selectedPogo?.image}
        alt={selectedPogo?.name}
      />
      <div className="pt-4 px-6">
        <h1 className="font-product text-[1.375rem]">{selectedPogo?.name}</h1>
        <p className="text-[0.87rem] text-mapsMenu-tertiary">
          {selectedPogo?.region}
        </p>
      </div>
      <p className="px-6 py-4 border-b">{selectedPogo?.description}</p>
      <div className="flex flex-col gap-4 text-[0.87rem] px-6 py-4">
        <div className="flex gap-6">
          <span>
            <MdOutlineLocationOn className="size-6 text-mapsMenu-primary" />
          </span>
          <p>{selectedPogo?.address}</p>
        </div>
        <div className="flex items-center gap-6">
          <span>
            <MdLocationSearching className="size-6 text-mapsMenu-primary" />
          </span>
          <p className="flex gap-4">
            <span>{selectedPogo?.latitude}</span>
            <span>{selectedPogo?.longitude}</span>
          </p>
        </div>
        <div className="flex items-center gap-6">
          <span>
            <MdOutlineQueryBuilder className="size-6 text-mapsMenu-primary" />
          </span>
          <p>{numberOfYears} years of operation</p>
        </div>
        <div className="flex items-center gap-6">
          <span>
            <MdKey className="size-6 text-mapsMenu-primary" />
          </span>
          <p>{operatingYears.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
