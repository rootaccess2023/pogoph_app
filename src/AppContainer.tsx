import { MapBox, Timeline } from "./layout";
import { useMenuStore } from "./stores";

export function AppContainer() {
  const timelineOpen = useMenuStore((state) => state.timelineOpen);
  return (
    <div className="">{timelineOpen === false ? <MapBox /> : <Timeline />}</div>
  );
}
