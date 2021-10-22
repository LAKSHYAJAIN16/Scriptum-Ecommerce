import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Icon } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Home } from '@material-ui/icons';
import logo from './assets/logo.jpg'

import useStyles from './NavStyles';

const Navbar = ({items, showCartFunction, showHomeFunction}) => {
    console.log(items);
    const classes = useStyles();
    return (
        <>
           <AppBar position="fixed" className={classes.appBar} color="inherit">
               <Toolbar>
                   <Typography variant="h6" className={classes.title} color="inherit">
                       <img src={logo} alt="Scriptum" height="25px" className={classes.image} />
                       Scriptum
                   </Typography>
                   <div className={classes.grow} />
                   <div className={classes.button}>
                       <IconButton aria-label="Cart" color="inherit" onClick={showCartFunction}>
                           <Badge badgeContent={items} color="secondary">
                               <ShoppingCart />
                           </Badge> 
                       </IconButton>

                       <IconButton aria-label="Home" color="inherit" onClick={showHomeFunction}>
                            <Home />
                       </IconButton>

                   </div>
               </Toolbar>
           </AppBar>
        </>
    )
}

export default Navbar
