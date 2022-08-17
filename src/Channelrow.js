import React from 'react'
import './Channelrow.css';
import { Avatar } from '@material-ui/core'
import Verified from '@material-ui/icons/CheckCircleOutlineOutlined';
function Channelrow(
    {image,channel,subs,noofvideos,description,verified}
) {
  return (
    <div className='channelrow' >
      <Avatar className='channelrow_logo' alt={channel} src={image} />
      <div className="channelrow_text">
        <h4>{channel} {verified && <Verified></Verified>}</h4>
        <p>{subs} Subscribers • {noofvideos} Videos</p>
        <p>{description}</p>
        </div> 
    </div>
  )
}

export default Channelrow