import { instrumentSerif, inter } from "./layout";

export default function Home() {
  return (
   <div className="min-h-screen flex flex-col items-center justify-center">
    <h1 className={instrumentSerif.className + " text-blue-500 text-4xl"}>Home</h1>
   </div>
  );
}
