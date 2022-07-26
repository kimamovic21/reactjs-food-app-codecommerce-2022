import React from 'react';

const Card = ({name, description, buttonText, imgLink, imgAlt}) => {
   
  return (
        <div className='rounded-xl relative'>

            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-[#efefef]'>
                <p className='font-bold text-2xl px-2 pt-4'>
                    {name}
                </p>
                <p className='px-3'>
                    {description}
                </p>
                <button className='border-[#efefef] bg-[#efefef] text-[#0f0f0f] mx-2 absolute bottom-2'>
                    {buttonText}
                </button>
            </div>
            <img src={imgLink} 
                 className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                 alt={imgAlt}
            />

        </div>
  )
}

export default Card;





// 1. dodajemo react props
// 2. unutar div elementa za overlay dodajemo dva p elementa i button element
// 3. ispod diva za overlay dodajemo img element
// 4. card div elementu dodajemo klasu
// 5. p elementima dodajemo klasu
// 6. button elementu dodajemo klasu
// 7. img elementu dodajemo klasu
