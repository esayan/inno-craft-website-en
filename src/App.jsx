import React, { useEffect } from "react";
import {
  // keep only what you want to render
  Business,   // -> Services section
  Footer,
  Hero,
  Navbar,
  Stats,
} from "./components";
import styles from "./style";

const MAILTO = 'mailto:esayan@inno-craft.com'
  + '?subject=Inquiry%20from%20Inno-Craft%20website'
  + '&body=Hi%20Engin,%0D%0A%0D%0A'
  + 'I%20visited%20inno-craft.com%20and%20would%20like%20to%20discuss%20...%0D%0A%0D%0A'
  + 'Best,%0D%0A';

const App = () => {
  useEffect(() => {
    const handler = (e) => {
      const el = e.target.closest('a, button');
      if (!el) return;

      // CTA metinleri (gerekirse genişlet)
      const labels = [
        "let's get started",
        "lets get started",
        "get started",
        "services",
        "contact",
        "contact us",
        "start now",
        "learn more",
        "discover"
      ];

      const text = (el.textContent || '').trim().toLowerCase();
      const href = (el.getAttribute('href') || '').trim();

      const isCtaMatch = labels.some(l => text.includes(l));
      const isInternalAnchor =
        href === '' ||
        href === '#' ||
        href === '/' ||
        href.startsWith('#') ||
        href.startsWith('/#');

      if (isCtaMatch || isInternalAnchor) {
        e.preventDefault();
        window.location.href = MAILTO;
      }
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* NAVBAR */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* HERO */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* MAIN CONTENT (Sections you keep) */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />   {/* rename component title to "Our Services" içerik index.js'ten gelir */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
