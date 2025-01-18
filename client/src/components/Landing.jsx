import { Fragment } from "react";
import Navbar from "./Navbar";
import { Button } from "@/components/ui/button"; // Assuming you're using shadcn's button component

const Landing = () => {
  return (
    <Fragment>
      <div className="flex flex-wrap items-center">
        {/* Left Column */}
        <div className="w-full md:w-1/2">
          <Navbar />
          <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            {/* Main Heading */}
            <h1 className="text-black text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              PLUG FOR YOUR NEXT ADVENTURE
            </h1>

            {/* Subtext */}
            <p className="text-gray-500 mt-6 text-lg md:text-xl max-w-2xl">
              Mattis porttitor euismod non tincidunt ultrices aliquam scelerisque. Odio aliquam in elementum sem in malesuada molestie.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <Button variant="default" size="lg">
                Explore now
              </Button>
              <Button variant="outline" size="lg">
                Watch video
              </Button>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <section className="relative min-h-[85vh] w-full md:w-1/2 bg-cover bg-center flex items-center justify-center bg-abstract rounded-bl-3xl"/>
      </div>
    </Fragment>
  );
};

export default Landing;
