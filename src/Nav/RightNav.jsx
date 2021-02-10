import React, {useState} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from '../Components/Home';
import About from '../Components/About';
import Resource from '../Components/Resource';
import RealEstate from '../Components/RealEstate';
import Contact from '../Components/Contact';
import {makeStyles} from '@material-ui/core';
import styled from 'styled-components'

const Ul = styled.ul`
list-style: none;
display:flex;
flex-flow:row nowrap;
min-width: 250px;
background: rgba(110, 130, 151);
box-shadow: 4px 4px 8px 0px #444545;
width: 100vw;
position: fixed;
top:0;
margin-top:0;
height: 8vh;
line-height: 8vh;
z-index: 1;
justify-content: space-around;
padding-inline-start: 0;
li {
    margin: auto 0;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    background-color: rgba(110, 130, 151);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 50%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      margin: 0 auto;
    }
  }
`;
const useStyles = makeStyles({
    navbar:{
        width:'100%',
    },
    link:{
        color: '#b1d6d7',
        fontWeight: '550',
        textDecoration: 'none',
        fontSize: 'calc(1em + 1vmin)',
        transitionDuration: '0.6s',
        '&:hover':{
            color: '#Ffff',
            fontSize: 'calc(1.2em + 1vmin)',
            fontWeight: '900'
        }
    }
});

function RightNav(props){
    const classes =useStyles();
    
    return(
        <div className={classes.navbar}>
            <Ul open={props.open} >
                <li  onClick={()=>props.setOpen(!props.open)}><Link to='/chizuki_watanabe' className={classes.link}>Chizuki Watanabe</Link></li>
                <li onClick={()=>props.setOpen(!props.open)}><Link to='/about' className={classes.link}>About</Link></li>
                <li onClick={()=>props.setOpen(!props.open)}><Link to='/resource' className={classes.link}>Resources</Link></li>
                <li onClick={()=>props.setOpen(!props.open)}><Link to='/realestate' className={classes.link}>Real Estate</Link></li>
                <li onClick={()=>props.setOpen(!props.open)}><Link to='/contact' className={classes.link}>Contact</Link></li>
            </Ul>
        <div>   
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/about"><About/></Route>
                <Route exact path="/resource"><Resource/></Route>
                <Route exact path="/realestate"><RealEstate/></Route>
                <Route exact path="/contact"><Contact/></Route>
                <Route exact path="/chizuki_watanabe"><Home/></Route>
            </Switch>
        </div>
        </div>
    )
}

export default RightNav;