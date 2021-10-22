import React, {useState, useEffect} from 'react';
import { Grid } from '@material-ui/core';   
import Product from './Product';

const test_products = [
    {id : 1, Name : "Shoes", description : "Running Shoes" , price : "50$", image : "data:image/jpeg;base64,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"},
    {id : 2, Name : "Kettle", description : "The Best Kettle", price : "100$"}
];

const Products = ({cart_callback}) => {

    //Set State
    const [products, setProducts] = useState([]);

    //Fetch the Products
    const fetch_products = () =>{
        fetch("https://lakshyajain16.github.io/assets/products-list.json")
          .then(r => r.text())
          .then(text => {
            //console.log('text decoded:', text);
            const products_temp = JSON.parse(text);               
            setProducts(products_temp);
            console.log(products);
          });
    }

    useEffect(() => {
        fetch_products();
    }, []);

    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {
                    //JS now
                    products.map((product) => (
                        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} addToCart={cart_callback}/>
                        </Grid> 
                      ))
                };
            </Grid>
        </main>
    )
}

export default Products;
