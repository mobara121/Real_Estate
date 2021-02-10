import React, {useState} from 'react';
import RightNav from './RightNav';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    burger:{
        width:'2rem',
        height:'2rem',
        position:'fixed',
        top:'10px',
        right: '20px',
        zIndex:20,
        display:'none',
        '@media (max-width: 768px)':{
            display: 'flex',
            justifyContent:'space-around',
            flexFlow:'column nowrap'
        }
    },
    line:{
        width:'2rem',
        height:'0.25rem',
        borderRadius: '10px',
        transformOrigin:'1px',
        transition:'all 0.3s linear',
    }
})

function Burger(){
    const classes = useStyles();
    const [open, setOpen] =useState(false);
    
    return(
        <>
            <div className={classes.burger} open={open} onClick={()=>setOpen(!open)}>
                <div className={classes.line} style={open? {backgroundColor:'#b1d6d7', transform:'rotate(45deg)'} : {backgroundColor:'#6e8297', transform:'rotate(0)'} } />
                <div className={classes.line} style={open? {backgroundColor:'#b1d6d7', transform:'translateX(100%)', opacity:0} : {backgroundColor:'#6e8297', transform:'translateX(0)', opacity:1} }/>
                <div className={classes.line} style={open? {backgroundColor:'#b1d6d7', transform:'rotate(-45deg)'} : {backgroundColor:'#6e8297', transform:'rotate(0)'} }/>
            </div>
            <RightNav open={open} setOpen={setOpen}/>
        </>
    )
}

export default Burger;