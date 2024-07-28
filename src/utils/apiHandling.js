import axios from 'axios';

const getSong = async (songId) => {
    try {
        const response = await axios.get(`https://api.trevorlichfield.com/song/${songId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const uploadSong = async (formData) => {
    try {
        const song = formData

        const response = await axios.post('https://api.trevorlichfield.com/song', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(response.status === 200 ? `Song uploaded successfully` : 'Song upload failed');
    } catch (error) {
        console.error(error);
    }

}

const listSongs = async (searchTerm) => {
    try {
        console.log('Searching for songs');
        const response = await axios.get(`https://api.trevorlichfield.com/songs`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const api = {
    uploadSong,
    listSongs,
    getSong
}

export default api