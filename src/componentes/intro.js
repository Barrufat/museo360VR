import './intro.css'
import React, { useRef, useState, useEffect } from "react";
import useVideoPlayer from './videoPlayer';

const Intro = ({sendScroll}) => {

    const videoElement = useRef(null);
    const {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        // handleVideoProgress,
        // handleVideoSpeed,
        // toggleMute,
    } = useVideoPlayer(videoElement);

    const Beggin = () => {
        togglePlay();
    }


    const [videoClass, setVideoClass] = useState('open');
    const [displayBeggin, setDisplaybeggin] = useState('contBeggin');

    useEffect(() => {
        if (playerState.isPlaying) {
            setDisplaybeggin('closed')
        }
        if (playerState.progress > 0 && playerState.progress < 100) {
            setVideoClass('open');
        }
        else if (playerState.progress === 100) {
            setVideoClass('closed');
            sendScroll('scrollOpen')
        }
    }, [playerState.progress, playerState.isPlaying, videoClass])


    return (
        <div>
            <div className={displayBeggin}>
                <button className='begginOpen' onClick={Beggin}>Lets beggin!</button>
            </div>
            <video className={videoClass}
                src={'./IntroMuseum.mp4'}
                ref={videoElement}
                onTimeUpdate={handleOnTimeUpdate}
            />
        </div>

    )
}

export default Intro;
