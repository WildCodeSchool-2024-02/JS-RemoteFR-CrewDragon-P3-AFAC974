import PropTypes from "prop-types";

function ArtistCard({ artist, onClick }) {
  return (
    <div className="artist-card">
      <img src={artist.image} alt={artist.name} />
      <button
        onClick={() => onClick(artist)}
        className="overlay-button"
        type="button"
      >
        En savoir plus
      </button>
    </div>
  );
}
ArtistCard.propTypes = {
  artist: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ArtistCard;
