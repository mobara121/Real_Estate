import React from 'react';
import {makeStyles} from '@material-ui/core';
import Snap from '../asset/StepstoLicensingCO_05.jpg'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import HomeIcon from '@material-ui/icons/Home';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles =makeStyles((theme)=>({
    about:{
        maxHeight: '100%',
        margin: '15vh 10vw 20vh 10vw',
        display:'flex',
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'center'
    },
    aboutUpper:{
        minWidth: '330px',
        minHeight: '50vh',
        margin: '0 10vw',
        color:'#444545',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        opacity: 1,
        animation: '$aboutUpper 2s ease-in'
    },
    '@keyframes aboutUpper':{
        '0%': {opacity:0},
        '100%': {opacity:1}
    },
    aboutLower:{
        minwidth:'330px',
        minHeight: '50vh',
        margin: '0 4vw', 
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around',
        opacity: 1,
        animation: '$aboutLower 2.5s ease-in '       
    },
    '@keyframes aboutLower':{
        '0%': {opacity:0},
        '100%': {opacity:1}
    },
    snap:{
        width:"calc(90% + 2vmax)",
        margin: '0 auto'
    },
    span:{
        width:"calc(90% + 2vmax)",
        margin: '3vh auto',
        fontSize:'calc(1em + 1vw)',
        textAlign:'center',
        color:'#444545',
    },
    paper: {
        padding: '6px 16px',
      },
      secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
      },
}));

function About(){
    const classes=useStyles();
    return(
        <div className={classes.about}>
            <div className={classes.aboutUpper}>
                <img src={Snap} alt='snap' className={classes.snap}></img>
                <span className={classes.span}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium quam vulputate dignissim suspendisse in est. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. </span>
            </div>
            <div className={classes.aboutLower}>
                <span className={classes.span} lang="jp">渡辺 稚月　経歴</span>
                <Timeline align="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            2006
                        </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot>
                            <FlightTakeoffIcon />
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <div variant="h6" component="h6" lang="jp">
                            米国移住
                            </div>
                            {/* <Typography>大学卒業後…</Typography> */}
                        </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            2012
                        </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot  style={{backgroundColor:'#6e8297'}}>
                            <CastForEducationIcon style={{backgroundColor:'#6e8297'}}/>
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <div variant="h6" component="h1" lang="jp">
                            資格取得
                            </div>
                            {/* <div>リアルターとなる</div> */}
                        </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined">
                            <HomeIcon style={{fill:'#444545'}}/>
                        </TimelineDot>
                        <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <div variant="h6" component="h1" lang="jp">
                            活動開始
                            </div>
                            {/* <Typography>リアルターとして活動開始</Typography> */}
                        </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot color="secondary">
                            <DirectionsRunIcon />
                        </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <div style={{fontSize:'0.7em'}} lang="jp">
                            活動中
                            </div>
                            <Typography></Typography>
                        </Paper>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    )
}

export default About;