import React , {useState} from 'react';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

const App = () => {
    const [cart, setCart] = useState([]);
    const [cartLength, setCartLength] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const [showCart, setShowCart] = useState(false);
    const [fcart, setFcart] = useState([]);

    //Cart Add Callback
    let addToCart = (product, quantity) =>{
        for (let i = 0; i < quantity; i++) {
            //Update Cart Products
            let shallow_cart = cart;
            shallow_cart.push(product);
            setCart(shallow_cart);

            //Update Cart Total
            let shallow_cart_total = cartTotal;
            shallow_cart_total += product.price_number;
            setCartTotal(shallow_cart_total);
        }

        //Update cart length
        setCartLength(cart.length);
    }

    //Cart Empty Callback
    let emptyCart = () =>{
        setCart([]);
        setCartLength(0);
        setCartTotal(0);
        console.log(cart);
    }

    //Navigation Callbacks
    let onCartShow = () =>{
        formatCart();
        setShowCart(true);
    }
    let onHomeShow = () =>{
        setShowCart(false);
    }

    //Method to format cart
    const formatCart = () =>{
        //Increment quantity
        let temp_cart = cart;
        temp_cart.map((item) => {
            let quantity = 0;
            temp_cart.map((subItem => {
                subItem.id === item.id 
                   ? quantity += 1
                   : quantity = quantity;
            }));
            item.quantity = quantity;
        });

        //Remove all unwanted quantities
        for (let iter = 0; iter < 8; iter++) {
            let auxiliry = [];
            let index = 0;
            temp_cart.map((item =>{
                let found = false;
                auxiliry.map((subItem =>{
                    if(subItem.id === item.id){
                        found = true;
                    }
                }));
    
                if(found){
                    console.log(`removed ${temp_cart[index].name}`)
                    temp_cart.splice(index, 1);
                }
                else if(!found){
                    auxiliry.push(item);
                }
                index++;
            }));
    
            setFcart(temp_cart);
            console.log(temp_cart);
        }
    }

    //Decrease Quantity Callback
    const decreaseItemQuantity = (id) =>{
        let temp_cart = fcart;
        let u_u = 0;
        temp_cart.map((item) => {
            if(item.id == id){
                item.quantity -= 1;
            }
        });

        setFcart(temp_cart);
        return u_u;
    }
    const increaseItemQuantity = (id) =>{
        console.log("actually called")
        let temp_cart = fcart;
        let u_u = 0;
        temp_cart.map((item) => {
            if(item.id == id){
                item.quantity += 1;
                u_u = item.quantity;
                console.log("found my match");
            }
        });

        setFcart(temp_cart);
        return u_u;
    }

    //Set Cart Callback
    const setFCartExternal = (value) =>{
        setFcart(value);
    }

    return (
        <div>
              <Navbar items={cartLength} showCartFunction={onCartShow} showHomeFunction={onHomeShow}/>
              {showCart
               ? <Cart 
                     cart={fcart} 
                     cartLength={cartLength} 
                     cartTotal={cartTotal} 
                     emptyCartCallback={emptyCart} 
                     decreaseCallback={decreaseItemQuantity} 
                     increaseCallback={increaseItemQuantity}
                     setCartCallback={setFCartExternal}
                  />
               : <Products cart_callback={addToCart}/>
              }
        </div>
    )
}

export default App