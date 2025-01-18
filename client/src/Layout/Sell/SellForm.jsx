import React, { useState } from 'react';
import UserDetails from './Components/UserDetails';
import CarDetails from './Components/CarDetails';
import UploadImages from './Components/UploadImages';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/utils/firebase';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

function SellForm() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
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
    const {toast} = useToast()
    const [images, setImages] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleUpdate = (section, field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [field]: value
            }
        }));
    };

    const validateForm = () => {
        const requiredFields = [
            ...Object.values(formData.user),
            ...Object.values(formData.car)
        ];
        return requiredFields.every((field) => field.trim() !== '');
    };

    const uploadToCloudinary = async (file) => {
        const cloudName = "de2i4bxdq";
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "silverWhite-demo");

        try {
            const response = await fetch(url, {
                method: "POST",
                body: formData,
            });
            if (!response.ok) {
                throw new Error("Failed to upload image to Cloudinary");
            }
            const data = await response.json();
            return data.secure_url;
        } catch (error) {
            console.error("Cloudinary upload error:", error);
            throw error;
        }
    };

    const handleSubmit = async () => {
        console.log("object")
        setIsSubmitting(p => !p);
        // if (!validateForm()) {
        //     console.log(1)
        //     toast({
        //         title: "Fill up all the details in the form",
        //       })
        //       setIsSubmitting(p => !p);
        //     return;
        // }

        try {
            const uploadedImageUrls = await Promise.all(images.map((file) => uploadToCloudinary(file)));
            const carDetailsWithImages = {
                ...formData.car,
                images: uploadedImageUrls
            };

            const userDocRef = await addDoc(collection(db, "users"), formData.user);
            const carDetailsWithUserId = {
                ...carDetailsWithImages,
                userId: userDocRef.id
            };
            const carDocRef = await addDoc(collection(db, "sell"), carDetailsWithUserId);
            const carId = carDocRef.id;

            await addDoc(collection(db, `users/${userDocRef.id}/cars`), { carId });

        } catch (error) {
            console.error("Error submitting data: ", error);
            toast.error("Failed to submit data. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
        alert("Your car data is submitted Successfully, Team will contact you soon")
        setFormData({
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
        navigate('/')
    };

    return (
        <div className="relative">
            {isSubmitting && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="loader bg-white p-4 rounded shadow-lg flex flex-col justify-center">
                        <img
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/344b0b52291211.59148e0af2f7f.gif"
                            className="w-[300px] h-[300px] object-cover"
                            alt="Loading"
                        />
                        <div className="flex items-center justify-center font-semibold text-lg">
                            <p>Submitting</p>
                        </div>
                    </div>
                </div>
            )}
            <div className="grid place-content-center my-8">
                <UserDetails
                    data={formData.user}
                    onUpdate={(field, value) => handleUpdate('user', field, value)}
                />
                <CarDetails
                    data={formData.car}
                    onUpdate={(field, value) => handleUpdate('car', field, value)}
                />
                <UploadImages images={images} setImages={setImages} />
                <div className="flex flex-col items-center">
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className={`mt-4 py-2 px-4 rounded ${isSubmitting ? 'bg-gray-400' : 'bg-blue-500 text-white'}`}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SellForm;
