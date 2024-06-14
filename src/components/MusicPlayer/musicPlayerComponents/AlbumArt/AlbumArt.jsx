
function AlbumArt() {
  const randomWidth = Math.floor(Math.random() * (300 - 150 + 1) + 300);
  const randomHeight = Math.floor(Math.random() * (300 - 150 + 1) + 300);
  const randomAlbumArt = `https://via.placeholder.com/${randomWidth}x${randomHeight}`;

  return (
    <img className="albumArt" src={`${randomAlbumArt}`} alt="Album cover" />
  );
}

export default AlbumArt;