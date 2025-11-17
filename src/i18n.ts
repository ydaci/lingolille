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
      "our_methodology": "Notre méthodologie",
      "our_value_impact": "Notre impact",
      "our_mission": "Notre mission",
      "our_vision": "Notre vision",
      "about": "À propos de nous",
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
      "our_methodology": "Our Methodology",
      "our_value_impact": "Our Value & Impact",
      "our_mission": "Our Mission",
      "our_vision": "Our Vision",
      "about": "About Us",
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
      "our_methodology": "Nuestra metodología",
      "our_value_impact": "Nuestro valor e impacto",
      "our_mission": "Nuestra misión",
      "our_vision": "Nuestra visión",
      "about": "Acerca de nosotros",
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
      "our_methodology": "我们的方法论",
      "our_value_impact": "我们的价值与影响",
      "our_mission": "我们的使命",
      "our_vision": "我们的愿景",
      "about": "关于我们",
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
      "our_methodology": "私たちの方法論",
      "our_value_impact": "私たちの価値と影響",
      "our_mission": "私たちの使命",
      "our_vision": "私たちのビジョン",
      "about": "私たちについて",
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
