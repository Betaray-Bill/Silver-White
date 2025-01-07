import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Car, DollarSign, Truck, Briefcase } from 'lucide-react';

const Services = () => {
  return (
    <div className="relative mx-auto max-w-6xl m-10 w-[100vw] grid place-content-center">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-[80vw]">
        <Card className="shadow-md rounded-lg">
          <CardHeader className="flex items-center">
            <Car size={32} className="text-blue-500" />
            <CardTitle className="ml-4 text-lg font-medium">Buy Used Cars</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">Affordable pre-loved cars</p>
            <button className="mt-4 text-blue-500 font-medium">Know more →</button>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader className="flex items-center">
            <DollarSign size={32} className="text-green-500" />
            <CardTitle className="ml-4 text-lg font-medium">Sell Car</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">Sell fast, stress-free</p>
            <button className="mt-4 text-green-500 font-medium">Know more →</button>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader className="flex items-center">
            <Truck size={32} className="text-yellow-500" />
            <CardTitle className="ml-4 text-lg font-medium">Car Loan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">Low rates, fast approval</p>
            <button className="mt-4 text-yellow-500 font-medium">Know more →</button>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader className="flex items-center">
            <Briefcase size={32} className="text-orange-500" />
            <CardTitle className="ml-4 text-lg font-medium">Hire Driver</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">Expert drivers on demand</p>
            <button className="mt-4 text-orange-500 font-medium">Know more →</button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;
