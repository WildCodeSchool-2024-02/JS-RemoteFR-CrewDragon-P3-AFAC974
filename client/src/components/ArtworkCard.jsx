import PropTypes from "prop-types";

function ArtworkCard({ artwork, onClick }) {
  const handleClick = () => {
    onClick(artwork);
  };

  /* eslint-disable */
  return (
    <div className="art-card" onClick={handleClick}>
      <img src={artwork.imageUrl} alt={artwork.title} />
    </div>
  );
}
ArtworkCard.propTypes = {
  artwork: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ArtworkCard;
