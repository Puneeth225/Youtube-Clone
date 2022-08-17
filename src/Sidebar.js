import React from 'react'
import SidebarRow from './SidebarRow';
import Home from '@material-ui/icons/Home';
import Whatshot from '@material-ui/icons/Whatshot';
import Subscriptions from '@material-ui/icons/Subscriptions';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import OndemandVideo from '@material-ui/icons/OndemandVideo';
import WatchLater from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import './Sidebar.css';
function Sidebar() {
  return (
    <div className='sidebar' >
        {/* <h1> i am a Sidebar</h1> */}
        <SidebarRow selected Icon={Home} title = "Home" />
        <SidebarRow Icon={Whatshot} title = "Trending" />
        <SidebarRow Icon={Subscriptions} title = "Subscriptions" />
        <hr></hr>
        <SidebarRow Icon={VideoLibrary} title = "Library" />
        <SidebarRow Icon={History} title = "History" />
        <SidebarRow Icon={OndemandVideo} title = "Your Videos" />
        <SidebarRow Icon={WatchLater} title = "Watch Later" />
        <SidebarRow Icon={ThumbUpAltOutlined} title = "Liked Videos" />
        <SidebarRow Icon={ExpandMoreOutlined} title = "Show More" />
        <hr></hr>
    </div>
  )
}

export default Sidebar