import React from 'react'

function Result({result}) {
    console.log(result)
    return (
        <div className='grid place-content-center w-[100vw]'>
            <div
                className='w-[80vw] gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-4'>
            {
                result
                    ?.map((car) => (
                        <div key={car.id} className="p-4 border border-gray-200 rounded-md shadow-sm">
                            <h3 className="font-bold">
                                {car.brandName}
                                - {car.modelName}
                            </h3>
                            <p>Price: ₹{car
                                    .price
                                    .toLocaleString()}</p>
                            <p>Year: {car.yearOfPurchase}</p>
                        </div>
                    ))
            }
            </div>
        </div>

    )
}

export default Result
