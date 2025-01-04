import { Car, DollarSign, Truck, Shield, Clock, Briefcase, Grid } from 'lucide-react';

const Landing = () => {
  return (
    <>
      {/* Background Section */}
      <section className="relative bg-no-repeat bg-cover bg-center bg-origin-content h-[70vh] bg-abstract">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            Welcome to Your All-in-One Car Universe
          </h1>
        </div>
      </section>

      {/* Overlapping Services Section */}
      <div className="relative bg-white shadow-md rounded-lg -mt-28 mx-auto max-w-6xl p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
          {/* Service Items */}
          <div className="flex flex-col items-center">
            <Car size={32} className="text-blue-500" />
            <span className="mt-2 text-sm font-medium">Buy Used Car</span>
          </div>

          <div className="flex flex-col items-center">
            <DollarSign size={32} className="text-green-500" />
            <span className="mt-2 text-sm font-medium">Sell Car</span>
          </div>

          <div className="flex flex-col items-center">
            <Truck size={32} className="text-yellow-500" />
            <span className="mt-2 text-sm font-medium">New Cars</span>
          </div>

          <div className="flex flex-col items-center">
            <Shield size={32} className="text-red-500" />
            <span className="mt-2 text-sm font-medium">Insurance</span>
          </div>

          <div className="flex flex-col items-center">
            <Clock size={32} className="text-purple-500" />
            <span className="mt-2 text-sm font-medium">Vehicle History</span>
          </div>

          <div className="flex flex-col items-center">
            <Briefcase size={32} className="text-orange-500" />
            <span className="mt-2 text-sm font-medium">Hire a Driver</span>
          </div>

          <div className="flex flex-col items-center">
            <Grid size={32} className="text-gray-500" />
            <span className="mt-2 text-sm font-medium">More</span>
          </div>
        </div>

        {/* Search Section */}
        <div className="mt-8 text-center">
          <input
            type="text"
            placeholder="Search cars by make"
            className="border border-gray-300 rounded-lg p-2 w-full md:w-1/2"
          />
          <button className="ml-2 px-4 py-2 bg-orange-500 text-white font-medium rounded-lg">
            View All Cars
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
