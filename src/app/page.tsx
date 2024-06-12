import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Dolor from "@/components/dolor/Dolor";
import Title from "@/components/title/Title";
import Image from "next/image";
import Home from "../components/home/Home";

export default function Index() {
  return (
    <main>
      <Home />
      <div className="block md:hidden lg:block">
        <About />
      </div>
      <Banner />
      <Dolor />
      <Title />
    </main>
  );
}
