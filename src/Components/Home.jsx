import React from 'react';
import {makeStyles} from '@material-ui/core';
import LivingRoom from '../asset/andrew-oyen-kitchen-large-opening-1588528101.jpg'

const useStyles =makeStyles({
    home:{
        maxHeight: '100%',
        margin: '15vh auto',
        // marginBottom: '10vh',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    name:{
        minWidth:'330px',
        height: '30vh',
        margin: 'auto 5vw',
        paddingTop:'2vh',
        paddingBottom:'5vh',
        fontSize: 'calc(3em + 1vmin)',
        color: '#444545',
        letterSpacing:'0.12em',
        display: 'inline-block',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        
    },
    first:{
        opacity:1,
        animation: '$first 2s',
        height:'10vh',
        fontSize: 'calc(3rem + 1vmin)',
        lineHeight: '10vh'
    },
    last:{
        opacity:1,
        height: '10vh',
        animation: '$last 3s',
        fontSize: 'calc(3rem + 1vmin)',
        lineHeight: '10vh'
    },
    title:{
        fontSize: 'calc(0.7rem + 1vmin)',
        display:'flex',
        letterSpacing:'0.3rem',
        flexDirection:'column',
        margin: '3vh auto',
        opacity:1,
        animation:'$title 6s'
    },
    '@keyframes first':{
        '0%': {opacity:0, height:0},
        '20%': {opacity:0, height: 0},
        '30%': {opacity:0, height: 0},
        '80%': {opacity:0.8, height: '10vh'},
        '90%': {opacity:0.9, height: '10vh'},
        '100%': {opacity:1, height:'10vh'}
    },
    '@keyframes last': {
        '0%': {opacity:0, height:'-10vh'},
        '20%': {opacity:0,height:0},
        '80%': {opacity:0.8, height: '10vh'},
        '90%': {opacity:0.9, height: '10vh'},
        '100%': {opacity:1, height:'10vh'}
    },
    '@keyframes title':{
        '0%': {opacity:0},
        '100%': {opacity:1},
    },
    pic:{
        minWidth:'330px',
        margin: 'auto 5vw',

    },
    livingroom:{
        width:'100%',
        boxShadow: '4px 4px 8px 0px #444545',
        opacity:1,
        animation: '$livingroom 6s'
    },
    '@keyframes livingroom':{
        '0%': {opacity:0},
        '100%': {opacity:1}
    }
})

function Home(){
    const classes=useStyles();
    return(
        <div className={classes.home}>
            <div className={classes.name}>
                <div className={classes.first}>Real</div>
                <div className={classes.last}>Estate</div>
                <div className={classes.title}>
                    <span>Japanese & English</span>
                    <span>Bilingual Real Estate Agent</span> 
                </div>
            </div>
            <div className={classes.pic}>
                <img src={LivingRoom} alt="/" className={classes.livingroom}></img>
            </div>
        </div>
    )
}

export default Home;