

function ShuffleButton(props) {
    return (
        <button className="shuffle-button" onClick={props.onClick}>
            <i className="fa-solid fa-shuffle"></i>    
        </button>
    );
}

export default ShuffleButton;