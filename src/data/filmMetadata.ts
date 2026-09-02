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
      { label: 'Filmitalia', url: 'https://filmitalia.org/it/film/133968/', type: 'site' },
      { label: 'CinemaItaliano', url: 'https://nuovo.cinemaitaliano.info/cambiotuttochiesa', type: 'site' },
    ],
    video: [
      { label: 'Trailer', url: 'https://www.youtube.com/watch?v=oq3ih74PO8E' },
    ],
    rassegnaStampaAnno: 2020,
    fotoGalleria: true,
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
  },

  'le-pere-di-adamo': {
    locandina: '/images/locandine/le-pere-di-adamo.jpg',
    poster: { src: '/images/locandine/le-pere-di-adamo.jpg', alt: 'Le pere di Adamo – locandina' },
    heroPhoto: { src: '/images/foto/le-pere-di-adamo/pere-di-adamo-con-mitsou.jpg', alt: 'Le pere di Adamo – foto di scena' },
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
  },

  'non-mi-basta-mai': {
    foto: '/images/foto/non-mi-basta-mai.jpg',
    locandina: '/images/locandine/non-mi-basta-mai.jpg',
    fotoGallery: '/foto/non-mi-basta-mai/',
    stills: [{ src: '/images/foto/non-mi-basta-mai.jpg', alt: 'Non mi basta mai – foto di scena' }],
    poster: { src: '/images/locandine/non-mi-basta-mai.jpg', alt: 'Non mi basta mai – locandina' },
    heroPhoto: { src: '/images/foto/non-mi-basta-mai/ebe-matta.jpg', alt: 'Non mi basta mai – foto di scena' },
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
    // presentazione: da richiedere al cliente (2-4 frasi di sinossi)
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

  'il-cuore-del-soldatino': {},
  'quei-momenti-eroici': {},
  'civilta': {},

  'black-harvest': {
    foto: '/images/foto/black-harvest.jpg',
    fotoGallery: '/foto/black-harvest/',
    trailer: 'https://www.youtube-nocookie.com/embed/nvEv3APs6Ko',
    stills: [{ src: '/images/foto/black-harvest.jpg', alt: 'Black Harvest – foto di scena' }],
    fotoGalleria: true,
  },

  'give-me-spell': {
    foto: '/images/foto/give-me-a-spell.jpg',
    fotoGallery: '/foto/give-me-a-spell/',
    stills: [{ src: '/images/foto/give-me-a-spell.jpg', alt: 'Give Me A Spell – foto di scena' }],
    fotoGalleria: true,
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
  },

  /* ═══════════════════════════════════════════════════════
     DOCUMENTARI
  ═══════════════════════════════════════════════════════ */

  'partigiani': {
    foto: '/images/foto/partigiani.jpg',
    fotoGallery: '/foto/partigiani/',
    stills: [{ src: '/images/foto/partigiani.jpg', alt: 'Partigiani – foto di scena' }],
    fotoGalleria: true,
  },

  'il-contratto': {
    trailer: 'https://www.youtube-nocookie.com/embed/7ZqBqXpeLk8',
  },

  'alice-e-paradiso': {
    trailer: 'https://player.vimeo.com/video/249293958',
  },

};
