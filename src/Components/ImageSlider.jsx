import React, {useState} from 'react'
import { RealEstateData } from './RealEstateData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import {makeStyles} from '@material-ui/core';

const useStyles =makeStyles({
    imageSlider:{
        maxWidth:'100vw',
        maxHeight: '100%',
        margin: '5vh 10vw',
        display:'flex',
        flexDirection: 'column',
        flexWrap:'wrap',
        justifyContent: 'center'
    },
    slider:{
        position: 'relative',
        height:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin: '0 4vw'
    },
    leftArrow:{
        position:'absolute',
        top:'100%',
        left:'32px',
        fontSize:'calc(2em + 1vmin)',
        color: 'rgba(177, 214, 215, 0.7)',
        // zIndex: 10,
        cursor: 'pointer',
        userSelect:'none'
    },
    rightArrow:{
        position:'absolute',
        top:'100%',
        right:'32px',
        fontSize:'calc(2em + 1vmin)',
        color: 'rgba(177, 214, 215, 0.7)',
        // zIndex: 1,
        cursor: 'pointer',
        userSelect:'none'
    },
    image:{
        minWidth:'320px',
        width: '90vw',
        // borderRadius: '10px',
        boxShadow: '4px 4px 8px 0px #444545',
    },
    slide:{
        opacity:0,
        transitionDuration:'2s ease',
        '&.active':{
        opacity: 1,
        transitionDuration:'2s',
        transform:'scale(1.08)'
    }
    },
    
})
const ImageSlider=({slides})=>{
    const classes = useStyles();
    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current +1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }

    // console.log(current)

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className={classes.imageSlider}>
            <section className={classes.slider}>
            <FaArrowAltCircleLeft className={classes.leftArrow} onClick={prevSlide}/>
            <FaArrowAltCircleRight className={classes.rightArrow} onClick={nextSlide}/>
            {RealEstateData.map((slide, index)=>{
                return(
                    <div className={index === current ? 'active' : 'slide'} key={index}>
                        {index === current && (
                           <img src={slide.image} alt="/home" className={classes.image}/>
                        )}
                    </div>
                )
            })}
            </section>
        </div>
    )
}
        
export default ImageSlider
// 
// 