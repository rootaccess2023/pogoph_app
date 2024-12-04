import { BarLoader } from "react-spinners";

export function Loader() {
  return (
    <div className="w-full flex justify-center items-center px-5 gap-5 mt-20 h-fit rounded-3xl mb-6">
      <BarLoader width={20} color="#b91c1c" />
      <span className="text-red-700 text-sm">Loading POGO locations</span>
    </div>
  );
}
