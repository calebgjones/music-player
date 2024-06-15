

function ShuffleButton({ onClick }) {
    return (
        <button className="shuffle-button" onClick={ onClick }>
            <i className="fa-solid fa-shuffle"></i>    
        </button>
    );
}

export default ShuffleButton;