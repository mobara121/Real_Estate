import React from 'react';
import Navbar from './Nav/Navbar.jsx';
import {HashRouter as Router} from 'react-router-dom';
import './App.css';
import {makeStyles} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const useStyles =makeStyles({
  header:{
    height:'50px',
    width:'100vw',
    background: 'rgba(110,130,151)',
    backgroundImage: 'linear-gradient(90deg),rgba(110, 130, 151, 1) 0%, rgba(110, 130, 151, 1) 55%, rgb(85, 54, 92) 65%, rgb(92, 64, 100) 75%, rgb(107, 70, 117) 90%,rgb(122, 75, 133) 95%, rgba(68, 69, 69, 1) 100%',
    boxShadow: '4px 4px 8px 0px #444545',
    position: 'fixed',
    top: 0
  },
  footerWrapper:{
    color:'#b1d6d7',
    width: '100%',
    position: 'fixed',
    bottom:0,
    height:'calc(5vh + 1max)',
    background: 'rgba(110, 130, 151)',
    backgroundImage: 'linear-gradient(90deg),rgba(110, 130, 151, 1) 0%, rgba(110, 130, 151, 1) 55%, rgb(85, 54, 92) 65%, rgb(92, 64, 100) 75%, rgb(107, 70, 117) 90%,rgb(122, 75, 133) 95%, rgba(68, 69, 69, 1) 100%',
    boxShadow: '0px 4px 8px 8px #444545',
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  footerContainer:{
    display:'flex',
    flexDirection:"row",
    flexWrap:'wrap',
  },
  footer:{
    margin:'5px 20px',
    lineHeight:'5vh',
    fontSize:'0.9em'
  },
  footerIcons:{
    display:'flex',
    flexDirection:"row",
    flexWrap:'wrap',
    margin:'auto 0',
  },
  iconContainer:{
    margin:'10px',
  },
  icon:{
    marginLeft:'calc(1vw + 1vmin)',
    cursor:'pointer',
    '&:hover':{
      color: '#Ffff',
      fontSize: 'calc(1em + 1vmax)',
    }
  }
})

function App() {
  const classes=useStyles();
  return (
    <div className="App">
      <div className={classes.header}></div>
      <Router>
        <div className="navbar">
          <Navbar/>
        </div>
      </Router>
      <footer className={classes.footerWrapper}>
        <div className={classes.footerContainer}>
          <p className={classes.footer}>Real Estate</p>
          <p className={classes.footer} style={{fontSize:'0.7em'}}>&copy; 2021 MIZUE O'BARA, All rights reserved.</p>
        </div>
        <div className={classes.footerIcons}>
          <div className={classes.iconContainer}><FacebookIcon className={classes.icon}/></div>
          <div className={classes.iconContainer}><LinkedInIcon className={classes.icon}/></div>
          <div className={classes.iconContainer}><EmailIcon className={classes.icon}/></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
