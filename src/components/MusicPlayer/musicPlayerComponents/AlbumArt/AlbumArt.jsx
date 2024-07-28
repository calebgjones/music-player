
function AlbumArt() {
  const randomAlbumArt = `https://via.placeholder.com/${300}x${300}`;

  return (
    <img className="albumArt" src={`${randomAlbumArt}`} alt="Album cover" />
  );
}

export default AlbumArt;