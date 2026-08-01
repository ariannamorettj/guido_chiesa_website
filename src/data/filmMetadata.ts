export type SchedaTecnica = {
  regia?: string;
  soggetto?: string;
  sceneggiatura?: string;
  produzione?: string;
  produttore?: string;
  interpreti?: string;
  fotografia?: string;
  scenografia?: string;
  costumi?: string;
  montaggio?: string;
  musiche?: string;
  durata?: string;
  distribuzione?: string;
  genere?: string;
};

export type FilmMetadata = {
  foto?: string;
  locandina?: string;
  didascalia?: string;
  trailer?: string;
  scheda?: SchedaTecnica;
  fotoGallery?: string;
};

export const filmMetadata: Record<string, FilmMetadata> = {

  /* ─── Lungometraggi ─── */

  'piccolo-miracolo': {
    foto: '/images/foto/piccolo-miracolo.jpg',
    locandina: '/images/locandine/piccolo-miracolo.jpg',
    trailer: 'https://www.youtube-nocookie.com/embed/p0TK6WQMuuY',
    scheda: {
      regia: 'Guido Chiesa',
      soggetto: 'Edoardo Leo, Nicoletta Micheli',
      sceneggiatura: 'Nicoletta Micheli',
      produzione: 'No Name Entertainment, Alea Film, Rai Cinema',
      produttore: 'Edoardo Leo, Fabio Castaldi, Valeria Muzzin',
      interpreti: 'Marco D\'Amore, Greta Scarano, Laura Adriani, Giorgio Colangeli, Mariangela D\'Abbraccio, Pierluigi Gigante, Emma Shu, Gianmarco Tognazzi, Bruno Valente',
      fotografia: 'Roberto Forza',
      scenografia: 'Roberto De Angelis',
      costumi: 'Cristiana Mancini',
      montaggio: 'Barbara Magrelli',
      musiche: 'Stefano Della Casa',
      durata: '103 minuti',
      distribuzione: '01 Distribution',
      genere: 'Lungometraggio',
    },
  },

  'amore-di-una-donna': {
    locandina: '/images/locandine/amore-di-una-donna.jpg',
    // foto da aggiungere
    scheda: {
      regia: 'Guido Chiesa',
      soggetto: 'Meir Shalev',
      sceneggiatura: 'Guido Chiesa, Nicoletta Micheli',
      produzione: 'Vivo Film',
      produttore: 'Marta Donzelli, Gregorio Paonessa',
      interpreti: 'Mili Avital, Marc Rissmann, Ana Ularu, Alban Ukaj, Sira Topic, Anastasia Doaga, Elena Lander',
      fotografia: 'Emanuele Pasquet',
      scenografia: 'Alessia Anfuso',
      costumi: 'Susanna Mastroianni',
      montaggio: 'Luca Gasparini',
      durata: '117 minuti',
      genere: 'Lungometraggio',
    },
  },

  '30-notti-con-il-mio-ex': {
    locandina: '/images/locandine/30-notti-con-il-mio-ex.jpg',
    // foto da aggiungere
    scheda: {
      regia: 'Guido Chiesa',
      sceneggiatura: 'Guido Chiesa, Nicoletta Micheli',
      produzione: 'PiperFilm, Colorado Film',
      produttore: 'Iginio Straffi, Alessandro Usai',
      interpreti: 'Edoardo Leo, Micaela Ramazzotti, Gloria Harvey, Claudio Colica, Anna Bonaiuto, Francesca Valtorta, Matteo Scattaretico, Luca Massaro, Beatrice Arnera, Andrea Pisani',
      fotografia: 'Emanuele Pasquet',
      scenografia: 'Paolo Sansoni Baratella',
      costumi: 'Cristina Audisio',
      montaggio: 'Luca Gasparini, Angelo Santini',
      musiche: 'Francesco Cerasi',
      durata: '102 minuti',
      genere: 'Lungometraggio',
    },
  },

  'una-notte-da-dottore': {
    locandina: '/images/locandine/una-notte-da-dottore.jpg',
    // foto da aggiungere
    scheda: {
      regia: 'Guido Chiesa',
      sceneggiatura: 'Guido Chiesa, Nicoletta Micheli',
      produttore: 'Maurizio Totti, Alessandro Usai',
      interpreti: 'Diego Abatantuono, Frank Matano, Giorgia Spinelli, Alessandro Betti, Luciano Miele, Antonio Salines, Valentina D\'Agostino, Leonardo Sbragia, Leonardo D\'Arrigo, Cecilia Napoli, Elisabetta De Palo',
      fotografia: 'Emanuele Pasquet',
      scenografia: 'Paolo Sansoni Baratella',
      costumi: 'Patrizia Chericoni',
      montaggio: 'Alberto Masi',
      musiche: 'Francesco Cerasi',
      durata: '85 minuti',
      genere: 'Lungometraggio',
    },
  },

  'belli-di-papa': {
    locandina: '/images/locandine/belli-di-papa.jpg',
    // foto e trailer da aggiungere
    // scheda da aggiungere (non presente nel documento crediti)
  },

  'cambio-tutto': {
    foto: '/images/foto/cambio-tutto.jpg',
    fotoGallery: '/foto/cambio-tutto/',
    locandina: '/images/locandine/cambio-tutto.jpg',
    trailer: 'https://www.youtube-nocookie.com/embed/oq3ih74PO8E',
    scheda: {
      regia: 'Guido Chiesa',
      sceneggiatura: 'Nicoletta Micheli, Giovanni Bognetti, Guido Chiesa',
      produzione: 'Colorado Film',
      produttore: 'Maurizio Totti, Alessandro Usai',
      interpreti: 'Valentina Lodovini, Neri Marcorè, Libero De Rienzo, Dino Abbrescia, Andrea Pisani, Nicola Nocella, Claudio Larena, Flora Canto, Chiara Spoletini, Valeria Perri, Valentina D\'Agostino, Marco Conidi, Armando Quaranta, Giovanni Scifoni, Alessia Scriboni, Giorgio Consoli',
      fotografia: 'Emanuele Pasquet',
      scenografia: 'Paolo Sansoni',
      costumi: 'Andrea Cavaletto',
      montaggio: 'Alberto Masi',
      musiche: 'Francesco Cerasi',
      durata: '90 minuti',
      genere: 'Lungometraggio',
    },
  },

  'ti-presento-sofia': {
    foto: '/images/foto/ti-presento-sofia.jpg',
    fotoGallery: '/foto/ti-presento-sofia/',
    locandina: '/images/locandine/ti-presento-sofia.jpg',
    // trailer da aggiungere
    // scheda da aggiungere (non presente nel documento crediti)
  },

  'classe-z': {
    foto: '/images/foto/classe-z.jpg',
    fotoGallery: '/foto/classe-z/',
    locandina: '/images/locandine/classe-z.jpg',
    // trailer locale .mov – non embeddabile
    scheda: {
      regia: 'Guido Chiesa',
      sceneggiatura: 'Alessandro Aronadio, Guido Chiesa, Renato Sannio',
      produzione: 'Colorado Film',
      produttore: 'Maurizio Totti, Alessandro Usai',
      interpreti: 'Alessandro Preziosi, Andrea Pisani, Alice Pagani, Antonio Catania, Enrico Oetiker, Greta Menchi, Luca Filippi, Armando Quaranta, David Zheng, Francesco Russo, Johnny Zheng',
      fotografia: 'Emanuele Pasquet',
      scenografia: 'Tonino Zera',
      costumi: 'Patrizia Chericoni',
      montaggio: 'Luca Gasparini',
      musiche: 'Francesco Cerasi',
      durata: '90 minuti',
      genere: 'Lungometraggio',
    },
  },

  'i-am-you': {
    foto: '/images/foto/io-sono-con-te.jpg',
    fotoGallery: '/foto/io-sono-con-te/',
    locandina: '/images/locandine/io-sono-con-te.jpg',
    scheda: {
      regia: 'Guido Chiesa',
      sceneggiatura: 'Nicoletta Micheli, Filippo Kalomenidis, Guido Chiesa',
      produzione: 'Colorado Film, Magda, Rai Cinema',
      interpreti: 'Nadia Khlifi (Maria), Rabeb Srairi (Maria adulta), Mustapha Benstiti (Giuseppe), Ahmed Hafiene (Mardocheo), Mohamed Idoudi (Gesù), Fadila Belkebla (Elisabetta), Djemel Barek (Zaccaria), Carlo Cecchi (Erode), Giorgio Colangeli, Fabrizio Gifuni, Denis Lavant, Robinson Stevenin, Jerzy Stuhr (I Sapienti), Aymen Mabrouk (Traduttore), Mohamed Grayaa (Hillel)',
      durata: '102 minuti',
      genere: 'Lungometraggio',
    },
  },

  'io-sono-con-te': {
    foto: '/images/foto/io-sono-con-te.jpg',
    fotoGallery: '/foto/io-sono-con-te/',
    locandina: '/images/locandine/io-sono-con-te.jpg',
    scheda: {
      regia: 'Guido Chiesa',
      sceneggiatura: 'Nicoletta Micheli, Filippo Kalomenidis, Guido Chiesa',
      produzione: 'Colorado Film, Magda, Rai Cinema',
      interpreti: 'Nadia Khlifi (Maria), Rabeb Srairi (Maria adulta), Mustapha Benstiti (Giuseppe), Ahmed Hafiene (Mardocheo), Mohamed Idoudi (Gesù), Fadila Belkebla (Elisabetta), Djemel Barek (Zaccaria), Carlo Cecchi (Erode), Giorgio Colangeli, Fabrizio Gifuni, Denis Lavant, Robinson Stevenin, Jerzy Stuhr (I Sapienti), Aymen Mabrouk (Traduttore), Mohamed Grayaa (Hillel)',
      durata: '102 minuti',
      genere: 'Lungometraggio',
    },
  },

  'le-pere-di-adamo': {
    locandina: '/images/locandine/le-pere-di-adamo.jpg',
    // foto da aggiungere
    scheda: {
      regia: 'Guido Chiesa',
      sceneggiatura: 'Guido Chiesa, Luca Di Meo (Wu Ming 3)',
      produttore: 'Silvia Innocenzi, Giovanni Saulini',
      interpreti: 'Luca Mercalli (Meteorologo e Climatologo), Iain McLarty (Matematico e Musicista), François-Loïc Glasman (Musicista e Attore Intermittente), Mariline Gourdon (Attrice Intermittente), Mitsou Doudeau (Ballerina Intermittente), Sandra Bechtel (Attrice Intermittente), Giuseppe Battiston (Voce Cartone Animato)',
      fotografia: 'Luciano Federici, Remy Mazet, Kathleen Friend, Gherardo Gossi (supervisione)',
      montaggio: 'Luca Gasparini',
      musiche: 'Teho Teardo',
      durata: '90 minuti',
      genere: 'Documentario',
    },
  },

  'lavorare-con-lentezza': {
    foto: '/images/foto/lavorare-con-lentezza.jpg',
    fotoGallery: '/foto/lavorare-con-lentezza/',
    // locandina – nessuna nel materiale ricevuto; da richiedere al cliente
    scheda: {
      regia: 'Guido Chiesa',
      sceneggiatura: 'Guido Chiesa, Wu Ming 1',
      genere: 'Lungometraggio',
    },
  },

  'il-partigiano-johnny': {
    foto: '/images/foto/il-partigiano-johnny.jpg',
    fotoGallery: '/foto/il-partigiano-johnny/',
    locandina: '/images/locandine/il-partigiano-johnny.jpg',
    scheda: {
      regia: 'Guido Chiesa',
      soggetto: 'Beppe Fenoglio (dall\'omonimo romanzo)',
      sceneggiatura: 'Guido Chiesa, Antonio Leotti',
      produttore: 'Domenico Procacci',
      interpreti: 'Stefano Dionisi (Johnny), Andrea Prodan (Pierre), Fabrizio Gifuni (Ettore), Alberto Gimignani (Biondo), Giuseppe Cederna (Menega), Claudio Amendola (Nord), Chiara Muti (Elda), Barbara Lerici (Sonia), Umberto Orsini (Pinin), Felice Andreasi (Mugnaio), Fabio De Luigi (Soldato Fascista), Flavio Insinna (Spia), Giovanni Esposito (Soldato meridionale), Fausto Paravidino (Gilera)',
      fotografia: 'Gherardo Gossi',
      scenografia: 'Davide Bassan',
      costumi: 'Marina Roberti',
      montaggio: 'Luca Gasparini',
      musiche: 'Alexander Balanescu',
      durata: '132 minuti',
      genere: 'Lungometraggio',
    },
  },

  'non-mi-basta-mai': {
    foto: '/images/foto/non-mi-basta-mai.jpg',
    locandina: '/images/locandine/non-mi-basta-mai.jpg',
    fotoGallery: '/foto/non-mi-basta-mai/',
    scheda: {
      regia: 'Guido Chiesa, Daniele Vicari',
      durata: '78 minuti',
      genere: 'Documentario',
    },
  },

  'materiale-resistente': {
    locandina: '/images/locandine/materiale-resistente.jpg',
    // foto da aggiungere
    scheda: {
      regia: 'Guido Chiesa, Davide Ferrario',
      sceneggiatura: 'Guido Chiesa, Davide Ferrario',
      produzione: 'Dinosaura, Colorado Film',
      produttore: 'Franca Bertagnolli, Davide Ferrario, Maurizio Totti',
      interpreti: 'Germano Nicolini, Officine Schwartz, Marlene Kuntz, Corman E Tuscadu, A.F.A. - Acid Folk Alleanza, Ustmamò, Rosso Maltese, Mau Mau, Settore Out, Africa Unite, Coro "I 101" Di Fabbrico, Umberto Palazzo E Il Santo Niente, Luis Llach, Disciplinatha, C.S.I., Modena City Ramblers, Yo Yo Mundi',
      fotografia: 'Giovanni Cavallini, Gherardo Gossi',
      montaggio: 'Luca Gasparini',
      durata: '80 minuti',
      genere: 'Documentario',
    },
  },

  'babylon-la-paura-e-la-miglior-amica-delluomo': {
    foto: '/images/foto/babylon.jpg',
    fotoGallery: '/foto/babylon/',
    locandina: '/images/locandine/babylon-la-paura-e-la-miglior-amica-delluomo.jpg',
    scheda: {
      regia: 'Guido Chiesa',
      durata: '94 minuti',
      genere: 'Documentario',
    },
  },

  'il-caso-martello': {
    foto: '/images/foto/il-caso-martello.jpg',
    fotoGallery: '/foto/il-caso-martello/',
    locandina: '/images/locandine/il-caso-martello.jpg',
    scheda: {
      regia: 'Guido Chiesa',
      sceneggiatura: 'Guido Chiesa, Antonio Leotti',
      produzione: 'Brooklyn Films, Fomar Film, Surf Film',
      produttore: 'Agnese Fontana, Paola Ermini',
      interpreti: 'Alberto Gimignani (Cesare Verra), Felice Andreasi (Sebastiano e Antonio Martello), Roberta Lena (Pina), Luigi Diberti (Comandante Bill), Valeria Cavalli (Simona), Bruno Gambarotta (Segretario Comunale), Ivano Marescotti (Schiller), Cesare Peracchio (Don Nino), Barbara Valmorin (Locandiera), Renzo Lori (Cavagnero), Giorgio Bocassi (Finotti), Giovanni Moretti (Avvocato Bosco), Vittorio Catti (Filippo), Eugenio Chiocchi (Brigadiere), Vittoria Lottero (Rita)',
      fotografia: 'Gherardo Gossi',
      scenografia: 'Vera Castrovilli',
      musiche: 'Giuseppe Napoli',
      durata: '90 minuti',
      genere: 'Lungometraggio',
    },
  },

  /* ─── Cortometraggi ─── */

  'il-cuore-del-soldatino': {
    // foto e locandina da aggiungere
  },

  'quei-momenti-eroici': {
    // foto e locandina da aggiungere
  },

  'civilta': {
    // foto e locandina da aggiungere
  },

  'black-harvest': {
    foto: '/images/foto/black-harvest.jpg',
    fotoGallery: '/foto/black-harvest/',
    trailer: 'https://www.youtube-nocookie.com/embed/nvEv3APs6Ko',
  },

  'give-me-spell': {
    foto: '/images/foto/give-me-a-spell.jpg',
    fotoGallery: '/foto/give-me-a-spell/',
    // locandina da aggiungere
  },

  /* ─── Serial ─── */

  'quo-vadis-baby': {
    locandina: '/images/locandine/quo-vadis-baby.jpg',
    scheda: {
      sceneggiatura: 'Marco Videtta, Fabio Scamoni',
      produzione: 'Colorado Film, Sky Italia',
      fotografia: 'Roberto Forza',
      scenografia: 'Rita Rabassini, Davide Bassan',
      costumi: 'Patrizia Chericoni, Florence Emir',
      montaggio: 'Alberto Masi, Stefano Cravero, Filippo Maria Montemurro',
      musiche: 'Teho Teardo',
      durata: '6 episodi × 90 minuti ciascuno',
      genere: 'Serial',
    },
  },

  /* ─── Documentari ─── */

  'partigiani': {
    foto: '/images/foto/partigiani.jpg',
    fotoGallery: '/foto/partigiani/',
    // locandina da aggiungere
  },

  'il-contratto': {
    trailer: 'https://www.youtube-nocookie.com/embed/7ZqBqXpeLk8',
    // foto e locandina da aggiungere
  },

  'alice-e-paradiso': {
    trailer: 'https://player.vimeo.com/video/249293958',
    // foto e locandina da aggiungere
  },

};
