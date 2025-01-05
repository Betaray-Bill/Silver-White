import React from 'react'
import UserDetails from './Components/UserDetails'
import CarDetails from './Components/CarDetails'

function SellForm() {
  return (
    <div className='grid place-content-center'>
        {/* Get User Details */}
        <UserDetails />
        {/* Car Details */}
        <CarDetails />

        {/* Car Photos */}

        {/* Submit */}
    </div>
  )
}

export default SellForm
