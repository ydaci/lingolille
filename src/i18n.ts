import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Traductions
const resources = {
  fr: {
    translation: {
      "hero_title": "Rejoins la communauté\n",
      "hero_text": "Des rencontres pour pratiquer les langues à Lille, chaque semaine.\n\nCredo : “Les liens se créent, les langues connectent.”",
      "see_events": "Voir les prochains événements",
      "join_community_button": "Rejoindre la communauté",
      "about_us": "À propos",
      "who_we_are": "Qui nous sommes",
      "who_we_are_description": "Lingo Lille est un collectif fondé par des passionnés regroupant des habitants, des étudiants internationaux, des expatriés et des professionnels. Notre équipe réunit diverses compétences : animation, médiation culturelle, conception pédagogique, organisation événementielle, management d’équipe et développement de projets. Nous formons une communauté inclusive, ouverte et dynamique ayant pour objectif de favoriser les échanges humains au-delà des frontières linguistiques et culturelles.",
      "our_methodology": "Notre méthodologie",
      "our_value_impact": "Notre impact",
      "our_mission": "Notre mission",
      "our_vision": "Notre vision",
      "about": "À propos de nous",
      "about_us_description": "Introduction : La métropole lilloise connaît une dynamique internationale croissante, marquée par la présence d’étudiants, de professionnels expatriés, de frontaliers et de voyageurs venus du monde entier. Ville dynamique et ouverte sur le monde, Lille a été Capitale Européenne de la Culture en 2004 et entretient plusieurs jumelages internationaux - ex. Turin (Italie), Cologne (Allemagne), Rotterdam (Pays-Bas), renforçant ainsi son identité multiculturelle et son ancrage européen. Cette diversité crée un besoin concret : disposer de lieux et d’activités permettant de pratiquer les langues, de créer du lien social et de faciliter l’intégration linguistique et culturelle. Dans ce contexte, les initiatives favorisant les échanges interculturels deviennent essentielles. Elles contribuent à la fois à l’attractivité du territoire, à l’ouverture internationale des habitants et au développement des compétences linguistiques nécessaires dans un marché du travail international. Lingo Lille s’inscrit dans cette dynamique en proposant une approche innovante et conviviale de la pratique linguistique.",
    "about_us_description_1": "Les besoins identifiés :",
"about_us_description_2": "Un manque de lieux accessibles et informels pour pratiquer les langues",
"about_us_description_3": "Une difficulté à rencontrer des personnes de cultures différentes",
"about_us_description_4": "Une offre souvent académique, coûteuse ou peu engageante",
"about_us_description_5": "Un besoin d’intégration sociale, tant pour les nouveaux arrivants que pour les locaux",
      "events_section": "Événements",
      "community_section": "Communauté",
      "services_section": "Services",
      "join_us": "Rejoignez-nous",
      "events": "Événements",
      "community": "Communauté",
      "services": "Nos services",
      "contact_us": "Contactez-nous",
      "send": "Envoyer",
      "language": "Langue"
    }
  },
  en: {
    translation: {
      "hero_title": "Join the community\n",
      "hero_text": "Meetups to practice languages in Lille every week.\n\nCredo: “Connections are created, languages connect.”",
      "see_events": "See upcoming events",
      "join_community_button": "Join the community",
      "about_us": "About Us",
      "who_we_are": "Who We Are",
      "who_we_are_description": "Lingo Lille is a collective founded by passionate individuals, bringing together local residents, international students, expatriates, and professionals. Our team brings together diverse skills: facilitation, cultural mediation, educational design, event organization, team management, and project development. We form an inclusive, open, and dynamic community whose goal is to promote human connections beyond linguistic and cultural boundaries.",
      "our_methodology": "Our Methodology",
      "our_value_impact": "Our Value & Impact",
      "our_mission": "Our Mission",
      "our_vision": "Our Vision",
      "about": "About Us",
      "about_us_description": "Introduction: The Lille metropolitan area is experiencing growing international dynamism, marked by the presence of students, expatriate professionals, cross-border workers, and travelers from all over the world. A vibrant city open to the world, Lille was the European Capital of Culture in 2004 and maintains several international partnerships — e.g., Turin (Italy), Cologne (Germany), Rotterdam (Netherlands) — reinforcing its multicultural identity and European roots. This diversity creates a concrete need: accessible places and activities that allow people to practice languages, build social bonds, and support linguistic and cultural integration. In this context, initiatives that promote intercultural exchange become essential. They contribute to the region’s attractiveness, the international openness of its residents, and the linguistic skills needed in a global labor market. Lingo Lille is part of this dynamic, offering an innovative and friendly approach to language practice.",
"about_us_description_1": "Identified needs:",
"about_us_description_2": "A lack of accessible and informal places to practice languages",
"about_us_description_3": "Difficulty meeting people from different cultures",
"about_us_description_4": "An offer that is often academic, expensive, or not engaging",
"about_us_description_5": "A need for social integration, both for newcomers and locals",

      "events_section": "Events",
      "community_section": "Community",
      "services_section": "Services",
      "join_us": "Join Us",
      "events": "Events",
      "community": "Community",
      "services": "Our Services",
      "contact_us": "Contact Us",
      "send": "Send",
      "language": "Language"
    }
  },
  es: {
    translation: {
      "hero_title": "¡Únete a la comunidad\n",
      "hero_text": "Encuentros para practicar idiomas en Lille cada semana.\n\nCredo: “Se crean vínculos, los idiomas conectan.”",
      "see_events": "Ver próximos eventos",
      "join_community_button": "Unirse a la comunidad",
      "about_us": "Acerca de",
      "who_we_are": "Quiénes somos",
      "who_we_are_description": "Lingo Lille es un colectivo fundado por personas apasionadas que reúne a residentes locales, estudiantes internacionales, expatriados y profesionales. Nuestro equipo reúne diversas competencias: animación, mediación cultural, diseño pedagógico, organización de eventos, gestión de equipos y desarrollo de proyectos. Formamos una comunidad inclusiva, abierta y dinámica cuyo objetivo es fomentar los intercambios humanos más allá de las fronteras lingüísticas y culturales.",
      "our_methodology": "Nuestra metodología",
      "our_value_impact": "Nuestro valor e impacto",
      "our_mission": "Nuestra misión",
      "our_vision": "Nuestra visión",
      "about": "Acerca de nosotros",
      "about_us_description": "Introducción: La metrópoli de Lille experimenta una creciente dinámica internacional, marcada por la presencia de estudiantes, profesionales expatriados, trabajadores transfronterizos y viajeros de todo el mundo. Ciudad dinámica y abierta al mundo, Lille fue Capital Europea de la Cultura en 2004 y mantiene varios hermanamientos internacionales — por ejemplo, Turín (Italia), Colonia (Alemania), Róterdam (Países Bajos) — lo que refuerza su identidad multicultural y su arraigo europeo. Esta diversidad genera una necesidad concreta: disponer de lugares y actividades que permitan practicar idiomas, crear vínculos sociales y facilitar la integración lingüística y cultural. En este contexto, las iniciativas que fomentan los intercambios interculturales se vuelven esenciales. Contribuyen a la atractividad del territorio, a la apertura internacional de los habitantes y al desarrollo de competencias lingüísticas necesarias en un mercado laboral global. Lingo Lille se inscribe en esta dinámica ofreciendo un enfoque innovador y acogedor para la práctica lingüística.",
"about_us_description_1": "Necesidades identificadas:",
"about_us_description_2": "Falta de lugares accesibles e informales para practicar idiomas",
"about_us_description_3": "Dificultad para conocer a personas de diferentes culturas",
"about_us_description_4": "Una oferta a menudo académica, costosa o poco atractiva",
"about_us_description_5": "Una necesidad de integración social tanto para recién llegados como para locales",

      "events_section": "Eventos",
      "community_section": "Comunidad",
      "services_section": "Servicios",
      "join_us": "Únete a nosotros",
      "events": "Eventos",
      "community": "Comunidad",
      "services": "Nuestros servicios",
      "contact_us": "Contáctanos",
      "send": "Enviar",
      "language": "Idioma"
    }
  },
  zh: {
    translation: {
      "hero_title": "加入社区\n",
      "hero_text": "每周在里尔参加语言练习活动。\n\n信条：建立联系，语言让人连接。",
      "see_events": "查看即将举行的活动",
      "join_community_button": "加入社区",
      "about_us": "关于我们",
      "who_we_are": "我们是谁",
      "who_we_are_description": "Lingo Lille 是一个由充满热情的人们组成的团体，包括当地居民、国际学生、外派人士和各类专业人士。我们的团队拥有多样化的技能：活动组织、文化调解、教育设计、活动策划、团队管理和项目开发。我们是一支包容、开放且充满活力的社区，旨在促进跨越语言和文化界限的人际交流。",
      "our_methodology": "我们的方法论",
      "our_value_impact": "我们的价值与影响",
      "our_mission": "我们的使命",
      "our_vision": "我们的愿景",
      "about": "关于我们",
      "about_us_description": "简介：里尔都会区正经历日益增长的国际活力，聚集了来自世界各地的学生、外派专业人士、跨境工作者和旅行者。作为一座开放而充满活力的城市，里尔曾在2004年被评为欧洲文化之都，并与多个国际城市建立了友好关系——如都灵（意大利）、科隆（德国）、鹿特丹（荷兰）——进一步强化了其多元文化身份和欧洲定位。这种多样性带来了一个现实需求：提供能够练习语言、促进社交联系并帮助语言和文化融入的场所和活动。在此背景下，促进跨文化交流的举措变得至关重要。它们有助于提升地区吸引力、增强居民的国际视野，并培养在全球就业市场中必需的语言技能。Lingo Lille 正是顺应这一趋势，以创新且友好的方式推动语言实践。",
"about_us_description_1": "识别出的需求：",
"about_us_description_2": "缺乏方便且非正式的语言练习场所",
"about_us_description_3": "难以结识来自不同文化背景的人",
"about_us_description_4": "语言活动通常过于学术化、昂贵或缺乏吸引力",
"about_us_description_5": "无论对新来者还是当地居民，都需要更好的社会融合",
      "events_section": "活动",
      "community_section": "社区",
      "services_section": "服务",
      "join_us": "加入我们",
      "events": "活动",
      "community": "社区",
      "services": "我们的服务",
      "contact_us": "联系我们",
      "send": "发送",
      "language": "语言"
    }
  },
  ja: {
    translation: {
      "hero_title": "コミュニティに参加\n",
      "hero_text": "毎週リールで言語を練習するための集まり。\n\n信条：「つながりが生まれ、言語が人をつなぐ。」",
      "see_events": "今後のイベントを見る",
      "join_community_button": "コミュニティに参加",
      "about_us": "私たちについて",
      "who_we_are": "私たちは誰ですか",
      "who_we_are_description": "Lingo Lille は、情熱を持つメンバーによって設立されたコレクティブで、地元住民、留学生、駐在員、そして専門家が集まっています。私たちのチームは、ファシリテーション、文化的仲介、教育設計、イベント運営、チームマネジメント、プロジェクト開発など、多様なスキルを有しています。私たちは、言語や文化の境界を越えた人間交流を促進することを目的とする、包括的で開かれた、そして活気あるコミュニティです。",
      "our_methodology": "私たちの方法論",
      "our_value_impact": "私たちの価値と影響",
      "our_mission": "私たちの使命",
      "our_vision": "私たちのビジョン",
      "about": "私たちについて",
      "about_us_description": "紹介：リール都市圏は、世界中からの学生、駐在員、国境労働者、旅行者の存在によって、ますます国際的な活気を見せています。活気があり国際的に開かれた都市であるリールは、2004年に欧州文化首都に選ばれ、トリノ（イタリア）、ケルン（ドイツ）、ロッテルダム（オランダ）など、複数の国際都市と姉妹都市関係を結んでいます。これにより、その多文化性とヨーロッパ的アイデンティティが強化されています。この多様性は、言語を練習し、社会的つながりを作り、言語的・文化的統合を促進するための場所や活動が必要であることを示しています。このような背景の中、異文化交流を促進する取り組みは不可欠です。それらは地域の魅力向上、住民の国際的な視野の拡大、そして国際的な労働市場で必要とされる言語能力の向上に貢献します。Lingo Lille は、言語実践に対して革新的で親しみやすいアプローチを提供することで、この流れに寄与しています。",
"about_us_description_1": "特定されたニーズ：",
"about_us_description_2": "言語を気軽に練習できる場所が不足していること",
"about_us_description_3": "異なる文化の人々と出会う機会が少ないこと",
"about_us_description_4": "提供されるサービスが学術的、費用が高い、または魅力に欠けることが多い",
"about_us_description_5": "新来者と地元住民の双方にとって社会的な統合の必要性があること",
      "events_section": "イベント",
      "community_section": "コミュニティ",
      "services_section": "サービス",
      "join_us": "参加する",
      "events": "イベント",
      "community": "コミュニティ",
      "services": "私たちのサービス",
      "contact_us": "お問い合わせ",
      "send": "送信",
      "language": "言語"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
