import React from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button } from "@/components/ui/button";
import { Navigation, Pagination, Scrollbar} from 'swiper/modules'; // ShadCN UI Button
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const ViewOneCar = () => {
  const location = useLocation();
  const car = location.state?.car;

  if (!car) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium">Car data not found. Please go back and try again.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-12">
      {/* Left Side: Swiper Carousel */}
      <div className="lg:w-3/3 w-[850px]">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={10}
          slidesPerView={1}
          className="rounded-md overflow-hidden shadow-lg"
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {car.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Car image ${index + 1}`}
                className="w-[850px] h-[600px] object-cover rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Side: Car Details */}
      <div className="lg:w-1/3 w-full space-y-6">
        {/* Car Title and Key Details */}
        <Card className="shadow-md border rounded-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{car.modelName}</CardTitle>
            <div className="flex justify-between text-gray-600 mt-2">
              <p>{car.brandName}</p>
              <p>{car.yearOfPurchase}</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Type</p>
                <p className="font-medium">{car.type}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Odometer</p>
                <p className="font-medium">{car.odometer} km</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Price</p>
                <p className="font-medium">₹{car.price}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pricing Options */}
        <Card className="shadow-md border rounded-lg p-4">
          <CardContent className="space-y-4">
            <h3 className="text-lg font-semibold">Pricing Options</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full text-left">
                <div className="flex justify-between">
                  <span>Long Range Rear-Wheel Drive</span>
                  <span>₹216/mo</span>
                </div>
              </Button>
              <Button variant="outline" className="w-full text-left">
                <div className="flex justify-between">
                  <span>Long Range All-Wheel Drive</span>
                  <span>₹266/mo</span>
                </div>
              </Button>
              <Button variant="outline" className="w-full text-left">
                <div className="flex justify-between">
                  <span>Performance All-Wheel Drive</span>
                  <span>₹516/mo</span>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Order Now Button */}
        <CardFooter>
          <Button className="w-full text-lg py-3">Order Now</Button>
        </CardFooter>
      </div>
    </div>
  );
};

export default ViewOneCar;
