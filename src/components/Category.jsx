import React from 'react';
import { categories } from '../data/data.js';

const Category = () => {
  console.log(categories);

  return (
    <div className='sm:max-w-[1640px] px-7 py-12'>

        <h2 className='text-[#ffa600] font-bold text-4xl text-center'>
            Top rated menu items
        </h2>

        {/* Categories */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 py-6'>
           {categories.map((category, index) => (
            <div className='bg-gray-200 rounded-lg p-4 flex justify-between items-center'
                 key={index}>
                <h2 className='font-bold sm:text-xl'>
                    {category.name}
                </h2>
                <img className='w-12'
                     src={category.image} 
                     alt={category.name } 
                />
            </div>
           ))}
        </div>

    </div>
  )
}

export default Category;




// 1. dodajemo h2 element
// 2. dodajemo categories div
// 3. dodajemo javascript map metodu
// 4. unutar javascript map metoda dodajemo div kao roditelj element
// 5. unutar tog div elementa dodajemo h2 element
// 6. dodajemo img element
// 7. roditelj div elementu dodajemo klasu
// 8. h2 elementu dodajemo klasu
// 9. categories div elementu dodajemo klasu
// 10. div elementu unutar javascript mat metoda dodajemo klasu
// 11. h2 elementu dodajemo klasu
// 12. img elementu dodajemo klasu
// 13. 
