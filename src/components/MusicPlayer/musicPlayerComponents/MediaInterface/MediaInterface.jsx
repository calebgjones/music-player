import React from 'react';
import PlayPauseButton from './Buttons/PlayPauseButton';
import PreviousButton from './Buttons/PreviousButton';
import NextButton from './Buttons/NextButton';
import ShuffleButton from './Buttons/ShuffleButton';


function MediaInterface({ previousButtonClick, playPauseButtonClick, nextButtonClick, shuffleButtonClick }) {
    return (
        <div>
            <PreviousButton onClick={() => {previousButtonClick}}/>
            <PlayPauseButton onClick={() => {playPauseButtonClick}}/>
            <NextButton onClick={ nextButtonClick }/>
            <ShuffleButton onClick={() => {shuffleButtonClick}}/>
        </div>
    );
};

export default MediaInterface;