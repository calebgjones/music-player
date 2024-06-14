

function ShuffleButton(props) {
    return (
        <button className="shuffle-button" onClick={props.onClick}>
            <i class="fa-solid fa-shuffle"></i>    
        </button>
    );
}

export default ShuffleButton;