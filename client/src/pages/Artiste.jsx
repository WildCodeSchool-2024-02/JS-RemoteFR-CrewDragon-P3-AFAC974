import { useState } from "react";
import "../styles/Artiste.css";

import ArtistCard from "../components/ArtisteCard";
import ArtistDetails from "../components/ArtisteDetail";
import Paulklee from "../assets/Paulklee.jpg";
import robertdelaunay from "../assets/robertdelaunay.jpeg";
import franckmarc from "../assets/franckmarc.jpeg";
import rogerfresenay from "../assets/rogerfresenay.jpeg";
import hilmadekint from "../assets/hilmadekint.jpeg";
import pietmondrian from "../assets/pietmondrian.jpeg";
import vassily from "../assets/vassily.jpeg";
import vincent from "../assets/vincent.jpeg";
import edgar from "../assets/edgar.jpeg";
import monet from "../assets/monet.jpeg";
import egon from "../assets/egon.jpeg";
import macke from "../assets/macke.jpeg";
import cub9 from "../assets/cub9.jpg";
import cub10 from "../assets/cub10.jpg";
import cub8 from "../assets/cub8.jpg";
import cub7 from "../assets/cub7.jpg";
import cub6 from "../assets/cub6.jpg";
import cub5 from "../assets/cub5.jpg";
import cub3 from "../assets/cub3.jpg";
import cub2 from "../assets/cub2.jpg";
import cub1 from "../assets/cub1.jpg";
import Abs1 from "../assets/Abs1.jpeg";
import abs2 from "../assets/abs2.jpeg";
import abs3 from "../assets/abs3.jpeg";
import abs4 from "../assets/abs4.jpeg";
import abs5 from "../assets/abs5.jpeg";

import abs7 from "../assets/abs7.jpeg";
import abs8 from "../assets/abs8.jpeg";
import abs9 from "../assets/abs9.jpeg";
import abs10 from "../assets/abs10.jpeg";
import imp10 from "../assets/imp10.jpg";
import imp9 from "../assets/imp9.jpg";
import imp8 from "../assets/imp8.jpg";
import imp7 from "../assets/imp7.jpg";
import imp6 from "../assets/imp6.jpg";
import imp5 from "../assets/imp5.jpg";
import imp4 from "../assets/imp4.jpg";
import imp3 from "../assets/imp3.jpg";
import imp2 from "../assets/imp2.jpg";
import imp1 from "../assets/imp1.jpg";
import exp1 from "../assets/exp1.jpg";

import exp3 from "../assets/exp3.jpg";
import exp4 from "../assets/exp4.jpg";
import exp5 from "../assets/exp5.jpg";
import exp6 from "../assets/exp6.jpg";
import exp7 from "../assets/exp7.jpg";

import exp9 from "../assets/exp9.jpg";
import exp10 from "../assets/exp10.jpg";

const artistsData = [
  {
    id: 1,
    name: "Paul Klee",
    image: Paulklee,
    description:
      "Paul Klee est un peintre de nationalité allemande né le 18 décembre 1879 à Münchenbuchsee (près de Berne en Suisse) et mort le 29 juin 1940 à Locarno (canton du Tessin en Suisse). C'est un des artistes majeurs de la première moitié du xxe siècle. Il connaît ses premiers grands succès en 1917, pendant la Première Guerre mondiale. C'est un peintre et un pédagogue apprécié : dès septembre 1920, il est appelé à enseigner au Bauhaus de Weimar fondé par Walter Gropius, en 1919. En 1931, il est professeur à l'Académie des beaux-arts de Düsseldorf, d'où il est congédié en 1933 par les nationaux-socialistes qui l'attaquent violemment2. Exilé en Suisse à partir de 1934, il demande sa naturalisation, mais il ne l'obtient que quelques jours après sa mort en 19403.",
    works: [
      {
        title: "Ballon Rouge",

        imageUrl: cub1,
      },
      {
        title: "Châteaux et soleil",

        imageUrl: abs9,
      },
    ],
  },
  {
    id: 2,
    name: "Robert Delaunay",
    image: robertdelaunay,
    description:
      "Robert Delaunay est un peintre français né le 12 avril 18852 à Paris et mort le 25 octobre 1941 à Montpellier. Avec sa femme Sonia Delaunay et quelques autres[Qui ?], il est le fondateur et le principal artisan du mouvement orphiste, branche du cubisme et important mouvement d'avant-garde du début du xxe siècle. Ses travaux sur la couleur prennent pour origine plusieurs théories de la loi du contraste simultané des couleurs, formulées par Michel-Eugène Chevreul. Par un travail concentré sur l'agencement des couleurs sur la toile, il cherche l'harmonie picturale.",
    works: [
      {
        title: "La tour rouge",

        imageUrl: cub2,
      },
      {
        title: "Air fer et Eau",

        imageUrl: Abs1,
      },
    ],
  },
  {
    id: 3,
    name: "Franz Marc",
    image: franckmarc,
    description:
      "Franz Marc, né le 8 février 1880 à Munich et mort le 4 mars 1916 à Braquis, près de Verdun, est l'un des principaux représentants de l'expressionnisme allemand. Peintre animalier, graveur, pastelliste, aquarelliste, lithographe, écrivain, il a fait partie du groupe Le Cavalier bleu.",
    works: [
      {
        title: "Ecuries",

        imageUrl: cub3,
      },
      {
        title: "Cheval bleu I",

        imageUrl: exp3,
      },
      {
        title: "Chien coucher dans la neige",

        imageUrl: exp4,
      },
      {
        title: "Le tigre",

        imageUrl: cub9,
      },
    ],
  },
  {
    id: 4,
    name: "Roger de la fresenay",
    image: rogerfresenay,
    description:
      "Roger Noël François de La Fresnaye descendant d'une vieille famille normande3 compte parmi ses ancêtres par sa branche maternelle de Guéneau de Montbéliard, Jean Vauquelin de La Fresnaye, humaniste, poète et soldat du xvie siècle associé avec les poètes de la Pléiade.",
    works: [
      {
        title: "L'Homme assis ",

        imageUrl: cub3,
      },
      {
        title: "la conqu^éte de l'air ",

        imageUrl: cub5,
      },
      {
        title: "La vie conjugale",

        imageUrl: cub6,
      },
      {
        title: "Le 14 juillet",

        imageUrl: cub7,
      },
      {
        title: "Le Magicien",

        imageUrl: cub8,
      },
      {
        title: "Les Baigneurs",

        imageUrl: cub10,
      },
    ],
  },
  {
    id: 5,
    name: "Hilma de Klint",
    image: hilmadekint,
    description:
      "Hilma af Klint née le 26 octobre 1862 à Stockholm et morte le 21 octobre 1944 est une peintre suédoise, théosophe et pionnière dans l'art abstrait1 : ses œuvres comptent parmi les premières œuvres abstraites occidentales2. Af Klint a voué sa vie et son travail à l'exploration de l'invisible1. Ce tournant vers l’abstraction et le symbolisme lui vient de son intérêt pour la théosophie et le spiritisme, très en vogue en Europe à la fin du xixe et au début du xxe siècle. Ses peintures, qui ressemblent parfois à des diagrammes, sont une représentation visuelle d'idées et de recherches spirituelles complexes3.",
    works: [
      {
        title: "Altarpiece No.1",

        imageUrl: abs2,
      },
      {
        title: "Altarpiece No.2",

        imageUrl: abs3,
      },
      {
        title: "Altarpiece No.3",

        imageUrl: abs4,
      },
    ],
  },
  {
    id: 6,
    name: "Piet Mondrian",
    image: pietmondrian,
    description:
      "Pieter Cornelis Mondriaan, appelé Piet Mondrian2 à partir de 1912, né le 7 mars 1872 à Amersfoort (Pays-Bas) et mort le 1er février 1944 à New York, est un peintre néerlandais reconnu comme l'un des pionniers de l'abstraction.",
    works: [
      {
        title: "Arbre argenté",
        imageUrl: abs5,
      },
    ],
  },
  {
    id: 7,
    name: "Vassily Kandisky",
    image: vassily,
    description:
      "Vassily Kandinsky, né le 4 décembre 1866 à Moscou et mort le 13 décembre 1944 à Neuilly-sur-Seine, est un peintre russe, naturalisé allemand puis français. Considéré comme l’un des peintres les plus importants du xxe siècle, il est souvent considéré comme l’auteur de la première œuvre d'art abstrait de l'époque moderne, bien que des historiens d'art soupçonnent Kandinsky d'avoir antidaté cette aquarelle, qui leur semble ressembler à une esquisse de sa Composition VII, de 1913. Quoi qu'il en soit, la célébrité de Kandinsky est liée à son rejet progressif au cours de ces quelques années de tout élément figuratif dans sa peinture..",
    works: [
      {
        title: "Black relationship",

        imageUrl: abs7,
      },
      {
        title: "cercle dans un cercle ",

        imageUrl: abs8,
      },
      {
        title: "compensation rose",

        imageUrl: abs10,
      },
    ],
  },
  {
    id: 8,
    name: "Vincent Vand Gogh",
    image: vincent,
    description:
      "Vincent van Gogh (prononcé en néerlandais né le 30 mars 1853 à Groot-Zundert, aux Pays-Bas, et mort le 29 juillet 1890 à Auvers-sur-Oise, en France, à l’âge de 37 ans, est un peintre et dessinateur néerlandais. Son œuvre pleine de naturalisme, inspirée par l'impressionnisme et le pointillisme, annonce le fauvisme et l'expressionnisme..",
    works: [
      {
        title: "Amandier en fleurs",

        imageUrl: imp1,
      },
      {
        title: "Autoprotrait de l'oreille bandée",

        imageUrl: imp2,
      },
      {
        title: "champ de blé au corbeaux",

        imageUrl: imp4,
      },
      {
        title: "champ de blé derrière l'hospice Saint-Paul avec un faucheur",

        imageUrl: imp5,
      },
    ],
  },
  {
    id: 9,
    name: "Edgar degas",
    image: edgar,
    description:
      "Hilaire Germain Edgar de Gas, dit Edgar Degas, né le 19 juillet 1834 à Paris et mort le 27 septembre 1917 dans la même ville, est un artiste peintre, graveur, sculpteur, photographe, naturaliste et impressionniste français. Si Degas est un membre fondateur du groupe des impressionnistes1, son œuvre est si variée par ses thèmes et sa pratique qu'il ne les rejoint pas dans leurs traits les plus connus. Sa situation d’exception n’échappe pas aux critiques d’alors, souvent déstabilisés par son avant-gardisme, qui fait, encore aujourd’hui, l’objet de nombreux débats auprès des historiens d’art2.",
    works: [
      {
        title: "Ballerines ajustant leurs robes",

        imageUrl: imp3,
      },
      {
        title: "Course de chevaux dans un paysage",

        imageUrl: imp6,
      },
      {
        title: "Danseuses bleues",

        imageUrl: imp7,
      },
      {
        title: "Danseuses en rose",

        imageUrl: imp8,
      },
      {
        title: "Danseuses en rose et vert",

        imageUrl: imp9,
      },
    ],
  },
  {
    id: 10,
    name: "Claude Monet",
    image: monet,
    description:
      "Claude Monet, né sous le nom d'Oscar-Claude Monet le 14 novembre 1840 à Paris et mort le 5 décembre 1926 à Giverny, est un peintre français et l’un des fondateurs de l'impressionnisme. Il commence sa carrière d'artiste en réalisant des portraits-charge des notables de la ville du Havre. En 1859, il part pour Paris tenter sa chance sur le conseil d'Eugène Boudin. En 1866, il connaît le succès au Salon de peinture et de sculpture grâce à La Femme à la robe verte représentant Camille Doncieux qu'il épouse le 28 juin 1870. Il fuit la guerre de 1870 à Londres, puis aux Pays-Bas. Dans la capitale anglaise, il fait la rencontre du marchand d'art Paul Durand-Ruel, qui sera sa principale source de revenus, pendant le reste de sa carrière. Revenu en France en 1871, il participe à la première exposition des futurs impressionnistes, en 1874..",
    works: [
      {
        title: "Etretat : la plage et la porte d'Amont",

        imageUrl: imp10,
      },
    ],
  },
  {
    id: 11,
    name: "Egon schiele",
    image: egon,
    description:
      "Egon Schiele né le 12 juin 1890 à Tulln an der Donau et mort le 31 octobre 1918 à Vienne, est un peintre et dessinateur autrichien rattaché au mouvement expressionniste. Issu de la petite bourgeoisie, il affirme sa vocation d'artiste contre sa famille. Ses dons en dessin le font admettre à seize ans à l'académie des Beaux-Arts de Vienne et il découvre bientôt d'autres horizons au contact de la Sécession, de l'Atelier viennois et de Gustav Klimt. Fin 1909, alors que son talent se révèle, il fonde un éphémère « groupe de l'Art nouveau » avec plusieurs peintres, musiciens et poètes — lui-même écrit des textes assez lyriques..",
    works: [
      {
        title: "Autoportrait aux mains jointes sur la poitrine",

        imageUrl: exp1,
      },
    ],
  },
  {
    id: 12,
    name: "August Macke",
    image: macke,
    description:
      "August Macke, né le 3 janvier 1887 à Meschede (province de Westphalie) et mort le 26 septembre 1914 à Perthes-lès-Hurlus (Marne), est un peintre expressionniste allemand..",
    works: [
      {
        title: "Composition colorée hommage à Bach",

        imageUrl: exp5,
      },
      {
        title: "Cour de la maison de campagne à St. Germain",

        imageUrl: exp6,
      },
      {
        title: "Devant la boutique de chapeaux",

        imageUrl: exp7,
      },
      {
        title: "Formes colorées I",

        imageUrl: exp9,
      },
      {
        title: "Formes colorées III",
        imageUrl: exp10,
      },
    ],
  },
];

function Artiste() {
  const [selectedArtist, setSelectedArtist] = useState(null);

  const handleCardClick = (artist) => {
    setSelectedArtist(artist);
  };

  return (
    <div className="App">
      {!selectedArtist ? (
        <div className="cards-container">
          {artistsData.map((artist) => (
            <ArtistCard
              key={artist.id}
              artist={artist}
              onClick={handleCardClick}
            />
          ))}
        </div>
      ) : (
        <ArtistDetails
          artist={selectedArtist}
          onClose={() => setSelectedArtist(null)}
        />
      )}
    </div>
  );
}

export default Artiste;
