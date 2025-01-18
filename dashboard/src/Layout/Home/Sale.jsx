import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import axios from 'axios';
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { Link } from "react-router-dom";


function Sale () {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch all cars
    useEffect(() => {
        const fetchCars = async () => {
            try {
                const sellsSnapshot = await getDocs(collection(db, "sell"));
                const sellsArray = sellsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setCars(sellsArray);
                console.log(sellsArray)
                setLoading(false)
              } catch (error) {
                console.error("Error fetching sells data:", error);
              }
        };

        fetchCars();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (cars.length === 0) {
        return <p>No cars available.</p>;
    }

    return (
        <div className=" mx-auto mt-5 border w-[80vw] rounded-md p-4">
            <h1 className="text-lg font-semibold mb-2 border-b pb-2">Cars List</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>S.no</TableHead>
                        <TableHead>Brand</TableHead>
                        <TableHead>Model</TableHead>
                        <TableHead>Year</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>type</TableHead>
                        <TableHead>View</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {cars?.map((car, index) => (
                        <TableRow key={car.id}>
                            <TableCell>{index+1 || "N/A"}</TableCell>
                            <TableCell>{car.brandName || "N/A"}</TableCell>
                            <TableCell>{car.modelName || "N/A"}</TableCell>
                            <TableCell>{car.yearOfPurchase || "N/A"}</TableCell>
                            <TableCell>${car.price || "N/A"}</TableCell>
                            <TableCell>{car.type || "N/A"}</TableCell>
                            <TableCell>
                                <Link to={`/home/sales/car/${car.id}`} className="px-3 py-2 bg-black text-white ">View</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default Sale;
