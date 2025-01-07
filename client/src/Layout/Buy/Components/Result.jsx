import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Result({ result }) {
  return (
    <div className="grid place-content-center w-[100vw]">
      <div className="w-[80vw] gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
        {result?.map((car) => (
          <div key={car.id} className="p-4 border border-gray-200 rounded-lg shadow-sm">
            <div className="mb-4">
              <img src={car.images[0]} alt="Car Image" className="w-full h-72 object-cover rounded-lg" />
            </div>
            <h3 className="font-bold">{car.brandName}</h3>
            <h3 className="font-bold">{car.modelName}</h3>
            <p>Price: ₹{car.price.toLocaleString()}</p>
            <p>Year: {car.yearOfPurchase}</p>
            <Button className="mt-4">
              {/* Pass car data as state */}
              <Link to={`/buy/${car.id}`} state={{ car }}>
                View More
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Result;
