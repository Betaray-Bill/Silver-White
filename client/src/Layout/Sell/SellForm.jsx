import React, {useState} from 'react';
import UserDetails from './Components/UserDetails';
import CarDetails from './Components/CarDetails';
import UploadImages from './Components/UploadImages';

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

    const handleSubmit = () => {
        console.log('Submitted Data:', formData);
        // Handle submission (e.g., API call)
    };

    return (
        <div className="grid place-content-center my-8">
            {/* Pass data and handlers to child components */}
            <UserDetails
                data={formData.user}
                onUpdate={(field, value) => handleUpdate('user', field, value)}/>
            <CarDetails
                data={formData.car}
                onUpdate={(field, value) => handleUpdate('car', field, value)}/>
            {/* Upload Images */}
            <UploadImages />
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
