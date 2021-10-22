import React, {useLayoutEffect, useState} from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import CartItem from './CartItem.jsx';
import classes from './CartStyles.js';

const Cart = ({cart, cartLength, cartTotal, emptyCartCallback, increaseCallback, decreaseCallback}) => {
    const isEmpty = cartLength === 0;
    const [fcart, setFcart] = useState(cart);


    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart</Typography>
    );
    
    const FilledCart = () =>(
        <>
           <Grid container spacing={3}>
               {fcart.map((item) =>(
                   <Grid item xs={12} sm={4} key={item.id}>
                       <CartItem product={item} addItemQuantity={increaseCallback} removeItemQuantity={decreaseCallback}/>
                   </Grid>
               ))}
           </Grid>
            <div className={classes.cardDetails}>
               <Typography variant="h4">Subtotal: {cartTotal}</Typography>
               <div>
                  <Button className={classes.emptyButton} 
                          size="large" 
                          type="button" 
                          variant="contained" 
                          color="secondary"
                          onClick={emptyCartCallback}>Empty cart</Button>
                   <br />
                   <br />
                  <Button className={classes.emptyButton} 
                          size="large" 
                          type="button" 
                          variant="contained" 
                          color="primary"
                          onClick={emptyCartCallback}>Checkout</Button>
               </div>
           </div>
        </>
    );

    const FormatCart = () =>{
        //Increment Quantities
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
                temp_cart.splice(index);
            }
            else if(!found){
                auxiliry.push(item);
            }
            index++;
        }));

        setFcart(temp_cart);
        console.log(temp_cart);
    }

    return (
        <div>
          <Container>
              <div className={classes.toolbar}>
                  <Typography className={classes.title} variant="h3">Your Cart</Typography>
                  {isEmpty? <EmptyCart /> : <FilledCart />}
              </div>
          </Container>
        </div>
    )
}

export default Cart