import React from 'react'
import './Videorow.css'

function Videorow({views,subs,description,timestamp,channel,title,image}) {
  return (
    <div className='videorow' >
        <img src={image} alt="Channel.." />
        <div className="videorow_text">
            <h3 className='videorow_h' >{title}</h3>
            <p className='videorow_ph' > 
                {channel} • <span className='videorow_subs' ><span className='videorow_subsno' >{subs}</span>  Subscribers </span>• {views} Views • {timestamp}
            </p>
            <p className='videorow_pd'>{description}</p>
        </div>
    </div>
  )
}

export default Videorow