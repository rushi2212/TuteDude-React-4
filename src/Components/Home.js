import React from "react";

const Home = () => {
  const styles = {
    wrapper: {
      backgroundColor: "#fff",
      fontFamily: "Segoe UI, sans-serif",
      color: "#1f2937",
    },
    hero: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px 20px",
      backgroundColor: "#eef2ff",
      textAlign: "center",
    },
    heroTitle: {
      fontSize: "40px",
      fontWeight: "bold",
      color: "#4338ca",
      marginBottom: "10px",
    },
    heroSubtitle: {
      fontSize: "18px",
      color: "#4b5563",
      maxWidth: "600px",
    },
    section: {
      padding: "40px 20px",
      maxWidth: "1000px",
      margin: "0 auto",
    },
    sectionHeading: {
      fontSize: "24px",
      fontWeight: "600",
      marginBottom: "20px",
      textAlign: "left",
    },
    paragraph: {
      fontSize: "16px",
      color: "#374151",
      lineHeight: "1.6",
    },
    cards: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      marginTop: "30px",
    },
    card: {
      flex: "1 1 280px",
      backgroundColor: "#f1f5f9",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    },
    cardTitle: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "8px",
    },
    cardText: {
      fontSize: "14px",
      color: "#4b5563",
    },
    footer: {
      padding: "20px",
      textAlign: "center",
      backgroundColor: "#e0e7ff",
      fontSize: "14px",
      color: "#334155",
      marginTop: "40px",
    },
  };

  return (
    <div style={styles.wrapper}>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Hey, I’m CoderRishi 🚀</h1>
        <p style={styles.heroSubtitle}>
          I create modern, minimal web apps using React. Clean code, fast load times, and responsive design are my top priorities.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>What I Do</h2>
        <p style={styles.paragraph}>
          I build simple yet powerful web apps that are easy to use and beautiful to look at. Whether it’s a quick landing page or a full-stack project, I focus on clean UI and user-first design.
        </p>

        <div style={styles.cards}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>💻 Web Development</h3>
            <p style={styles.cardText}>React, Next.js, and modern frontend tools to build fast UIs.</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📱 Mobile Ready</h3>
            <p style={styles.cardText}>Fully responsive apps that work across all screen sizes.</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>⚙️ Easy Integration</h3>
            <p style={styles.cardText}>Plug in APIs and tools effortlessly with modular code.</p>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        © 2025 CoderRishi | Made with using React
      </footer>
    </div>
  );
};

export default Home;
