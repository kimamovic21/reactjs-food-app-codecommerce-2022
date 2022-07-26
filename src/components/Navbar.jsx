import React, { useState } from 'react';
import {AiOutlineSearch, AiOutlineMenu, AiOutlineClose, AiFillTag} from 'react-icons/ai';
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import {FaWallet, FaUserFriends} from 'react-icons/fa';
import {MdFavorite, MdHelp} from 'react-icons/md';

const Navbar = () => {

  const [nav, setNav] = useState(false);

  return (
    // Parent div
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>

        {/* Left side */}
        <div className='flex items-center'>
            <div onClick={() => setNav(!nav)} className='cursor-pointer'>
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

       {/* Overlay div */}
       {/* <div className='bg-[#0e0e0e]/70 fixed w-full h-screen z-10 top-0 left-0'></div> */}
        {nav ? <div className='bg-[#0e0e0e]/70 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

        {/* Side drawer menu */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-[#efefef] z-10 duration-300'
                            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-[#efefef] z-10 duration-300'
        }>
            <AiOutlineClose onClick={() => setNav(!nav)}
                            size={30} 
                            className='absolute right-4 top-4 cursor-pointer'
            />
            <h2 className='text-2xl p-4'>Best <span className='font-bold'>meals</span></h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='flex text-xl py-4'>
                        <TbTruckDelivery size={30} className='mr-4'/>Orders
                    </li>
                    <li className='flex text-xl py-4'>
                        <MdFavorite size={30} className='mr-4'/>Favorites
                    </li>
                    <li className='flex text-xl py-4'>
                        <FaWallet size={30} className='mr-4'/>Wallet
                    </li>
                    <li className='flex text-xl py-4'>
                        <MdHelp size={30} className='mr-4'/>Help
                    </li>
                    <li className='flex text-xl py-4'>
                        <AiFillTag size={30} className='mr-4'/>Promotions
                    </li>
                    <li className='flex text-xl py-4'>
                        <BsFillSaveFill size={30} className='mr-4'/>Best ones
                    </li>
                    <li className='flex text-xl py-4'>
                        <FaUserFriends size={30} className='mr-4'/>Invite friends
                    </li>
                </ul>
            </nav>
        </div>

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
// 25. dodajemo overlay div za tamnu pozadinu
// 26. overlay divu dodajemo klasu
// 26. dodajemo div za side drawer menu
// 27. side drawer menu divu dodajemo klasu
// 28. u side drawer menu dodajemo react ikonicu
// 29. react ikonici dodajemo atribut size
// 30. react ikonici dodajemo klasu
// 31. dodajemo h2 element i unutar njega span element
// 32. dodajemo nav element
// 33. unutar nav elementa dodajemo ul element sa klasom
// 34. unutar ul elementa dodajemo li elemente sa klasama
// 35. unutar li elemenata dodajemo react ikonice sa atributom size i klasom
// 36. dodajemo useState react hook za pojavljivanje mobilnog menija
// 37. divu za lijevu stranu dodajemo onClick dogadaj
// 38. dodajemo uslov za pojavljivanje overlay div elementa
// 39. u side drawer meniju uredujemo klasu kao uslov
// 40. React ikonici AiOutlineClose dodajemo onClick dogadaj

