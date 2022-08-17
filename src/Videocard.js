import  Avatar from '@material-ui/core/Avatar'
import React from 'react'
import './Videocard.css'

function Videocard({image,title,channel,views,timestamp,channelimage}) {
  return (
    <div className='videocard' >
        <img className='videocardthumbn' src={image} alt=""/>
        <div className="videocardinfo">
            <Avatar className='videocard_avatar' alt={channel} src={channelimage}/>
            <div className="videotext">
              
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} • {timestamp}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Videocard