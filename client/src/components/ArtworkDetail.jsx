import PropTypes from "prop-types";
import "../styles/ArtworkDetail.css";

function ArtworkDetail({ artwork, onBackClick }) {
  return (
    <div className="artwork-detail">
      <button className="close-bouton " onClick={onBackClick} type="button">
        Back
      </button>
      <div className="artwork-content">
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className="img-detail"
        />
        <div className="artwork-info">
          <h1>{artwork.title}</h1>
          <h4>{artwork.author}</h4>
          <p>
            <strong>Dimensions:</strong> {artwork.dimensions}
          </p>
          <p>
            <strong>Year:</strong> {artwork.year}
          </p>
          <p>{artwork.description}</p>
        </div>
      </div>
    </div>
  );
}
ArtworkDetail.propTypes = {
  artwork: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    dimensions: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
export default ArtworkDetail;
