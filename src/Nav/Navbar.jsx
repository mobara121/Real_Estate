import React from 'react';
import Burger from './Burger';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    width: '100%',
    height:'55px',
    borderBottom:'2px solid #f1f1f1',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between'
})

function Navbar(){
    const classes = useStyles();
    return(
        <div className={classes.nav}>
            <Burger/>
        </div>
    )
}

export default Navbar;