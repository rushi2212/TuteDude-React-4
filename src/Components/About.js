import React from "react";

const About = () => {
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f0f4f8",
      fontFamily: "sans-serif",
      padding: "20px",
      color: "#222",
    },
    header: {
      textAlign: "center",
      marginBottom: "20px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#2c3e50",
    },
    subtitle: {
      fontSize: "14px",
      color: "#555",
    },
    section: {
      backgroundColor: "#ffffff",
      padding: "15px",
      borderRadius: "6px",
      margin: "15px 0",
    },
    sectionTitle: {
      fontSize: "16px",
      fontWeight: "600",
      marginBottom: "6px",
      color: "#1e293b",
    },
    sectionText: {
      fontSize: "14px",
      color: "#444",
    },
    footer: {
      marginTop: "30px",
      textAlign: "center",
      fontSize: "12px",
      color: "#666",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>About Me</h1>
        <p style={styles.subtitle}>Just a few things about what I do.</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Getting Started</h2>
        <p style={styles.sectionText}>
          I began building websites in 2023, starting with simple projects and learning along the way.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>What I Love</h2>
        <p style={styles.sectionText}>
          Clean design, fast performance, and creating useful things for real people.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>My Focus</h2>
        <p style={styles.sectionText}>
          I mostly work with React and like keeping things simple, responsive, and easy to use.
        </p>
      </div>

      <div style={styles.footer}>
        © 2025 CoderRishi — Made with simplicity.
      </div>
    </div>
  );
};

export default About;
