import { Globe, MessageCircle, BookOpen, Instagram, Mail } from "lucide-react";
import { Button } from "./components/ui/button";
import { EventCard } from "./components/EventCard";
import { Logo } from "./components/Logo";
import LingoLilleLogo from './img/LingoLille.jpg';
import qrcode from './img/qrcode.png';
import instagram from './img/instagram.png';
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const events = [
    {
      title: "Café Polyglotte",
      date: "Chaque Mercredi",
      time: "20h",
      location: "Tir Na Nog",
      languageFlag: "🌍",
    },
    {
      title: "Boarding Games",
      date: "Chaque jeudi",
      time: "20h",
      location: "Ya's bar",
      languageFlag: "🇬🇧",
    },
  ];

  const communityPhotos = [
   
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
               <img src={LingoLilleLogo} alt="LingoLille" className="h-8 w-8 rounded-full object-cover" />
              <span className="text-gray-900">Lingo Lille</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-2">
              <Button 
                variant="ghost" 
                className="rounded-full hover:bg-orange-50 hover:text-[#FF7A00]"
                onClick={() => scrollToSection("events")}
              >
                Événements
              </Button>
              <Button 
                variant="ghost" 
                className="rounded-full hover:bg-orange-50 hover:text-[#FF7A00]"
                onClick={() => scrollToSection("community")}
              >
                Communauté
              </Button>
              <Button 
                className="rounded-full bg-[#FF7A00] hover:bg-[#E66D00] text-white"
                onClick={() => scrollToSection("join")}
              >
                Nous rejoindre
              </Button>
            </nav>

            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              className="md:hidden rounded-full"
              onClick={() => scrollToSection("join")}
            >
              Menu
            </Button>
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
                  Rejoins la communauté<br />
                  <span className="text-[#FF7A00]">Lingo Lille</span> !
                </h1>
                <p className="text-gray-600 max-w-lg">
                  Des rencontres pour pratiquer les langues à Lille, chaque semaine.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="rounded-full bg-[#FF7A00] hover:bg-[#E66D00] text-white px-8"
                  onClick={() => scrollToSection("events")}
                >
                  Voir les prochains événements
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="rounded-full border-[#FF7A00] text-[#FF7A00] hover:bg-orange-50 px-8"
                  onClick={() => scrollToSection("join")}
                >
                  Rejoindre le groupe WhatsApp
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img  width="240" height="240"   src={instagram} alt="LingoLille" className="rounded-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FF7A00] rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#FF7A00] rounded-full opacity-10 blur-3xl"></div>
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
              <h2 className="text-gray-900">Rejoins notre groupe WhatsApp</h2>
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

            <p className="text-gray-400 text-sm">© Lingo Lille – 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
