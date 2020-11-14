import React, { useRef, useState } from 'react';
import VideoFooter from '../VideoFooter/VideoFooter';
import VideoSidebar from '../VideoSidebar/VideoSidebar';
import './Video.css';

function Video({ url, channel, description, song, likes, messages, shares }) {

    const [playing, setPlaying] = useState(false);
    const videoRef = useRef();
    
    const onVideoPress = () => {
        if(playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }


    return (
        <div className="video">
            <video
                className="video__player"
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src={url}
            ></video>

            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />

            <VideoSidebar
                likes={likes}
                messages={messages}
                shares={shares}
            />
        </div>
    )
}

export default Video;
