import React from 'react';

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>

        {/* Hero div */}
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-[#0e0e0e/50] flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold'>
                    The <span className='text-[#ffae00]'>best</span>
                </h1>
                <h2 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold'>
                    <span className='text-[#ffae00]'>food</span> delivered.
                </h2>
            </div>
            <img src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                 className='w-full max-h-[500px] object-cover' 
                 alt="Hamburger" 
            />
        </div>

    </div>
  )
}

export default Hero;




// 1. div roditelj elementu dodajemo klasu
// 2. dodajemo div elementa unutar roditelj div elementa
// 2. unutar diva za overlay dodajemo h1 i h2 elemente
// 3. ispod diva za overlay dodajemo img element
// 4. hero div elementu dodajemo klasu
// 5. dodajemo klasu overlay div elementu
// 6. h1 i h2 elementima dodajemo klasu
// 7. span elementima dodajemo klasu
// 8. img elementu dodajemo klasu

