import React from "react";

const Home = () => {
  const styles = {
    wrapper: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9fafb",
      color: "#333",
    },
    hero: {
      padding: "50px 20px",
      textAlign: "center",
      backgroundColor: "#e0f2fe",
    },
    heroTitle: {
      fontSize: "36px",
      marginBottom: "10px",
    },
    heroSubtitle: {
      fontSize: "16px",
      color: "#555",
    },
    section: {
      padding: "30px 20px",
      maxWidth: "800px",
      margin: "0 auto",
      textAlign: "center",
    },
    card: {
      backgroundColor: "#fff",
      padding: "20px",
      margin: "10px 0",
      borderRadius: "8px",
      boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
    },
    cardTitle: {
      fontSize: "18px",
      marginBottom: "6px",
    },
    cardText: {
      fontSize: "14px",
      color: "#666",
    },
    footer: {
      padding: "15px",
      textAlign: "center",
      backgroundColor: "#dbeafe",
      fontSize: "13px",
      marginTop: "30px",
    },
  };

  return (
    <div style={styles.wrapper}>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Hi, I'm Rishi</h1>
        <p style={styles.heroSubtitle}>I build clean and responsive web apps.</p>
      </section>

      <section style={styles.section}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Simple Design</h3>
          <p style={styles.cardText}>Clean layouts focused on user experience.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Responsive Apps</h3>
          <p style={styles.cardText}>Works perfectly on all screen sizes.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Fast Integration</h3>
          <p style={styles.cardText}>Easy to connect APIs and backend systems.</p>
        </div>
      </section>

      <footer style={styles.footer}>
        © 2025 Rishi | Built with React
      </footer>
    </div>
  );
};

export default Home;
