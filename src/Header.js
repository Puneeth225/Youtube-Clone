import React,{useState} from 'react';
import './Header.css';
import VideoCall from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';
import Notifications from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import Search from '@material-ui/icons/Search';
import  Menu  from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";

function Header() {
  const [inputSearch,setInputSearch] = useState('');
  return (
    <div className="header" >
        {/* <h1>I am a header</h1> */}
        
        <div className="header_left">
        <Menu />
        <Link to={"/"}>
        <img className='header_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png" alt='You-Tube' />
        </Link>
        
        </div>
        <div className="header_input">
        <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder='Search' type="text" />
        <Link to={`/search/${inputSearch}`} >
        <Search className="header_srch" />
        </Link>
        
        </div>
        <div className="header_icons">
        <VideoCall className='header_icon' />
        <Apps className='header_icon' />
        <Notifications className='header_icon' />
        <Avatar alt='Puneeth' src = "m_punpof.jpg" />
        </div>
        
    </div>
  )
}

export default Header