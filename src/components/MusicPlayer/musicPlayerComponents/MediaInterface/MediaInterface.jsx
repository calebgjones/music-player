import React from 'react';
import PlayPauseButton from './Buttons/PlayPauseButton';
import PreviousButton from './Buttons/PreviousButton';
import NextButton from './Buttons/NextButton';
import ShuffleButton from './Buttons/ShuffleButton';
import UploadButton from './Buttons/UploadButton';


function MediaInterface({ previousButtonClick, playPauseButtonClick, isPlaying, nextButtonClick, shuffleButtonClick, uploadButtonClick }) {
    return (
        <div>
            <PreviousButton onClick={ previousButtonClick }/>
            <PlayPauseButton onClick={ playPauseButtonClick } isPlaying={ isPlaying } />
            <NextButton onClick={ nextButtonClick }/>
            <ShuffleButton onClick={ shuffleButtonClick }/>
            <UploadButton onClick={ uploadButtonClick }/>
        </div>
    );
};

export default MediaInterface;