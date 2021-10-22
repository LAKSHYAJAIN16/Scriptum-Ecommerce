import React from "react";
import { Card, Typography, IconButton }from '@material-ui/core';
import { CardMedia }from '@material-ui/core';
import { CardContent }from '@material-ui/core';
import { CardActions }from '@material-ui/core';

import useStyles from './CardStyles'
import { RemoveSharp } from "@material-ui/icons";
import { Add } from "@material-ui/icons";

const CartItem = ({ product , removeItemQuantity, addItemQuantity}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
          <CardMedia className={classes.media} image={product.image} title={product.Name}/>
          <CardContent>
            <div className={classes.cardContent}>
              <Typography variant='h5' gutterBottom> {product.name} </Typography>
              <Typography variant='h5'> {product.price_string} </Typography>
              <br />
            </div>
            <Typography variant='h5' color='textSecondary'>{product.description}</Typography>
          </CardContent>
          <CardActions disableSpacing className={classes.cardActions}>
          </CardActions>
        </Card>
    )
}

export default CartItem;