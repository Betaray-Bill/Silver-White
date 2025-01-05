import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { User2Icon } from 'lucide-react'
import React from 'react'

function UserDetails() {
    return (
        <div className='my-4 py-2 px-3 border border-gray-300 w-[80vw] rounded-md' style={{borderRadius:'8px'}}>
            <div className='flex justify-start items-center pb-3 border-b border-gray-300'>
                <div>
                    <p className='bg-blue-400 py-1 px-3 font-semibold rounded-full'>1</p>
                </div>
                <div className='flex items-center text-blue-600 ml-4'>
                    <User2Icon size={22} />
                    <h1 className='text-lg ml-2 font-semibold text-center my-2'>User Details</h1>
                </div>
            </div>

            {/* Form */}

            <div className='grid grid-cols-3 gap-4 mt-4 p-3'>
                <div className='flex items-start flex-col'>
                    <Label className="my-2" htmlFor='name'>Name</Label>
                    <Input type='text' className='w-max ' />
                </div>
                <div className='flex items-start flex-col'>
                    <Label className="my-2" htmlFor='email'>Email Id</Label>
                    <Input type='email' className='w-max ' />
                </div>
                <div className='flex items-start flex-col'>
                    <Label className="my-2" htmlFor='phoneNumber'>Phone Number</Label>
                    <Input type='number' className='w-max ' />
                </div>
            </div>
        </div>
    )
}

export default UserDetails
