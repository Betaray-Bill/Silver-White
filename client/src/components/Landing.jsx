import {Fragment} from "react";
import Services from "./Services";
import FilterCars from "@/Layout/Buy/FilterCars";

const Landing = () => {
    return (
        <Fragment>
            <section
                className="relative bg-cover bg-center bg-origin-content min-h-[70vh] bg-abstract">
                <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1
                        className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center px-4">
                        Welcome to Your All-in-One Car Universe
                    </h1>
                </div>
            </section>

            <Services/>
            <FilterCars/>
        </Fragment>
    );
};

export default Landing;
