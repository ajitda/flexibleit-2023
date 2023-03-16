import React from 'react'

const TestimonialsCard = ({ image, text, name, username }) => {
    return (
        <div>
            <div className=' my-4 bg-white p-6'>
                <p className=" text-base font-normal text-[#343D48] ">{text}</p>
                <div className="flex py-4">
                    <div className="">
                        <img src={image} alt="Minnie Horn" class="css-9taffg" />
                    </div>
                    <div className="pl-4">
                        <h3 className=" text-[17px] font-medium text-[#343D48]">{name}</h3>
                        <p className=" text-sm text-secondary">{username}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsCard