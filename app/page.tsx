import Facility from "@/components/sections/facility/facility";
import Grooming from "@/components/sections/grooming/grooming";
import Info from "@/components/sections/info/info";
import Landing from "@/components/sections/landing/landing";
import Map from "@/components/sections/map/map";
import Vet from "@/components/sections/vet/vet";

export default function Home() {
  return (
    <>
      <Landing />
      <Info />
      <Vet />
      <Facility />
      <Grooming />
      <Map />
    </>
  );
}
