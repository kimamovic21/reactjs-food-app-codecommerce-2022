import React from 'react';
import {AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai';
import {BsFillCartFill} from 'react-icons/bs';

const Navbar = () => {
  return (
    // Parent div
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>

        {/* Left side */}
        <div className='flex items-center'>
            <div className='cursor-pointer'>
                <AiOutlineMenu size={30} />
            </div>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-2'>
                Best <span className='font-bold'>Meals</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-[#0e0e0e] text-[#efefef] rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>

        {/* Search input - center */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] md:[500px] lg:[600px]'>
            <AiOutlineSearch size={30}/>
            <input className='bg-transparent p-2 focus:outline-none'
                   type="text" 
                   placeholder='Search for food'
            />
        </div>


        {/* Cart button - right side */}
       <button className='bg-[#0e0e0e] text-[#efefef] hidden md:flex items-center py-2 rounded-full'>
            <BsFillCartFill size={30} className='mr-2'/> Cart
       </button>


       {/* Mobile menu */}

    </div>
  )
}

export default Navbar;





// 1. kucamo rafce skracenicu da kreiramo funkciju
// 3. dodajemo div elementu za lijevu stranu
// 2. unutar diva za lijevu stranu dodajemo react ikonicu
// 3. react ikonici dodajemo size atribut
// 4. unutar diva za lijevu stranu dodajemo h1 element
// 5. unutar diva za lijevu stranu dodajemo div element
// 6. untuar tog div elementa dodajemo dva p HTML elementa
// 7. dodajemo klasu roditelj div elementu
// 8. div elementu za lijevu stranu dodajemo klasu
// 9. div elementu u kojem se nalazi ikonica dodajemo klasu
// 10. h1 elementu dodajemo klasu
// 11. span elementu dodajemo klasu
// 12. div elementu u kojem se nalaze dva p elementa dodajemo klasu
// 13. dodajemo klase p elementima
// 14. dodajemo div za search input (centar)
// 15. unutar tog diva dodajemo react ikonicu
// 16. react ikonici dodajemo size atribut
// 17. u divu za centar dodajemo input element
// 18. centar div elementu dodajemo klasu
// 19. input elementu dodajemo klasu
// 20. u divu za desnu stranu dodajemo button element
// 21. unutar button elementa dodajemo react ikonicu
// 22. button elementu dodajemo klasu
// 23. react ikonici dodajemo size atribut
// 24. react ikonici dodajemo klasu
// 25. kreiramo div za mobile menu
// 26. 

