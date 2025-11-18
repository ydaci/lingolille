import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Traductions
const resources = {
  fr: {
    translation: {
      hero_title: "Rejoins la communauté\n",
      hero_text:
        "Des rencontres pour pratiquer les langues à Lille, chaque semaine.\n\nCredo : “Les liens se créent, les langues connectent.”",
      see_events: "Voir les prochains événements",
      join_community_button: "Rejoindre la communauté",
      about_us: "À propos",
      who_we_are: "Qui nous sommes",
      who_we_are_description:
        "Lingo Lille est un collectif fondé par des passionnés regroupant des habitants, des étudiants internationaux, des expatriés et des professionnels. Notre équipe réunit diverses compétences : animation, médiation culturelle, conception pédagogique, organisation événementielle, management d’équipe et développement de projets. Nous formons une communauté inclusive, ouverte et dynamique ayant pour objectif de favoriser les échanges humains au-delà des frontières linguistiques et culturelles.",
      our_methodology: "Notre méthodologie",
      our_value_impact: "Notre impact",
      our_mission: "Notre mission",
      our_vision: "Notre vision",
      about: "À propos de nous",
      about_us_description:
        "Introduction : La métropole lilloise connaît une dynamique internationale croissante, marquée par la présence d’étudiants, de professionnels expatriés, de frontaliers et de voyageurs venus du monde entier. Ville dynamique et ouverte sur le monde, Lille a été Capitale Européenne de la Culture en 2004 et entretient plusieurs jumelages internationaux - ex. Turin (Italie), Cologne (Allemagne), Rotterdam (Pays-Bas), renforçant ainsi son identité multiculturelle et son ancrage européen. Cette diversité crée un besoin concret : disposer de lieux et d’activités permettant de pratiquer les langues, de créer du lien social et de faciliter l’intégration linguistique et culturelle. Dans ce contexte, les initiatives favorisant les échanges interculturels deviennent essentielles. Elles contribuent à la fois à l’attractivité du territoire, à l’ouverture internationale des habitants et au développement des compétences linguistiques nécessaires dans un marché du travail international. Lingo Lille s’inscrit dans cette dynamique en proposant une approche innovante et conviviale de la pratique linguistique.",
      about_us_description_1: "Les besoins identifiés :",
      about_us_description_2:
        "Un manque de lieux accessibles et informels pour pratiquer les langues",
      about_us_description_3:
        "Une difficulté à rencontrer des personnes de cultures différentes",
      about_us_description_4:
        "Une offre souvent académique, coûteuse ou peu engageante",
      about_us_description_5:
        "Un besoin d’intégration sociale, tant pour les nouveaux arrivants que pour les locaux",
      events_section: "Événements",
      community_section: "Communauté",
      services_section: "Services",
      join_us: "Rejoignez-nous",
      events: "Événements",
      community: "Communauté",
      services: "Nos services",
      contact_us: "Contactez-nous",
      send: "Envoyer",
      language: "Langue",
      event: {
        cafe_polyglotte: "Café Polyglotte",
        every_thursday: "Chaque jeudi",
        title:"Nos événements",
        description:"Rejoins-nous lors de nos rencontres hebdomadaires pour pratiquer les langues dans une ambiance conviviale.",
      },
      every_wednesday: "Chaque mercredi",
      boarding_games: "Boarding pass",
      community_title: "Une communauté ouverte",
      community_desc:
        "Une communauté ouverte où chacun peut pratiquer, apprendre et partager sa langue.",
      methodology: {
        title: "Notre méthodologie",
        intro:
          "Lingo Lille adopte une approche centrée sur l’expérience sociale, l’interculturalité et l’apprentissage naturel des langues.",

        principles_title: "Notre méthodologie repose sur plusieurs principes :",

        principle_1_title: "Apprentissage par la pratique",
        principle_1_desc:
          "La langue est utilisée dans des situations réelles, spontanées et motivantes.",

        principle_2_title: "Approche conviviale et non scolaire",
        principle_2_desc:
          "Aucune pression, aucune évaluation, mais des activités ludiques, des jeux de société et des tandems linguistiques.",

        principle_3_title: "Intégration immédiate des nouveaux participants",
        principle_3_desc:
          "Accueil, explication du concept et accompagnement personnalisé.",

        principle_4_title: "Variété des activités",
        principle_4_desc:
          "Soirées thématiques, jeux linguistiques, défis interactifs, discussions guidées.",

        principle_5_title: "Briefing régulier des bénévoles et animateurs",
        principle_5_desc:
          "Consignes, gestion de groupe, écoute active et médiation culturelle.",

        principle_6_title: "Adaptation permanente",
        principle_6_desc:
          "Prise en compte des retours, révision des formats, gestion du bruit, des espaces, des besoins linguistiques.",

        principle_7_title: "Organisation structurée",
        principle_7_desc:
          "Accueil → matching linguistique → activités → rotations → temps libre.",

        conclusion:
          "Cette méthodologie crée un environnement rassurant, motivant et propice au développement réel des compétences linguistiques.",
      },
      value_impact: {
        section_title: "Notre valeur ajoutée et impact",

        added_value_title: "Valeur ajoutée",
        added_value_1:
          "Création d’un espace interculturel unique dans la métropole lilloise.",
        added_value_2:
          "Expérience ludique et moderne de la pratique linguistique.",
        added_value_3:
          "Structure professionnelle, claire et facilement compréhensible.",
        added_value_4:
          "Qualité d’accueil et d'intégration des nouveaux arrivants.",
        added_value_5:
          "Formation d’une communauté active, fidèle et internationale.",

        social_impact_title: "Impact social",
        social_impact_1:
          "Réduction de la solitude et renforcement du sentiment d’appartenance.",
        social_impact_2:
          "Facilitation de l’intégration des étrangers dans la région.",
        social_impact_3:
          "Développement de compétences linguistiques accessibles à tous.",
        social_impact_4:
          "Mise en relation d’étudiants, de professionnels et d’habitants.",
        social_impact_5: "Amélioration du climat interculturel local.",

        economic_impact_title: "Impact économique",
        economic_impact_1:
          "Amélioration des compétences linguistiques des professionnels.",
        economic_impact_2:
          "Attractivité renforcée pour les entreprises cherchant des profils multilingues.",
        economic_impact_3:
          "Dynamisation des bars et partenaires locaux accueillant les événements.",
        economic_impact_4:
          "Potentiel de création d’ateliers, formations, événements privés et partenariats institutionnels.",

        environmental_impact_title: "Impact environnemental",
        environmental_impact_1:
          "Utilisation d’espaces déjà existants plutôt que de créer de nouveaux lieux.",
        environmental_impact_2:
          "Promotion de mobilités douces grâce à des événements organisés en centre-ville.",
        environmental_impact_3:
          "Orientation vers le durable en réduisant les supports physiques et en privilégiant le numérique.",
      },
      mission: {
        section_title: "Notre mission",
        short_term: {
          title: "Court terme (0–12 mois)",
          item_1: "Structurer les deux événements hebdomadaires existants.",
          item_2: "Améliorer la qualité du matching linguistique.",
          item_3: "Développer des activités variées et attractives.",
          item_4: "Former l’équipe de bénévoles.",
          item_5:
            "Professionnaliser la communication (réseaux sociaux, supports visuels, identité claire).",
        },
        medium_term: {
          title: "Moyen terme (1–3 ans)",
          item_1:
            "Élargir les partenariats (bars, universités, institutions, entreprises).",
          item_2: "Proposer des ateliers linguistiques thématiques.",
          item_3:
            "Lancer des journées ou soirées spéciales (culture, métiers, voyages).",
          item_4: "Développer des outils pédagogiques internes.",
          item_5:
            "Créer un pôle “professionnels” dédié à l’évolution de carrière linguistique.",
        },
        long_term: {
          title: "Long terme (3–5 ans et plus)",
          item_1:
            "Devenir un acteur incontournable du multilinguisme dans la région.",
          item_2:
            "Développer une offre de formation et de médiation interculturelle.",
          item_3: "Étendre le modèle à d’autres villes.",
          item_4: "Organiser un festival linguistique régional.",
          item_5: "Créer un réseau européen de communautés linguistiques.",
        },
      },
      vision: {
        section_title: "Notre vision",
        short_term: {
          title: "Court terme",
          text: "Construire un espace inclusif où chacun peut pratiquer les langues en toute confiance.",
        },
        medium_term: {
          title: "Moyen terme",
          text: "Devenir la référence lilloise en matière d’échanges linguistiques et d’événements interculturels.",
        },
        long_term: {
          title: "Long terme",
          text: "Faire de Lille une ville plurilingue modèle en Europe, où la langue devient un vecteur de rencontre, d’apprentissage et de croissance professionnelle.",
        },
      },
          multinational: {
      title: "Multinational",
      description: "Rencontrez des personnes de différentes cultures et élargissez vos horizons."
    },
    conversations: {
      title: "Conversations",
      description: "Participez à des discussions enrichissantes et améliorez votre aisance à l’oral."
    },
    apprentissage: {
      title: "Apprentissage",
      description: "Apprenez de nouvelles langues tout en vous amusant et en échangeant."
    },
        joinCommunity: {
      title: "Rejoins la communauté",
      description: "Reste informé de tous nos événements et connecte-toi avec les membres de la communauté.",
      linkText: "Rejoindre via ce lien"
    }
    },
  },
  en: {
    translation: {
      hero_title: "Join the community\n",
      hero_text:
        "Meetups to practice languages in Lille every week.\n\nCredo: “Connections are created, languages connect.”",
      see_events: "See upcoming events",
      join_community_button: "Join the community",
      about_us: "About Us",
      who_we_are: "Who We Are",
      who_we_are_description:
        "Lingo Lille is a collective founded by passionate individuals, bringing together local residents, international students, expatriates, and professionals. Our team brings together diverse skills: facilitation, cultural mediation, educational design, event organization, team management, and project development. We form an inclusive, open, and dynamic community whose goal is to promote human connections beyond linguistic and cultural boundaries.",
      our_methodology: "Our Methodology",
      our_value_impact: "Our Value & Impact",
      our_mission: "Our Mission",
      our_vision: "Our Vision",
      about: "About Us",
      about_us_description:
        "Introduction: The Lille metropolitan area is experiencing growing international dynamism, marked by the presence of students, expatriate professionals, cross-border workers, and travelers from all over the world. A vibrant city open to the world, Lille was the European Capital of Culture in 2004 and maintains several international partnerships — e.g., Turin (Italy), Cologne (Germany), Rotterdam (Netherlands) — reinforcing its multicultural identity and European roots. This diversity creates a concrete need: accessible places and activities that allow people to practice languages, build social bonds, and support linguistic and cultural integration. In this context, initiatives that promote intercultural exchange become essential. They contribute to the region’s attractiveness, the international openness of its residents, and the linguistic skills needed in a global labor market. Lingo Lille is part of this dynamic, offering an innovative and friendly approach to language practice.",
      about_us_description_1: "Identified needs:",
      about_us_description_2:
        "A lack of accessible and informal places to practice languages",
      about_us_description_3:
        "Difficulty meeting people from different cultures",
      about_us_description_4:
        "An offer that is often academic, expensive, or not engaging",
      about_us_description_5:
        "A need for social integration, both for newcomers and locals",

      events_section: "Events",
      community_section: "Community",
      services_section: "Services",
      join_us: "Join Us",
      events: "Events",
      community: "Community",
      services: "Our Services",
      contact_us: "Contact Us",
      send: "Send",
      language: "Language",
      event: {
        cafe_polyglotte: "Polyglot Café",
        every_thursday: "Every Thursday",
    title: "Our Events",
      description: "Join us at our weekly meetups to practice languages in a friendly atmosphere.",
      },
      every_wednesday: "Every Wednesday",
      boarding_games: "Boarding pass",
      community_title: "An open community",
      community_desc:
        "An open community where everyone can practice, learn, and share their language.",
      methodology: {
        title: "Our Methodology",
        intro:
          "Lingo Lille adopts a social, intercultural and natural language-learning approach.",

        principles_title: "Our methodology is based on several principles:",

        principle_1_title: "Learning through practice",
        principle_1_desc:
          "The language is used in real, spontaneous and motivating situations.",

        principle_2_title: "Friendly and non-academic approach",
        principle_2_desc:
          "No pressure, no evaluation — only fun activities, board games, and language tandems.",

        principle_3_title: "Immediate integration of new participants",
        principle_3_desc:
          "Welcome, explanation of the concept and personalised guidance.",

        principle_4_title: "Variety of activities",
        principle_4_desc:
          "Themed evenings, language games, interactive challenges, guided discussions.",

        principle_5_title: "Regular briefing of volunteers and facilitators",
        principle_5_desc:
          "Instructions, group management, active listening and cultural mediation.",

        principle_6_title: "Continuous adaptation",
        principle_6_desc:
          "Taking feedback into account, updating formats, managing noise, space, and language needs.",

        principle_7_title: "Structured organization",
        principle_7_desc:
          "Welcome → language matching → activities → rotations → free time.",

        conclusion:
          "This methodology creates a reassuring, motivating environment that supports real language skill development.",
      },
      value_impact: {
        section_title: "Our added value and impact",

        added_value_title: "Added value",
        added_value_1:
          "Creation of a unique intercultural space in the Lille metropolitan area.",
        added_value_2: "Fun and modern experience of language practice.",
        added_value_3: "Professional, clear and easy-to-understand structure.",
        added_value_4: "High-quality welcome and integration for newcomers.",
        added_value_5:
          "Formation of an active, loyal and international community.",

        social_impact_title: "Social impact",
        social_impact_1:
          "Reduced loneliness and strengthened sense of belonging.",
        social_impact_2: "Facilitated integration of foreigners in the region.",
        social_impact_3: "Development of accessible language skills for all.",
        social_impact_4: "Connecting students, professionals and residents.",
        social_impact_5: "Improved local intercultural climate.",

        economic_impact_title: "Economic impact",
        economic_impact_1: "Improved language skills of professionals.",
        economic_impact_2:
          "Increased attractiveness for companies seeking multilingual profiles.",
        economic_impact_3:
          "Boost to bars and local partners hosting the events.",
        economic_impact_4:
          "Potential for workshops, training sessions, private events and institutional partnerships.",

        environmental_impact_title: "Environmental impact",
        environmental_impact_1:
          "Use of existing spaces rather than creating new ones.",
        environmental_impact_2:
          "Promotion of eco-friendly mobility thanks to city-center events.",
        environmental_impact_3:
          "Shift toward sustainability by reducing physical materials and favoring digital solutions.",
      },
      mission: {
        section_title: "Our Mission",
        short_term: {
          title: "Short term (0–12 months)",
          item_1: "Structure the two existing weekly events.",
          item_2: "Improve the quality of language matching.",
          item_3: "Develop varied and attractive activities.",
          item_4: "Train the volunteer team.",
          item_5:
            "Professionalize communication (social media, visual materials, clear identity).",
        },
        medium_term: {
          title: "Medium term (1–3 years)",
          item_1:
            "Expand partnerships (bars, universities, institutions, companies).",
          item_2: "Offer themed language workshops.",
          item_3:
            "Launch special days or evenings (culture, professions, travel).",
          item_4: "Develop internal pedagogical tools.",
          item_5:
            "Create a 'professionals' branch dedicated to linguistic career development.",
        },
        long_term: {
          title: "Long term (3–5 years and beyond)",
          item_1: "Become a key player in multilingualism in the region.",
          item_2: "Develop training and intercultural mediation programs.",
          item_3: "Extend the model to other cities.",
          item_4: "Organize a regional language festival.",
          item_5: "Create a European network of language communities.",
        },
      },
      mission: {
        section_title: "Our Mission",
        short_term: {
          title: "Short term (0–12 months)",
          item_1: "Structure the two existing weekly events.",
          item_2: "Improve the quality of language matching.",
          item_3: "Develop varied and attractive activities.",
          item_4: "Train the volunteer team.",
          item_5:
            "Professionalize communication (social media, visual materials, clear identity).",
        },
        medium_term: {
          title: "Medium term (1–3 years)",
          item_1:
            "Expand partnerships (bars, universities, institutions, companies).",
          item_2: "Offer themed language workshops.",
          item_3:
            "Launch special days or evenings (culture, professions, travel).",
          item_4: "Develop internal pedagogical tools.",
          item_5:
            "Create a 'professionals' branch dedicated to linguistic career development.",
        },
        long_term: {
          title: "Long term (3–5 years and beyond)",
          item_1: "Become a key player in multilingualism in the region.",
          item_2: "Develop training and intercultural mediation programs.",
          item_3: "Extend the model to other cities.",
          item_4: "Organize a regional language festival.",
          item_5: "Create a European network of language communities.",
        },
      },
      vision: {
        section_title: "Our vision",
        short_term: {
          title: "Short term",
          text: "Create an inclusive space where everyone can practice languages with confidence.",
        },
        medium_term: {
          title: "Medium term",
          text: "Become the reference in Lille for language exchanges and intercultural events.",
        },
        long_term: {
          title: "Long term",
          text: "Make Lille a model multilingual city in Europe, where language becomes a tool for meeting people, learning, and professional growth.",
        },
      },
          multinational: {
      title: "Multinational",
      description: "Meet people from different cultures and broaden your horizons."
    },
    conversations: {
      title: "Conversations",
      description: "Join enriching discussions and improve your speaking skills."
    },
    apprentissage: {
      title: "Learning",
      description: "Learn new languages while having fun and interacting."
    },
        joinCommunity: {
      title: "Join the community",
      description: "Stay informed about all our events and connect with community members.",
      linkText: "Join via this link"
    }
    },
  },
  es: {
    translation: {
      hero_title: "¡Únete a la comunidad\n",
      hero_text:
        "Encuentros para practicar idiomas en Lille cada semana.\n\nCredo: “Se crean vínculos, los idiomas conectan.”",
      see_events: "Ver próximos eventos",
      join_community_button: "Unirse a la comunidad",
      about_us: "Acerca de",
      who_we_are: "Quiénes somos",
      who_we_are_description:
        "Lingo Lille es un colectivo fundado por personas apasionadas que reúne a residentes locales, estudiantes internacionales, expatriados y profesionales. Nuestro equipo reúne diversas competencias: animación, mediación cultural, diseño pedagógico, organización de eventos, gestión de equipos y desarrollo de proyectos. Formamos una comunidad inclusiva, abierta y dinámica cuyo objetivo es fomentar los intercambios humanos más allá de las fronteras lingüísticas y culturales.",
      our_methodology: "Nuestra metodología",
      our_value_impact: "Nuestro valor e impacto",
      our_mission: "Nuestra misión",
      our_vision: "Nuestra visión",
      about: "Acerca de nosotros",
      about_us_description:
        "Introducción: La metrópoli de Lille experimenta una creciente dinámica internacional, marcada por la presencia de estudiantes, profesionales expatriados, trabajadores transfronterizos y viajeros de todo el mundo. Ciudad dinámica y abierta al mundo, Lille fue Capital Europea de la Cultura en 2004 y mantiene varios hermanamientos internacionales — por ejemplo, Turín (Italia), Colonia (Alemania), Róterdam (Países Bajos) — lo que refuerza su identidad multicultural y su arraigo europeo. Esta diversidad genera una necesidad concreta: disponer de lugares y actividades que permitan practicar idiomas, crear vínculos sociales y facilitar la integración lingüística y cultural. En este contexto, las iniciativas que fomentan los intercambios interculturales se vuelven esenciales. Contribuyen a la atractividad del territorio, a la apertura internacional de los habitantes y al desarrollo de competencias lingüísticas necesarias en un mercado laboral global. Lingo Lille se inscribe en esta dinámica ofreciendo un enfoque innovador y acogedor para la práctica lingüística.",
      about_us_description_1: "Necesidades identificadas:",
      about_us_description_2:
        "Falta de lugares accesibles e informales para practicar idiomas",
      about_us_description_3:
        "Dificultad para conocer a personas de diferentes culturas",
      about_us_description_4:
        "Una oferta a menudo académica, costosa o poco atractiva",
      about_us_description_5:
        "Una necesidad de integración social tanto para recién llegados como para locales",

      events_section: "Eventos",
      community_section: "Comunidad",
      services_section: "Servicios",
      join_us: "Únete a nosotros",
      events: "Eventos",
      community: "Comunidad",
      services: "Nuestros servicios",
      contact_us: "Contáctanos",
      send: "Enviar",
      language: "Idioma",
      event: {
        cafe_polyglotte: "Café Políglota",
        every_thursday: "Cada jueves",
        title: "Nuestros eventos",
      description: "Únete a nuestros encuentros semanales para practicar idiomas en un ambiente amigable.",
      },
      every_wednesday: "Cada miércoles",
      boarding_games: "Boarding pass",
      community_title: "Una comunidad abierta",
      community_desc:
        "Una comunidad abierta donde cada uno puede practicar, aprender y compartir su idioma.",
      methodology: {
        title: "Nuestra metodología",
        intro:
          "Lingo Lille adopta un enfoque centrado en la experiencia social, la interculturalidad y el aprendizaje natural de los idiomas.",

        principles_title: "Nuestra metodología se basa en varios principios:",

        principle_1_title: "Aprendizaje mediante la práctica",
        principle_1_desc:
          "El idioma se utiliza en situaciones reales, espontáneas y motivadoras.",

        principle_2_title: "Enfoque amigable y no escolar",
        principle_2_desc:
          "Sin presión, sin evaluaciones: actividades lúdicas, juegos de mesa y tándems lingüísticos.",

        principle_3_title: "Integración inmediata de los nuevos participantes",
        principle_3_desc:
          "Acogida, explicación del concepto y acompañamiento personalizado.",

        principle_4_title: "Variedad de actividades",
        principle_4_desc:
          "Noches temáticas, juegos lingüísticos, desafíos interactivos, debates guiados.",

        principle_5_title: "Briefing regular de voluntarios y animadores",
        principle_5_desc:
          "Consignas, gestión de grupos, escucha activa y mediación cultural.",

        principle_6_title: "Adaptación continua",
        principle_6_desc:
          "Tener en cuenta los comentarios, revisar formatos y gestionar el ruido, los espacios y las necesidades lingüísticas.",

        principle_7_title: "Organización estructurada",
        principle_7_desc:
          "Acogida → emparejamiento lingüístico → actividades → rotaciones → tiempo libre.",

        conclusion:
          "Esta metodología crea un entorno seguro, motivador y favorable al desarrollo real de las competencias lingüísticas.",
      },
      value_impact: {
        section_title: "Nuestro valor añadido e impacto",

        added_value_title: "Valor añadido",
        added_value_1:
          "Creación de un espacio intercultural único en el área metropolitana de Lille.",
        added_value_2: "Experiencia lúdica y moderna de práctica lingüística.",
        added_value_3: "Estructura profesional, clara y fácil de comprender.",
        added_value_4:
          "Alta calidad de acogida e integración para los recién llegados.",
        added_value_5:
          "Formación de una comunidad activa, fiel e internacional.",

        social_impact_title: "Impacto social",
        social_impact_1:
          "Reducción de la soledad y fortalecimiento del sentido de pertenencia.",
        social_impact_2:
          "Facilitación de la integración de extranjeros en la región.",
        social_impact_3:
          "Desarrollo de competencias lingüísticas accesibles para todos.",
        social_impact_4:
          "Conexión entre estudiantes, profesionales y residentes.",
        social_impact_5: "Mejora del clima intercultural local.",

        economic_impact_title: "Impacto económico",
        economic_impact_1:
          "Mejora de las competencias lingüísticas de los profesionales.",
        economic_impact_2:
          "Mayor atractivo para empresas que buscan perfiles multilingües.",
        economic_impact_3:
          "Dinamización de bares y socios locales que acogen los eventos.",
        economic_impact_4:
          "Potencial para talleres, formaciones, eventos privados y colaboraciones institucionales.",

        environmental_impact_title: "Impacto ambiental",
        environmental_impact_1:
          "Uso de espacios ya existentes en lugar de crear nuevos.",
        environmental_impact_2:
          "Promoción de la movilidad sostenible gracias a eventos en el centro de la ciudad.",
        environmental_impact_3:
          "Orientación hacia la sostenibilidad reduciendo materiales físicos y priorizando lo digital.",
      },
      mission: {
        section_title: "Nuestra misión",
        short_term: {
          title: "Corto plazo (0–12 meses)",
          item_1: "Estructurar los dos eventos semanales existentes.",
          item_2: "Mejorar la calidad del emparejamiento lingüístico.",
          item_3: "Desarrollar actividades variadas y atractivas.",
          item_4: "Formar al equipo de voluntarios.",
          item_5:
            "Profesionalizar la comunicación (redes sociales, materiales visuales, identidad clara).",
        },
        medium_term: {
          title: "Mediano plazo (1–3 años)",
          item_1:
            "Ampliar asociaciones (bares, universidades, instituciones, empresas).",
          item_2: "Ofrecer talleres lingüísticos temáticos.",
          item_3:
            "Lanzar jornadas o noches especiales (cultura, profesiones, viajes).",
          item_4: "Desarrollar herramientas pedagógicas internas.",
          item_5:
            "Crear un área de 'profesionales' dedicada al desarrollo de carrera lingüística.",
        },
        long_term: {
          title: "Largo plazo (3–5 años y más)",
          item_1:
            "Convertirse en un actor clave del multilingüismo en la región.",
          item_2:
            "Desarrollar programas de formación y mediación intercultural.",
          item_3: "Extender el modelo a otras ciudades.",
          item_4: "Organizar un festival regional de idiomas.",
          item_5: "Crear una red europea de comunidades lingüísticas.",
        },
      },
      vision: {
        section_title: "Nuestra visión",
        short_term: {
          title: "Corto plazo",
          text: "Crear un espacio inclusivo donde todos puedan practicar idiomas con confianza.",
        },
        medium_term: {
          title: "Mediano plazo",
          text: "Convertirse en la referencia en Lille para intercambios lingüísticos y eventos interculturales.",
        },
        long_term: {
          title: "Largo plazo",
          text: "Hacer de Lille una ciudad plurilingüe modelo en Europa, donde el idioma sea un medio para conocer gente, aprender y crecer profesionalmente.",
        },
      },
          multinational: {
      title: "Multinacional",
      description: "Conoce personas de diferentes culturas y amplía tus horizontes."
    },
    conversations: {
      title: "Conversaciones",
      description: "Participa en discusiones enriquecedoras y mejora tu fluidez oral."
    },
    apprentissage: {
      title: "Aprendizaje",
      description: "Aprende nuevos idiomas mientras te diviertes e interactúas."
    },
        joinCommunity: {
      title: "Únete a la comunidad",
      description: "Mantente informado de todos nuestros eventos y conecta con los miembros de la comunidad.",
      linkText: "Unirse a través de este enlace"
    },
    },
  },
  zh: {
    translation: {
      hero_title: "加入社区\n",
      hero_text:
        "每周在里尔参加语言练习活动。\n\n信条：建立联系，语言让人连接。",
      see_events: "查看即将举行的活动",
      join_community_button: "加入社区",
      about_us: "关于我们",
      who_we_are: "我们是谁",
      who_we_are_description:
        "Lingo Lille 是一个由充满热情的人们组成的团体，包括当地居民、国际学生、外派人士和各类专业人士。我们的团队拥有多样化的技能：活动组织、文化调解、教育设计、活动策划、团队管理和项目开发。我们是一支包容、开放且充满活力的社区，旨在促进跨越语言和文化界限的人际交流。",
      our_methodology: "我们的方法论",
      our_value_impact: "我们的价值与影响",
      our_mission: "我们的使命",
      our_vision: "我们的愿景",
      about: "关于我们",
      about_us_description:
        "简介：里尔都会区正经历日益增长的国际活力，聚集了来自世界各地的学生、外派专业人士、跨境工作者和旅行者。作为一座开放而充满活力的城市，里尔曾在2004年被评为欧洲文化之都，并与多个国际城市建立了友好关系——如都灵（意大利）、科隆（德国）、鹿特丹（荷兰）——进一步强化了其多元文化身份和欧洲定位。这种多样性带来了一个现实需求：提供能够练习语言、促进社交联系并帮助语言和文化融入的场所和活动。在此背景下，促进跨文化交流的举措变得至关重要。它们有助于提升地区吸引力、增强居民的国际视野，并培养在全球就业市场中必需的语言技能。Lingo Lille 正是顺应这一趋势，以创新且友好的方式推动语言实践。",
      about_us_description_1: "识别出的需求：",
      about_us_description_2: "缺乏方便且非正式的语言练习场所",
      about_us_description_3: "难以结识来自不同文化背景的人",
      about_us_description_4: "语言活动通常过于学术化、昂贵或缺乏吸引力",
      about_us_description_5: "无论对新来者还是当地居民，都需要更好的社会融合",
      events_section: "活动",
      community_section: "社区",
      services_section: "服务",
      join_us: "加入我们",
      events: "活动",
      community: "社区",
      services: "我们的服务",
      contact_us: "联系我们",
      send: "发送",
      language: "语言",
      event: {
        cafe_polyglotte: "多语咖啡交流会",
        every_thursday: "每周四",
        title: "我们的活动",
      description: "欢迎参加我们的每周聚会，在轻松友好的氛围中练习语言。",
      },
      every_wednesday: "每周三",
      boarding_games: "Boarding pass",
      community_title: "一个开放的社区",
      community_desc:
        "一个开放的社区，每个人都可以练习、学习并分享自己的语言。",
      methodology: {
        title: "我们的方法论",
        intro:
          "Lingo Lille 采用以社交体验、跨文化交流和自然语言习得为核心的学习方式。",

        principles_title: "我们的方法论基于以下原则：",

        principle_1_title: "通过实践学习",
        principle_1_desc: "在真实、自发且具有动力的场景中使用语言。",

        principle_2_title: "轻松且非学术性的方式",
        principle_2_desc:
          "没有压力，没有考试，只有有趣的活动、桌游和语言互助。",

        principle_3_title: "新参与者的即时融入",
        principle_3_desc: "欢迎、概念说明以及个性化陪伴。",

        principle_4_title: "多样化的活动",
        principle_4_desc: "主题之夜、语言游戏、互动挑战、引导式讨论。",

        principle_5_title: "对志愿者和组织者的定期简报",
        principle_5_desc: "指示、团队管理、积极倾听和文化调解。",

        principle_6_title: "持续适应",
        principle_6_desc: "考虑反馈、调整形式、管理噪音、空间和语言需求。",

        principle_7_title: "结构化的组织流程",
        principle_7_desc: "迎接 → 语言匹配 → 活动 → 轮换 → 自由时间。",

        conclusion:
          "这种方法营造了一个安全、积极且真正有助于语言能力提升的环境。",
      },
      value_impact: {
        section_title: "我们的附加价值与影响",

        added_value_title: "附加价值",
        added_value_1: "在里尔都会区创建独特的跨文化空间。",
        added_value_2: "有趣且现代的语言练习体验。",
        added_value_3: "专业、清晰且易于理解的结构。",
        added_value_4: "为新来者提供高质量的接待与融入体验。",
        added_value_5: "打造一个活跃、忠诚、国际化的社区。",

        social_impact_title: "社会影响",
        social_impact_1: "减少孤独感，增强归属感。",
        social_impact_2: "促进外国人在本地区的融入。",
        social_impact_3: "为所有人提供可获得的语言能力发展。",
        social_impact_4: "连接学生、专业人士和当地居民。",
        social_impact_5: "改善当地跨文化氛围。",

        economic_impact_title: "经济影响",
        economic_impact_1: "提升专业人士的语言能力。",
        economic_impact_2: "提高企业对多语言人才的吸引力。",
        economic_impact_3: "带动举办活动的酒吧和本地合作伙伴的活力。",
        economic_impact_4: "具有开展工作坊、培训、私人活动和机构合作的潜力。",

        environmental_impact_title: "环境影响",
        environmental_impact_1: "使用现有空间，而不是创建新的场地。",
        environmental_impact_2: "通过在市中心举办活动来促进绿色出行。",
        environmental_impact_3:
          "通过减少实体材料使用、优先数字化来推动可持续发展。",
      },
      mission: {
        section_title: "我们的使命",
        short_term: {
          title: "短期（0–12个月）",
          item_1: "结构化现有的两个每周活动。",
          item_2: "提高语言匹配的质量。",
          item_3: "开发多样且有吸引力的活动。",
          item_4: "培训志愿者团队。",
          item_5: "专业化沟通（社交媒体、视觉材料、清晰的品牌形象）。",
        },
        medium_term: {
          title: "中期（1–3年）",
          item_1: "扩展合作伙伴关系（酒吧、大学、机构、企业）。",
          item_2: "提供主题语言工作坊。",
          item_3: "举办特别日或特别活动（文化、职业、旅行）。",
          item_4: "开发内部教学工具。",
          item_5: "创建专注于语言职业发展的“专业人士”部门。",
        },
        long_term: {
          title: "长期（3–5年及以上）",
          item_1: "成为本地区多语言发展的关键角色。",
          item_2: "开发培训和跨文化调解项目。",
          item_3: "将模式推广到其他城市。",
          item_4: "举办区域性语言节。",
          item_5: "创建欧洲语言社区网络。",
        },
      },
      vision: {
        section_title: "我们的愿景",
        short_term: {
          title: "短期",
          text: "创建一个包容性的空间，让每个人都能自信地练习语言。",
        },
        medium_term: {
          title: "中期",
          text: "成为里尔语言交流和跨文化活动的参考典范。",
        },
        long_term: {
          title: "长期",
          text: "使里尔成为欧洲的多语言示范城市，让语言成为交流、学习和职业发展的工具。",
        },
      },
       multinational: {
      title: "多国籍",
      description: "结识来自不同文化的人，拓宽你的视野。"
    },
    conversations: {
      title: "会话",
      description: "参与丰富的讨论，提高你的口语能力。"
    },
    apprentissage: {
      title: "学习",
      description: "在互动中快乐学习新语言。"
    },
        joinCommunity: {
      title: "加入社区",
      description: "随时了解我们的所有活动，并与社区成员建立联系。",
      linkText: "通过此链接加入"
    },
  },
    },
ja: {
  translation: {
    hero_title: "コミュニティに参加\n",
    hero_text:
      "毎週リールで言語を練習するための集まり。\n\n信条：「つながりが生まれ、言語が人をつなぐ。」",
    see_events: "今後のイベントを見る",
    join_community_button: "コミュニティに参加",
    about_us: "私たちについて",
    who_we_are: "私たちは誰ですか",
    who_we_are_description:
      "Lingo Lille は、情熱を持つメンバーによって設立されたコレクティブで、地元住民、留学生、駐在員、そして専門家が集まっています。私たちのチームは、ファシリテーション、文化的仲介、教育設計、イベント運営、チームマネジメント、プロジェクト開発など、多様なスキルを有しています。私たちは、言語や文化の境界を越えた人間交流を促進することを目的とする、包括的で開かれた、そして活気あるコミュニティです。",
    our_methodology: "私たちの方法論",
    our_value_impact: "私たちの価値と影響",
    our_mission: "私たちの使命",
    our_vision: "私たちのビジョン",
    about: "私たちについて",
    about_us_description:
      "紹介：リール都市圏は、世界中からの学生、駐在員、国境労働者、旅行者の存在によって、ますます国際的な活気を見せています。活気があり国際的に開かれた都市であるリールは、2004年に欧州文化首都に選ばれ、トリノ（イタリア）、ケルン（ドイツ）、ロッテルダム（オランダ）など、複数の国際都市と姉妹都市関係を結んでいます。これにより、その多文化性とヨーロッパ的アイデンティティが強化されています。この多様性は、言語を練習し、社会的つながりを作り、言語的・文化的統合を促進するための場所や活動が必要であることを示しています。このような背景の中、異文化交流を促進する取り組みは不可欠です。それらは地域の魅力向上、住民の国際的な視野の拡大、そして国際的な労働市場で必要とされる言語能力の向上に貢献します。Lingo Lille は、言語実践に対して革新的で親しみやすいアプローチを提供することで、この流れに寄与しています。",
    about_us_description_1: "特定されたニーズ：",
    about_us_description_2: "言語を気軽に練習できる場所が不足していること",
    about_us_description_3: "異なる文化の人々と出会う機会が少ないこと",
    about_us_description_4:
      "提供されるサービスが学術的、費用が高い、または魅力に欠けることが多い",
    about_us_description_5:
      "新来者と地元住民の双方にとって社会的な統合の必要性があること",
    events_section: "イベント",
    community_section: "コミュニティ",
    services_section: "サービス",
    join_us: "参加する",
    events: "イベント",
    community: "コミュニティ",
    services: "私たちのサービス",
    contact_us: "お問い合わせ",
    send: "送信",
    language: "言語",
    event: {
      cafe_polyglotte: "ポリグロットカフェ",
      every_thursday: "毎週木曜日",
      title: "イベント情報",
      description: "毎週の集まりに参加して、フレンドリーな雰囲気の中で言語を練習しましょう。",
    },
    every_wednesday: "毎週水曜日",
    boarding_games: "Boarding pass",
    community_title: "開かれたコミュニティ",
    community_desc:
      "誰もが自分の言語を練習し、学び、共有できる開かれたコミュニティです。",
    methodology: {
      title: "私たちのメソッド",
      intro:
        "Lingo Lille は、社会的体験、異文化交流、自然な言語習得に焦点を当てたアプローチを採用しています。",
      principles_title: "私たちのメソッドは次の原則に基づいています：",
      principle_1_title: "実践を通じた学習",
      principle_1_desc:
        "言語は、自然で自発的かつ動機づけのある実際の状況で使われます。",
      principle_2_title: "フレンドリーで学校的ではないアプローチ",
      principle_2_desc:
        "プレッシャーも評価もなく、楽しいアクティビティ、ボードゲーム、語学タンデムを中心に行います。",
      principle_3_title: "新参加者の即時サポート",
      principle_3_desc: "ウェルカム対応、コンセプト説明、個別サポート。",
      principle_4_title: "多様なアクティビティ",
      principle_4_desc:
        "テーマイベント、言語ゲーム、インタラクティブチャレンジ、ガイド付きディスカッション。",
      principle_5_title:
        "ボランティア・ファシリテーターへの定期ブリーフィング",
      principle_5_desc:
        "指示、グループマネジメント、積極的傾聴、文化的仲介。",
      principle_6_title: "継続的な改善",
      principle_6_desc:
        "フィードバックの反映、形式の見直し、騒音・空間・言語ニーズの調整。",
      principle_7_title: "体系的な進行",
      principle_7_desc:
        "受付 → 言語マッチング → アクティビティ → ローテーション → 自由時間。",
      conclusion:
        "このメソッドは、安心感があり、意欲を高め、実際の言語能力向上につながる環境を作り出します。",
    },
    value_impact: {
      section_title: "私たちの付加価値とインパクト",
      added_value_title: "付加価値",
      added_value_1: "リール都市圏における独自の異文化交流スペースを創出。",
      added_value_2: "楽しく現代的な言語練習体験。",
      added_value_3: "わかりやすく、プロフェッショナルで明確な進行構造。",
      added_value_4: "新規参加者に対する高品質な受け入れとサポート。",
      added_value_5: "活動的で忠実、そして国際的なコミュニティの形成。",
      social_impact_title: "社会的インパクト",
      social_impact_1: "孤独感の軽減と帰属意識の向上。",
      social_impact_2: "地域に来た外国人のスムーズな統合を支援。",
      social_impact_3: "誰でもアクセスできる言語能力の向上。",
      social_impact_4: "学生・専門家・住民をつなぐ交流の場。",
      social_impact_5: "地域の異文化理解の改善。",
      economic_impact_title: "経済的インパクト",
      economic_impact_1: "プロフェッショナルの語学スキル向上。",
      economic_impact_2: "多言語人材を求める企業への魅力度向上。",
      economic_impact_3: "イベントを受け入れるバーや地域パートナーの活性化。",
      economic_impact_4:
        "ワークショップ、研修、プライベートイベント、行政パートナーシップの創出可能性。",
      environmental_impact_title: "環境的インパクト",
      environmental_impact_1: "新しい会場を作らず、既存スペースを利用。",
      environmental_impact_2:
        "市内中心部での開催により、環境に優しい移動手段を促進。",
      environmental_impact_3:
        "紙などの物理的サポートを減らし、デジタルを優先して持続可能性を推進。",
    },
    mission: {
      section_title: "私たちのミッション",
      short_term: {
        title: "短期（0–12ヶ月）",
        item_1: "既存の週2回のイベントを構造化する。",
        item_2: "言語マッチングの質を向上させる。",
        item_3: "多様で魅力的なアクティビティを開発する。",
        item_4: "ボランティアチームをトレーニングする。",
        item_5:
          "コミュニケーションの専門化（SNS、ビジュアル資料、明確なアイデンティティ）。",
      },
      medium_term: {
        title: "中期（1–3年）",
        item_1: "パートナーシップを拡大する（バー、大学、機関、企業）。",
        item_2: "テーマ別言語ワークショップを提供する。",
        item_3: "特別な日やイベント（文化、職業、旅行）を開催する。",
        item_4: "内部教育ツールを開発する。",
        item_5:
          "言語キャリアの発展に特化した「プロフェッショナル」部門を作る。",
      },
      long_term: {
        title: "長期（3–5年およびそれ以上）",
        item_1: "地域の多言語主義における主要なプレイヤーになる。",
        item_2: "トレーニングおよび異文化仲介のプログラムを開発する。",
        item_3: "モデルを他の都市に拡張する。",
        item_4: "地域の言語フェスティバルを開催する。",
        item_5: "ヨーロッパの言語コミュニティネットワークを作る。",
      },
    },
    vision: {
      section_title: "私たちのビジョン",
      short_term: {
        title: "短期",
        text: "誰もが自信を持って言語を練習できる包括的な空間を作る。",
      },
      medium_term: {
        title: "中期",
        text: "リールにおける言語交流と異文化イベントの基準となる。",
      },
      long_term: {
        title: "長期",
        text: "リールをヨーロッパの模範的な多言語都市にし、言語が人々の出会い、学習、キャリア成長の手段となるようにする。",
      },
    },
  },
  multinational: {
      title: "多国籍",
      description: "さまざまな文化の人々と出会い、視野を広げましょう。"
    },
    conversations: {
      title: "会話",
      description: "充実した会話に参加して、話す力を向上させましょう。"
    },
    apprentissage: {
      title: "学習",
      description: "楽しみながら言語を学び、交流しましょう。"
    },
        joinCommunity: {
      title: "コミュニティに参加しよう",
      description: "すべてのイベントの情報を受け取り、コミュニティのメンバーとつながりましょう。",
      linkText: "このリンクから参加する"
    }
},
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
