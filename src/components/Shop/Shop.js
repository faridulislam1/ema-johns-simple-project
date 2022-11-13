
import React from 'react';
import fakeData from '../../fakeData';
import{ useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {

      const first20 = fakeData.slice(0,20);
      const [products,setProducts]=useState(first20);

      const[cart,setCart]=useState([]);
      const handleAddProduct = (product)=>{  
        const newCart=[...cart,product];
         setCart(newCart);
      }

    return (
        <div className="shop-cointainer">
           <div className="product-cointainer">
          
            {
              products.map(pd=><Product 
                handleAddProduct={handleAddProduct}
                product={pd}>
                    
                </Product>)
            }
           </div>
           <div className="card-cointainer">
            <Cart cart={cart}></Cart>

           </div> 
         
        
        </div>
    );
};

export default Shop;