import axios from 'axios';

const getSong = async (songId) => {
    try {
        const response = await axios.get(`http://localhost:8443/song/${songId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const uploadSong = async (formData) => {
    try {
        const song = formData

        const response = await axios.post('http://localhost:8443/song', formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        });
        console.log(response.status === 200 ? `Song uploaded successfully` : 'Song upload failed');
    } catch (error) {
        console.error(error);
    }

}

export default uploadSong