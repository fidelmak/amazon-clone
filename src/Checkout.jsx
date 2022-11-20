import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal  from './Subtotal';

function Checkout() {
  

  const [{ basket }] = useStateValue(); 
  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img className='checkout__ad' src="https://m.media-amazon.com/images/I/51iLgsYQyXL.jpg" alt="" />
        {basket?.length ===0 ? (
          <div><h2>Your shopping Cart is empty</h2>
          
          <p>You have no items in your basket. To buy one or more items, click "Add to Cart" next to the item </p>
          </div>
        
        ):(
          <div>
            <h2 className='checkout__title'>
              Your Shopping Cart</h2>
            {/* list out all the checked out product */}
            {basket?.map((item)=>(
            
            
            <CheckoutProduct 
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
            ))}
           

          </div>

        )}
        </div>
        <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout