import MusicNoteIcon from '@material-ui/icons/MusicNote';
import React from 'react';
import Ticker from 'react-ticker';
import './VideoFooter.css';

function VideoFooter({ channel, song, description }) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter__ticker">
                <MusicNoteIcon className="videoFooter__icon" />
                <Ticker mode="smooth">
                    {({ index }) => (
                        <>
                            <h3>{song}</h3>
                        </>
                    )}
                </Ticker>
                </div>
            </div>
            <img
            className="videoFooter__record"
            src="https://static.thenounproject.com/png/934821-200.png"
            alt=""/>
        </div>
    )
}

export default VideoFooter;
