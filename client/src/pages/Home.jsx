import { Link } from "react-router-dom";
import "../styles/Home.css";

import peinture from "../assets/peinture.mp4";

function Home() {
  return (
    <main className="home">
      <section className="section1">
        <div className="logo1">
          <video
            className="logo_pint"
            autoPlay
            muted
            loop
            preload="auto"
            controls
          >
            <source src={peinture} type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
        </div>
        <article className="article-galerie">
          <p>
            <h2>
              Quels sont les principaux mouvements artistiques de la peinture ?
            </h2>{" "}
            À travers les âges, la peinture a connu de nombreux mouvements
            artistiques qui ont attiré notre attention et notre admiration. De
            l'impressionnisme à l'expressionnisme, chaque époque a donné
            naissance à des œuvres d'art révolutionnaires qui ont défini la
            culture et influencé notre société. Il n'est donc pas étonnant que
            tant de personnes aient consacré leur temps à l'étude de ces
            mouvements iconiques de la peinture. Que ce soit pour ceux qui sont
            fascinés par la culture qui les sous-tend, ou pour ceux qui
            pratiquent la peinture eux-mêmes,
          </p>

          <Link to="/galerie" className="btn">
            Voir nos Oeuvres
          </Link>
        </article>
      </section>
    </main>
  );
}

export default Home;
