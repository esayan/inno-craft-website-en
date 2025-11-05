import React from "react";
import {
  // keep only what you want to render
  Business,   // -> Services section
  Footer,
  Hero,
  Navbar,
  Stats,
} from "./components";
import styles from "./style";

const App = () => {
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
