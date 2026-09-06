// ─── DOMANDE APERTE (non risolvere senza conferma dell'autore) ──────────────
// 1. FOTO POSIZIONE: il documento dice "foto SOPRA il titolo", lo schema
//    concordato diceva "sotto". Campo heroPhoto è neutro; la posizione
//    è fissata nel template. Confermare prima di cambiare.
// 2. FOTO ESTRATTE DAL DOC: due immagini (foto-1_IMG_3123.jpg,
//    foto-2_MG_5766.jpg) vanno assegnate a Ti presento Sofia e Belli di papà.
//    Non ancora abbinate — attendere conferma.
// 3. BABYLON rassegna stampa: brief indica 1991, film è del 1994.
//    Usato 1994 provvisoriamente — verificare.
// 4. IL PARTIGIANO JOHNNY rassegna stampa: brief indica 2001, film è del 2000.
//    Usato 2001 come da brief — verificare se voluto (copertura uscita) o refuso.
// 5. MATERIALE RESISTENTE e NON MI BASTA MAI: documentari che compaiono
//    in questa lista — confermare se restano tra i lungometraggi o migrano.
// 6. 30 NOTTI CON IL MIO EX: presentazione mancante (nel documento c'era
//    per errore quella di Per amore di una donna). Campo lasciato vuoto.
// 7. CLASSE Z: la presentazione nel documento conteneva una riga finale
//    ("Ho tre figli…") presa da Ti presento Sofia. Riga esclusa.
// 8. UNA NOTTE DA DOTTORE: blocco rassegna stampa duplicato nel documento,
//    la seconda copia rimanda al 2025. Usato solo 2021.
// 9. CAMBIO TUTTO / BELLI DI PAPÀ: hanno due link esterni — confermare
//    quale è il principale e quale l'aggiuntivo.
// ────────────────────────────────────────────────────────────────────────────

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

export interface VideoLink {
  label: string;
  url: string;
  lang?: 'it' | 'en';
  note?: string;
}

export interface ExternalLink {
  label: string;
  url?: string;
  type?: 'pressbook' | 'site';
  pending?: boolean;
  lang?: 'it' | 'en';
}

export type FilmMetadata = {
  // ── campi originali (backward compat) ──
  foto?: string;
  locandina?: string;
  didascalia?: string;
  trailer?: string;
  scheda?: SchedaTecnica;
  fotoGallery?: string;
  // ── campi aggiunti in step C ──
  stills?: { src: string; alt: string; caption?: string }[];
  poster?: { src: string; alt: string };
  posterEn?: { src: string; alt: string };      // locandina EN (solo dove esiste versione diversa)
  presentazione?: string;
  linkEsterni?: ExternalLink[];
  videoUrl?: string;
  rassegnaStampaUrl?: string;
  fotoUrl?: string;
  // ── campi nuovi ──
  heroPhoto?: { src: string; alt: string };   // foto singola hero (PENDING per molti film)
  presentazioneEn?: string;                   // solo dove esiste versione EN
  titoloEn?: string;
  annoEn?: number;                            // anno uscita internazionale
  video?: VideoLink[];
  rassegnaVideo?: VideoLink[];           // video per la pagina rassegna stampa (interviste, Q&A, podcast)
  contentEn?: string;                    // HTML content in English (sinossi/note di regia)
  rassegnaStampaAnno?: number;
  rassegnaStampaAnnoEn?: number;
  fotoGalleria?: boolean;                     // true = esiste /foto/<slug>/
  materialiExtra?: { label: string; url: string }[];
};

export const filmMetadata: Record<string, FilmMetadata> = {

  /* ═══════════════════════════════════════════════════════
     LUNGOMETRAGGI
  ═══════════════════════════════════════════════════════ */

  'piccolo-miracolo': {
    foto: '/images/foto/piccolo-miracolo.jpg',
    locandina: '/images/locandine/piccolo-miracolo.jpg',
    stills: [{ src: '/images/foto/piccolo-miracolo.jpg', alt: 'Piccolo Miracolo – foto di scena' }],
    poster: { src: '/images/locandine/piccolo-miracolo.jpg', alt: 'Piccolo Miracolo – locandina' },
    trailer: 'https://www.youtube-nocookie.com/embed/p0TK6WQMuuY',
    presentazione: 'Arrivato tra capo e collo quando sembrava ormai sepolto, manco il tempo di riflettere e già eravamo al montaggio (meno di 5 mesi dalla scrittura della prima stesura della sceneggiatura alla fine delle riprese), buttato in sala in piena canicola estiva. Bel cast e Greta Scarano vincitrice a Taormina. Un film di transizione perché servono anche questi.',
    linkEsterni: [
      { label: 'Pressbook', url: '/pressbooks/piccolo-miracolo-pressbook.pdf', type: 'pressbook' },
    ],
    video: [
      { label: 'Trailer', url: 'https://www.youtube.com/watch?v=p0TK6WQMuuY' },
      { label: 'Scena 1', url: 'https://www.youtube.com/watch?v=Qz1dgM8oHv0' },
      { label: 'Scena 2', url: 'https://www.youtube.com/watch?v=i8vC5kapGPg' },
    ],
    rassegnaVideo: [
      { label: 'Gianni Canova – recensione video', url: 'https://www.youtube.com/watch?v=fPKxiZz2xwQ' },
    ],
    rassegnaStampaAnno: 2026,
    rassegnaStampaUrl: '/rassegna-stampa/#piccolo-miracolo',
    fotoGallery: '/foto/piccolo-miracolo/',
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
    poster: { src: '/images/locandine/amore-di-una-donna.jpg', alt: 'Per amore di una donna – locandina' },
    posterEn: { src: '/images/locandine/for-the-love-of-a-woman.jpg', alt: 'For the Love of a Woman – poster' },
    heroPhoto: { src: '/images/foto/amore-di-una-donna/padud-5-photo-by-manlio-ajovalasit-2023-colorado-film-production-vivo-film.jpg', alt: 'Per amore di una donna – foto di scena' },
    titoloEn: 'For the Love of a Woman',
    annoEn: 2026,
    presentazione: 'Quattro anni di gestazione, tra riscritture e casting in tre continenti con centinaia di attori visionati. Girato in inglese ed ebraico tra Sicilia e Israele nell\'autunno-inverno 2022, pronto nel settembre 2023 alla vigilia del pogrom del 7 ottobre e della successiva tragedia della guerra a Gaza. Bloccato per quasi due anni nel timore di proteste, o per pregiudizio, o mera codardia. Uscito nel 2025, vincitore del BiFest e distribuito negli USA nel 2026. È un film a cui tengo molto e che mi sembra venuto particolarmente bene.',
    presentazioneEn: 'Four years in the making, through rewrites and casting across three continents, with hundreds of actors seen. Shot in English and Hebrew between Sicily and Israel in the autumn and winter of 2022, it was ready by September 2023, on the eve of the 7 October pogrom and of the tragedy of the war in Gaza that followed. It was held back for almost two years — for fear of protests, out of prejudice, or from sheer cowardice. Released in 2025, it won the BiFest and was distributed in the United States in 2026. It\'s a film I care deeply about, and one I think came out particularly well.',
    linkEsterni: [
      { label: 'Pressbook', url: '/pressbooks/amore-di-una-donna-pressbook-it.pdf', type: 'pressbook', lang: 'it' },
      { label: 'Pressbook', url: '/pressbooks/amore-di-una-donna-pressbook-en.pdf', type: 'pressbook', lang: 'en' },
    ],
    video: [
      { label: 'Trailer', url: 'https://www.youtube.com/watch?v=_ZWk0_vm_A8', lang: 'it' },
      { label: 'Scena 1', url: 'https://www.youtube.com/watch?v=Oay16Ng7E-E&t=50s', lang: 'it' },
      { label: 'Scena 2', url: 'https://www.youtube.com/watch?v=LdYlFKEvfIY', lang: 'it' },
      { label: 'Scena 3', url: 'https://youtu.be/tPZyLR7nG7E', lang: 'it' },
      { label: 'Trailer (English)', url: 'https://www.youtube.com/watch?v=_f9MBTQDsYE', lang: 'en' },
      { label: 'Scene 1', url: 'https://www.youtube.com/watch?v=Oay16Ng7E-E&t=50s', lang: 'en' },
      { label: 'Scene 2', url: 'https://youtu.be/tPZyLR7nG7E', lang: 'en' },
    ],
    rassegnaVideo: [
      { label: 'Intervista (Francesco Alò)', url: 'https://www.youtube.com/watch?v=o3jGNprBfRM', lang: 'it' },
      { label: 'Nostalghia Podcast – con Nicoletta Micheli e Guido Chiesa', url: 'https://www.youtube.com/watch?v=eJ5Uhyn8axI', lang: 'it' },
      { label: 'Effetto Notte – intervista a Guido Chiesa', url: 'https://www.youtube.com/watch?v=pkhcrnGFSyY', lang: 'it' },
      { label: 'Cinema Caravaggio – incontro con il pubblico (parte 1)', url: 'https://www.youtube.com/watch?v=bCFS8n23EQA', lang: 'it' },
      { label: 'Cinema Caravaggio – incontro con il pubblico (parte 2)', url: 'https://www.youtube.com/watch?v=uy7A9lnuc0A', lang: 'it' },
      { label: 'Cinematographe – intervista con Mili Avital e Guido Chiesa', url: 'https://www.youtube.com/watch?v=vLYCDEHXzmE', lang: 'it' },
      { label: 'Patrolcast – interview with Mili Avital and Guido Chiesa', url: 'https://www.youtube.com/watch?v=dTCfgu6Q6KM', lang: 'en' },
      { label: 'Showverse – interview with Guido Chiesa', url: 'https://www.youtube.com/watch?v=8PwtLAJSAvM', lang: 'en' },
    ],
    rassegnaStampaAnno: 2025,
    rassegnaStampaAnnoEn: 2026,
    rassegnaStampaUrl: '/rassegna-stampa/#amore-di-una-donna',
    fotoGallery: '/foto/amore-di-una-donna/',
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
    poster: { src: '/images/locandine/30-notti-con-il-mio-ex.jpg', alt: '30 notti con il mio ex – locandina' },
    heroPhoto: { src: '/images/foto/30-notti-con-il-mio-ex/30-notti-con-il-mio-ex-ph-loris-t-zambelli.jpg', alt: '30 notti con il mio ex – foto di scena' },
    presentazione: 'Un tentativo di andare oltre le definizioni pre-confezionate, mescolando generi e aspettative. E di affrontare la malattia mentale con leggerezza e ironia. Eppure è stato venduto come la commedia romantica che non era. A partire dal titolo fuori tempo massimo.',
    linkEsterni: [
      { label: 'Pressbook', url: '/pressbooks/30-notti-con-il-mio-ex-pressbook.pdf', type: 'pressbook' },
    ],
    video: [
      { label: 'Trailer', url: 'https://www.youtube.com/watch?v=t1s3jrvD8KI' },
      { label: 'Backstage', url: 'https://www.youtube.com/watch?v=G4Myfivtp6Q' },
    ],
    rassegnaVideo: [
      { label: 'Giovanni Bogani – recensione video', url: 'https://www.youtube.com/watch?v=husMJi9c4O8' },
    ],
    rassegnaStampaAnno: 2025,
    rassegnaStampaUrl: '/rassegna-stampa/#30-notti-con-il-mio-ex',
    fotoGallery: '/foto/30-notti-con-il-mio-ex/',
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
    poster: { src: '/images/locandine/una-notte-da-dottore.jpg', alt: 'Una notte da dottore – locandina' },
    heroPhoto: { src: '/images/foto/una-notte-da-dottore/dsc09793.jpg', alt: 'Una notte da dottore – foto di scena' },
    presentazione: 'Girato durante il lockdown, malinconico come le strade vuote di Roma e le vite dei due protagonisti. Una delle mie commedie preferite (tranne la locandina).',
    linkEsterni: [
      { label: 'CinemaItaliano', url: 'https://nuovo.cinemaitaliano.info/unanottedadottore', type: 'site' },
    ],
    video: [
      { label: 'Trailer', url: 'https://www.youtube.com/watch?v=ifhfVPO9Onc' },
      { label: 'Scena 1', url: 'https://www.youtube.com/watch?v=94V6tCSGs6Q' },
      { label: 'Scena 2', url: 'https://www.youtube.com/watch?v=9n1Mkd7wnk8' },
    ],
    rassegnaStampaAnno: 2021,
    rassegnaStampaUrl: '/rassegna-stampa/#una-notte-da-dottore',
    fotoGallery: '/foto/una-notte-da-dottore/',
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

  'cambio-tutto': {
    foto: '/images/foto/cambio-tutto.jpg',
    fotoGallery: '/foto/cambio-tutto/',
    locandina: '/images/locandine/cambio-tutto.jpg',
    stills: [{ src: '/images/foto/cambio-tutto.jpg', alt: 'Cambio tutto! – foto di scena' }],
    poster: { src: '/images/locandine/cambio-tutto.jpg', alt: 'Cambio tutto! – locandina' },
    trailer: 'https://www.youtube-nocookie.com/embed/oq3ih74PO8E',
    presentazione: 'Un film fortemente voluto da Maurizio Totti, produttore a cui devo molto. Non mi piaceva il film spagnolo a cui era ispirato e il tono grottesco non fa per me. Ma ci sono momenti della vita in cui lavorare aiuta a non pensare troppo. Doveva uscire al cinema l\'8 marzo 2020, poi è arrivato il Covid, il lockdown ed è finito su Prime Video.',
    linkEsterni: [
      { label: 'Medusa', url: 'https://www.medusa.it/movie/cambio-tutto/', type: 'site' },
      { label: 'Filmitalia', url: 'https://filmitalia.org/it/film/133968/', type: 'site' },
      { label: 'CinemaItaliano', url: 'https://nuovo.cinemaitaliano.info/cambiotuttochiesa', type: 'site' },
    ],
    video: [
      { label: 'Trailer', url: 'https://www.youtube.com/watch?v=oq3ih74PO8E' },
    ],
    rassegnaStampaAnno: 2020,
    fotoGalleria: true,
    materialiExtra: [
      { label: 'Sceneggiatura', url: '/materiali/cambio-tutto-sceneggiatura.pdf' },
    ],
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
    stills: [{ src: '/images/foto/ti-presento-sofia.jpg', alt: 'Ti presento Sofia – foto di scena' }],
    poster: { src: '/images/locandine/ti-presento-sofia.jpg', alt: 'Ti presento Sofia – locandina' },
    heroPhoto: { src: '/images/foto/ti-presento-sofia/foto-scena.jpg', alt: 'Ti presento Sofia – foto di scena' },
    presentazione: 'Ho tre figli e tornando indietro ne avrei voluti anche altri. Forse è per questo che mi ha intrigato raccontare di una donna che non vuole bambini. O probabilmente mi sono immedesimato in un personaggio maschile goffo ed eternamente in difetto. Specie con la figlia. L\'importante era non giudicare, né lei, né lui.',
    linkEsterni: [
      { label: 'CinemaItaliano', url: 'https://nuovo.cinemaitaliano.info/tipresentosofia', type: 'site' },
    ],
    video: [
      { label: 'Trailer', url: 'https://www.youtube.com/watch?v=ullqRK2jFVA' },
      { label: 'Scena 1', url: 'https://www.youtube.com/watch?v=b_6lY7VGgqI' },
      { label: 'Scena 2', url: 'https://www.youtube.com/watch?v=IKgaErpNvto' },
    ],
    rassegnaStampaAnno: 2018,
    rassegnaStampaUrl: '/rassegna-stampa/#ti-presento-sofia',
    fotoGalleria: true,
    materialiExtra: [
      { label: 'Sceneggiatura', url: '/materiali/ti-presento-sofia-sceneggiatura.pdf' },
    ],
  },

  'classe-z': {
    foto: '/images/foto/classe-z.jpg',
    fotoGallery: '/foto/classe-z/',
    locandina: '/images/locandine/classe-z.jpg',
    stills: [{ src: '/images/foto/classe-z.jpg', alt: 'Classe Z – foto di scena' }],
    poster: { src: '/images/locandine/classe-z.jpg', alt: 'Classe Z – locandina' },
    presentazione: 'Basso budget, attori giovani, tanta energia. Anche qui, molto divertimento e la voglia di provare qualcosa di diverso, tra angst generazionale e la commedia teen.',
    linkEsterni: [
      { label: 'Pressbook', url: '/pressbooks/classe-z-pressbook.pdf', type: 'pressbook' },
      { label: 'Facebook', url: 'https://www.facebook.com/classezeta/', type: 'site' },
    ],
    video: [
      { label: 'Scena 1', url: 'https://www.youtube.com/watch?v=5A5djIicXsA' },
      { label: 'Scena 2', url: 'https://www.youtube.com/watch?v=edSW2FuQwpY' },
    ],
    rassegnaStampaAnno: 2017,
    rassegnaStampaUrl: '/rassegna-stampa/#classe-z',
    fotoGalleria: true,
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
    materialiExtra: [
      { label: 'Sceneggiatura', url: '/materiali/classe-z-sceneggiatura.pdf' },
    ],
  },

  'belli-di-papa': {
    locandina: '/images/locandine/belli-di-papa.jpg',
    poster: { src: '/images/locandine/belli-di-papa.jpg', alt: 'Belli di papà – locandina' },
    heroPhoto: { src: '/images/foto/belli-di-papa.jpg', alt: 'Belli di papà – foto di scena' },
    presentazione: 'Prima commedia, prima volta in testa al box office. Ci sono arrivato quasi per caso (doveva farlo un altro regista, ma i produttori non erano convinti del suo approccio), ma si vede che era destino. Anche qui battutine impacciate e accuse neanche troppo sussurrate: "si è venduto", "lo fa per i soldi". Mi sono divertito e, per quanto sia stato difficile prendergli le misure, Diego Abatantuono è un attore straordinario.',
    linkEsterni: [
      { label: 'Pressbook', pending: true, type: 'pressbook' },
      { label: 'Filmitalia', url: 'https://filmitalia.org/it/film/81409/', type: 'site' },
    ],
    video: [
      { label: 'Trailer', url: 'https://www.youtube.com/watch?v=G6h9aO306eY' },
      { label: 'Scene (playlist)', url: 'https://www.youtube.com/playlist?list=PLp4AC-K3ElaPjL293ZPQ3nQ7gTHeNEiNB' },
    ],
    rassegnaStampaAnno: 2015,
    rassegnaStampaUrl: '/rassegna-stampa/#belli-di-papa',
    fotoGallery: '/foto/belli-di-papa/',
    materialiExtra: [
      { label: 'Sceneggiatura', url: '/materiali/belli-di-papa-sceneggiatura.pdf' },
    ],
  },

  'io-sono-con-te': {
    foto: '/images/foto/io-sono-con-te.jpg',
    fotoGallery: '/foto/io-sono-con-te/',
    locandina: '/images/locandine/io-sono-con-te.jpg',
    stills: [{ src: '/images/foto/io-sono-con-te.jpg', alt: 'Io sono con te – foto di scena' }],
    poster: { src: '/images/locandine/io-sono-con-te.jpg', alt: 'Io sono con te – locandina' },
    titoloEn: 'I Am With You',
    presentazione: 'Primo film scritto con Nicoletta Micheli, da una sua idea (di cui ha anche curato la vasta ricerca storica, antropologica e teologica che ne è alla base). Quando lei mi propose di realizzare un film su Maria, la mia prima reazione fu tutt\'altro che positiva: "Sei pazza. A chi vuoi che interessi una storia del genere?". A suscitare la mia avversione fu soprattutto l\'implicazione religiosa: pur non essendomi mai dichiarato ateo, la semplice menzione del divino mi richiamava alla mente credenze irrazionali tra il bigottismo e la superstizione. Per quanto sia stato poco visto, spesso per pregiudizio ("avrà avuto una crisi mistica?", "dai partigiani alla sagrestia", "hai visto la Madonna in technicolor?" erano le battute imbarazzate e scettiche di amici e colleghi) Io sono con te è un progetto che mi ha cambiato la vita. Se dal punto di vista professionale è stato un fiasco, ne sono serenamente orgoglioso.',
    presentazioneEn: 'The first film I wrote with Nicoletta Micheli, from an idea of hers — she also carried out the extensive historical, anthropological and theological research behind it. When Nicoletta suggested making a film about Mary, my first reaction was anything but positive: "You\'re out of your mind. Who on earth would care about a story like that?" What put me off most was the religious implication: though I had never called myself an atheist, the mere mention of the divine brought to mind irrational beliefs somewhere between bigotry and superstition. Little seen as it was, often out of prejudice — "did you have a mystical crisis?", "have you seen the Madonna in Technicolor?" were the embarrassed, sceptical jokes of friends and colleagues — I Am With You remains a project that changed my life. If professionally it was a flop, I am serenely proud of it.',
    video: [
      { label: 'Trailer', url: 'https://youtu.be/BrXSKYkxm2E', lang: 'it' },
      { label: 'Scena 1', url: 'https://youtu.be/398_9ou90tk', lang: 'it' },
      { label: 'Scena 2', url: 'https://youtu.be/3YJOuRqSZkI', lang: 'it' },
      { label: 'Scena 3', url: 'https://youtu.be/LzIGp0ChzNg', lang: 'it' },
      { label: 'Scena 4', url: 'https://youtu.be/N_1q8Wxjg_0', lang: 'it' },
      { label: 'Scene 1', url: 'https://youtu.be/D3YmctR4BJI', lang: 'en' },
      { label: 'Scene 2', url: 'https://youtu.be/14yDhHPGVF0', lang: 'en' },
      { label: 'Scene 3', url: 'https://youtu.be/BldZ7UzBkuw', lang: 'en' },
      { label: 'Scene 4', url: 'https://youtu.be/pDpn8Hu0O_A', lang: 'en' },
    ],
    contentEn: `<p><em>I Am with You</em> is a story about motherhood: that of Mary of Nazareth, from the conception of her son Jesus through to his adolescence. It portrays a mother and her relation with her son, supported by the discrete, evolving presence of Joseph, the patriarch who accepts to "step aside", foregoing the dominant male role. The questions raised by the film address topics such as birth, growth and the upbringing of children, all from a uniquely female point of view. This is what makes the film appealing both to believers and non-believers.</p>`,
    linkEsterni: [
      { label: 'English pressbook', url: '/media/opera/nicoletta-micheli-filippo-kalomenidis-e-guido-chiesa/i-am-you/pressbook%20inglese.pdf', type: 'pressbook', lang: 'en' },
    ],
    rassegnaStampaAnno: 2010,
    rassegnaStampaUrl: '/rassegna-stampa/#io-sono-con-te',
    fotoGalleria: true,
    scheda: {
      regia: 'Guido Chiesa',
      sceneggiatura: 'Nicoletta Micheli, Filippo Kalomenidis, Guido Chiesa',
      produzione: 'Colorado Film, Magda, Rai Cinema',
      interpreti: 'Nadia Khlifi (Maria), Rabeb Srairi (Maria adulta), Mustapha Benstiti (Giuseppe), Ahmed Hafiene (Mardocheo), Mohamed Idoudi (Gesù), Fadila Belkebla (Elisabetta), Djemel Barek (Zaccaria), Carlo Cecchi (Erode), Giorgio Colangeli, Fabrizio Gifuni, Denis Lavant, Robinson Stevenin, Jerzy Stuhr (I Sapienti), Aymen Mabrouk (Traduttore), Mohamed Grayaa (Hillel)',
      durata: '102 minuti',
      genere: 'Lungometraggio',
    },
    materialiExtra: [
      { label: 'Sceneggiatura', url: '/materiali/io-sono-con-te-sceneggiatura.pdf' },
    ],
  },

  'le-pere-di-adamo': {
    locandina: '/images/locandine/le-pere-di-adamo.jpg',
    poster: { src: '/images/locandine/le-pere-di-adamo.jpg', alt: 'Le pere di Adamo – locandina' },
    heroPhoto: { src: '/images/foto/le-pere-di-adamo/pere-di-adamo-con-mitsou.jpg', alt: 'Le pere di Adamo – foto di scena' },
    presentazione: 'In principio c\'era un\'analogia. Un\'affinità soprattutto visiva, forse poetica: i movimenti sociali assomigliano alle nuvole. Come le nuvole, arrivano, accadono, scompaiono. Poi, è entrato dentro di tutto: la meteorologia e la questione ambientale, il precariato e la scienza, l\'Illuminismo e la matematica, la politica e il mistero. Alla fine ne è venuto fuori un viaggio dentro i limiti della ragione e la necessità del mutamento. L\'ambizione era di realizzare un film leggero su argomenti pesanti. Non so se ci siamo riusciti, ma la fatica ne è valsa la pena. Perché nulla dopo mi è sembrato più come prima. Un lavoro ripagato con la censura del mercato ("bello ma difficile", il ritornello) e la disattenzione degli addetti ai lavori.',
    linkEsterni: [
      { label: 'CinemaItaliano', url: 'https://www.cinemaitaliano.info/leperediadamo', type: 'site' },
    ],
    video: [
      { label: 'Film (italiano)', url: 'https://youtu.be/vi7MYiNAhHM', lang: 'it' },
      { label: 'Film (English subtitles)', url: 'https://youtu.be/4N_9OpuVwWo', lang: 'en' },
    ],
    rassegnaStampaAnno: 2007,
    rassegnaStampaUrl: '/rassegna-stampa/#le-pere-di-adamo',
    fotoGallery: '/foto/le-pere-di-adamo/',
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
    stills: [{ src: '/images/foto/lavorare-con-lentezza.jpg', alt: 'Lavorare con lentezza – foto di scena' }],
    locandina: '/images/locandine/lavorare-con-lentezza.jpg',
    poster: { src: '/images/locandine/lavorare-con-lentezza.jpg', alt: 'Lavorare con lentezza – locandina' },
    presentazione: 'Avevo in mente un film su Radio Alice da quando, più di 20 anni prima, Franco "Bifo" Berardi mi aveva consegnato una scatola di audio-cassette con registrazioni dell\'emittente degli anni \'76-\'78 che gli erano state sequestrate (e riconsegnate) dai giudici durante una delle tante inchieste che lo avevano riguardato. Per me, allora 17enne, il \'77 bolognese era stata la morte di Francesco Lo Russo, l\'irruzione della polizia nella sede della radio e i carri armati in piazza. Ma anche gli indiani metropolitani e la (ri)scoperta della creatività (artistica e non) contrapposta alla seriosità della militanza. Poi scoprii che c\'era dentro tanto altro: fine delle ideologie e crisi della politica, linguaggi del desiderio e scenari prossimi futuri della comunicazione. Quando lo girammo, c\'era stata Genova 2001 e un velleitario sussulto di protagonismo dal basso. Scritto con Wu Ming, per molti aspetti un film ancora contemporaneo.',
    linkEsterni: [
      { label: 'Pressbook', url: '/pressbooks/lavorare-con-lentezza-pressbook.pdf', type: 'pressbook' },
    ],
    video: [
      { label: 'Film integrale', url: 'https://archive.org/details/lavorare_con_lentezza_radio_alice' },
      { label: 'Trailer', url: 'https://www.youtube.com/watch?v=vQopMM2uplg' },
      { label: 'Backstage parte 1', url: 'https://youtu.be/32b3DBYdwH4' },
      { label: 'Backstage parte 2', url: 'https://youtu.be/samOkriJHjE' },
    ],
    rassegnaStampaAnno: 2004,
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
    stills: [{ src: '/images/foto/il-partigiano-johnny.jpg', alt: 'Il partigiano Johnny – foto di scena' }],
    poster: { src: '/images/locandine/il-partigiano-johnny.jpg', alt: 'Il partigiano Johnny – locandina' },
    heroPhoto: { src: '/images/foto/il-partigiano-johnny/guido-chiesa-e-stefano-dionisi-sul-set.jpg', alt: 'Il partigiano Johnny – foto di scena' },
    presentazione: 'Ho dedicato quasi dieci anni alla realizzazione di questo progetto e solo alla fine ho capito perché l\'avevo fatto. Alcune scelte, col senno del poi, mi sembrano poco riuscite, anche se c\'era sempre dietro una ragione che mi aveva spinto ad adottarle. Oggi, lo rifarei completamente diverso, ma penso che sia un film destinato a invecchiare bene.',
    linkEsterni: [
      { label: 'CinemaItaliano', url: 'https://www.cinemaitaliano.info/ilpartigianojohnny', type: 'site' },
    ],
    video: [
      { label: 'Backstage parte 1', url: 'https://youtu.be/ACbmHGbgd5Y' },
      { label: 'Backstage parte 2', url: 'https://youtu.be/Rt8V98axWA0' },
      { label: 'Scena', url: 'https://www.youtube.com/watch?v=3FwiSl4Anno' },
    ],
    rassegnaStampaAnno: 2001, // ⚠️ film del 2000 — verificare se voluto (copertura uscita 2001) o refuso
    fotoGalleria: true,
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
    materialiExtra: [
      { label: 'Sceneggiatura', url: '/materiali/il-partigiano-johnny-sceneggiatura.pdf' },
    ],
  },

  'non-mi-basta-mai': {
    foto: '/images/foto/non-mi-basta-mai.jpg',
    locandina: '/images/locandine/non-mi-basta-mai.jpg',
    fotoGallery: '/foto/non-mi-basta-mai/',
    stills: [{ src: '/images/foto/non-mi-basta-mai.jpg', alt: 'Non mi basta mai – foto di scena' }],
    poster: { src: '/images/locandine/non-mi-basta-mai.jpg', alt: 'Non mi basta mai – locandina' },
    heroPhoto: { src: '/images/foto/non-mi-basta-mai/ebe-matta.jpg', alt: 'Non mi basta mai – foto di scena' },
    presentazione: 'Le vite al di là delle ideologie. Quando riguardo questo film, la cui realizzazione è merito principalmente di Daniele (stavo preparando Il partigiano Johnny nel mentre), non posso che riflettere su come le vite dei nostri cinque protagonisti siano state piegate, strattonate, spinte, centrifugate dalla Storia. Eppure, ferite, sono uscite dal gorgo se non felici, almeno con una non comune dignità. "Non mi basta mai" è dire ogni giorno che si può ancora cambiare. Il contrario di chi sente di aver diritto di brontolare solo perché un giorno credeva di aver avuto ragione.',
    linkEsterni: [
      { label: 'CinemaItaliano', url: 'https://www.cinemaitaliano.info/nonmibastamai', type: 'site' },
    ],
    rassegnaStampaAnno: 1999,
    fotoGalleria: true,
    scheda: {
      regia: 'Guido Chiesa, Daniele Vicari',
      durata: '78 minuti',
      genere: 'Documentario',
    },
  },

  'materiale-resistente': {
    locandina: '/images/locandine/materiale-resistente.jpg',
    poster: { src: '/images/locandine/materiale-resistente.jpg', alt: 'Materiale resistente – locandina' },
    presentazione: 'All\'inizio, fu un disco. In occasione del Cinquantesimo anniversario della Liberazione, su iniziativa del Consorzio Produttori Indipendenti, 18 tra i migliori gruppi di rock italiano incidono un CD chiamato Materiale Resistente. Per l\'uscita del disco - che contiene i rifacimenti di celebri canzoni della Resistenza, nonché brani scritti ad hoc - viene organizzato un concerto il 25 aprile 1995 a Correggio, provincia di Reggio nell\'Emilia. Davide Ferrario, saputa la notizia, telefona a Guido Chiesa e gli propone di riunire tecnici, amici e complici per documentare un evento che gli sembra terribilmente suggestivo e insieme necessario. Chiesa accetta e il 25 aprile, in mezzo al prato con gli oltre seimila di Correggio, ci sono anche loro, tre troupe e vari fotografi.',
    linkEsterni: [
      { label: 'Torino Città del Cinema', url: 'https://www.torinocittadelcinema.it/schedafilm.php?film_id=413&stile=small', type: 'site' },
    ],
    video: [
      { label: 'Film', url: 'https://www.youtube.com/watch?v=e2R-8PdMqwM' },
    ],
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
    stills: [{ src: '/images/foto/babylon.jpg', alt: 'Babylon – foto di scena' }],
    poster: { src: '/images/locandine/babylon-la-paura-e-la-miglior-amica-delluomo.jpg', alt: 'Babylon – locandina' },
    presentazione: 'Ho un rapporto ambivalente con questo film. Scritto e realizzato in tempi rapidissimi, un\'anomalia in una vicenda professionale fatta di tempi lunghi. Girato con 300 milioni in 18 giorni, nessun aiuto statale o televisivo, era la risposta allo stimolo che ci giungeva dal cinema americano indipendente, che in quegli anni insegnava al mondo come fare film a basso costo e alto tasso emotivo. Mai distribuito — per via di una congiuntura sfavorevole che obbligò la Mikado, che l\'aveva preso, a rinunciare perché la Fininvest gli aveva tagliato i pre-acquisti televisivi — ha girato il mondo più di ogni mio altro lavoro. Rimane la sensazione di aver fatto il passo più lungo della gamba, ma anche l\'orgoglio per averci provato.',
    linkEsterni: [
      { label: 'Pressbook', url: '/pressbooks/babylon-la-paura-e-la-miglior-amica-delluomo-pressbook.pdf', type: 'pressbook' },
    ],
    video: [
      { label: 'Film', url: 'https://www.youtube.com/watch?v=bbR_a_ao1vE' },
    ],
    rassegnaStampaAnno: 1994, // ⚠️ brief indicava 1991, ma il film è del 1994 — usato 1994 provvisoriamente
    fotoGalleria: true,
    scheda: {
      regia: 'Guido Chiesa',
      durata: '94 minuti',
      genere: 'Lungometraggio',
    },
  },

  'il-caso-martello': {
    foto: '/images/foto/il-caso-martello.jpg',
    fotoGallery: '/foto/il-caso-martello/',
    locandina: '/images/locandine/il-caso-martello.jpg',
    stills: [{ src: '/images/foto/il-caso-martello.jpg', alt: 'Il caso Martello – foto di scena' }],
    poster: { src: '/images/locandine/il-caso-martello.jpg', alt: 'Il caso Martello – locandina' },
    presentazione: 'La prima volta che dissi "motore, azione" e tutti mi ascoltarono, mi resi conto del potere perverso che avevo in mano. Ho sempre cercato di farne un uso discreto, senza fingere di essere in un sistema democratico - il cinema non lo è! - ma neanche abusando di esso. Fare il cinema non me l\'ha ordinato il dottore e non è mai stato il cinema in sé e per sé la ragione profonda del mio interesse per questo linguaggio espressivo. All\'epoca di Il caso Martello pensavo che questa ragione fosse l\'impegno politico e culturale, declinato attraverso il discorso sull\'essere umano e il suo agire, privato e sociale. Oggi, è rimasto solo l\'essere umano, il resto in prospettiva, sullo sfondo, il linguaggio come indivisibile forma e sostanza.',
    linkEsterni: [
      { label: 'Torino Città del Cinema', url: 'https://www.torinocittadelcinema.it/schedafilm.php?film_id=99', type: 'site' },
    ],
    rassegnaStampaAnno: 1991,
    fotoUrl: '/foto/il-caso-martello/',
    fotoGalleria: true,
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

  /* ═══════════════════════════════════════════════════════
     CORTOMETRAGGI
  ═══════════════════════════════════════════════════════ */

  'fragole-celesti': {
    heroPhoto: { src: '/images/foto/fragole-celesti.jpg', alt: 'Fragole celesti – foto di scena' },
    presentazione: 'Cinque attrici, sei donne, sette performance sulla relazione tra abuso sessuale e dipendenza da droghe, cibi, alcool, ecc. Fermata d\'Autobus è una comunità terapeutica che si occupa di ogni forma di dipendenza (droghe, cibo, alcool, gioco, ecc.). I dati da loro raccolti in oltre trent\'anni di attività testimoniano che il 77% delle pazienti (e il 44% dei pazienti maschi) ha subito durante l\'infanzia maltrattamenti, abusi o reiterate molestie sessuali. A partire da questo dato, i terapeuti di Fermata d\'Autobus hanno dato vita al progetto di Fragole celesti, una comunità per sole donne. Tutte le immagini, le parole e i suoni di questo lavoro sono stati generati, suggeriti, ispirati dalle testimonianze di queste pazienti. Note di regia: non volevo fare un documentario, ma una serie di "prose/poesie" alla ricerca delle parole perdute di donne che una volta erano bambine fiduciose e ora brancolano sotto il peso e il senso di colpa dell\'innocenza violata. Un lavoro di cui sono molto convinto e contento.',
    scheda: {
      genere: 'Cortometraggio',
    },
    video: [
      { label: 'Film completo', url: 'https://www.youtube.com/watch?v=mZFNprMlKHQ' },
    ],
    fotoGalleria: true,
    fotoGallery: '/foto/fragole-celesti/',
    linkEsterni: [
      { label: 'Cinema Italiano', url: 'https://www.cinemaitaliano.info/fragolecelesti', type: 'site' },
    ],
  },

  'il-cuore-del-soldatino': {
    heroPhoto: { src: '/images/foto/il-cuore-del-soldatino.jpg', alt: 'Il cuore del soldatino – foto di scena' },
    presentazione: 'Una favola di Hans Christian Andersen, uno dei pochi ricordi di un\'infanzia normalmente felice. Ma dove sono finiti tutti gli altri ricordi? Perché sono stati rimossi? E poi, lo sono stati veramente? Filmati, fotografie dei nostri primi anni possono restituirci le emozioni, le sensazioni di quello che abbiamo vissuto? Guardandoli, si può forse capire il prezzo pagato. Note di regia: questo film, benché breve, mi è costato molta fatica. Non so se fornisce le risposte ai quesiti sopra esposti. Una possibile soluzione, forse, sta nella favola di Andersen, un narratore che non cerca mai la ricomposizione tra vittime e persecutori (quella stessa che altri suoi illustri colleghi praticano, guarda caso, sempre a vantaggio degli adulti!). L\'autore di Il soldatino di piombo riconosce sempre e fino in fondo la sofferenza di un\'infanzia negata, colpevolizzata, manipolata in nome dell\'educazione e dell\'imposizione delle regole. Un\'infanzia che, una volta cresciuta, finisce poi per credersi umanità diversa, con senso di colpa o con l\'orgoglio delle scelte trasgressive. Senza rendersi conto che entrambe le strade non sono altro che strategie di sopravvivenza alla mancanza d\'amore.',
    video: [
      { label: 'Film completo', url: 'https://youtu.be/kAdSewSK8oI' },
    ],
    linkEsterni: [
      { label: 'Vivo Film', url: 'https://vivofilm.it/production/il-cuore-del-soldatino/', type: 'site' },
    ],
  },
  'quei-momenti-eroici': {
    heroPhoto: { src: '/images/foto/quei-momenti-eroici.jpg', alt: 'Quei momenti eroici – foto di scena' },
    presentazione: 'Girato senza budget, in Super8 a New York nel 1988 (ad esclusione del brano di Nick Cave con Cristiano Godano dei Marlene Kuntz, girato in 16 mm. sette anni più tardi) e finito di montare nel 1995 in Italia con abbondante aggiunta di materiale d\'archivio. Sette canzoni celebri, sette solitudini, sette storie di personaggi che credono troppo alle canzoni che ascoltano, sette (falsi) video musicali che narrano di quei momenti in cui si è così soli che non fa nemmeno male esistere. Note di regia: chi si prende troppo sul serio è perduto, ma chi non ci prova nemmeno a prendere qualcosa sul serio non sa che cosa vuol dire vivere. Col senno del poi, questo lavoro segna una graduale presa di distanza dal rock e dalla sua mitologia adolescenziale. Al momento, fu un grande divertimento. Con James Smith, Chuck De Cuir, Guido Chiesa, Trula Hoosier, Michael Pyrnick, Rebecca Moore, Cristiano Godano, Monica Merlo. Scritto da Guido Chiesa, prodotto da Christine Vachon e Michael Solomon per Cross Production e Brooklin Films, fotografia: Les Japan, fotografia per "By The Time I Get To Phoenix": Gherardo Gossi, montaggio: Fulvio Molena, 21 minuti.',
    video: [
      { label: 'Film completo', url: 'https://www.youtube.com/watch?v=uj11aMW0eSw' },
    ],
  },

  'il-tempo-dei-sogni': {
    heroPhoto: { src: '/images/foto/il-tempo-dei-sogni.jpg', alt: 'Il tempo dei sogni – foto di scena' },
    presentazione: 'Il film finanziato dal Comitato di Tutela Verde Roero, che si prefigge la salvaguardia e la promozione dell\'omonima area del Piemonte. Ma nessuno ci ha chiesto di fare uno spot pubblicitario o un bozzetto elegiaco. La storia potrebbe svolgersi ovunque e crediamo che i temi toccati dal film — la morte, la crudeltà nella natura, il rapporto tra le generazioni — vadano ben al di là dei confini del Roero.',
    scheda: {
      genere: 'Cortometraggio',
    },
    video: [
      { label: 'Film completo', url: 'https://youtu.be/0Nu9I14YWm8' },
    ],
    linkEsterni: [
      { label: 'Torino Film Festival', url: 'https://www.torinofilmfest.org/it/11-festival-internazionale-cinema-giovani/film/il-tempo-dei-sogni-(un-film-per-il-roero)/2289/', type: 'site' },
    ],
  },

  'black-harvest': {
    heroPhoto: { src: '/images/foto/black-harvest.jpg', alt: 'Black Harvest – foto di scena' },
    presentazione: 'Black Harvest doveva essere il primo capitolo del lungometraggio Short Lives (poi diventato The Hole, e infine Tomesha), la saga di Danny, la sua banda di "bruciati" e del "buco nella Valle della Morte" sognato da Charles Manson.',
    fotoGallery: '/foto/black-harvest/',
    trailer: 'https://www.youtube-nocookie.com/embed/nvEv3APs6Ko',
    fotoGalleria: true,
    rassegnaStampaAnno: 1986,
    linkEsterni: [
      { label: 'Pressbook', url: '/pressbooks/black-harvest-pressbook.pdf', type: 'pressbook' },
      { label: 'Sceneggiatura: The Hole', url: '/sceneggiature/#hole', type: 'site' },
      { label: 'Sceneggiatura: Tomesha', url: '/sceneggiature/#tomesha', type: 'site' },
    ],
  },

  'give-me-spell': {
    foto: '/images/foto/give-me-a-spell.jpg',
    fotoGallery: '/foto/give-me-a-spell/',
    stills: [{ src: '/images/foto/give-me-a-spell.jpg', alt: 'Give Me A Spell – foto di scena' }],
    fotoGalleria: true,
    presentazione: 'Give me a spell segue in pochi sguardi la disintegrazione di una giovane coppia. Michael e Donna si combattono, alternando una reciproca comprensione e un reciproco rifiuto dell\'altro. Essi si confrontano con la frustrazione e la paura che assale coloro per cui le parole e il silenzio sono egualmente isolanti. Note di regia: il titolo del film è originato dall\'ossessione per la parola spell che, ho scoperto, ha diversi significati: formula magica, riposo, periodo di tempo... Alcune persone hanno trovato strano un simile titolo per una storia di due amanti che, nel giorno finale della loro separazione, dicono e fanno cose inaspettate come l\'amore e una litigata di economia domestica. Ma non è forse l\'amore una forma di spell, una formula magica? Ho cercato di realizzare questa storia usando uno stile semplice, austero, evitando ogni discorso di metacinema. Tutti gli elementi dell\'inquadratura sono stati selezionati con una severa attenzione alla loro relazione con gli attori e l\'atmosfera della vicenda.',
    video: [
      { label: 'Film completo', url: 'https://youtu.be/KWo-dH5D1EQ' },
    ],
    rassegnaStampaAnno: 1985,
    linkEsterni: [
      { label: 'Torino Film Festival', url: 'https://www.torinofilmfest.org/it/3-festival-internazionale-cinema-giovani/film/give-me-a-spell/5052/', type: 'site' },
    ],
  },

  /* ═══════════════════════════════════════════════════════
     SERIAL
  ═══════════════════════════════════════════════════════ */

  'quo-vadis-baby': {
    locandina: '/images/locandine/quo-vadis-baby.jpg',
    poster: { src: '/images/locandine/quo-vadis-baby.jpg', alt: 'Quo Vadis, Baby? – locandina' },
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
    trailer: 'https://www.youtube-nocookie.com/embed/HvTIIFGzk_Q',
    rassegnaStampaAnno: 2008,
    fotoGalleria: true,
    fotoGallery: '/foto/quo-vadis-baby/',
    linkEsterni: [
      { label: 'Wikipedia', url: 'https://it.wikipedia.org/wiki/Quo_vadis,_baby?_(miniserie_televisiva)', type: 'site' },
    ],
  },

  /* ═══════════════════════════════════════════════════════
     DOCUMENTARI
  ═══════════════════════════════════════════════════════ */

  'sono-stati-loro-48-ore-novi-ligure': {
    heroPhoto: { src: '/images/foto/sono-stati-loro-48-ore-novi-ligure.jpg', alt: 'Sono stati loro – le villette di Novi Ligure' },
    presentazione: 'Il 21 febbraio 2001, la vita di Novi Ligure cambia drammaticamente: in una villetta della periferia vengono trucidati Susy Cassini e suo figlio Gianluca. L\'unica sopravvissuta, Erika, indica ladri di origine slava. Per 48 ore l\'informazione italiana gronda di dettagli macabri, e nel calderone finisce tutto: immigrati clandestini, inefficacia delle pene, prostituzione, droga, pena di morte. Poi l\'annuncio choc: gli assassini sono Erika e il suo ragazzo. Il documentario indaga l\'angoscia degli abitanti di Novi — costruita in parte dai mass media, sfruttata dalla politica, ma reale — attraverso materiale documentario e i dialoghi di un gruppo di amici interpretato da attori. Quello che ho cercato di fare è mettere in scena la globalità dei fattori in gioco, non la denuncia: volevo indagare il "dietro le quinte" di quelle dichiarazioni. L\'angoscia, l\'ansia e la paura sono reali, anche quando — come nel caso di Novi — sono basate su errori di valutazione.',
    fotoGalleria: true,
    rassegnaStampaAnno: 2003,
    scheda: {
      genere: 'Documentario',
    },
    video: [
      { label: 'Film completo', url: 'https://youtu.be/SEflvPlsmYw' },
    ],
    linkEsterni: [
      { label: 'Cinema Italiano', url: 'https://www.cinemaitaliano.info/sonostatiloro', type: 'site' },
    ],
  },

  'stessa-spiaggia-stesso-mare': {
    heroPhoto: { src: '/images/foto/stessa-spiaggia-stesso-mare.jpg', alt: 'Stessa spiaggia, stesso mare – foto di scena' },
    presentazione: 'Com\'era la Riviera Romagnola prima di essere invasa da pacifiche orde di turisti nordeuropei? Com\'è nato il mito di quel breve tratto di costa italiana, delle sue notti, dei suoi \'vitelloni\'? Cosa ha significato sul piano sociale e culturale l\'avvento del turismo straniero di massa nell\'Italia del Boom economico e delle sue contraddizioni? Queste e molte altre domande sono al centro di Stessa spiaggia, stesso mare, un documentario in cui Guido Chiesa ha scelto di indagare quel peculiare \'melting pot\' alla romagnola che si è venuto a creare in Riviera dal dopoguerra in poi, grazie all\'afflusso di incredibili quantità di turisti tedeschi, britannici e scandinavi, attratti dal mito d\'un\'Italia assolata, sensuale e terribilmente \'latina\'. Un incontro che ha creato famiglie, ristoranti, pensioni, mettendo le ali all\'economia della zona, e che ha dato vita a un immaginario collettivo che resiste ancora oggi. Con taglio leggero e ironico, Chiesa rivisita quegli anni attraverso le testimonianze dei protagonisti e materiali documentari d\'archivio, in una trama narrativa arricchita dalle immagini della Riviera oggi e dalle parole dei suoi protagonisti di un tempo.',
    scheda: {
      durata: '52 minuti',
      genere: 'Documentario',
    },
    linkEsterni: [
      { label: 'Link esterno', url: 'http://www.vivofilm.it/?p=161', type: 'site' },
    ],
  },

  'kishe-ione-la-nostra-chiesa': {
    heroPhoto: { src: '/images/foto/kishe-ione-la-nostra-chiesa.jpg', alt: 'Kishe Ione – La nostra Chiesa – foto di scena' },
    presentazione: 'Per chi si avvicina per la prima volta alla scoperta del mondo e della cultura arbereshe, l\'aspetto forse più sorprendente è la permanenza di una forte identità religiosa, legata alla tradizione del rito greco ortodosso, benché sviluppatasi in seno alla Chiesa cattolica romana. La nostra chiesa racconta, in un percorso introdotto e accompagnato dal linguista Francesco Altimari, la storia e lo stato attuale di questa peculiare dimensione degli italo albanesi, declinandola attraverso tre comunità simbolo: San Demetrio Corone, Spezzano Albanese e Falconara Albanese. Nel primo caso si prende in esame una realtà in cui il rito è ancora forte, vivo, praticato, e in cui l\'identità degli arbereshe appare salda e al tempo stesso dinamica. Nel secondo, la scomparsa nel XVII secolo del rito bizantino a favore di quello latino pare a lungo andare aver indebolito la comunità arbereshe, lasciandola più indifesa di fronte all\'omologazione del mondo contemporaneo. Il terzo caso — Falconara, comune isolato sullo Ionio — ha assistito negli anni \'70 a una sorta di trapianto artificiale, con il ritorno forzoso del rito bizantino dopo quasi trecento anni. Ed è proprio l\'identità il fuoco del discorso: un\'identità che, di fronte alla crescente secolarizzazione, all\'accresciuta mobilità sociale e ai matrimoni misti, rischia di divenire col tempo una mera indicazione anagrafica.',
    scheda: {
      regia: 'Guido Chiesa, Enzo Mercuri',
      sceneggiatura: 'Guido Chiesa, Enzo Mercuri',
      produzione: 'Palomar',
      produttore: 'Nicola Sofri',
      fotografia: 'Pino Iannelli',
      montaggio: 'Benni Atria, Stefano Cravero',
      durata: '52 minuti',
      genere: 'Documentario',
    },
    linkEsterni: [
      { label: 'Cinema Italiano', url: 'https://www.cinemaitaliano.info/lanostrachiesa', type: 'site' },
    ],
  },

  'partigiani': {
    heroPhoto: { src: '/images/foto/partigiani.jpg', alt: 'Partigiani – foto di scena' },
    presentazione: '25 aprile 1995, cinquant\'anni dalla Liberazione, Guido Chiesa e Davide Ferrario iniziano a Correggio, provincia di Reggio Emilia, l\'avventura di Materiale resistente: rock e partigiani, giovani e anziani, un minimo comune denominatore chiamato resistenza. Sei mesi dopo, alla prima del film a Correggio, la platea è per metà composta da partigiani. Assistono ammutoliti, poi esprimono un desiderio per nulla narcisistico: la prossima volta fate un film su di noi. Guido e Davide sanno che gli tocca. È l\'inizio di un rapporto intenso, problematico, a tratti polemico tra partigiani e filmmaker (a cui si aggiungono man mano Daniele Vicari, Antonio Leotti e Marco Puccioni), che solo incidentalmente verte sul film e le sue necessità specifiche. La vera questione è un\'altra: che cos\'è la memoria? A che serve? Dove finisce l\'analisi storica e inizia la retorica? Che ne sarà dell\'identità e del mito dei partigiani ora che il loro tempo si avvia alla fine? Domande pesanti, ambiziose, che accompagnano le lunghe ricerche che precedono la realizzazione del film, nonché il dibattito stesso tra i filmmaker, per nulla unanimi nell\'approccio alla materia. Partigiani è infine proprio questo: l\'esito di un confronto, per forza di cose frammentario e aperto, che ha coinvolto cineasti e ricercatori, partigiani e loro familiari, fino a comprendere l\'intera Correggio e la storia di questi cinquantadue anni di post-Resistenza. Il video è composto da nove episodi, il primo dei quali (realizzato da Guido Chiesa) è una fiction, basato su un fatto realmente accaduto. Gli episodi successivi sono dei documentari.',
    scheda: {
      regia: 'Guido Chiesa, Davide Ferrario, Antonio Leotti, Marco Puccioni, Daniele Vicari',
      sceneggiatura: 'Guido Chiesa, Davide Ferrario, Antonio Leotti, Marco Puccioni, Daniele Vicari',
      produzione: 'Intel Film, A.N.P.I.',
      fotografia: 'Giovanni Gebbia, Gherardo Gossi, Massimiliano Trevis, Terek Ben Abdallah',
      montaggio: 'Luca Gasparini',
      musiche: 'Afa',
      durata: '62 minuti',
      genere: 'Documentario',
    },
    video: [
      { label: 'Film completo', url: 'https://www.youtube.com/watch?v=GpQlU3U-DBg' },
    ],
    rassegnaStampaAnno: 1997,
    fotoGallery: '/foto/partigiani/',
    fotoGalleria: true,
    linkEsterni: [
      { label: 'Torino Film Festival', url: 'https://www.torinofilmfest.org/it/16-torino-film-festival/film/partigiani/1186/', type: 'site' },
    ],
  },

  'il-contratto': {
    heroPhoto: { src: '/images/foto/il-contratto.jpg', alt: 'Il contratto – foto di scena' },
    presentazione: 'Jadelin Mabiala Gangbo ha 25 anni e abita a Bologna. Fa parte dei venticinquenni che girano in quel sottobosco di studenti, bohemienne e frequentatori di osterie; ne ha tutti i tratti e le idiosincrasie: lunghi capelli rasta, vestiti sdruciti, atteggiamento chiuso. Uno come tanti. Se non fosse per tre, distinte e inseparabili, peculiarità. La prima è che Jadelin, come dice lui, è negro. La seconda è che rischia l\'espulsione. È arrivato in Italia a 4 anni, figlio di un imprenditore congolese; quando i genitori falliscono e fuggono in Africa, i sette fratelli finiscono ai servizi sociali. A 18 anni Jadelin esce dall\'affidamento e diventa cittadino… del Benin. Con 21 anni di Italia addosso e un accento che più di Imola non si può, deve rinnovare periodicamente il permesso di soggiorno. Con la nuova legge, se non trova un contratto di lavoro potrà essere espulso. Ma ecco la terza, inattesa peculiarità: Jadelin scrive. Nota di regia: la sua storia evidenzia tutti i limiti di un discorso sull\'immigrazione fatto esclusivamente su parametri economici o di pubblica sicurezza.',
    trailer: 'https://www.youtube-nocookie.com/embed/7ZqBqXpeLk8',
    rassegnaStampaAnno: 2002,
    scheda: {
      genere: 'Documentario',
    },
    linkEsterni: [
      { label: 'Cinematografo', url: 'https://www.cinematografo.it/film/il-contratto-n6tbv7hs', type: 'site' },
    ],
  },

  'alice-e-paradiso': {
    heroPhoto: { src: '/images/foto/alice-e-paradiso.jpg', alt: 'Alice è in paradiso – foto di scena' },
    presentazione: 'Per 25 anni, Radio Alice è rimasta la "radio degli autonomi", la voce degli scontri che sconvolsero il capoluogo emiliano nel marzo \'77. Eppure, chiunque si avvicini oggi alla vicenda di Radio Alice non fatica a scoprire che l\'aspetto belligerante era ben lontano dal suo progetto culturale e dalle esperienze personali e collettive che l\'avevano generata. In realtà, Radio Alice è stato uno dei più singolari e originali esperimenti sulla comunicazione che abbiano mai preso piede in Italia. Priva di una vera e propria redazione e ancor più di un palinsesto, l\'emittente bolognese, concepita nel 1975 nel bel mezzo dell\'esplosione delle cosiddette radio libere, aveva fatto della spontaneità e della contaminazione qualcosa di più di una semplice bandiera: un progetto in cui istanze politiche, artistiche ed esistenziali si fondevano nel comune denominatore dell\'universo radiofonico.',
    trailer: 'https://player.vimeo.com/video/249293958',
    rassegnaStampaAnno: 2002,
    scheda: {
      genere: 'Documentario',
    },
    linkEsterni: [
      { label: 'Cinema Italiano', url: 'https://www.cinemaitaliano.info/aliceeinparadiso', type: 'site' },
      { label: 'Radio Alice', url: 'https://radioalice.org/index.php?option=com_content&view=article&id=34:alice-e-in-paradiso&catid=13&Itemid=129', type: 'site' },
    ],
  },

  'ma-che-ci-faccio-io-sanremo': {
    heroPhoto: { src: '/images/foto/ma-che-ci-faccio-io-sanremo.jpg', alt: 'Ma che ci faccio io a Sanremo – foto di scena' },
    presentazione: 'Un viaggio nel carrozzone del Festival in compagnia di alcuni tra i suoi conduttori occasionali degli ultimi 25 anni (Stefania Casini, Andrea Giordana, Rosita Celentano, Andrea Occhipinti, Veronica Pivetti), di un giornalista innamorato del festival (Nino Pirito), di molto materiale d\'archivio e di uno sguardo ironico e tutt\'altro che complice. Note di regia: un divertissement senza ambizioni.',
    scheda: {
      genere: 'Documentario',
    },
  },

  'provini-un-massacro': {
    heroPhoto: { src: '/images/foto/provini-un-massacro.jpg', alt: 'Provini per un massacro – foto di scena' },
    presentazione: 'Pasolini scelse gli attori del suo Salò o le 120 giornate di Sodoma prendendoli "dalla strada". Quei provini sono stati ripetuti per registrare le reazioni degli aspiranti attori di oggi, ragazzi e ragazze seguiti poi nella quotidianità delle periferie di Roma in una vera e propria indagine sulla omologazione dei corpi e delle vite che Pasolini denunciava con la barbarie del suo ultimo film. Note di regia: ho un rapporto ambiguo e contraddittorio con l\'opera di Pasolini, ma Salò rimane uno dei 4-5 film che indico quando mi chiedono "il tuo film preferito". È uno dei miei lavori a cui sono più legato perché sfugge all\'ideologia e cerca di ascoltare con pietas le nuove vittime della de-umanizzazione del materialismo consumista.',
    rassegnaStampaAnno: 2000,
    scheda: {
      genere: 'Documentario',
    },
    video: [
      { label: 'Film completo', url: 'https://youtu.be/mzRj7cvgEaA' },
    ],
    linkEsterni: [
      { label: 'Torino Film Festival', url: 'https://www.torinofilmfest.org/en/18-torino-film-festival/film/provini-per-un-massacro/573/', type: 'site' },
    ],
  },

  'una-questione-privata-vita-di-beppe-fenoglio': {
    heroPhoto: { src: '/images/foto/una-questione-privata-vita-di-beppe-fenoglio.jpg', alt: 'Una questione privata. Vita di Beppe Fenoglio – foto di scena' },
    presentazione: 'Sullo sfondo di un\'Alba provinciale e conservatrice, i racconti di chi ha conosciuto Beppe Fenoglio (10 mesi di lavoro e quasi 200 interviste) permettono di ricostruirne la personalità, il rapporto con la città, le donne (in particolare con Fulvia, il suo primo amore, e con Luciana Bombardi, la donna che sposò), l\'esperienza partigiana, l\'impegno civile dopo la guerra, le opere letterarie, i legami con gli altri intellettuali, le passioni, la malattia e la morte. Note di regia: credo che se mi sono occupato così tanto di Fenoglio, non è stato per la Resistenza o per le comuni radici piemontesi, ma perché mi ha permesso di fare i conti con una parte di me. Il migliore scrittore italiano del \'900, comunque, a mio modesto avviso.',
    rassegnaStampaAnno: 1998,
    scheda: {
      genere: 'Documentario',
    },
    video: [
      { label: 'Film completo', url: 'https://youtu.be/Nqagx97OtLk' },
    ],
    linkEsterni: [
      { label: 'Torino Città del Cinema', url: 'https://www.torinocittadelcinema.it/schedafilm.php?film_id=548&stile=small', type: 'site' },
    ],
  },

  'volare-la-grande-trasformazione-1951-19': {
    heroPhoto: { src: '/images/foto/volare-la-grande-trasformazione-1951-19.jpg', alt: 'Volare, la grande trasformazione – foto di scena' },
    presentazione: 'Nel dopoguerra, l\'Italia da povero paese agricolo, cattolico e familista diventa potenza industriale di rincalzo, consumista e ancora familista (ma con i rapporti di forza tra padri e figli, uomini e donne, città e campagne definitivamente stravolti). L\'Italia del boom economico, di Modugno che canta Volare a Sanremo, della Vespa e dei televisori in ogni casa. Ma anche della Dolce vita e del governo Tambroni, di Enrico Mattei e della cementificazione massiccia delle periferie. Per alcuni fu l\'inizio della modernizzazione del paese, per altri (Pasolini) una grande tragedia antropologica. Ma, forse, non sono solo queste le letture possibili. Note di regia: le letture che Volare affronta e propone partono dal passato per interpretare il presente, per capire le radici di fenomeni sociali e politici tutt\'altro che sepolti. E nel farlo rifiuta la logica della nostalgia, il revivalismo post-moderno, l\'umiliazione del valore etico dell\'immagine. Solo così, il discorso sul passato può diventare altro che una mera celebrazione del presente.',
    scheda: {
      sceneggiatura: 'Guido Chiesa, Giovanni De Luna',
      produzione: 'Videa in coproduzione con Rai e Artè',
      produttore: 'Carlo Cresto-Dina',
      montaggio: 'Luca Gasparini',
      durata: '55 minuti',
      genere: 'Documentario',
    },
    video: [
      { label: 'Film completo', url: 'https://youtu.be/-iJ3GfoMGcM' },
    ],
  },

  'un-giorno-di-fuoco': {
    heroPhoto: { src: '/images/foto/un-giorno-di-fuoco.jpg', alt: 'Un giorno di fuoco – foto di scena' },
    presentazione: 'Alba, 5 ottobre 1996. I CSI in concerto nella chiesa di San Domenico. Alle loro spalle, sull\'abside, le immagini proiettate dal sottoscritto. In mezzo, le letture di Giuseppe Cederna e le testimonianze del fratello Walter, dell\'amico Ugo Cerrato, del commilitone e partigiano Aldo Spinardi e della figlia mai conosciuta Margherita. Il tutto, necessariamente, per Giuseppe Fenoglio, detto Beppe, scrittore albese morto nel 1963 a 41 anni, ex partigiano, impiegato in una ditta vinicola e figura anomala nel panorama culturale italiano del dopoguerra: schivo, provinciale benché capace di una lingua universale. Un giorno di fuoco è stato un evento irripetibile, mai replicabile. Il film e il disco fatto uscire dai CSI (La terra, la guerra e una questione privata) restituiscono solo un\'ombra dell\'energia che circolava quella sera nella chiesa di Alba. Ma quel che ha scritto Fenoglio è più che mai lì a parlarci.',
    scheda: {
      genere: 'Documentario',
    },
    video: [
      { label: 'Film completo', url: 'https://youtu.be/yURAviTkr6M' },
    ],
    linkEsterni: [
      { label: 'Torino Città del Cinema', url: 'https://www.torinocittadelcinema.it/schedafilm.php?film_id=522&stile=small', type: 'site' },
    ],
  },

  'nascita-di-una-democrazia': {
    heroPhoto: { src: '/images/foto/nascita-di-una-democrazia.jpg', alt: 'Nascita di una democrazia – foto di scena' },
    presentazione: 'Mentre a Roma si scrive la Costituzione, nel resto del paese inizia una faticosa rinascita, tra le ferite del recente passato e l\'ebbrezza per la scoperta della politica. Attraverso interviste, musiche, film e materiali d\'archivio, il racconto di quanto è accaduto in Italia durante i due anni in cui è stata scritta la Costituzione. Da Tombolo a Trieste, da Aci Trezza dove Visconti gira "La terra trema" a Reggio Emilia dove si formano i grandi partiti di massa. Andato in onda in 2 puntate su RAI 2 nel 1997.',
    rassegnaStampaAnno: 1997,
    scheda: {
      genere: 'Documentario',
    },
    video: [
      { label: 'Parte 1', url: 'https://youtu.be/MiWy8Ljy_jI' },
      { label: 'Parte 2', url: 'https://youtu.be/k_IJ5kM5bLU' },
    ],
    linkEsterni: [
      { label: 'Torino Città del Cinema', url: 'https://www.torinocittadelcinema.it/schedafilm.php?film_id=536&stile=small', type: 'site' },
    ],
  },

  'petali-di-candore-marlene-kuntz-96-97': {
    heroPhoto: { src: '/images/foto/petali-di-candore-marlene-kuntz-96-97.jpg', alt: 'Petali di candore. Marlene Kuntz \'96–\'97 – foto di scena' },
    presentazione: 'Oltre un anno sulle orme dei Marlene Kuntz dal vivo, sulla strada e nella loro natia provincia di Cuneo. Ritratto dietro le quinte del gruppo musicale piemontese dei Marlene Kuntz, impegnato in un tour per l\'uscita dell\'album Il vile. Note di regia: ho affetto per i Marlene non solo per la musica che hanno saputo realizzare, ma soprattutto perché non nascondono il loro provincialismo, senza per questo farne una bandiera.',
    scheda: {
      regia: 'Guido Chiesa, Francesca Dall\'Olio',
      produzione: 'Consorzio Produttori Indipendenti per Polygram',
      fotografia: 'Francesca Dall\'Olio',
      musiche: 'Marlene Kuntz (repertorio)',
      montaggio: 'Luca Gasparini',
      durata: '98 minuti',
      genere: 'Documentario',
    },
  },

  'ritratti-dautore-i-fratelli-taviani': {
    heroPhoto: { src: '/images/foto/ritratti-dautore-i-fratelli-taviani.jpg', alt: 'Ritratti d\'autore: I fratelli Taviani – foto di scena' },
    presentazione: 'A cena con i celebri fratelli registi, per parlare di cinema, Underground di Kusturica e generazioni a confronto. Un\'esperienza vivace e un incontro utile alla riflessione. Parte della serie "Ritratti d\'autore" che metteva di fronte registi di diverse età ed epoche.',
    scheda: {
      genere: 'Documentario',
    },
    video: [
      { label: 'Film completo', url: 'https://youtu.be/mctQL4Ks9f8' },
    ],
    linkEsterni: [
      { label: 'IMDb', url: 'https://www.imdb.com/it/title/tt1547594/fullcredits/?ref_=tt_cst_sm', type: 'site' },
    ],
  },

  'rane-culatelli-e-lucciole': {
    heroPhoto: { src: '/images/foto/rane-culatelli-e-lucciole.jpg', alt: 'Rane, culatelli e lucciole – foto di scena' },
    presentazione: 'Viaggio nei luoghi dove Bernardo Bertolucci ha girato la sua "trilogia padana": Prima della rivoluzione, La strategia del ragno, Novecento. Note di regia: girato come parte di una serie (credo mai realizzata) di sopralluoghi sulle location di set famosi. Nelle ambizioni voleva essere, attraverso Bertolucci, uno sguardo sull\'Emilia e le sue contraddizioni para-comuniste e ultra-consumiste. Temo che la durata richiesta non abbia giovato alle idee, già non lucidissime di per sé. Scritto da Guido Chiesa, prodotto da Brooklyn Film per Telepiù, fotografia Gherardo Gossi, montaggio Benni Atria, suono Gianluca Costamagna, ricerche e sopralluoghi Simone Simonazzi, produzione Enrico Verra, 16 minuti.',
    scheda: {
      sceneggiatura: 'Guido Chiesa',
      produzione: 'Brooklyn Film per Telepiù',
      fotografia: 'Gherardo Gossi',
      montaggio: 'Benni Atria',
      durata: '16 minuti',
      genere: 'Documentario',
    },
  },

  'indipendenti-new-york-radiografia-di-unalternativa': {
    heroPhoto: { src: '/images/foto/indipendenti-new-york-radiografia-di-unalternativa.jpg', alt: 'Indipendenti a New York – foto di scena' },
    presentazione: 'Girato in Hi8 con una troupe improvvisata, è la fotografia del cinema indipendente americano dieci anni dopo il successo di film come Stranger Than Paradise, Lola Darling, Smithereens, che avevano legittimato commercialmente le produzioni indie. Note di regia: un ritorno, sul filo della memoria personale, in un mondo che avevo a lungo frequentato, ma da cui mi sentivo man mano più distante.',
    scheda: {
      sceneggiatura: 'Guido Chiesa',
      produzione: 'Brooklyn Film per Telepiù',
      fotografia: 'Michael Kasino',
      montaggio: 'Benni Atria',
      produttore: 'Michael Solomon',
      durata: '17 minuti',
      genere: 'Documentario',
    },
    linkEsterni: [
      { label: 'IMDb', url: 'https://www.imdb.com/it/title/tt15289346/fullcredits/?ref_=tt_ov_sm_2#amzn1.imdb.concept.name_credit_group.7caf7d16-5db9-4f4f-8864-d4c6e711c686', type: 'site' },
    ],
  },

  'torino-guerra-1940-1945': {
    heroPhoto: { src: '/images/foto/torino-guerra-1940-1945.jpg', alt: 'Torino in guerra. 1940–1945 – foto di scena' },
    presentazione: 'Il racconto, attraverso materiali d\'archivio e le dichiarazioni di alcuni testimoni "qualunque" della vita a Torino durante gli anni della guerra, prima vissuta attraverso le notizie dai fronti, poi in prima persona con l\'occupazione nazifascista. Eventi storici, racconti privati, costume, sport e vita quotidiana, si alternano in una narrazione che fungeva da corollario all\'omonima mostra allestita nel 1995 all\'interno della Mole Antonelliana, non ancora Museo del Cinema. La proiezione era accompagnata, in alcuni precisi punti (i bombardamenti, l\'instaurazione della RSI, le fucilazioni), dalla messinscena di eventi live realizzati con la collaborazione di Fulvio Massaro. Note di regia: primo frutto della collaborazione con lo storico Giovanni De Luna, che aveva travisato la mia saltuaria frequentazione della sede di Lotta Continua di Chieri per una militanza seria e continuata come la sua. A lui, tra l\'altro, devo l\'interesse per il documentario e l\'apprendimento di un metodo interdisciplinare di analisi storica che non ho più abbandonato. Scritto da Guido Chiesa e Giovanni De Luna, prodotto da Brooklyn Film, ricerche Giovanna Boursier, montaggio Luca Gasparini, musiche Giuseppe Napoli, 90 minuti.',
    scheda: {
      sceneggiatura: 'Guido Chiesa, Giovanni De Luna',
      produzione: 'Brooklyn Film',
      montaggio: 'Luca Gasparini',
      musiche: 'Giuseppe Napoli',
      durata: '90 minuti',
      genere: 'Documentario',
    },
  },

  '25-aprile-la-memoria-inquieta': {
    heroPhoto: { src: '/images/foto/25-aprile-la-memoria-inquieta.jpg', alt: '25 Aprile: la memoria inquieta – foto di scena' },
    presentazione: 'Non sempre il 25 aprile è stato commemorato allo stesso modo. La diversa tipologia delle sue celebrazioni scandisce le fasi principali della vicenda storica dell\'Italia repubblicana: la ricostruzione, il centrismo, il centrosinistra, gli anni \'70, fino ai dibattiti e alle polemiche dell\'ultimo decennio. Si può dire, comunque, che solo agli inizi degli anni \'60 la resistenza fu introdotta nel paradigma di fondazione dell\'Italia repubblicana. Si è trattato però sempre di una memoria inquieta, così che il 25 aprile è una data che non è mai riuscita ad ottenere il riconoscimento di tutti gli italiani. È come se quel surplus di democrazia e di partecipazione politica legato al ricordo dell\'insurrezione contro i tedeschi e i fascisti abbia sempre costituito un ostacolo insormontabile all\'affermarsi di una memoria condivisa da tutti. Questa memoria è ricostruita in questo documentario attraverso l\'analisi di materiali filmici destinati prevalentemente alla televisione.',
    scheda: {
      sceneggiatura: 'Guido Chiesa, Giovanni De Luna',
      produzione: 'RAI',
      montaggio: 'Daniele Vantini',
      musiche: 'Giuseppe Napoli',
      durata: '60 minuti',
      genere: 'Documentario',
    },
    video: [
      { label: 'Film completo', url: 'https://www.youtube.com/watch?v=0tzfLaghvxY' },
    ],
    rassegnaStampaAnno: 1995,
  },

  'memorie-di-una-fabbrica': {
    heroPhoto: { src: '/images/foto/memorie-di-una-fabbrica.jpg', alt: 'Memorie di una fabbrica – foto di scena' },
    presentazione: 'Un luogo della mia giovinezza, che è stato uno dei miei primi set, raccontato con interviste, foto e filmati di repertorio che tratteggiano una storia familiare, l\'evoluzione dei rapporti di classe e della tecnologia applicata al lavoro.',
    scheda: {
      sceneggiatura: 'Guido Chiesa',
      produzione: 'Brooklyn Films',
      fotografia: 'Gherardo Gossi',
      montaggio: 'Luca Gasparini',
      durata: '40 minuti',
      genere: 'Documentario',
    },
    linkEsterni: [
      { label: 'Torino Città del Cinema', url: 'https://www.torinocittadelcinema.it/schedafilm.php?film_id=532&stile=small', type: 'site' },
    ],
  },

  /* ═══════════════════════════════════════════════════════
     VIDEOCLIP
  ═══════════════════════════════════════════════════════ */

  'se-mi-scrivi-perturbazione': {
    presentazione: 'Un\'esperienza spiritosa con un gruppo senza puzza sotto il naso.',
    video: [
      { label: 'Videoclip', url: 'https://www.youtube.com/watch?v=QDaZd5AOSx8' },
    ],
  },

  'gioia-e-rivoluzione-afterhours': {
    presentazione: 'Cover degli Area dal film Lavorare con lentezza. Fare paragoni è un esercizio onanistico, ogni versione è un discorso a sé. E questa è puro Afterhours.',
    video: [
      { label: 'Videoclip', url: 'https://www.youtube.com/watch?v=uCw1XylFwaQ' },
    ],
  },

  'otto-giorni-mambassa': {
    presentazione: 'Una canzone dal secondo LP dei Mambassa.',
    video: [
      { label: 'Videoclip', url: 'https://youtu.be/JN5ETKp_uKk' },
    ],
  },

  'umore-blu-neon-mambassa': {
    presentazione: 'Divertenti e provinciali, nel senso buono.',
    video: [
      { label: 'Videoclip', url: 'https://youtu.be/LrNKNM0SJLk' },
    ],
  },

  'qualcosa-yo-yo-mundi': {
    presentazione: 'Dall\'album Percorsi di musica sghemba: "La descrizione impossibile di una presenza percepita in ogni dove e in ogni momento, presenza spirituale e impalpabile colta ora negli sguardi, ora tra le cose del quotidiano, nel desiderio e negli elementi, una canzone quasi religiosa: nel nulla che ci tende tranelli, qualcosa." (Yo Yo Mundi)',
    video: [
      { label: 'Videoclip', url: 'https://youtu.be/kaSL5LuXLw4' },
    ],
  },

  'come-stavamo-ieri-marlene-kuntz': {
    presentazione: 'Il mio video preferito.',
    video: [
      { label: 'Videoclip', url: 'https://www.youtube.com/watch?v=IQ7UH8wM2us' },
    ],
  },

  'merry-x-mas-marlene-kuntz': {
    presentazione: 'Girato con immagini girate ad hoc e altre tratte da Babylon, alla cui colonna sonora avevano collaborato i Marlene Kuntz.',
    video: [
      { label: 'Videoclip', url: 'https://www.youtube.com/watch?v=NRMQL-VYEF8' },
    ],
  },

  'lieve-marlene-kuntz': {
    presentazione: 'Un singolo fortemente voluto dai CSI.',
    video: [
      { label: 'Videoclip', url: 'https://www.youtube.com/watch?v=EKg5K18VJnY' },
    ],
  },

  'gocce-di-sole-assalti-frontali': {
    presentazione: 'Assalti Frontali, dopo la milionesima assemblea, decise di non "riconoscerlo". Non riuscimmo a capirci, ma resta il ricordo di un\'esperienza arricchente e naif.',
    video: [
      { label: 'Videoclip', url: 'https://youtu.be/y9U3zvJJusI' },
    ],
  },

};
