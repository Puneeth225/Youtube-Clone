import React from 'react'
import TuneOutlined from "@material-ui/icons/TuneOutlined"
import Channelrow from './Channelrow';
import Videorow from './Videorow';
import './Searchpage.css';
function SearchPage() {
  return (
    <div className='searchpage' >
        <div className="searchpage_filtr">
            <TuneOutlined />
            <h2>FILTER</h2>
        </div>
        <hr></hr>
        <Channelrow
        image = "https://tse2.mm.bing.net/th?id=OIP.jLeNRgGsa1dM4Zt8lqu9EgHaFj&pid=Api&P=0"
        channel = "Music with Puneeth"
        verified
        subs= "521K"
        noofvideos = {8}
        description="You can learn any skill and enjoy it by learning easily."/>
        <hr></hr>
        <Videorow
        views="10K"
        subs = "521K"
        description="Hope You will like it from your heart"
        timestamp="38 seconds ago"
        channel="Music With Puneeth"
        title="Inspiring Music all time"
        image="https://i.ytimg.com/an_webp/NK5cxNJz1Uo/mqdefault_6s.webp?du=3000&sqp=CODu8pcG&rs=AOn4CLBwzHLCwKjOefJHt-X57T7PwMZL1g"
        />
        <Videorow
        views="10K"
        subs = "521K"
        description="Hope You will like it from your heart"
        timestamp="2 minutes ago"
        channel="Music With Puneeth"
        title="Bollywood Music with Trends"
        image="https://i.ytimg.com/vi/YU241Q46JTk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2F8AHalwvlroONpcDRaTIZteFXA"
        />
        <Videorow
        views="10K"
        subs = "521K"
        description="Hope You will like it from your heart"
        timestamp="30 minutes ago"
        channel="Music With Puneeth"
        title="Hollywood Kill Your Hero| Live Streaming"
        image="https://i.ytimg.com/vi/lW3yNRrlBBs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt5HekFgRfMszYzhtPocXh0E1KSg"
        />
        <Videorow
        views="10K"
        subs = "521K"
        description="Hope You will like it from your heart"
        timestamp="3 hours ago"
        channel="Music With Puneeth"
        title="Punjabi Hits every moment"
        image="https://i.ytimg.com/an_webp/lm3yy29vbqM/mqdefault_6s.webp?du=3000&sqp=CPrL8pcG&rs=AOn4CLDxwZbsyL3oUdHHIZzfDUK-j1Oreg"
        />
        <Videorow
        views="10K"
        subs = "521K"
        description="Hope You will like it from your heart"
        timestamp="19 hours ago"
        channel="Music With Puneeth"
        title="See Yourself, The MOTIVATION!!!!"
        image="https://i.ytimg.com/an_webp/c2RnR2EDjOk/mqdefault_6s.webp?du=3000&sqp=COL28pcG&rs=AOn4CLBMRscPHoDeyv6UyfPeVQLvj0zlaA"
        />
        <Videorow
        views="10K"
        subs = "521K"
        description="Hope You will like it from your heart"
        timestamp="5 days ago"
        channel="Music With Puneeth"
        title="Tsunami in ship..., at the danger"
        image="https://i.ytimg.com/an_webp/aaRG1JTXv7E/mqdefault_6s.webp?du=3000&sqp=CPnr8pcG&rs=AOn4CLAj7j8NVlJXsBtjqsr6LYwsGW6o6w"
        />
        <Videorow
        views="10K"
        subs = "521K"
        description="Hope You will like it from your heart"
        timestamp="1 month ago"
        channel="Music With Puneeth"
        title="Indian Spiderman can do anything"
        image="https://i.ytimg.com/an_webp/PAHVD6fg7w8/mqdefault_6s.webp?du=3000&sqp=CJfn8pcG&rs=AOn4CLA-Ofgsi9-lu5qdeqbAsfruqonCWg"
        />
        <Videorow
        views="10K"
        subs = "521K"
        description="Hope You will like it from your heart"
        timestamp="3 months ago"
        channel="Music With Puneeth"
        title="Non-stop Relaxing Music hits"
        image="https://i.ytimg.com/vi/w-3jchID474/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-_tXzvdUHhZ1oxVtKt_Et2aKIhw"
        />
    </div>
  )
}

export default SearchPage