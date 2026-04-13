import React from "react";
import AiStackBuilder from "../components/AiStackBuilder";
import { Navbar, Footer } from "../components";
import styles from "../style";

const StackBuilderPage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={styles.boxWidth}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={styles.boxWidth}>
        <AiStackBuilder />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={styles.boxWidth}>
        <Footer />
      </div>
    </div>
  </div>
);

export default StackBuilderPage;
