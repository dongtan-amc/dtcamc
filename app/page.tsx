import Facility from "@/components/sections/facility/facility";
import Landing from "@/components/sections/landing/landing";

export default function Home() {
  return (
    <>
      <Landing />
      <div className="h-screen bg-olive-drab-100"></div>
      <Facility />
      <div className="h-screen bg-olive-drab-100"></div>
    </>
  );
}
