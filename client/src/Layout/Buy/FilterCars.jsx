import { useState} from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SlidersHorizontal } from "lucide-react";
import { Slider } from "@/components/ui/slider";

function FilterCars() {
  const initprice = 100000; 
  const maximumprice = 1000000; 
  const [price, setPrice] = useState(maximumprice); 
  console.log("Initial Price:", price);

  const handlePriceChange = (value) => {
    setPrice(value[0]); // Update price state with slider value
    console.log("Selected Price:", value[0]); // Print the value to the console
  };

  return (
    <div
      className="mb-10 py-2 px-3 border border-gray-300 w-[80vw] rounded-md justify-center items-center mx-auto"
      style={{
        borderRadius: "8px",
      }}
    >
      <div className="flex justify-start items-center pb-3 border-b border-gray-300">
        <div className="flex items-center text-blue-600 ml-4">
          <SlidersHorizontal size={24} />
          <h1 className="text-lg ml-2 font-semibold text-center my-2">
            Search Your Drive
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 p-3">
        <div className="flex items-start flex-col">
          <Label className="my-2" htmlFor="name">
            Brand Name
          </Label>
          <Input type="text" className="md:w-max" />
        </div>

        <div className="flex items-start flex-col">
          <Label className="my-2" htmlFor="name">
            Model Name
          </Label>
          <Input type="text" className="md:w-max" />
        </div>

        <div className="flex items-start flex-col">
          <Label className="my-2" htmlFor="name">
            Price Range
          </Label>
          {/* Price Range Display */}
          <div className="flex space-x-2 items-center mb-4">
            <span className="text-gray-700">₹{initprice.toLocaleString()}</span>
            <span className="text-gray-700">₹{price.toLocaleString()}</span>
          </div>
          {/* Price Slider */}
          <Slider
            defaultValue={[price]}
            max={maximumprice}
            min={initprice}
            step={100}
            onValueChange={handlePriceChange}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default FilterCars;
