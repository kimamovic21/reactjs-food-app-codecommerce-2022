import React, { useState } from 'react';
import {data} from '../data/data.js';

const Food = () => {
  console.log(data);

  const [foods, setFoods] = useState(data);

  //Filter type for food (burgers, pizza, ...)
  const filterType = (category) => {
    setFoods(
        data.filter((food) => {
            return food.category === category;
        })
    );
  };

  //Filter by price
  const filterPrice = (price) => {
    setFoods(
        data.filter((food) => {
            return food.price === price;
        })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>

        <h1 className='text-[#ff9b06] font-bold text-4xl text-center'>
            Top rated menu items
        </h1>

        {/* Filter row */}
        <div className='flex flex-col lg:flex-row justify-between'>

            {/* Filter type */}
            <div>
                <p className='font-bold text-gray-700'>
                    Filter type
                </p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={() => setFoods(data)}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-[#efefef]'>
                        All
                    </button>
                    <button onClick={() => filterType('burger')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-[#efefef]'>
                        Burgers
                    </button>
                    <button onClick={() => filterType('pizza')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-[#efefef]'>
                        Pizzas
                    </button>
                    <button onClick={() => filterType('salad')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-[#efefef]'>
                        Salads
                    </button>
                    <button onClick={() => filterType('chicken')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-[#efefef]'>
                        Chicken
                    </button>
                </div>
            </div>

            {/* Filter price */}
            <div>
                <p className='font-bold text-gray-700'>
                    Filter price
                </p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={() => filterPrice('$')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-[#efefef]'>
                        $
                    </button>
                    <button onClick={() => filterPrice('$$')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-[#efefef]'>
                        $$
                    </button>
                    <button onClick={() => filterPrice('$$$')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-[#efefef]'>
                        $$$
                    </button>
                    <button onClick={() => filterPrice('$$$$')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-[#efefef]'>
                        $$$$
                    </button>
                </div>
            </div>
        </div>

        {/* Display foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((food, index) => (
                <div key={index}
                     className='border rounded-lg shadow-lg hover:scale-105 duration-200 ease-in-out'>
                    <img src={food.image} 
                         alt={food.name}
                         className='w-full h-[200px] object-cover' 
                    />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{food.name}</p>
                        <p>
                            <span className='bg-orange-500 text-[#efefef] p-1 rounded-full'>{food.price}</span>
                        </p>
                    </div>
                </div>  
            ))}
        </div>

    </div>
  )
}

export default Food;





// 1. importujem data.js fajl
// 2. dodajemo h1 element
// 3. dodajemo filter row div element
// 4. unutar div elementa za filter row dodajemo div element za filter type
// 5. dodajemo div element za filter price
// 6. unutar div elementa za filter type dodajemo p i div element
// 7. unutar div elementa dodajemo button elemente
// 8. unutar div elementa za filter price dodajemo p i div element
// 9. unutar div elementa dodajemo button elemente
// 10. roditelj div elementu dodajemo klasu
// 11. h1 elementu dodajemo klasu
// 12. div elementu za filter row dodajemo klasu
// 13. dodajemo klase elementima unutar div elemenata
// 15. dodajemo display foods grid
// 16. dodajemo useState react hook
// 17. dodajemo foods.map javascript metodu
// 18. unutar foods.map metoda dodajemo roditelj div
// 19. unutar roditelj div (js .map metoda) elementa dodajemo img element i div element
// 20. unutar div elementa dodajemo p elemente i span element
// 21. display foods div elementu dodajemo klasu
// 21. div (js .map metoda) elementu dodajemo klasu
// 22. dodajemo klasu img elementu
// 23. dodajemo filterType funkciju
// 24. dodajemo filterPrice funkciju
// 25. unutar div elementa za filter type dodajemo onClick dogadaje button elementima
// 26. u div elementu za filter price button elementima dodajemo onClick dogadaj

