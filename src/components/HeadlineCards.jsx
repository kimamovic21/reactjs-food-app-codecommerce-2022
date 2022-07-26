import React from 'react';
import Card from '../components/Card';

const HeadlineCards = (props) => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>

        <Card name="Sun's Out, BOGO's Out" 
              description="Through 8/26"
              buttonText="Order Now" 
              imgLink="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" 
              imgAlt="/" 
        />
        
        <Card name="Sun's Out, BOGO's Out" 
              description="New Restaurants"
              buttonText="Order Now" 
              imgLink="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" 
              imgAlt="/" 
        />
        
        <Card name="We Deliver Desserts Too" 
              description="Tasty Treats"
              buttonText="Order Now" 
              imgLink="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              imgAlt="/" 
        />

    </div>
  )
}

export default HeadlineCards;





// 1. dodajemo card div unutar roditelj div elementa
// 2. roditelj div elementu dodajemo klasu
// 3. importujemo Card komponentu
// 4. dodajemo Card komponentu sa atributima (props)
