import React from 'react';
import { Card, Typography }from '@material-ui/core';
import { CardMedia }from '@material-ui/core';
import { CardContent }from '@material-ui/core';
import { CardActions }from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './CardStyles'

const Product = ({ product , addToCart}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
          <CardMedia className={classes.media} image={product.image} title={product.Name}/>
          <CardContent>
            <div className={classes.cardContent}>
              <Typography variant='h5' gutterBottom> {product.name} </Typography>
              <Typography variant='h5'> {product.price_string} </Typography>
              <Typography></Typography>
            </div>
            <Typography variant='h5' color='textSecondary'>{product.description}</Typography>
          </CardContent>
          <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="Add to Cart" onClick={() => addToCart(product, 1)}>
              <AddShoppingCart />
            </IconButton>
          </CardActions>
        </Card>
    )
}

export default Product
