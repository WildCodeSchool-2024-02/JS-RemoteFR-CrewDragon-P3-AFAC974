import { useState } from "react";
import "../styles/Galerie.css";
import ArtworkDetail from "../components/ArtworkDetail";
import ArtworkCard from "../components/ArtworkCard";
import Abs1 from "../assets/Abs1.jpeg";
import abs2 from "../assets/abs2.jpeg";
import abs3 from "../assets/abs3.jpeg";
import abs4 from "../assets/abs4.jpeg";
import abs5 from "../assets/abs5.jpeg";
import abs6 from "../assets/abs6.jpeg";
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
import exp2 from "../assets/exp2.jpg";
import exp3 from "../assets/exp3.jpg";
import exp4 from "../assets/exp4.jpg";
import exp5 from "../assets/exp5.jpg";
import exp6 from "../assets/exp6.jpg";
import exp7 from "../assets/exp7.jpg";
import exp8 from "../assets/exp8.jpg";
import exp9 from "../assets/exp9.jpg";
import exp10 from "../assets/exp10.jpg";
import cub9 from "../assets/cub9.jpg";
import cub8 from "../assets/cub8.jpg";
import cub7 from "../assets/cub7.jpg";
import cub6 from "../assets/cub6.jpg";
import cub5 from "../assets/cub5.jpg";
import cub4 from "../assets/cub4.jpg";
import cub3 from "../assets/cub3.jpg";
import cub2 from "../assets/cub2.jpg";
import cub1 from "../assets/cub1.jpg";
import cub10 from "../assets/cub10.jpg";

const artworksData = [
  {
    id: 1,
    title: "Ballon rouge",
    author: "Paul Klee",
    dimensions: "77 cm × 53 cm",
    year: "1503",
    description:
      "Le Ballon Rouge de Paul Klee caractérise les changements persistants de style, de technique et de sujet de l’artiste. Son vocabulaire, qui oscille librement entre le figuratif et le non-représentationnel, communique à travers une symbolique plus expressive que descriptive et exprimant de l'abstraction. Ce tableau figure parmi les peintures cubistes les plus célèbres.",
    imageUrl: cub1,
    category: "Cubisme",
  },
  {
    id: 2,
    title: "Champs-de-Mars, la Tour Rouge",
    author: "Robert Delaunay",
    dimensions: "73.7 cm × 92.1 cm",
    year: "1889",
    description:
      "Dans cette composition cubiste de Robert Delaunay, la tour Eiffel surgit du premier plan et surplombe la ville de toute sa hauteur. Les immeubles haussmanniens sont déchirés par la modernité lumineuse de la tour. Cette œuvre multiforme est une invitation de l'artiste à considérer la dame de fer comme une œuvre d'art à part entière.",
    imageUrl: cub2,
    category: "Cubisme",
  },
  {
    id: 3,
    title: "Écuries",
    author: "Franz Marc",
    dimensions: "73.7 cm × 92.1 cm",
    year: "1889",
    description:
      "« Stallungen » (« Écuries » en allemand) est l’aboutissement d’un cheminement artistique complexe, entamé par Franz Marc au début des années 1900 puis achevé environ dix ans plus tard : celui allant d’une peinture figurative vers une expression abstraite du mouvement. Sujet de prédilection de l’artiste, le cheval est ici représenté par des motifs géométriques multicolores qui se superposent et s’enchevêtrent.",
    imageUrl: cub3,
    category: "Cubisme",
  },
  {
    id: 4,
    title: "L'Homme assis",
    author: "Roger de La Fresnaye",
    dimensions: "63.7 cm × 52.1 cm",
    year: "1889",
    description:
      "Considéré comme un autoportrait, « Homme assis » constitue une étape importante dans la production de La Fresnaye, avant la guerre. La partie gauche de la peinture, la nature morte géométrisée, fait l’objet d’un autre tableau, intitulé « Nature morte à l’équerre » . L’autre partie du tableau est consacrée à un personnage au visage indéfini, selon la norme cubiste, occupant toute la hauteur de la toile, dans une position frontale et dans un environnement où s’entrecroisent courbes et formes rectangulaires, délimitées par des aplats de couleurs primaires qui découpent le fond. Cette composition, dominées par une recherche de l’harmonie, est habilement structurée par la couleur, et éclairées par les parties inachevées.",
    imageUrl: cub4,
    category: "Cubisme",
  },
  {
    id: 5,
    title: "La Conquête de l'air",
    author: "Roger de La Fresnaye",
    dimensions: "73.7 cm × 92.1 cm",
    year: "1889",
    description:
      "La conquête de l’air passionne de nombreux artistes au début du XXe siècle car c’est se faire l’écho de la nouvelle civilisation qui éclot, de la vitesse, des machines et des usines qui la caractérisent. Parmi ces artistes, Roger de La Fresnaye propose sa vision du sujet dans cette œuvre. Les deux personnages principaux sont en train de converser autour d’une table, le peintre ayant voulu signifier l’action de la pensée, l’esprit spéculatif qui a rendu possibles la conquête des airs par l’homme et l’invention des aéroplanes. La représentation de l’espace suit également les ruptures de plan propres aux toiles cubistes : chaque élément du tableau possède son propre point de vue et son échelle, de telle sorte que l’espace représenté dans la toile, discontinu, ne reproduit pas la réalité.",
    imageUrl: cub5,
    category: "Cubisme",
  },
  {
    id: 6,
    title: "La vie conjugale",
    author: "Roger de La Fresnaye",
    dimensions: "73.7 cm × 92.1 cm",
    year: "1889",
    description:
      "Rendu dans une approche cubiste, ce tableau de La Fresnaye met en scène un homme et une femme, qui sont mari et femme et qui, à première vue, sont ensemble depuis un certain temps. Ensemble mais en même temps séparés. L'homme porte un costume et fume une cigarette. Assise sur une chaise à côté de lui, la femme est entièrement nue, les yeux fermés. La pièce est encombrée, sûrement pour refléter l'état de leur vie conjugale. Et malgré tout, il y a de l'ordre, de l'harmonie. Cette œuvre est ainsi une représentation paradoxalement réaliste de l’équilibre au sein d’un couple..",
    imageUrl: cub6,
    category: "Cubisme",
  },
  {
    id: 7,
    title: "Air, fer et eau",
    author: "Robert Delaunay",
    imageUrl: Abs1,
    dimensions: "73.7 cm × 92.1 cm",
    description:
      "Dans cette gigantesque peinture murale, Robert Delaunay présente une synoptique des grands motifs et thèmes traversant son œuvre artistique. Cette œuvre fut réalisée pour décorer le pavillon français des Chemins de fer lors de l'Exposition Universelle de Paris. Il s'agit d'une œuvre du mouvement Orphique, un mélange du cubisme et de l'abstraction, et un important mouvement d'avant-garde au début du XXe siècle. Delaunay peint aussi les tableaux Champs-de-Mars, la Tour Rouge et Tour Eiffel et jardin du Champs de Mars, représentant également la Tour Eiffel d'une manière abstraite.",
    year: "2021",
    category: "Art Abstrait",
  },
  {
    id: 8,
    title: "Altarpiece No.1 ",
    author: "Hilma de Klint",
    imageUrl: abs2,
    dimensions: "73.7 cm × 92.1 cm",
    description:
      "Ce tableau abstrait dédié au “Temple”, Ordre pour lequel l’artiste était dévouée, pourrait bien représenter la communion et le contact établi avec Les Hauts . Ces êtres spirituels rencontrés au cours de séances de spiritismes avec le Club des cinq s’incarnent à travers un choix minutieux des couleurs et de l'utilisation de l'abstraction",
    year: "2020",
    category: "Art Abstrait",
  },
  {
    id: 9,
    title: "Altarpiece No. 2",
    author: "Hilma de Klint",
    imageUrl: abs3,
    dimensions: "69 X 53cm",
    description:
      "Entre l’inférieur et le supérieur, l’interne et l’externe, le terrestre et le spirituel, la réalité et la métaphysique, le bien et le mal :  le choix métaphorique des couleurs s’établit tel que le bleu pour l'esprit féminin, le jaune pour l'esprit masculin et le rouge pour l'amour. Ainsi la lecture horizontale dans ce tableau abstrait, composée de rouge et de rose, se retrouve perturbée lorsque le triangle béant vient renverser le sens de la composition pour élever l’esprit terrestre vers le céleste. Dès cet instant, une route s'instaure pour réceptionner le cercle lumineux: la teinte la plus simple et homogène face aux ténèbres.",
    year: "2019",
    category: "Art Abstrait",
  },
  {
    id: 10,
    title: "Altarpiece No 3",
    author: "Hilma de Klint",
    imageUrl: abs4,
    dimensions: "69 X 53cm",
    description:
      "Le monde artistique de Hilma af Klint regorge de divers messages rigoureusement semés. De l’équilibre de tous ces éléments résulte la forme la plus pure et unifiée de la spiritualité, car elle la retranspose tout en lui laissant sa liberté. C’est à travers un pléthore de formes colorées réconfortantes et envoûtantes qu’elle tente de dissoudre les limites de la réalité au-delà du visible dans cette peinture abstraite. La formation du regard devient alors un enjeu crucial dont la participation active du spectateur contribue à la redéfinition artistique et mentale. Cette communion totale des êtres psychiques et charnels dévoile par la peinture, une porte immense, au sein de laquelle se trouve un triangle qui assurera la jonction entre ciel et terre.",
    year: "2018",
    category: "Art Abstrait",
  },
  {
    id: 11,
    title: "Arbre argenté",
    author: "Piet Mondrian",
    imageUrl: abs5,
    dimensions: "50 X 70 cm",
    description:
      "Dans cette huile sur toile de Piet Mondrian, le dynamisme des lignes grises et noires épousent parfaitement la forme de la toile. L’artiste a représenté un arbre se décomposant en un réseau de courbes majoritairement verticales et horizontales. Ce tableau marque le tournant abstrait de l’artiste sous l’influence du cubisme jusque-là. Un précurseur dans l’histoire de l’art.",
    year: "2017",
    category: "Art Abstrait",
  },
  {
    id: 12,
    title: "Ballon rouge",
    author: "Paul Klee",
    imageUrl: abs6,
    dimensions: "61 X 61 cm",
    description:
      "Le Ballon Rouge de Paul Klee caractérise les changements persistants de style, de technique et de sujet de l’artiste. Son vocabulaire, qui oscille librement entre le figuratif et le non-représentationnel, communique à travers une symbolique plus expressive que descriptive et exprimant de l'abstraction.",
    year: "2016",
    category: "Art Abstrait",
  },
  {
    id: 13,
    title: "Black Relationship",
    author: "Vassily Kandinsky",
    imageUrl: abs7,
    dimensions: "61 X 61 cm",
    description:
      "La forme circulaire noire domine cette œuvre abstraite. Elle instaure un rapport contrasté avec les éléments géométriques multicolores et l'abstraction. Non pas en raison de sa forme géométrique Vassily Kandinsky décrit le cercle comme un lien cosmique, comme une intense perception de la force intérieure dans ses innombrables variations",
    year: "2021",
    category: "Art Abstrait",
  },
  {
    id: 14,
    title: "Cercles dans un cercle",
    author: "Vassily Kandinsky",
    imageUrl: abs8,
    dimensions: "61 X 61 cm",
    description:
      "Cette œuvre de Vassily Kandinsky est un assemblage abstrait de formes géométriques en flottement dans un cercle et de l'abstraction. Selon lui, c'est cette forme primaire qui indiquait le plus clairement l’intense perception de la force intérieure dans ses innombrables variations.",
    year: "2020",
    category: "Art Abstrait",
  },
  {
    id: 15,
    title: "Château et soleil",
    author: "Paul Klee",
    imageUrl: abs9,
    dimensions: "61 X 61cm",
    description:
      "Dans l’œuvre « Château et soleil » Paul Klee représente deux univers : le figuré et l’abstrait. Un rythme musical émane des petits carreaux colorés. Les formes géométriques disposées de façon harmonieuse et l'abstraction insufflent de la vie au château sous un soleil ardent. L’œuvre aux tons chauds est décomposée en formes multiples faisant référence aux évolutions scientifiques sur la perception des couleurs.",
    year: "2019",
    category: "Art Abstrait",
  },
  {
    id: 16,
    title: "Compensation rose",
    author: "Vassily Kandinsky",
    imageUrl: abs10,
    dimensions: "61 X 61 cm",
    description:
      "Avec Ausgleichrosa, Vassily Kandinsky opère la synthèse du cubisme et du Bauhaus, un mouvement allemand d’avant-garde. Au sein de ce tableau abstrait rectangulaire, les formes géométriques se superposent puis s’emboîtent les unes dans les autres, jusqu’à former un puzzle ludique et coloré. Les angles droits côtoient les formes trapézoïdales, et les épais traits noirs mettent en valeur des teintes très douces formant de l'abstraction.",
    year: "2018",
    category: "Art Abstrait",
  },

  {
    id: 18,
    title: "Amandier en fleurs",
    author: "Vincent Van Gogh",
    imageUrl: imp1,
    dimensions: "53 X 53 cm",
    description:
      "Vincent Van Gogh choisit de représenter les branches d'un amandier - l'un des arbres les plus précoces au printemps - pour symboliser l'éclosion d'une vie nouvelle, celle de son neveu aussi appelé Vincent. L'artiste s'inspire ici des estampes japonaises et accorde une attention inédite à chacune des fleurs peintes dans ce tableau impressionniste.",
    year: "2021",
    category: "Impressionisme",
  },
  {
    id: 19,
    title: "Autoportrait à l'oreille bandée",
    author: "Vincent Van Gogh",
    imageUrl: imp2,
    dimensions: "53 X 53 cm",
    description:
      "Vincent Van Gogh peint à Arles une de ses œuvres post-impressionnistes les plus poignantes : L’Autoportrait à l’oreille bandée. Cette toile fait suite à un épisode dont elle rend compte : le geste par lequel il s’est tranché l’oreille d’un coup de rasoir. Les traits tirés, la mâchoire crispée et le regard perdu dans le lointain, une impression de résignation et d’apaisement émane de cette œuvre. L’artiste a juxtaposé des couleurs proches sur le cercle chromatique qui forment une harmonie d’analogue, elles se combinent sans se heurter.",
    year: "2020",
    category: "Impressionisme",
  },
  {
    id: 20,
    title: "Ballerines ajustant leurs robes",
    author: "Edgar Degas",
    imageUrl: imp3,
    dimensions: "53 X 53 cm",
    description:
      "Dans ses débuts dans les années 1860, Edgar Degas a fait de l'Opéra de Paris et la danse les sujets principaux de ses travaux impressionnistes. Il en explore ses divers moments et espaces: les entraînements réguliers, les coulisses et la scène. Ici, l’artiste maîtrise les raccourcis elliptiques et la pratique des gros plans. Il sait faire la synthèse d’une suite de mouvements, suggéré par un dessin de plus en plus cursif qui confesse à la peinture une surprenante valeur expressive. Appréciant le ballet, Degas peint plusieurs tableaux représentant des danseuses, tels que Danseuses Bleues et Danseuses en rose.",
    year: "2019",
    category: "Impressionisme",
  },
  {
    id: 21,
    title: "Champ de blé aux corbeaux ",
    author: "Vincent Van Gogh",
    imageUrl: imp4,
    dimensions: "53 X 53 cm",
    description:
      "Vincent Van Gogh attache ici une importance à la perspective, en donnant une grande profondeur à son tableau impressionniste : l’horizon se démarque des champs de blé d’Auvers-sur-Oise, alors que la procession des corbeaux invite à explorer ce que l’artiste ne montre pas, soit l’obscurité profonde du ciel en dehors du tableau. Les historiens d’art y voient une représentation de l’état d’esprit préoccupé de l’artiste : un ciel foncé et menaçant, trois chemins allant dans des directions différentes, et des corbeaux noirs, signe d’une fin imminente. Il s’agit de l’une des dernières œuvres de l’artiste.",
    year: "2018",
    category: "Impressionisme",
  },
  {
    id: 22,
    title: "Champ de blé derrière l'hospice Saint-Paul avec un faucheur",
    author: "Vincent Van Gogh",
    imageUrl: imp5,
    dimensions: "53 X 53 cm",
    description:
      "Vincent Van Gogh est plusieurs fois interné à Saint-Rémy-de Provence en 1888-1889. Il supprime les barreaux de sa fenêtre et peint ce qu´il voit. En un beau résumé de ce tableau impressionniste, il écrit dans une lettre : J´y vis dans ce faucheur - vague figure qui lutte comme un diable en pleine chaleur pour venir à bout de sa besogne - jy vis alors limage de la mort, dans ce sens que l´humanité serait le blé qu´on fauche. Mais dans cette mort rien de triste, cela se passe en pleine lumière avec un soleil qui inonde tout d´une lumière d´or fin",
    year: "2017",
    category: "Impressionisme",
  },
  {
    id: 23,
    title: "Course de chevaux dans un paysage",
    author: "Edgar Degas",
    imageUrl: imp6,
    dimensions: "53 X 53 cm",
    description: "Description de l'œuvre 6",
    year: "2016",
    category: "Impressionisme",
  },
  {
    id: 24,
    title: "Danseuses bleues",
    author: "Edgar Degas",
    imageUrl: imp7,
    dimensions: "53 X 53 cm",
    description:
      "Cette œuvre d'Edgar Degas dévoile un moment censé être caché aux spectateurs avant le lever du rideau. Dans un décor coloré et lumineux, l'artiste s'attarde sur les gestes quotidiens de ces danseuses, qui se préparent à monter sur les planches : l'ajustement du corsage, la dernière touche apportée à la coiffure, des gestes d'échauffement... Un instant empreint de réalité est ainsi immortalisé par une toile pleine de vie et de mouvements. Dans sa série des danseuses, nous retrouvons aussi Danseuses en rose, Ballerines ajustant leurs robes et Danseuses en rose et vert.",
    year: "2021",
    category: "Impressionisme",
  },
  {
    id: 25,
    title: "Danseuses en rose",
    author: "Edgar Degas",
    imageUrl: imp8,
    dimensions: "53 X 53 cm",
    description:
      "Durant ses débuts dans les années 1860, Edgar Degas a fait de l'Opéra de Paris le sujet principal de ses travaux. Il en explore ses divers moments et espaces: les entraînements réguliers, les coulisses et la scène. Ici, l’artiste maîtrise les raccourcis elliptiques et la pratique des gros plans. Il sait faire la synthèse d’une suite de mouvements, suggérée par un dessin de plus en plus cursif qui confesse à la peinture une surprenante valeur expressive. Dans sa série des danseuses, nous retrouvons aussi Danseuses bleues, Ballerines ajustant leurs robes et Les Danseuses roses, avant le ballet.",
    year: "2020",
    category: "Impressionisme",
  },
  {
    id: 26,
    title: "Danseuses en rose et vert",
    author: "Edgar Degas",
    imageUrl: imp9,
    dimensions: "53 X 53 cm",
    description: "Description de l'œuvre 3",
    year: "2019",
    category: "Impressionisme",
  },
  {
    id: 27,
    title: "Etretat : la plage et la porte d'Amont",
    author: "Claude Monet",
    imageUrl: imp10,
    dimensions: "53 X 53 cm",
    description:
      "Claude Monet a vécu quelques années à Etretat afin de travailler sur un certain nombre de peintures représentant les falaises et la mer. Ces paysages ont déjà été dépeints par d’illustres artistes dont Delacroix et Courbet. Fasciné par les œuvres de ses pairs, l’artiste a souhaité peindre cette région Normande à sa manière. Parcourant la plage pendant des heures, constamment à la recherche d’un endroit d’une beauté naturelle exceptionnelle, d’une lumière parfaite, Monet a dans ce chef d’œuvre, représenté fidèlement la férocité des falaises calcaires épousant la mer. ",
    year: "2018",
    category: "Impressionisme",
  },
  {
    id: 28,
    title: "Autoportrait aux mains jointes sur la poitrine",
    author: "Egon Schiele",
    imageUrl: exp1,
    dimensions: "61 X 61 cm",
    description:
      "Peint à l'aquarelle et au fusain, cet autoportrait expressionniste d'Egon Schiele met l'accent sur sa tête et ses mains. Le reste de son corps n'est qu'une simple esquisse sans détail. Très enclin à l'introspection et à la recherche de son moi profond, l'artiste se représente sans tabou, tel qu'il se voit, avec une certaine féminité dans la position des mains. L'expression de son visage, désinvolte, voire effrontée, semble montrer son indifférence envers les jugements que l'on pourrait porter sur lui.",
    year: "2021",
    category: "Expressionisme",
  },
  {
    id: 29,
    title: "Burg Aigle",
    author: "Marianne von Werefkin",
    imageUrl: exp2,
    dimensions: "61 X 61 cm",
    description:
      "Célèbre peintre expressionniste d’origine russe, Marianne von Werefkin était une amoureuse de la campagne et de la paysannerie. Elle décrit, dans ce tableau daté d’environ 1915, le travail d’un groupe de femmes occupées à remplir un sac avec des denrées. Tandis que les personnages sont représentés de façon réaliste, le paysage qui les surplombe est marqué par une perspective déformée.",
    year: "2020",
    category: "Expressionisme",
  },
  {
    id: 30,
    title: "Cheval bleu I",
    author: "Franz Marc",
    imageUrl: exp3,
    dimensions: "61 X 61 cm",
    description:
      "Cette huile sur toile est l’une des œuvres expressionnistes les plus célèbres de Franz Marc, qui a voué la majorité de sa carrière à la peinture animalière. Elle comporte une kyrielle de symboles chers à son créateur. Par exemple, le cheval incarne l’élan vital inhérent au règne animal, ainsi que la beauté d’une nature indomptée. Quant à la couleur bleue, elle représente ici la masculinité.",
    year: "2019",
    category: "Expressionisme",
  },
  {
    id: 31,
    title: "Chien couché dans la neige",
    author: "Franz Marc",
    imageUrl: exp4,
    dimensions: "61 X 61 cm",
    description:
      "Franz Marc, artiste expressionniste allemand amoureux de la nature, a peint une multitude d’animaux domestiques tels que le chien, le chat, la chèvre, la vache et surtout le cheval. Dans ce tableau daté de 1911, un canidé se repose dans la neige. Symbole de pureté et de virginité, la couleur blanche est ici déclinée en une série de nuances allant de l’albâtre à l’écru.",
    year: "2018",
    category: "Expressionisme",
  },
  {
    id: 32,
    title: "Composition colorée hommage à Bach",
    author: "August Macke",
    imageUrl: exp5,
    dimensions: "61 X 61 cm",
    description:
      "Habituellement amateur de petits formats, August Macke réalise ici l’un de ses plus grands tableaux expressionnistes. Son ambition est de mêler de manière avant-gardiste la musique à la peinture afin de rendre hommage à Jean-Sébastien Bach. Pour cela, il imagine une composition surprenante où les lignes brisées et les demi-cercles côtoient des tâches aux contours flous.",
    year: "2017",
    category: "Expressionisme",
  },
  {
    id: 33,
    title: "Cour de la maison de campagne à St. Germain",
    author: " August Macke",
    imageUrl: exp6,
    dimensions: "61 X 61 cm",
    description:
      "Ce petit tableau fait partie des dernières œuvres de l’Allemand August Macke. Il s’agit d’une déclaration d’amour à un lieu de villégiature apprécié du jeune peintre expressionniste : une maison située dans le village côtier d’Ezzahra (ou Saint-Germain) en Tunisie. Le personnage masculin agenouillé en bas de l’escalier blanc est coiffé du fez, un couvre-chef traditionnel.",
    year: "2016",
    category: "Expressionisme",
  },
  {
    id: 34,
    title: "Devant la boutique de chapeaux ",
    author: "August Macke",
    imageUrl: exp7,
    dimensions: "61 X 61 cm",
    description:
      "Au début des années 1910, peu avant son décès prématuré sur le champ de bataille, August Macke a peint une myriade d’œuvres rendant hommage à la beauté du quotidien. Parmi elles, quatre sont consacrées à un sujet en apparence anodin : la boutique de chapeaux. Le présent tableau montre une femme et une petite fille qui ignorent la présence de l’artiste, tant elles sont absorbées par la contemplation d’une vitrine.",
    year: "2021",
    category: "Expressionisme",
  },
  {
    id: 35,
    title: "Femme à la mandoline en jaune et rouge",
    author: "Max Beckmann",
    imageUrl: exp8,
    dimensions: "61 X 61 cm",
    description:
      "Ce tableau expressionniste de Max Beckmann reprend un thème répandu en peinture : la femme à la mandoline. Nombreux sont les artistes qui ont peint une femme jouant de cet instrument, de Camille Corot à Pablo Picasso en passant par Georges Braque, Juan Fris ou Tamara de Lempicka. Ici, le modèle n’utilise pas l’objet pour faire de la musique mais pose lascivement contre lui, sa poitrine offerte aux regards.",
    year: "2020",
    category: "Expressionisme",
  },
  {
    id: 36,
    title: "Formes colorées I",
    author: "August Macke",
    imageUrl: exp9,
    dimensions: "61 X 61 cm",
    description:
      "Pionnier de l’expressionisme pictural en Allemagne, August Macke a activement contribué à la formation du groupe d’artistes Der Bleue Reiter avec Vassily Kandinsky et Franz Marc. Cette œuvre reflète la volonté du peintre de tendre vers une interprétation toujours plus abstraite de son sujet. Elle est la première d’une série de tableaux intitulée « Farbige Formen » (« Formes colorées » en allemand), achevée quelques mois avant le décès du jeune Macke en France.",
    year: "2019",
    category: "Expressionisme",
  },
  {
    id: 37,
    title: "Formes colorées III",
    author: "August Macke",
    imageUrl: exp10,
    dimensions: "61 X 61 cm",
    description:
      "Ce tableau de petite taille, qui est issu de l’atelier d’August Macke, reflète la quête formelle de cet artiste au début des années 1910, juste avant son décès sur un champ de bataille. Rompant avec l’impressionnisme qui a marqué le siècle précédent, le peintre expressionniste déconstruit la forme des objets et crée de puissants contrastes de couleurs.",
    year: "2018",
    category: "Expressionisme",
  },
  {
    id: 38,
    title: "Le 14 juillet",
    author: "Roger de La Fresnaye",
    dimensions: "73.7 cm × 92.1 cm",
    year: "1889",
    description:
      "Le Quatorze juillet offre un exemple emblématique des expérimentations cubistes idiosyncrasiques de La Fresnaye et est manifeste d'une transition décisive dans la carrière de l’artiste. Sa sensibilité à la couleur est résolument concrète dans la présente œuvre où la construction est fondée sur une série de formes géométriques coloriées de couleurs primaires, noires ou blanches. Affichant fièrement les couleurs du drapeau tricolore dans la partie supérieure gauche, La Fresnaye donne à cette œuvre une dimension patriotique évidente au moment de son exécution à l’aube de la Première Guerre Mondiale.",
    imageUrl: cub7,
    category: "Cubisme",
  },
  {
    id: 39,
    title: "Le Magicien",
    author: "Roger de La Fresnaye ",
    dimensions: "73.7 cm × 92.1 cm",
    year: "1889",
    description:
      "Comme le suggère « Le Magicien », le cubisme de La Fresnaye ne sera jamais celui de Braque et Picasso. Sa sensibilité à la couleur est résolument concrète dans la présente œuvre où la construction est fondée sur une série de formes géométriques coloriées, noires ou blanches.",
    imageUrl: cub8,
    category: "Cubisme",
  },
  {
    id: 40,
    title: "Le Tigre",
    author: "Franz Marc",
    dimensions: "73.7 cm × 92.1 cm",
    year: "1889",
    description:
      "Chef-d’œuvre de l’art animalier, « Le Tigre » est un tableau carré qui mesure près d’un mètre de large. Franz Marc l’a peint en 1912, peu après avoir créé le mouvement d’inspiration expressionniste Der Blaue Reiter avec August Macke et Vassily Kandinsky. Le majestueux félin est ici représenté de dos, se reposant sur un lit de formes abstraites.",
    imageUrl: cub9,
    category: "Cubisme",
  },
  {
    id: 41,
    title: "Les Baigneurs",
    author: "Roger de La Fresnaye",
    dimensions: "73.7 cm × 92.1 cm",
    year: "1889",
    description:
      "Admirateur de Cézanne, Roger de la Fresnaye adhère au cubisme et à sa déconstruction de la perspective. ll est à l’apogée de sa carrière et construit « Les Baigneurs » avec sa conception très personnelle du cubisme. Au-delà des formes, La Fresnaye se définit également souvent par des couleurs éclatantes pendant que Braque et Picasso se tournaient vers une monochromie beige.",
    imageUrl: cub10,
    category: "Cubisme",
  },
  // Ajoutez d'autres œuvres ici...
];

function groupByCategory() {
  const grouped = {};
  artworksData.forEach((artwork) => {
    if (!grouped[artwork.category]) {
      grouped[artwork.category] = [];
    }
    grouped[artwork.category].push(artwork);
  });
  return grouped;
}

function Galerie() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const handleArtworkClick = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleBackClick = () => {
    setSelectedArtwork(null);
  };

  // Regrouper les œuvres par catégorie
  const artworksByCategory = groupByCategory(artworksData);

  return (
    <div className="App">
      <h3 className="title-galerie">Les différentes Catégories d'Oeuvres</h3>

      {selectedArtwork ? (
        <ArtworkDetail
          artwork={selectedArtwork}
          onBackClick={handleBackClick}
        />
      ) : (
        <div className="category-container">
          {/* Parcourir chaque catégorie et afficher les œuvres de cette catégorie */}
          {/* eslint-disable react/no-array-index-key */}
          {Object.keys(artworksByCategory).map((category, index) => (
            <div key={index} className="category-section">
              <h4 className="category-title">{category}</h4>
              <div className="artworks">
                {/* Afficher les œuvres horizontalement */}
                <div className="artwork-row">
                  {artworksByCategory[category].map((artwork) => (
                    <ArtworkCard
                      key={artwork.id}
                      artwork={artwork}
                      onClick={handleArtworkClick}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Galerie;
