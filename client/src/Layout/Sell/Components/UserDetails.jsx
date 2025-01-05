import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {User2Icon} from 'lucide-react'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
const indianStatesAndUTs = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry"
  ];
  
function UserDetails() {
    return (
        <div
            className='my-4 py-2 px-3 border border-gray-300 w-[80vw] rounded-md'
            style={{
            borderRadius: '8px'
        }}>
            <div className='flex justify-start items-center pb-3 border-b border-gray-300'>
                <div>
                    <p className='bg-blue-400 py-1 px-3 font-semibold rounded-full'>1</p>
                </div>
                <div className='flex items-center text-blue-600 ml-4'>
                    <User2Icon size={22}/>
                    <h1 className='text-lg ml-2 font-semibold text-center my-2'>User Details</h1>
                </div>
            </div>

            {/* Form */}

            <div className='grid grid-cols-3 gap-4 mt-4 p-3'>
                <div className='flex items-start flex-col'>
                    <Label className="my-2" htmlFor='name'>Name</Label>
                    <Input type='text' className=''/>
                </div>
                <div className='flex items-start flex-col'>
                    <Label className="my-2" htmlFor='email'>Email Id</Label>
                    <Input type='email' className=''/>
                </div>
                <div className='flex items-start flex-col'>
                    <Label className="my-2" htmlFor='phoneNumber'>Phone Number</Label>
                    <Input type='number' className=''/>
                </div>
                <div className='flex items-start flex-col'>
                    <Label className="my-2" htmlFor='flat'>Flat, House no.,Apartment
                    </Label>
                    <Input type='text' className=''/>
                </div>
                <div className='flex items-start flex-col'>
                    <Label className="my-2" htmlFor='area'>Area, Street, Sector, Village</Label>
                    <Input type='text' className=''/>
                </div>
                <div className='flex items-start flex-col'>
                    <Label className="my-2" htmlFor='area'>Landmark</Label>
                    <Input type='text' className=''/>
                </div>
                <div className='flex items-start flex-col'>
                    <Label className="my-2" htmlFor='area'>State</Label>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select State"/>
                        </SelectTrigger>
                        <SelectContent>
                            {
                                indianStatesAndUTs.map((state, index) => (
                                    <SelectItem key={index} value={state}>{state}</SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                </div>
                <div className='flex items-start flex-col'>
                    <Label className="my-2" htmlFor='area'>Pincode</Label>
                    <Input type='number' className=''/>
                </div>

            </div>
        </div>
    )
}

export default UserDetails
