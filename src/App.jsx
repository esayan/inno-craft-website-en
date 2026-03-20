import React from "react";
import {
  Navbar,
  Hero,
  Stats,
  Services,
  Framework,
  HowWeEngage,
  Impact,
  About,
  Contact,
  Footer,
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

      {/* MAIN CONTENT */}
      <main className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Services />
          <Framework />
          <HowWeEngage />
          <Impact />
          <About />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;
