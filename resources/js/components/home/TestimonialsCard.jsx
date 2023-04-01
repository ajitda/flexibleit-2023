import React from 'react'

const TestimonialsCard = ({testomonial}) => {
    const  {author_name, description, thumbnail, desigantion} = testomonial;
    return (
        <div>
            <div className=' my-4 bg-white p-6'>
                <p className=" text-base font-normal text-[#343D48] ">{description}</p>
                <div className="flex py-4">
                    <div className="">
                        <img src={thumbnail} alt="Minnie Horn" class="css-9taffg" />
                    </div>
                    <div className="pl-4">
                        <h3 className=" text-[17px] font-medium text-[#343D48]">{author_name}</h3>
                        <p className=" text-sm text-secondary">{desigantion}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsCard