import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Navbar from "@/components/Navbar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Reusable CarDetailsCard Component
const CarDetailsCard = ({ car, handleFormSubmit, dialogOpen, setDialogOpen }) => (
  <Card className="space-y-6 custom-border-minus">
    <CardHeader>
      <CardTitle className="text-4xl font-bold">{car.modelName}</CardTitle>
      <p className="text-sm text-gray-500">From {car.brandName}</p>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-3 gap-6">
        {[ 
          { label: "Odometer", value: `${car.odometer} km`, subtext: "(EPA est.)" },
          { label: "Ownership Type", value: car.type },
          { label: "Year Of Purchase", value: car.yearOfPurchase },
        ].map(({ label, value, subtext }, idx) => (
          <div key={idx} className="text-center">
            <p className="text-2xl font-semibold">{value}</p>
            <p className="text-sm text-gray-500">{label}</p>
            {subtext && <p className="text-xs text-gray-400">{subtext}</p>}
          </div>
        ))}
      </div>
    </CardContent>
    <CardFooter className="relative flex flex-col space-y-2 justify-start">
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger className="flex items-center gap-2 absolute left-0 ml-6 p-3 border border-blue-600 shadow-2xl text-black text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors duration-200">
          Buy Now <p className="text-xs">₹{car.price.toLocaleString()}</p>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enquire About This Car</DialogTitle>
            <DialogDescription>
              Fill out the form below to enquire about the {car.modelName}.
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(e) => handleFormSubmit(e, car)}
            className="space-y-4"
          >
            <input type="hidden" name="carModel" value={car.modelName} />
            <input type="hidden" name="carId" value={car.id} />
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Enquiry
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </CardFooter>
  </Card>
);

// Reusable CarImageSlider Component
const CarImageSlider = ({ images }) => (
  <Swiper
    modules={[Navigation, Pagination, Scrollbar]}
    spaceBetween={10}
    slidesPerView={1}
    className="rounded-lg shadow-lg"
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  >
    {images.map((image, idx) => (
      <SwiperSlide key={idx}>
        <img
          src={image}
          alt={`Car image ${idx + 1}`}
          className="w-full h-[500px] object-cover rounded-lg"
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

// Main ViewOneCar Component
const ViewOneCar = () => {
  const { state } = useLocation();
  const car = state?.car;
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleFormSubmit = async (e, car) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xnnnkyzd", { 
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        alert(`Enquiry for ${car.modelName} submitted successfully!`);
        form.reset();
        setDialogOpen(false);  // Close the dialog
      } else {
        alert("Failed to submit enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

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
      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="flex flex-wrap md:flex-nowrap items-center pt-20 px-4 md:px-8 gap-6">
        {/* Left Column: Car Details */}
        <div className="w-full md:w-1/2">
          <CarDetailsCard car={car} handleFormSubmit={handleFormSubmit} dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
        </div>

        {/* Right Column: Image Slider */}
        <div className="w-full md:w-1/2">
          <CarImageSlider images={car.images} />
        </div>
      </div>
    </Fragment>
  );
};

export default ViewOneCar;
