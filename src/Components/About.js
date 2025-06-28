import React from "react";

const About = () => {
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#ffffff",
      fontFamily: "sans-serif",
      padding: "40px 20px",
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
    },
    title: {
      fontSize: "32px",
      fontWeight: "700",
      color: "#111827",
    },
    tagline: {
      fontSize: "16px",
      color: "#6b7280",
      marginTop: "10px",
      maxWidth: "600px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    timeline: {
      maxWidth: "800px",
      margin: "0 auto",
    },
    block: {
      backgroundColor: "#f9fafb",
      padding: "24px",
      borderRadius: "12px",
      marginBottom: "24px",
    },
    blockTitle: {
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "10px",
      color: "#374151",
    },
    blockText: {
      fontSize: "15px",
      color: "#4b5563",
      lineHeight: "1.7",
    },
    coreValues: {
      display: "flex",
      flexWrap: "wrap",
      gap: "16px",
      marginTop: "24px",
    },
    valueCard: {
      flex: "1 1 250px",
      backgroundColor: "#f3f4f6",
      borderRadius: "8px",
      padding: "20px",
      textAlign: "center",
    },
    emoji: {
      fontSize: "28px",
      marginBottom: "8px",
    },
    valueTitle: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "6px",
    },
    valueDesc: {
      fontSize: "14px",
      color: "#6b7280",
    },
    footer: {
      marginTop: "40px",
      textAlign: "center",
      fontSize: "14px",
      color: "#6b7280",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>About Us</h1>
        <p style={styles.tagline}>
          Our journey, values, and the people behind the work — discover who we are and what drives us.
        </p>
      </div>

      <div style={styles.timeline}>
        <div style={styles.block}>
          <h2 style={styles.blockTitle}>🚀 How It Started</h2>
          <p style={styles.blockText}>
            In 2023, we began with a simple idea — to create clean and user-friendly web experiences.
            Our first project was a portfolio site, and from there, we never looked back.
          </p>
        </div>

        <div style={styles.block}>
          <h2 style={styles.blockTitle}>🎯 Our Mission</h2>
          <p style={styles.blockText}>
            We aim to make the web more accessible, aesthetic, and performant. Our projects are built with love, purpose, and minimalism in mind.
          </p>
        </div>

        <div style={styles.block}>
          <h2 style={styles.blockTitle}>💬 What We Believe</h2>
          <div style={styles.coreValues}>
            <div style={styles.valueCard}>
              <div style={styles.emoji}>💡</div>
              <div style={styles.valueTitle}>Clarity</div>
              <div style={styles.valueDesc}>Simple designs tell better stories.</div>
            </div>
            <div style={styles.valueCard}>
              <div style={styles.emoji}>⚙️</div>
              <div style={styles.valueTitle}>Craft</div>
              <div style={styles.valueDesc}>Details matter — in code and design.</div>
            </div>
            <div style={styles.valueCard}>
              <div style={styles.emoji}>🤝</div>
              <div style={styles.valueTitle}>Community</div>
              <div style={styles.valueDesc}>We learn more when we build together.</div>
            </div>
          </div>
        </div>

        <div style={styles.block}>
          <h2 style={styles.blockTitle}>👥 The People</h2>
          <p style={styles.blockText}>
            We’re a growing team of curious builders — developers, designers, and thinkers who love crafting meaningful user experiences.
          </p>
        </div>
      </div>

      <div style={styles.footer}>
        © 2025 CoderRishi Team — Always Building, Always Learning.
      </div>
    </div>
  );
};

export default About;
