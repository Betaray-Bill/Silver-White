import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button } from "@/components/ui/button"; // ShadCN UI Button
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const CarDetailsCard = ({ car }) => (
  <Card className="text-center space-y-6 custom-border-minus">
    {/* Header */}
    <CardHeader>
      <CardTitle className="text-4xl font-bold mb-2">{car.modelName}</CardTitle>
      <p className="text-sm text-gray-500">From {car.brandName}</p>
    </CardHeader>

    {/* Content: Key Specifications */}
    <CardContent className="space-y-6">
      <div className="grid grid-cols-3 gap-4 text-center">
        {[
          { label: "Odometer", value: `${car.odometer} km`, subtext: "(EPA est.)" },
          { label: "Ownership Type", value: `${car.type}` },
          { label: "Year Of Purchase", value: `${car.yearOfPurchase}` },
        ].map((spec, idx) => (
          <div key={idx}>
            <p className="text-2xl font-semibold">{spec.value}</p>
            <p className="text-sm text-gray-500">{spec.label}</p>
            {spec.subtext && (
              <p className="text-xs text-gray-400">{spec.subtext}</p>
            )}
          </div>
        ))}
      </div>
    </CardContent>

    {/* Footer: Pricing Options */}
    
  </Card>
);

const ViewOneCar = () => {
  const location = useLocation();
  const car = location.state?.car;

  console.log(car);

  if (!car) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium">
          Car data not found. Please go back and try again.
        </p>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="flex flex-wrap items-center">
        {/* Left Column */}
        <div className="w-full md:w-1/2">
          <Navbar />
          <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6">
            <CarDetailsCard car={car} />
          </section>
        </div>

        {/* Right Column */}
        <section className="p-6 relative w-full md:w-1/2 flex items-center justify-center">
          {/* Car Image Slider */}
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={10}
            slidesPerView={1}
            className="rounded-lg shadow-lg"
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {car.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Car image ${index + 1}`}
                  className="w-full h-[600px] object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </Fragment>
  );
};

export default ViewOneCar;
