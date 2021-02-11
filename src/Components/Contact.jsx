import React from 'react';
import {makeStyles} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Form } from 'reactstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const useStyles =makeStyles({
    contact:{
        minWidth: '320px',
        maxHeight: '100%',
        margin: '15vh auto',
        display:'flex',
        flexDirection: 'column',
        flexWrap:'wrap',
        justifyContent: 'center',
        color: '#444545',
        fontSize:'1.2rem',
        fontWeight:'600'
    },
    contactUpper:{
        minWidth: '320px',
        minHeight: '30vh',
        margin: '4vh auto',
        opacity: 1,
        animation: '$aboutUpper 1s ease-in'
    },
    '@keyframes aboutUpper':{
        '0%': {opacity:0},
        '100%': {opacity:1}
    },
    iconWrapper:{
        display: 'flex', justifyContent:'center'
    },
    iconContainer:{
        backgroundColor:'#b1d6d7',
        width:'40px',
        height:'40px',
        margin:'20px',
        borderRadius:'50%',
        cursor:'pointer',
        '&:hover':{
            backgroundColor:'#c8f0f1',
            color:'#000'
        }
    },
    icon:{
        margin:'8px auto'
    },
    contactLower:{
        minWidth: '320px',
        minHeight: '50vh',
        margin: '5vh auto',
        textAline: 'center',
        opacity: 1,
        animation: '$aboutLower 2s ease-in '       
    },
    '@keyframes aboutLower':{
        '0%': {opacity:0},
        '100%': {opacity:1}
    },
    p:{
        margin:'auto 5vw',
        fontSize:'1em',
        textAlign:'left'
    },
    form:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
    },
    text:{
        margin:'2vh auto',
        minWidth:'300px'
    },
    message:{
        margin:'2vh auto',
        minWidth:'300px',
        // height:'50vh',
        '& .MuiInputBase-input':{
            height:'10rem'
        },        
    },
    btn:{
        margin:'2vh auto',
        width:'100px',
        height: '50px',
        borderRadius:'5px',
        border:'solid 1px #b1d6d7',
        backgroundColor: '#b1d6d7',
        color: '#444545',
        cursor:'pointer',
        '&:hover':{color:'#090a0a', backgroundColor:'#c8f0f1', border:'solid 1px #c8f0f1',}
    }
})

function Contact(){
    const classes=useStyles();
    return(
        <div className={classes.contact}>
            <div className={classes.contactUpper}>
                <p>Real Estate</p>
                <p>Real Estate</p>
                <p>address:</p>
                <p>317-XXX-XXXX</p>
                {/* <p>Chizuki.lothamer@markdietel.com</p> */}
                <p>sample@sample.com</p>
                <div className={classes.iconWrapper}>
                    <div className={classes.iconContainer}><FacebookIcon className={classes.icon}/></div>
                    <div className={classes.iconContainer}><LinkedInIcon className={classes.icon}/></div>                    
                </div>
            </div>
            <div className={classes.contactLower}>
                <div className={classes.p} lang="jp">インディアナでのお家ご購入に関して、なんでもお気軽にお問い合わせください。</div>
                <Form className={classes.form}>
                    <TextField
                        required
                        id="outlined-required"
                        label="お名前/Name"
                        // defaultValue="Hello World"
                        variant="outlined"
                        className={classes.text}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="お電話番号/Tel"
                        // defaultValue="Hello World"
                        variant="outlined"
                        className={classes.text}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        // defaultValue="Hello World"
                        variant="outlined"
                        className={classes.text}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="メッセージ/Messsage"
                        multiline
                        rows={5}
                        // defaultValue="Hello World"
                        variant="outlined"
                        className={classes.message}
                    />
                    <button className={classes.btn} type="submit" value="Send"><EmailIcon/></button>
                </Form>
            </div>
        </div>
    )
}

export default Contact;