import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {CarIcon} from 'lucide-react'
import React from 'react'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"

function CarDetails() {
    return (
        <div
            className='my-4 py-2 px-3 border border-gray-300 w-[80vw] rounded-md'
            style={{
            borderRadius: '8px'
        }}>
            <div className='flex justify-start items-center pb-3 border-b border-gray-300'>
                <div>
                    <p className='bg-blue-400 py-1 px-3 font-semibold rounded-full'>2</p>
                </div>
                <div className='flex items-center text-blue-600 ml-4'>
                    <CarIcon size={24}/>
                    <h1 className='text-lg ml-2 font-semibold text-center my-2'>Car Details</h1>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 p-3 '>
                <div className='flex items-start flex-col'>
                    <Label className="my-2" htmlFor='name'>Brand Name</Label>
                    <Input type='text' className='md:w-max'/>
                </div>

                <div className='flex items-start flex-col'>
                    <Label className="my-2" htmlFor='name'>Model Name</Label>
                    <Input type='text' className='md:w-max'/>
                </div>
                <div className='flex items-start flex-col'>
                    <Label className="my-2" htmlFor='name'>Select Type</Label>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Type"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem  value="First Hand">First Hand</SelectItem>
                            <SelectItem  value="Second Hand">Second Hand</SelectItem>
                            <SelectItem  value="Third Hand">Third Hand</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className='flex items-start flex-col'>
                    <Label className="my-2" htmlFor='name'>Odometer (Distance traveled)</Label>
                    <Input type='number' className='md:w-max'/>
                </div>

                <div className='flex items-start flex-col'>
                    <Label className="my-2" htmlFor='name'>Price</Label>
                    <Input type='number' className='md:w-max'/>
                </div>

                <div className='flex items-start flex-col'>
                    <Label className="my-2" htmlFor='name'>Year Of Purchase</Label>
                    <Input type='number' className='md:w-max'/>
                </div>

            </div>
        </div>
    )
}

export default CarDetails
