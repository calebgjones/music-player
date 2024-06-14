import React from 'react';
import PlayPauseButton from './Buttons/PlayPauseButton';
import PreviousButton from './Buttons/PreviousButton';
import NextButton from './Buttons/NextButton';


function MediaInterface() {
    return (
        <div>
            <PreviousButton />
            <PlayPauseButton />
            <NextButton />
        </div>
    );
}

export default MediaInterface;