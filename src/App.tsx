import { Globe, MessageCircle, BookOpen, Instagram, Mail, Info as InfoCircle  } from "lucide-react";
import { Button } from "./components/ui/button";
import { EventCard } from "./components/EventCard";
import { Logo } from "./components/Logo";
import LingoLilleLogo from './img/LingoLille.jpg';
import qrcode from './img/qrcode.png';
import instagram from './img/instagram.png';
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Flag from 'react-world-flags';

export default function App() {
  const { t, i18n } = useTranslation();

  const [aboutOpen, setAboutOpen] = useState<boolean>(false);
  const [joinOpen, setJoinOpen] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.currentTarget,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(() => alert(t("message_sent")))
      .catch(() => alert(t("message_error")));
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setAboutOpen(false); // Ferme le menu après clic
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const events = [
    {
      title: t("events.cafe_polyglotte"),
      date: t("events.every_wednesday"),
      time: "20h",
      location: "Tir Na Nog",
      languageFlag: "🌍",
    },
    {
      title: t("events.boarding_games"),
      date: t("events.every_thursday"),
      time: "20h",
      location: "Ya's bar",
      languageFlag: "🌍",
    },
  ];

  const communityPhotos = [];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img  width="70" height="70" src={LingoLilleLogo} alt="LingoLille" className="rounded-full object-cover" />
            </div>

            {/* Menu desktop */}
            <nav className="hidden md:flex items-center gap-2 relative">
              {/* Menu déroulant À propos */}
              <div className="relative">
                <Button
                  variant="ghost"
                  className="rounded-full hover:bg-orange-50 hover:text-[#FF7A00] flex items-center gap-1"
                  onClick={() => setAboutOpen(!aboutOpen)}
                >
                  {t("about")}
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>

                {aboutOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                    <ul className="flex flex-col">
                      <li><button className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-[#FF7A00] rounded-t-xl" onClick={() => scrollToSection("about-us")}>{t("about_us")}</button></li>
                      <li><button className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-[#FF7A00]" onClick={() => scrollToSection("qui-sommes-nous")}>{t("who_we_are")}</button></li>
                      <li><button className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-[#FF7A00]" onClick={() => scrollToSection("notre-methodologie")}>{t("our_methodology")}</button></li>
                      <li><button className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-[#FF7A00]" onClick={() => scrollToSection("valeur-impact")}>{t("our_value_impact")}</button></li>
                      <li><button className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-[#FF7A00]" onClick={() => scrollToSection("mission")}>{t("our_mission")}</button></li>
                      <li><button className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-[#FF7A00] rounded-b-xl" onClick={() => scrollToSection("vision")}>{t("our_vision")}</button></li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Autres boutons */}
              <Button variant="ghost" onClick={() => scrollToSection("events")}>{t("events_section")}</Button>
              <Button variant="ghost" onClick={() => scrollToSection("community")}>{t("community_section")}</Button>
              <Button variant="ghost" className="rounded-full hover:bg-orange-50 hover:text-[#FF7A00]" onClick={() => scrollToSection("services")}>{t("services_section")}</Button>

              {/* Menu déroulant Nous rejoindre */}
              <div className="relative">
                <Button className="rounded-full bg-[#FF7A00] hover:bg-[#E66D00] text-white" onClick={() => setJoinOpen(!joinOpen)}>{t("join_us")}</Button>
                {joinOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50 flex flex-col">
                    <button className="px-4 py-2 text-gray-700 hover:bg-orange-50 text-left rounded-t-xl" onClick={() => scrollToSection("contact")}>{t("contact_us")}</button>
                    <button className="px-4 py-2 text-gray-400 cursor-not-allowed text-left" disabled>{t("sign_up")}</button>
                    <button className="px-4 py-2 text-gray-400 cursor-not-allowed text-left rounded-b-xl" disabled>{t("donate")}</button>
                  </div>
                )}
              </div>

              {/* Language Switcher */}
<div className="flex space-x-2">
  <Button variant="outline" size="sm" onClick={() => changeLanguage('fr')} className="flex items-center gap-1">
    <Flag code="FR" alt="FR" className="w-4 h-4" /> FR
  </Button>

  <Button variant="outline" size="sm" onClick={() => changeLanguage('en')} className="flex items-center gap-1">
    <Flag code="GB" alt="EN" className="w-4 h-4" /> EN
  </Button>

  <Button variant="outline" size="sm" onClick={() => changeLanguage('es')} className="flex items-center gap-1">
    <Flag code="ES" alt="ES" className="w-4 h-4" /> ES
  </Button>

  <Button variant="outline" size="sm" onClick={() => changeLanguage('zh')} className="flex items-center gap-1">
    <Flag code="CN" alt="ZH" className="w-4 h-4" /> ZH
  </Button>

  <Button variant="outline" size="sm" onClick={() => changeLanguage('ja')} className="flex items-center gap-1">
    <Flag code="JP" alt="JP" className="w-4 h-4" /> JP
  </Button>
</div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-gray-900">
                  {t("hero_title")}<br />
                  <span className="text-[#FF7A00]">Lingo Lille</span> !
                </h1>
                <p className="text-gray-600 max-w-lg">{t("hero_text")}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full bg-[#FF7A00] hover:bg-[#E66D00] text-white px-8" onClick={() => scrollToSection("events")}>{t("see_events")}</Button>
                <Button size="lg" variant="outline" className="rounded-full border-[#FF7A00] text-[#FF7A00] hover:bg-orange-50 px-8" onClick={() => scrollToSection("join")}>{t("join_community_button")}</Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img width="240" height="240" src={instagram} alt="LingoLille" className="rounded-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FF7A00] rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#FF7A00] rounded-full opacity-10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* À propos Section */}
{/* About Us Section */}
<section id="about-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 scroll-mt-28">
  <div className="container mx-auto max-w-4xl">
    <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg space-y-6">
      <h2 className="text-gray-900 text-2xl font-semibold flex items-center gap-2">
        <InfoCircle className="w-6 h-6 text-[#FF7A00]" /> About Us
      </h2>
      <p className="text-gray-600 leading-relaxed whitespace-pre-line">
        Introduction :
        La métropole lilloise connaît une dynamique internationale croissante, marquée par la présence d’étudiants, de professionnels expatriés, de frontaliers et de voyageurs venus du monde entier. Ville dynamique et ouverte sur le monde, Lille a été Capitale Européenne de la Culture en 2004 et entretient plusieurs jumelages internationaux - ex. Turin (Italie), Cologne (Allemagne), Rotterdam (Pays-Bas), renforçant ainsi son identité multiculturelle et son ancrage européen.
        Cette diversité crée un besoin concret : disposer de lieux et d’activités permettant de pratiquer les langues, de créer du lien social et de faciliter l’intégration linguistique et culturelle.
        Dans ce contexte, les initiatives favorisant les échanges interculturels deviennent essentielles. Elles contribuent à la fois à l’attractivité du territoire, à l’ouverture internationale des habitants et au développement des compétences linguistiques nécessaires dans un marché du travail international.
        Lingo Lille s’inscrit dans cette dynamique en proposant une approche innovante et conviviale de la pratique linguistique.
      </p>

      <h3 className="text-gray-900 font-semibold text-lg mt-6">Les besoins identifiés :</h3>
<ul className="space-y-3 mt-2">
  <li className="flex items-start gap-3">
    <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
    <span className="text-gray-600 leading-relaxed">
      Un manque de lieux accessibles et informels pour pratiquer les langues
    </span>
  </li>
  <li className="flex items-start gap-3">
    <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
    <span className="text-gray-600 leading-relaxed">
      Une difficulté à rencontrer des personnes de cultures différentes
    </span>
  </li>
  <li className="flex items-start gap-3">
    <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
    <span className="text-gray-600 leading-relaxed">
      Une offre souvent académique, coûteuse ou peu engageante
    </span>
  </li>
  <li className="flex items-start gap-3">
    <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
    <span className="text-gray-600 leading-relaxed">
      Un besoin d’intégration sociale, tant pour les nouveaux arrivants que pour les locaux
    </span>
  </li>
</ul>
    </div>
  </div>
</section>

<section id="qui-sommes-nous" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-28">
  <div className="container mx-auto max-w-4xl">
    <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg space-y-6">
      <h2 className="text-gray-900 text-2xl font-semibold flex items-center gap-2">
        <InfoCircle className="w-6 h-6 text-[#FF7A00]" /> Qui sommes-nous ?
      </h2>
      <p className="text-gray-600 leading-relaxed">
        Lingo Lille est un collectif fondé par des passionnés regroupant des habitants, des étudiants internationaux, des expatriés et des professionnels. Notre équipe réunit diverses compétences : animation, médiation culturelle, conception pédagogique, organisation événementielle, management d’équipe et développement de projets.
Nous formons une communauté inclusive, ouverte et dynamique ayant pour objectif de favoriser les échanges humains au-delà des frontières linguistiques et culturelles.
      </p>
    </div>
  </div>
</section>

<section id="notre-methodologie" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-28">
  <div className="container mx-auto max-w-4xl">
    <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg space-y-6">
      <h2 className="text-gray-900 text-2xl font-semibold flex items-center gap-2">
        <InfoCircle className="w-6 h-6 text-[#FF7A00]" /> Notre méthodologie
      </h2>
      <p className="text-gray-600 leading-relaxed">
       Lingo Lille adopte une approche centrée sur l’expérience sociale, l’interculturalité et l’apprentissage naturel des langues.

Notre méthodologie repose sur plusieurs principes :
Apprentissage par la pratique : la langue est utilisée dans des situations réelles, spontanées et motivantes.
<ul className="mt-4 space-y-3">
  <li className="flex items-start gap-3">
    <span className="mt-2 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
    <span className="text-gray-600 leading-relaxed">
      Apprentissage par la pratique : la langue est utilisée dans des situations réelles, spontanées et motivantes.
    </span>
  </li>
  <li className="flex items-start gap-3">
    <span className="mt-2 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
    <span className="text-gray-600 leading-relaxed">
      Approche conviviale et non scolaire : aucune pression, aucune évaluation, mais des activités ludiques, des jeux de société et des tandems linguistiques.
    </span>
  </li>
  <li className="flex items-start gap-3">
    <span className="mt-2 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
    <span className="text-gray-600 leading-relaxed">
      Intégration immédiate des nouveaux participants : accueil, explication du concept et accompagnement personnalisé.
    </span>
  </li>
  <li className="flex items-start gap-3">
    <span className="mt-2 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
    <span className="text-gray-600 leading-relaxed">
      Variété des activités : soirées thématiques, jeux linguistiques, défis interactifs, discussions guidées.
    </span>
  </li>
  <li className="flex items-start gap-3">
    <span className="mt-2 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
    <span className="text-gray-600 leading-relaxed">
      Briefer régulièrement les bénévoles et animateurs : consignes, gestion de groupe, écoute active et médiation culturelle.
    </span>
  </li>
  <li className="flex items-start gap-3">
    <span className="mt-2 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
    <span className="text-gray-600 leading-relaxed">
      Organisation structurée : accueil → matching linguistique → activités → rotations → temps libre.
    </span>
  </li>
  <li className="flex items-start gap-3">
    <span className="mt-2 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
    <span className="text-gray-600 leading-relaxed">
      Adaptation permanente : prise en compte des retours, révision des formats, gestion du bruit, des espaces, des besoins linguistiques.
    </span>
  </li>
</ul>
Cette méthodologie crée un environnement rassurant, motivant et propice au développement réel des compétences linguistiques.

      </p>
    </div>
  </div>
</section>

<section id="valeur-ajoutee" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-28">
  <div className="container mx-auto max-w-4xl">
    <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg space-y-8">
            <h2 className="text-gray-900 text-2xl font-semibold flex items-center gap-2">
        <InfoCircle className="w-6 h-6 text-[#FF7A00]" />Notre valeur ajoutée et impact
      </h2>

      {/* Valeur ajoutée */}
      <div>
        <h2 className="text-gray-900 text-2xl font-semibold mb-4">Valeur ajoutée</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Création d’un espace interculturel unique dans la métropole lilloise.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Expérience ludique et moderne de la pratique linguistique.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Structure professionnelle, claire et facilement compréhensible.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Qualité d’accueil et d'intégration des nouveaux arrivants.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Formation d’une communauté active, fidèle et internationale.
            </span>
          </li>
        </ul>
      </div>

      {/* Impact social */}
      <div>
        <h2 className="text-gray-900 text-2xl font-semibold mb-4">Impact social</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Réduction de la solitude et renforcement du sentiment d’appartenance.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Facilitation de l’intégration des étrangers dans la région.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Développement de compétences linguistiques accessibles à tous.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Mise en relation d’étudiants, de professionnels et d’habitants.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Amélioration du climat interculturel local.
            </span>
          </li>
        </ul>
      </div>

      {/* Impact économique */}
      <div>
        <h2 className="text-gray-900 text-2xl font-semibold mb-4">Impact économique</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Amélioration des compétences linguistiques des professionnels.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Attractivité renforcée pour les entreprises cherchant des profils multilingues.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Dynamisation des bars et partenaires locaux accueillant les événements.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Potentiel de création d’ateliers, formations, événements privés et partenariats institutionnels.
            </span>
          </li>
        </ul>
      </div>

      {/* Impact environnemental */}
      <div>
        <h2 className="text-gray-900 text-2xl font-semibold mb-4">Impact environnemental</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Utilisation d’espaces déjà existants plutôt que de créer de nouveaux lieux.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Promotion de mobilités douces grâce à des événements organisés en centre-ville.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Orientation vers le durable en réduisant les supports physiques et en privilégiant le numérique.
            </span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>

<section id="mission" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-28">
  <div className="container mx-auto max-w-4xl">
    <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg space-y-6">
      <h2 className="text-gray-900 text-2xl font-semibold flex items-center gap-2">
        <InfoCircle className="w-6 h-6 text-[#FF7A00]" /> Notre mission
      </h2>
      {/* Court terme */}
      <div>
        <h2 className="text-gray-900 text-2xl font-semibold mb-4">Court terme (0–12 mois)</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Structurer les deux événements hebdomadaires existants.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Améliorer la qualité du matching linguistique.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Développer des activités variées et attractives.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Former l’équipe de bénévoles.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Professionnaliser la communication (réseaux sociaux, supports visuels, identité claire).
            </span>
          </li>
        </ul>
      </div>

      {/* Moyen terme */}
      <div>
        <h2 className="text-gray-900 text-2xl font-semibold mb-4">Moyen terme (1–3 ans)</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Élargir les partenariats (bars, universités, institutions, entreprises).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Proposer des ateliers linguistiques thématiques.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Lancer des journées ou soirées spéciales (culture, métiers, voyages).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Développer des outils pédagogiques internes.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Créer un pôle “professionnels” dédié à l’évolution de carrière linguistique.
            </span>
          </li>
        </ul>
      </div>

      {/* Long terme */}
      <div>
        <h2 className="text-gray-900 text-2xl font-semibold mb-4">Long terme (3–5 ans et plus)</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Devenir un acteur incontournable du multilinguisme dans la région.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Développer une offre de formation et de médiation interculturelle.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Étendre le modèle à d’autres villes.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Organiser un festival linguistique régional.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
            <span className="text-gray-600 leading-relaxed">
              Créer un réseau européen de communautés linguistiques.
            </span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>

<section id="vision" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-28">
  <div className="container mx-auto max-w-4xl">
    <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg space-y-8">

      {/* Gros titre */}
      <h2 className="text-gray-900 text-2xl font-semibold flex items-center gap-2">
        <InfoCircle className="w-6 h-6 text-[#FF7A00]" /> Notre vision
      </h2>

      {/* Court terme */}
      <div>
        <h3 className="text-gray-800 text-xl font-medium mb-2">Court terme</h3>
        <p className="text-gray-600 leading-relaxed">
          Construire un espace inclusif où chacun peut pratiquer les langues en toute confiance.
        </p>
      </div>

      {/* Moyen terme */}
      <div>
        <h3 className="text-gray-800 text-xl font-medium mb-2">Moyen terme</h3>
        <p className="text-gray-600 leading-relaxed">
          Devenir la référence lilloise en matière d’échanges linguistiques et d’événements interculturels.
        </p>
      </div>

      {/* Long terme */}
      <div>
        <h3 className="text-gray-800 text-xl font-medium mb-2">Long terme</h3>
        <p className="text-gray-600 leading-relaxed">
          Faire de Lille une ville plurilingue modèle en Europe, où la langue devient un vecteur de rencontre, d’apprentissage et de croissance professionnelle.
        </p>
      </div>

    </div>
  </div>
</section>



      {/* Events Section */}
      <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-gray-900">Nos événements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Rejoins-nous lors de nos rencontres hebdomadaires pour pratiquer les langues dans une ambiance conviviale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-gray-900">Une communauté ouverte</h2>
              <p className="text-gray-600">
                Une communauté ouverte où chacun peut pratiquer, apprendre et partager sa langue.
              </p>

              <div className="grid sm:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-[#FF7A00]" />
                  </div>
                  <span className="text-gray-700">Multinational</span>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-[#FF7A00]" />
                  </div>
                  <span className="text-gray-700">Conversations</span>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-[#FF7A00]" />
                  </div>
                  <span className="text-gray-700">Apprentissage</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {communityPhotos.map((photo, index) => (
                <div key={index} className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src={photo}
                    alt={`Communauté ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Section */}
      <section id="join" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-gray-900">Rejoins la communauté</h2>
              <p className="text-gray-600">
                Reste informé de tous nos événements et connecte-toi avec les membres de la communauté.
              </p>
            </div>

            <div className="flex flex-col items-center gap-8 bg-white p-12 rounded-3xl shadow-lg">
            <img  width="240" height="240"   src={qrcode} alt="LingoLille" className="rounded-full object-cover" />

              <Button 
                size="lg"
                className="rounded-full bg-[#FF7A00] hover:bg-[#E66D00] text-white px-12"
              >
                Rejoindre via ce lien
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-28">
  <div className="container mx-auto max-w-4xl">
    <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg space-y-6">
            <h2 className="text-gray-900 text-2xl font-semibold flex items-center gap-2">
        <InfoCircle className="w-6 h-6 text-[#FF7A00]" /> Nos services
      </h2>
           <ul className="space-y-3">
        <li className="flex items-start gap-3">
          <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
          <span className="text-gray-600 leading-relaxed">
            Organisation d’événements hebdomadaires d’échanges linguistiques (Café Polyglotte).
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
          <span className="text-gray-600 leading-relaxed">
            Organisation de soirées Boarding Pass avec tandems linguistiques et jeux de société.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
          <span className="text-gray-600 leading-relaxed">
            Aide linguistique informelle pour expatriés, étudiants et nouveaux arrivants.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
          <span className="text-gray-600 leading-relaxed">
            Mise en place d’ateliers thématiques (culture, conversation guidée, vocabulaire professionnel).
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
          <span className="text-gray-600 leading-relaxed">
            Organisation d’activités de cohésion pour les membres de la communauté.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
          <span className="text-gray-600 leading-relaxed">
            Développement potentiel de formations linguistiques accessibles à tout public.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
          <span className="text-gray-600 leading-relaxed">
            Animation d’événements privés ou publics liés au multilinguisme.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
          <span className="text-gray-600 leading-relaxed">
            Conseil en médiation interculturelle.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
          <span className="text-gray-600 leading-relaxed">
            Développement d’une plateforme interne pour centraliser les services et la communication.
          </span>
        </li>
      </ul>
      <br/>

      <p className="text-gray-600 leading-relaxed mt-4">
        Tous les services grâce à la plateforme doivent fonctionner avec une commission sur le budget global.
      </p>
    </div>
  </div>
</section>

<section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-28">
  <div className="container mx-auto max-w-4xl bg-white border border-gray-200 rounded-3xl p-10 shadow-lg">
    <h2 className="text-gray-900 text-2xl font-semibold mb-6">Contact Us</h2>
<form className="space-y-4" onSubmit={sendEmail}>
  <input
    type="text"
    name="name"
    placeholder="Nom"
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
    required
  />
  <input
    type="email"
    name="email"
    placeholder="Email"
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
    required
  />
  <textarea
    name="message"
    placeholder="Message"
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
    rows={5}
    required
  />
  <button
    type="submit"
    className="bg-[#FF7A00] text-white px-6 py-3 rounded-full hover:bg-[#E66D00] transition-colors duration-300"
  >
    Envoyer
  </button>
</form>

  </div>
</section>


      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <Logo size="sm" />
              <span>Lingo Lille</span>
            </div>

            <div className="flex items-center gap-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#FF7A00] transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://wa.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#FF7A00] transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a 
                href="mailto:contact@lingolille.fr"
                className="hover:text-[#FF7A00] transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <p className="text-gray-400 text-sm">© Lingo Lille - designed by Yanis DACI  – 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
