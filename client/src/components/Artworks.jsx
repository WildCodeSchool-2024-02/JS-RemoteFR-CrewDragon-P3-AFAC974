import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/Galerie.css";

function Artworks({ title, size, year, imageUrl, description }) {
  const [showDescription, setShowDescription] = useState(false);

  const handleClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className="artwork"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <img src={imageUrl} alt={title} />
      {showDescription && (
        <div className="artwork-description">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>
            <strong>Year:</strong> {year}
          </p>
          <p>
            <strong>Size:</strong> {size}
          </p>
        </div>
      )}
    </div>
  );
}

Artworks.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Artworks;
