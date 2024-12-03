import { MapBox, Timeline } from "./layout";
import { useMenuStore } from "./stores";

export function AppContainer() {
  const timelineOpen = useMenuStore((state) => state.timelineOpen);
  return (
    <div className="">
      <div className={timelineOpen === true ? "hidden" : "block"}>
        <MapBox />
      </div>
      <div className={timelineOpen === true ? "z-50 block" : "hidden"}>
        <Timeline />
      </div>
    </div>
  );
}
