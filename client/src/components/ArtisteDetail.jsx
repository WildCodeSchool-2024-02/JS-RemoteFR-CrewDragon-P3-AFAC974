import { useState } from "react";
import PropTypes from "prop-types";
import ArtworkDetail from "./ArtworkDetail";
import Footer from "./Footer";
import Header from "./Header";

function ArtistDetails({ artist, onClose }) {
  const [selectedWork, setSelectedWork] = useState(null); // État pour l'œuvre sélectionnée

  const handleWorkClick = (work) => {
    setSelectedWork(work); // Mettre à jour l'état avec l'œuvre sélectionnée
  };

  const handleBackToGallery = () => {
    setSelectedWork(null); // Réinitialiser l'état pour revenir à la galerie d'œuvres
  };

  return (
    <div className="artist-details">
      <Header />
      <button className="close-button" onClick={onClose} type="button">
        Retour
      </button>{" "}
      {!selectedWork ? (
        <>
          <h2>{artist.name}</h2>
          <div className="details-content">
            <img
              src={artist.image}
              alt={artist.name}
              className="details-image"
            />
            <p className="desc-art2">{artist.description}</p>
          </div>

          <h3>Œuvres associées</h3>
          <div className="details-info">
            <ul>
              {/* eslint-disable */}
              {artist.works.map((work, index) => (
                <li key={index} onClick={() => handleWorkClick(work)}>
                  <h4>{work.title}</h4>
                  <p>{work.description}</p>

                  <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="img-artdetails"
                  />
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <ArtworkDetail
          artwork={selectedWork}
          onBackClick={handleBackToGallery}
        />
      )}
      <Footer />
    </div>
  );
}
ArtistDetails.propTypes = {
  artist: PropTypes.string.isRequired,
  onClose: PropTypes.number.isRequired,
};
export default ArtistDetails;
