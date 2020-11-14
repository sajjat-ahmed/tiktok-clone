import React from 'react';
import VideoFooter from '../VideoFooter/VideoFooter';
import VideoSidebar from '../VideoSidebar/VideoSidebar';
import './Video.css';

function Video() {
    return (
        <div className="video">
            <VideoFooter
                channel="refehqazi"
                description="Check out this dance"
                song="Usher - Yeah"
            />
            <VideoSidebar
                likes={122}
                messages={76}
                shares={44}
            />
        </div>
    )
}

export default Video;
