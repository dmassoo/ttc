import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cookiesAccepted, setCookiesAccepted] = useState(
    localStorage.getItem('cookiesAccepted') === 'true'
  );

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setCookiesAccepted(true);
  };

  return (
    <div className="app">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <h2>Клуб спокойных троп</h2>
            <p>уникальное пространство для женщин</p>
          </div>
        </section>

        {/* About Us Section */}
        <AboutSection />

        {/* Events Section */}
        <EventsSection />

        {/* Why Join Section */}
        <WhyJoinSection />

        {/* Telegram Offer */}
        <TelegramOffer />

        {/* Market Section */}
        <MarketSection />

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Contact Form */}
        <ContactFormSection />
      </main>

      <Footer />

      {/* Cookies Notice */}
      {!cookiesAccepted && (
        <div className="cookies-notice show">
          <div className="cookies-container">
            <div className="cookies-text">
              <p>Мы используем файлы cookie для улучшения работы сайта. Оставаясь на сайте, вы соглашаетесь с <a href="/police">Политикой конфиденциальности</a>.</p>
            </div>
            <button className="cookies-button" onClick={handleAcceptCookies}>
              Принять
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;