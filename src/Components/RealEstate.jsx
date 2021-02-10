import React from 'react';
import ImageSlider from './ImageSlider';
import {makeStyles} from '@material-ui/core';
import { RealEstateData } from './RealEstateData';

const useStyles = makeStyles({
    realEstate:{
        maxHeight: '100%',
        margin: '10vh 10vw 20vh 10vw',
        display:'flex',
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'center',
        opacity: 1,
        animation: '$realestate 1.5s ease-in '
    },
    '@keyframes realestate':{
        '0%': {opacity:0},
        '100%': {opacity:1}
    },
    realEstateLower:{
        width:'70vw',
        minWidth:"330px",
        height: "150px",
        margin: '1vh 4vw 5vh 4vw',
        // padding: '3vh',
        border: "0.1rem solid #a8aaaa",
        boxShadow: '4px 4px 8px 0px #444545',
    }
})
function RealEstate(){
    const classes=useStyles();
    return(
        <div className={classes.realEstate}>
            <p style={{color: '#444545', textAlign:'left', fontSize:'1.2em'}}>最新のおうち情報です。より詳細についてはどうぞお気軽にお問い合わせください。</p>
            <ImageSlider slides={RealEstateData}/>
            <div className={classes.realEstateLower}>
                <p style={{color:'#444545'}}>おうち情報</p>
            </div>
        </div>
    )
}

export default RealEstate;