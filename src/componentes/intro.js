import './intro.css'
import React, { useRef, useState, useEffect } from "react";
import useVideoPlayer from './videoPlayer';

const Intro = () => {

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
    const [displayBeggin, setDisplaybeggin] = useState('begginOpen');

    useEffect(() => {
        if (playerState.isPlaying){
            setDisplaybeggin('closed')
        }
        if (playerState.progress > 0 && playerState.progress < 100) {
            setVideoClass('open');
        }
        else if (playerState.progress === 100) {
            setVideoClass('closed');
        }
    }, [playerState.progress, playerState.isPlaying, videoClass])


    return (
        <div>
            <button className={displayBeggin} onClick={Beggin}>Lets beggin!</button>
            <video className={videoClass}
                src={'./IntroMuseum.mp4'}
                ref={videoElement}
                onTimeUpdate={handleOnTimeUpdate}
            />
        </div>

    )
}

export default Intro;
