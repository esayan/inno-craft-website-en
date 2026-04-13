import React from "react";
import { Link } from "react-router-dom";
import AiReadinessQuiz from "../components/AiReadinessQuiz";
import { Navbar, Footer } from "../components";
import styles from "../style";

const QuizPage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={styles.boxWidth}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={styles.boxWidth}>
        <AiReadinessQuiz />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={styles.boxWidth}>
        <Footer />
      </div>
    </div>
  </div>
);

export default QuizPage;
