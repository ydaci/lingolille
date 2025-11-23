import {
  Globe,
  MessageCircle,
  BookOpen,
  Instagram,
  Mail,
  Info as InfoCircle,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { EventCard } from "./components/EventCard";
import { Logo } from "./components/Logo";
import LingoLilleLogo from "./img/LingoLille.jpg";
import qrcode from "./img/qrcode.png";
import instagram from "./img/instagram.png";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import LanguageSelector from "./components/LanguageSelector";

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
      title: t("event.cafe_polyglotte"),
      date: t("every_wednesday"),
      time: "20h",
      location: "Tir Na Nog",
      languageFlag: "🌍",
    },
    {
      title: t("boarding_games"),
      date: t("event.every_thursday"),
      time: "20h",
      location: "Ya's bar",
      languageFlag: "🌍",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                width="70"
                height="70"
                src={LingoLilleLogo}
                alt="LingoLille"
                className="rounded-full object-cover"
              />
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
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Button>

                {aboutOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                    <ul className="flex flex-col">
                      <li>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-[#FF7A00] rounded-t-xl"
                          onClick={() => scrollToSection("about-us")}
                        >
                          {t("about_us")}
                        </button>
                      </li>
                      <li>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-[#FF7A00]"
                          onClick={() => scrollToSection("qui-sommes-nous")}
                        >
                          {t("who_we_are")}
                        </button>
                      </li>
                      <li>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-[#FF7A00]"
                          onClick={() => scrollToSection("notre-methodologie")}
                        >
                          {t("our_methodology")}
                        </button>
                      </li>
                      <li>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-[#FF7A00]"
                          onClick={() => scrollToSection("valeur-impact")}
                        >
                          {t("our_value_impact")}
                        </button>
                      </li>
                      <li>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-[#FF7A00]"
                          onClick={() => scrollToSection("mission")}
                        >
                          {t("our_mission")}
                        </button>
                      </li>
                      <li>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-orange-50 hover:text-[#FF7A00] rounded-b-xl"
                          onClick={() => scrollToSection("vision")}
                        >
                          {t("our_vision")}
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Autres boutons */}
              <Button variant="ghost" onClick={() => scrollToSection("events")}>
                {t("events_section")}
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("community")}
              >
                {t("community_section")}
              </Button>
              <Button
                variant="ghost"
                className="rounded-full hover:bg-orange-50 hover:text-[#FF7A00]"
                onClick={() => scrollToSection("services")}
              >
                {t("services_section")}
              </Button>

              {/* Menu déroulant Nous rejoindre */}
              <div className="relative">
                <Button
                  className="rounded-full bg-[#FF7A00] hover:bg-[#E66D00] text-white"
                  onClick={() => setJoinOpen(!joinOpen)}
                >
                  {t("join_us")}
                </Button>
                {joinOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50 flex flex-col">
                    <button
                      className="px-4 py-2 text-gray-700 hover:bg-orange-50 text-left rounded-t-xl"
                      onClick={() => scrollToSection("contact")}
                    >
                      {t("contact_us")}
                    </button>
                    <button
                      className="px-4 py-2 text-gray-400 cursor-not-allowed text-left"
                      disabled
                    >
                      {t("sign_up")}
                    </button>
                    <button
                      className="px-4 py-2 text-gray-400 cursor-not-allowed text-left rounded-b-xl"
                      disabled
                    >
                      {t("donate")}
                    </button>
                  </div>
                )}
              </div>

              {/* Language Switcher */}
              <LanguageSelector changeLanguage={changeLanguage} />

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
                  Etape 1 : Notre méthode
                  <br />
                  <span className="text-[#FF7A00]">Maîtrise une langue rapidement avec un enseignant polyglotte expérimenté près de chez toi !</span>
                </h1>
                <p className="text-gray-600 max-w-lg">{t("hero_text")}</p>
              </div>
              <Button
                size="lg"
                className="rounded-full bg-[#FF7A00] hover:bg-[#E66D00] text-white px-8"
                onClick={() => scrollToSection("services")}
              >
                {t("services")}
              </Button>
              <div className="space-y-4">
                <h1 className="text-gray-900">
                  {t("hero_title")}
                  <br />
                  <span className="text-[#FF7A00]">Lingo Lille</span> !
                </h1>
                <p className="text-gray-600 max-w-lg">{t("hero_text")}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-[#FF7A00] hover:bg-[#E66D00] text-white px-8"
                  onClick={() => scrollToSection("events")}
                >
                  {t("see_events")}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-[#FF7A00] text-[#FF7A00] hover:bg-orange-50 px-8"
                  onClick={() => scrollToSection("join")}
                >
                  {t("join_community_button")}
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                <img
                  width="500"
                  height="500"
                  src={instagram}
                  alt="LingoLille"
                  className="rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FF7A00] rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#FF7A00] rounded-full opacity-10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* À propos Section */}
      {/* About Us Section */}
      <section
        id="about-us"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 scroll-mt-28"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg space-y-6">
            <h2 className="text-gray-900 text-2xl font-semibold flex items-center gap-2">
              <InfoCircle className="w-6 h-6 text-[#FF7A00]" /> {t("about_us")}
            </h2>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {t("about_us_description")}
            </p>

            <h3 className="text-gray-900 font-semibold text-lg mt-6">
              {t("about_us_description_1")}
            </h3>
            <ul className="space-y-3 mt-2">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                <span className="text-gray-600 leading-relaxed">
                  {t("about_us_description_2")}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                <span className="text-gray-600 leading-relaxed">
                  {t("about_us_description_3")}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                <span className="text-gray-600 leading-relaxed">
                  {t("about_us_description_4")}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                <span className="text-gray-600 leading-relaxed">
                  {t("about_us_description_5")}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="qui-sommes-nous"
        className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg space-y-6">
            <h2 className="text-gray-900 text-2xl font-semibold flex items-center gap-2">
              <InfoCircle className="w-6 h-6 text-[#FF7A00]" />
              {t("who_we_are")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("who_we_are_description")}
            </p>
          </div>
        </div>
      </section>

      <section
        id="notre-methodologie"
        className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg space-y-6">
            <h2 className="text-gray-900 text-2xl font-semibold flex items-center gap-2">
              <InfoCircle className="w-6 h-6 text-[#FF7A00]" />{" "}
              {t("methodology.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("methodology.intro")}
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("methodology.principle_1_title")} :{" "}
                    {t("methodology.principle_1_desc")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("methodology.principle_2_title")} :{" "}
                    {t("methodology.principle_2_desc")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("methodology.principle_3_title")} :{" "}
                    {t("methodology.principle_3_desc")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("methodology.principle_4_title")} :{" "}
                    {t("methodology.principle_4_desc")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("methodology.principle_5_title")} :{" "}
                    {t("methodology.principle_5_desc")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("methodology.principle_7_title")} :{" "}
                    {t("methodology.principle_7_desc")}{" "}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("methodology.principle_6_title")} :{" "}
                    {t("methodology.principle_6_desc")}
                  </span>
                </li>
              </ul>
              {t("methodology.conclusion")}
            </p>
          </div>
        </div>
      </section>

      <section
        id="valeur-ajoutee"
        className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg space-y-8">
            <h2 className="text-gray-900 text-2xl font-semibold flex items-center gap-2">
              <InfoCircle className="w-6 h-6 text-[#FF7A00]" />
              {t("value_impact.section_title")}
            </h2>

            {/* Valeur ajoutée */}
            <div>
              <h2 className="text-gray-900 text-2xl font-semibold mb-4">
                {t("value_impact.added_value_title")}
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("value_impact.added_value_1")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("value_impact.added_value_2")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("value_impact.added_value_3")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("value_impact.added_value_4")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("value_impact.added_value_5")}
                  </span>
                </li>
              </ul>
            </div>

            {/* Impact social */}
            <div>
              <h2 className="text-gray-900 text-2xl font-semibold mb-4">
                {t("value_impact.social_impact_title")}
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("value_impact.social_impact_1")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("value_impact.social_impact_2")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("value_impact.social_impact_3")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("value_impact.social_impact_4")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("value_impact.social_impact_5")}
                  </span>
                </li>
              </ul>
            </div>

            {/* Impact économique */}
            <div>
              <h2 className="text-gray-900 text-2xl font-semibold mb-4">
                {t("value_impact.economic_impact_title")}
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("value_impact.economic_impact_1")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("value_impact.economic_impact_2")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("value_impact.economic_impact_3")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("value_impact.economic_impact_4")}
                  </span>
                </li>
              </ul>
            </div>

            {/* Impact environnemental */}
            <div>
              <h2 className="text-gray-900 text-2xl font-semibold mb-4">
                {t("value_impact.environmental_impact_title")}
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("value_impact.environmental_impact_1")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("value_impact.environmental_impact_2")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">
                    {t("value_impact.environmental_impact_3")}
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
              <InfoCircle className="w-6 h-6 text-[#FF7A00]" />
              {t("mission.section_title")}
            </h2>

            {/* Court terme */}
            <div>
              <h2 className="text-gray-900 text-2xl font-semibold mb-4">
                {t("mission.short_term.title")}
              </h2>
              <ul className="space-y-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                    <span className="text-gray-600 leading-relaxed">
                      {t(`mission.short_term.item_${i + 1}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Moyen terme */}
            <div>
              <h2 className="text-gray-900 text-2xl font-semibold mb-4">
                {t("mission.medium_term.title")}
              </h2>
              <ul className="space-y-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                    <span className="text-gray-600 leading-relaxed">
                      {t(`mission.medium_term.item_${i + 1}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Long terme */}
            <div>
              <h2 className="text-gray-900 text-2xl font-semibold mb-4">
                {t("mission.long_term.title")}
              </h2>
              <ul className="space-y-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                    <span className="text-gray-600 leading-relaxed">
                      {t(`mission.long_term.item_${i + 1}`)}
                    </span>
                  </li>
                ))}
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
              <InfoCircle className="w-6 h-6 text-[#FF7A00]" />{" "}
              {t("vision.section_title")}
            </h2>

            {/* Court terme */}
            <div>
              <h3 className="text-gray-800 text-xl font-medium mb-2">
                {t("vision.short_term.title")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("vision.short_term.text")}
              </p>
            </div>

            {/* Moyen terme */}
            <div>
              <h3 className="text-gray-800 text-xl font-medium mb-2">
                {t("vision.medium_term.title")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("vision.medium_term.text")}
              </p>
            </div>

            {/* Long terme */}
            <div>
              <h3 className="text-gray-800 text-xl font-medium mb-2">
                {t("vision.long_term.title")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("vision.long_term.text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-gray-900">{t("event.title")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("event.description")}
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
              <h2 className="text-gray-900">{t("community_title")}</h2>
              <p className="text-gray-600">{t("community_desc")}</p>

              <div className="grid sm:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-[#FF7A00]" />
                  </div>
                  <span className="text-gray-700">
                    {t("multinational.title")}
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-[#FF7A00]" />
                  </div>
                  <span className="text-gray-700">
                    {t("conversations.title")}
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-[#FF7A00]" />
                  </div>
                  <span className="text-gray-700">
                    {t("apprentissage.title")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Section */}
      <section
        id="join"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-gray-900">{t("joinCommunity.title")}</h2>
              <p className="text-gray-600">{t("joinCommunity.description")}</p>
            </div>

            <div className="flex flex-col items-center gap-8 bg-white p-12 rounded-10xl shadow-lg">
              <img
                width="300"
                height="300"
                src={qrcode}
                alt="LingoLille"
                className="w-[300px] h-[300px] object-contain rounded-xl"
              />

              <Button
                size="lg"
                className="rounded-full bg-[#FF7A00] hover:bg-[#E66D00] text-white px-12"
              >
                {t("joinCommunity.linkText")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg space-y-6">
            <h2 className="text-gray-900 text-2xl font-semibold flex items-center gap-2">
              <InfoCircle className="w-6 h-6 text-[#FF7A00]" />{" "}
              {t("service.title")}
            </h2>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                <span className="text-gray-600 leading-relaxed">
                  {t("service.items.eventWeekly")}
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                <span className="text-gray-600 leading-relaxed">
                  {t("service.items.boardingPass")}
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                <span className="text-gray-600 leading-relaxed">
                  {t("service.items.informalHelp")}
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                <span className="text-gray-600 leading-relaxed">
                  {t("service.items.workshops")}
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                <span className="text-gray-600 leading-relaxed">
                  {t("service.items.cohesion")}
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                <span className="text-gray-600 leading-relaxed">
                  {t("service.items.training")}
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                <span className="text-gray-600 leading-relaxed">
                  {t("service.items.privateEvents")}
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                <span className="text-gray-600 leading-relaxed">
                  {t("service.items.mediation")}
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 w-3 h-3 bg-[#FF7A00] rounded-full flex-shrink-0"></span>
                <span className="text-gray-600 leading-relaxed">
                  {t("service.items.platform")}
                </span>
              </li>
            </ul>

            <br />

            <p className="text-gray-600 leading-relaxed mt-4">
              {t("service.footer")}
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="container mx-auto max-w-4xl bg-white border border-gray-200 rounded-3xl p-10 shadow-lg">
          <h2 className="text-gray-900 text-2xl font-semibold mb-6">
            {t("contact.title")}
          </h2>

          <form className="space-y-4" onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder={t("contact.name_placeholder")}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
              required
            />

            <input
              type="email"
              name="email"
              placeholder={t("contact.email_placeholder")}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
              required
            />

            <textarea
              name="message"
              placeholder={t("contact.message_placeholder")}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
              rows={5}
              required
            />

            <button
              type="submit"
              className="bg-[#FF7A00] text-white px-6 py-3 rounded-full hover:bg-[#E66D00] transition-colors duration-300"
            >
              {t("contact.send_button")}
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
                href="https://www.instagram.com/lingolille/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF7A00] transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://chat.whatsapp.com/GPt4mQRZcUF3Q5F7c3O9ND"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF7A00] transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>

            <p className="text-gray-400 text-sm">
              © Lingo Lille - designed by Yanis DACI – 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
