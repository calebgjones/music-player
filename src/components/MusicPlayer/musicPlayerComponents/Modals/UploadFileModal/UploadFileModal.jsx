import api from '../../../../../utils/apiHandling.js';

const UploadFileModal = ({ context }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const buildFormData = (e) => {
            const formData = new FormData();
            formData.append('file', e.target.file.files[0]);
            formData.append('title', e.target.title.value);
            formData.append('artist', e.target.artist.value);
            formData.append('album', e.target.album.value);
            formData.append('genre', e.target.genre.value);

            return formData;
        }

        const submitData = async (formData) => {
            const response = await api.uploadSong(formData);
            return response;
        }
        
        const formData = buildFormData(e);
        submitData(formData);


    }
    
    const handleClose = () => {
        const uploadBoxContainer = document.getElementById('uploadBoxContainer');
        const uploadBox = document.getElementById('uploadBox');
        const uploadBoxForm = document.getElementById('uploadBoxForm');
        console.log('Close button clicked');
        uploadBoxContainer.style.display =  'none';
        uploadBoxForm.style.display = 'none';
        uploadBox.style.display = 'none';
        console.log('Upload box visibility:', uploadBox.style.display);
      }


    return (
        <>
            <button onClick={handleClose}>Close</button>
            <form onSubmit={handleSubmit} id='uploadBoxForm'>
                <label htmlFor="file">File</label>
                <input type="file" name="file" id="file" required />
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" required />
                <label htmlFor="artist">Artist</label>
                <input type="text" name="artist" id="artist" required />
                <label htmlFor="album">Album</label>
                <input type="text" name="album" id="album" required />
                <label htmlFor="genre">Genre</label>
                <input type="text" name="genre" id="genre" required />
                <button type="submit">Upload</button>
            </form>
        </>
    );
}

export default UploadFileModal;