import React from "react";

const Home = () => {
  const styles = {
    container: {
      minHeight: "80vh",
      backgroundColor: "#f3f4f6",
      fontFamily: "sans-serif",
    },
    content: {
      maxWidth: "960px",
      margin: "0 auto",
      padding: "40px 20px",
    },
    hero: {
      textAlign: "center",
      marginBottom: "48px",
    },
    coderTitle: {
      fontSize: "36px",
      fontWeight: "600",
      color: "#1e293b",
      marginBottom: "16px",
    },
    gradientText: {
      color: "#6366f1",
    },
    subtitle: {
      fontSize: "16px",
      color: "#475569",
      marginBottom: "24px",
    },
    exploreBtn: {
      backgroundColor: "#6366f1",
      color: "white",
      padding: "12px 24px",
      border: "none",
      borderRadius: "6px",
      fontWeight: "500",
      cursor: "pointer",
    },
    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "24px",
      marginBottom: "48px",
    },
    infoCard: {
      backgroundColor: "#ffffff",
      border: "1px solid #e2e8f0",
      padding: "24px",
      borderRadius: "8px",
      textAlign: "center",
    },
    emoji: {
      fontSize: "32px",
      marginBottom: "12px",
    },
    cardTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "8px",
    },
    footer: {
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#e5e7eb",
      fontSize: "14px",
      color: "#374151",
    },
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.hero}>
            <h1 style={styles.coderTitle}>
              Welcome to <span style={styles.gradientText}>CoderRishi</span>
            </h1>
            <p style={styles.subtitle}>
              A simple and clean web application made with love and React.
            </p>
            <button style={styles.exploreBtn}>Explore More</button>
          </div>

          <div style={styles.cardGrid}>
            <div style={styles.infoCard}>
              <div style={styles.emoji}>🚀</div>
              <h3 style={styles.cardTitle}>Fast Build</h3>
              <p style={styles.cardText}>
                React + simple design for quick performance.
              </p>
            </div>
            <div style={styles.infoCard}>
              <div style={styles.emoji}>🎨</div>
              <h3 style={styles.cardTitle}>Neat UI</h3>
              <p style={styles.cardText}>
                Clean and straightforward layout for all users.
              </p>
            </div>
            <div style={styles.infoCard}>
              <div style={styles.emoji}>📱</div>
              <h3 style={styles.cardTitle}>Responsive</h3>
              <p style={styles.cardText}>
                Works well on mobile, tablet and desktop.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer style={styles.footer}>
        © {new Date().getFullYear()} CoderRishi. Built with React.
      </footer>
    </>
  );
};

export default Home;
