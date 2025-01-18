import Navbar from '@/components/Navbar'
import SellForm from '@/Layout/Sell/SellForm'
import React from 'react'

function Sell() {
    return (
        <>
            <Navbar />
            <div className='w-screen px-4 mt-2 '>
                <div className='mx-auto grid place-items-center'>
                    <h1 className='text-2xl font-bold text-center my-2'>Sell your car</h1>
                    <p>Sell your car in ease with us.</p>
                </div>

                {/* Form  */}
                <SellForm />
            </div>
        </>
    )
}

export default Sell
