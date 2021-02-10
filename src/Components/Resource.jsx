import React from 'react';
import Kitchen from '../asset/kitchen.jpg';
import Bedroom from '../asset/bedroom.jpg';
import Bathroom from '../asset/bathroom.jpg';
import Backyard from '../asset/backyard.jpg';
import Garage from '../asset/garage.jpg';
import Utility from '../asset/utility.jpg';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {makeStyles} from '@material-ui/core';

const useStyles =makeStyles({
    resource:{
        maxHeight: '100%',
        margin: '10vh 10vw 15vh 10vw',
        display:'flex',
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'center',
        opacity: 1,
        animation: '$resourceUpper 1.5s ease-in '
    },
    '@keyframes resourceUpper':{
        '0%': {opacity:0},
        '100%': {opacity:1}
    },
    resourceLower:{
        minwidth:'330px',
        minHeight: '50vh',
        margin: '0 4vw', 
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around',
        opacity: 1,
        animation: '$resourceLower 2s ease-in '       
    },
    '@keyframes resourceLower':{
        '0%': {opacity:0},
        '100%': {opacity:1}
    },
    content:{
        width:"330px",
        height: "450px",
        margin: 'calc(3px + 1vmin)',
        padding: 'calc(3px + 1vmax)',
        border: "0.1rem solid #a8aaaa",
        boxShadow: '4px 4px 8px 0px #444545',
    },
    pic:{
        width:"100%"
    },
    contentP:{
        color:'#444545',
        textAlign:'left',
        marginLeft:'10px'
    },
    contentText:{
        color:'#444545',
        textAlign:'left',
        margin:'10px'
    },
    btn:{
        marginLeft: '180px',
        borderRadius:'5px',
        border:'solid 1px #b1d6d7',
        backgroundColor: '#b1d6d7',
        color: '#444545',
        fontWeight:'600',
        letterSpacing:'0.3em',
        height: '4vh',
        lineHeight:'4vh',
        // padding:'calc(3px + 1vmin)',
        cursor:'pointer',
        '&:hover':{color:'#090a0a', backgroundColor:'#c8f0f1', border:'solid 1px #c8f0f1',}
    },
    arrow:{
        width: '0.8rem',
        height:'0.7rem',
        lineHeight:'1.5rem'
    }
})

function Resource(){
    const classes=useStyles();
    return(
        <div className={classes.resource}>
            <div>
                <p style={{color: '#444545', textAlign:'left', fontSize:'1.2em'}}>アメリカでお家を選ぶときに役立つ様々なチップをご紹介します。</p>
            </div>
            <div className={classes.resourceLower}>
                <div className={classes.content}>
                    <img src={Kitchen} alt="/" className={classes.pic}></img>
                    <p className={classes.contentP}>キッチン</p>
                    <div className={classes.contentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium quam vulputate dignissim suspendisse in est.</div>
                    <button className={classes.btn}>お役立ち情報<ArrowForwardIosIcon className={classes.arrow}></ArrowForwardIosIcon></button>
                </div>
                <div className={classes.content}>
                    <img src={Bedroom} alt="/" className={classes.pic}></img>
                    <p className={classes.contentP}>ベッドルーム</p>
                    <div className={classes.contentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium quam vulputate dignissim suspendisse in est.</div>
                    <button className={classes.btn}>お役立ち情報<ArrowForwardIosIcon className={classes.arrow}></ArrowForwardIosIcon></button>
                </div>
                <div className={classes.content}>
                    <img src={Bathroom} alt="/" className={classes.pic}></img>
                    <p className={classes.contentP}>バスルーム</p>
                    <div className={classes.contentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium quam vulputate dignissim suspendisse in est.</div>
                    <button className={classes.btn}>お役立ち情報<ArrowForwardIosIcon className={classes.arrow}></ArrowForwardIosIcon></button>
                </div>
                <div className={classes.content}>
                    <img src={Utility} alt="/" className={classes.pic}></img>
                    <p className={classes.contentP}>ユーティリティー</p>
                    <div className={classes.contentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium quam vulputate dignissim suspendisse in est.</div>
                    <button className={classes.btn}>お役立ち情報<ArrowForwardIosIcon className={classes.arrow}></ArrowForwardIosIcon></button>
                </div>
                <div className={classes.content}>
                    <img src={Garage} alt="/" className={classes.pic}></img>
                    <p className={classes.contentP}>ガレージ</p>
                    <div className={classes.contentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium quam vulputate dignissim suspendisse in est.</div>
                    <button className={classes.btn}>お役立ち情報<ArrowForwardIosIcon className={classes.arrow}></ArrowForwardIosIcon></button>
                </div>
                <div className={classes.content}>
                    <img src={Backyard} alt="/" className={classes.pic}></img>
                    <p className={classes.contentP}>外観</p>
                    <div className={classes.contentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium quam vulputate dignissim suspendisse in est.</div>
                    <button className={classes.btn}>お役立ち情報<ArrowForwardIosIcon className={classes.arrow}></ArrowForwardIosIcon></button>
                </div>
            </div>
        </div>
    )
}

export default Resource;