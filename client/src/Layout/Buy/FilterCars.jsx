import {useEffect, useState} from "react";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Search, SlidersHorizontal} from "lucide-react";
import {Slider} from "@/components/ui/slider";
import {Button} from "@/components/ui/button";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "@/utils/firebase";
import Result from "./Components/Result";

function FilterCars() {
    const initprice = 100000;
    const maximumprice = 1000000000;
    const [price,
        setPrice] = useState(maximumprice);
    const [brand,
        setBrand] = useState("");
    const [model,
        setModel] = useState("");
    const [filteredCars,
        setFilteredCars] = useState([]);

    const handlePriceChange = (value) => {
        setPrice(value[0]);
    };

    const [result, setResult] = useState([])

    const searchHandler = async() => {
        try {
            const carsRef = collection(db, "sell");
            // Apply filters to allCars
            // fetchCars()
            let filteredData = filteredCars;

            if (brand) {
                filteredData = filteredData.filter((car) => car.brandName.toLowerCase() === brand.toLowerCase());
            }

            if (model) {
                filteredData = filteredData.filter((car) => car.modelName.toLowerCase() === model.toLowerCase());
            }

            if (price) {
                filteredData = filteredData.filter((car) => parseInt(car.price || "0") <= price);
            }

            // Set the filtered data
            setResult(filteredData);

            // filter by category filters.push(where("category", "==", "sedans")); if
            // (brand)     filters.push(where("brandName", "==", brand.toLowerCase())); if
            // (model)     filters.push(where("modelName", "==", model.toLowerCase())); if
            // (price)     filters.push(where("price", "<=", price)); const carsQuery =
            // query(carsRef, ...filters); const querySnapshot = await getDocs(carsQuery);
            // const carsData = querySnapshot     .docs     .map((doc) => ({         id:
            // doc.id,         ...doc.data()     })); setFilteredCars(carsData);
        } catch (error) {
            console.error("Error fetching car data:", error);
            alert("Failed to fetch car data. Please try again.");
        }
    };

    const fetchCars = async() => {
        try {
            const carsRef = collection(db, "sell");
            const querySnapshot = await getDocs(carsRef);
            const carsData = querySnapshot
                .docs
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
            setFilteredCars(carsData);
        } catch (error) {
            console.error("Error fetching car data:", error);
            alert("Failed to fetch car data. Please try again.");
        }
    }

    useEffect(() => {
        fetchCars();
    }, []);

    return (
        <div>
            <div
                className="mb-10 py-2 px-3 border border-gray-300 w-[80vw] rounded-md justify-center items-center mx-auto">
                <div className="flex justify-start items-center pb-3 border-b border-gray-300">
                    <div className="flex items-center text-blue-600 ml-4">
                        <SlidersHorizontal size={24}/>
                        <h1 className="text-lg ml-2 font-semibold text-center my-2">
                            Search Your Drive
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 p-3">
                    <div className="flex items-start flex-col">
                        <Label className="my-2" htmlFor="brand">
                            Brand Name
                        </Label>
                        <Input onChange={(e) => setBrand(e.target.value)} value={brand}/>
                    </div>

                    <div className="flex items-start flex-col">
                        <Label className="my-2" htmlFor="model">
                            Model Name
                        </Label>
                        <Input onChange={(e) => setModel(e.target.value)} value={model}/>
                    </div>

                    <div className="flex items-start flex-col">
                        <Label className="my-2" htmlFor="price">
                            Price Range
                        </Label>
                        <div className="w-full relative">
                            <div className="flex space-x-2 items-center mb-4 justify-between">
                                <span className="text-gray-700">₹{initprice.toLocaleString()}</span>
                                <span className="text-gray-700">₹{price.toLocaleString()}</span>
                            </div>
                            <Slider
                                defaultValue={[price]}
                                max={maximumprice}
                                min={initprice}
                                step={100}
                                onValueChange={handlePriceChange}
                                className="w-full"/>
                        </div>
                    </div>
                </div>

                <div className="grid place-content-center mt-5">
                    <Button onClick={searchHandler}>
                        <Search/>
                        <span>Search</span>
                    </Button>
                </div>
            </div>

            <Result result={result ? result : filteredCars}/>

        </div>
    );
}

export default FilterCars;
