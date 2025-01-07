import React, {useState} from 'react';
import UserDetails from './Components/UserDetails';
import CarDetails from './Components/CarDetails';
import UploadImages from './Components/UploadImages';
import {addDoc, collection} from 'firebase/firestore';
import {db} from '@/utils/firebase';

function SellForm() {
    const [formData,
        setFormData] = useState({
        user: {
            name: '',
            email: '',
            phoneNumber: '',
            flat: '',
            area: '',
            landmark: '',
            state: '',
            pincode: ''
        },
        car: {
            brandName: '',
            modelName: '',
            type: '',
            odometer: '',
            price: '',
            yearOfPurchase: ''
        }
    });

    const [images,
        setImages] = useState([]);

    console.log(formData)

    // Update UserDetails or CarDetails data
    const handleUpdate = (section, field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [field]: value
            }
        }));
    };

    const uploadToCloudinary = async (file) => {
        const cloudName = "de2i4bxdq";
        const apiKey = "854668357898481";
        const apiSecret = "XJxRo5ENSLzp6avCWRZ3w93ZYhs>";
        const timestamp = Math.floor(Date.now() / 1000);
    
        // Create a signature for Cloudinary upload
        // const paramsToSign = `timestamp=${timestamp}${apiSecret}`;
        // const signature = crypto
        //     .createHash("sha1")
        //     .update(paramsToSign)
        //     .digest("hex");
    
        const formData = new FormData();
        formData.append("file", file); // Image file
        formData.append("upload_preset", "silverWhite-demo");
        formData.append("cloudName", cloudName); // Cloudinary
        // formData.append("signature", signature);
    
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    
        try {
            const response = await fetch(url, {
                method: "POST",
                body: formData,
            });
            if (!response.ok) {
                throw new Error("Failed to upload image to Cloudinary");
            }
            const data = await response.json();
            return data.secure_url; // Return the image URL
        } catch (error) {
            console.error("Cloudinary upload error:", error);
            throw error;
        }
    };

    // const uploadToCloudinary = async(file) => {
    //     const CLOUDINARY_URL = 'https://854668357898481:XJxRo5ENSLzp6avCWRZ3w93ZYhs@de2i4bxdq';
    //     // const CLOUDINARY_PRESET = `${formData.user.name}/${formData.car.brandName}-${formData.car.modelName}`;

    //     const formData = new FormData();
    //     formData.append("file", file);
    //     formData.append("upload_preset", CLOUDINARY_PRESET);

    //     const response = await fetch(CLOUDINARY_URL, {
    //         method: "POST",
    //         body: formData
    //     });

    //     if (!response.ok) {
    //         throw new Error("Failed to upload image");
    //     }

    //     const data = await response.json();
    //     return data.secure_url;
    // };

    const handleSubmit = async() => {
        try {
            // setLoading(true);

            // Upload images to Cloudinary
            const uploadedImageUrls = await Promise.all(images.map((file) => uploadToCloudinary(file)));
            // Add image URLs to car details
            const carDetailsWithImages = {
                ...formData.car,
                  images: uploadedImageUrls
            };
// 
            console.log(carDetailsWithImages)

            // Save user data to Firebase
            const userDocRef = await addDoc(collection(db, "users"), formData.user);
            console.log("User data saved with ID: ", userDocRef.id);
            // Include userId in car details
            const carDetailsWithUserId = {
                ...carDetailsWithImages,
                userId: userDocRef.id
            };
            const carDocRef = await addDoc(collection(db, "sell"), carDetailsWithUserId);
            const carId = carDocRef.id; // Get car ID

            // Add carId to the user's document
            await addDoc(collection(db, `users/${userDocRef.id}/cars`), {carId});

            alert("Data submitted successfully!");

            // console.log(object)
        } catch (error) {
            console.error("Error submitting data: ", error);
            alert("Failed to submit data. Please try again.");
        } finally {
            // setLoading(false);
        }
    };

    // secret = XJxRo5ENSLzp6avCWRZ3w93ZYhs key = 854668357898481

    return (
        <div className="grid place-content-center my-8">
            {/* Pass data and handlers to child components */}
            <UserDetails
                data={formData.user}
                onUpdate={(field, value) => handleUpdate('user', field, value)}/>
            <CarDetails
                data={formData.car}
                onUpdate={(field, value) => handleUpdate('car', field, value)}/> {/* Upload Images */}
            <UploadImages images={images} setImages={setImages}/>
            <div className='flex flex-col items-center'>
                <button
                    onClick={handleSubmit}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                    Submit
                </button>
            </div>
        </div>
    );
}

export default SellForm;
