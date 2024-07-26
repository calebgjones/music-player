function UploadButton({ onClick }) {
    return (
        <button className="shuffle-button" onClick={ onClick }>
            <i class="fa-solid fa-upload"></i>   
        </button>
    );
}

export default UploadButton;