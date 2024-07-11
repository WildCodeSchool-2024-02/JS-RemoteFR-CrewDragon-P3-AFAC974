import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Data from "../services/Data.json";
import Artwork from "../components/Artworks";
import "../styles/Artiste.css";

function Galerie() {
  const artworks = Data.flatMap((artist) => artist.artworks);

  return (
    <div className="App">
      <h1>Art Gallery</h1>

      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={3000}
      >
        {artworks.map((artwork, index) => (
          <Artwork
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            title={artwork.title}
            size={artwork.size}
            year={artwork.year}
            image_url={artwork.image_url}
            description={artwork.description}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Galerie;
