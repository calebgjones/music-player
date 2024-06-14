import React from 'react';
import PlayPauseButton from './Buttons/PlayPauseButton';
import PreviousButton from './Buttons/PreviousButton';
import NextButton from './Buttons/NextButton';
import ShuffleButton from './Buttons/ShuffleButton';


function MediaInterface() {
    return (
        <div>
            <PreviousButton />
            <PlayPauseButton />
            <NextButton />
            <ShuffleButton />
        </div>
    );
}

export default MediaInterface;