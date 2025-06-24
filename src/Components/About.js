import React from "react";

const About = () => {
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f1f5f9",
      fontFamily: "sans-serif",
      padding: "32px 16px",
    },
    content: {
      maxWidth: "900px",
      margin: "0 auto",
    },
    hero: {
      textAlign: "center",
      marginBottom: "48px",
    },
    title: {
      fontSize: "36px",
      fontWeight: "bold",
      color: "#334155",
      marginBottom: "12px",
    },
    gradientText: {
      color: "#6366f1",
    },
    subtitle: {
      fontSize: "16px",
      color: "#64748b",
      maxWidth: "600px",
      margin: "0 auto",
      lineHeight: "1.6",
    },
    section: {
      background: "#ffffff",
      borderRadius: "12px",
      padding: "32px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
      marginBottom: "24px",
    },
    sectionTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#334155",
      textAlign: "center",
      marginBottom: "20px",
    },
    sectionText: {
      fontSize: "15px",
      color: "#475569",
      lineHeight: "1.7",
      marginBottom: "16px",
    },
    valuesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "16px",
      marginTop: "16px",
    },
    valueCard: {
      background: "#f8fafc",
      borderRadius: "8px",
      padding: "20px",
      textAlign: "center",
      border: "1px solid #e2e8f0",
    },
    valueIcon: {
      fontSize: "30px",
      marginBottom: "10px",
    },
    valueTitle: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#334155",
      marginBottom: "6px",
    },
    valueText: {
      fontSize: "14px",
      color: "#64748b",
      lineHeight: "1.5",
    },
    teamSection: {
      backgroundColor: "#6366f1",
      color: "#ffffff",
      padding: "32px",
      borderRadius: "12px",
      textAlign: "center",
    },
    teamTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "16px",
    },
    teamText: {
      fontSize: "15px",
      lineHeight: "1.6",
      maxWidth: "700px",
      margin: "0 auto",
      opacity: 0.95,
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
      gap: "16px",
      marginTop: "32px",
    },
    statCard: {
      padding: "12px",
    },
    statNumber: {
      fontSize: "28px",
      fontWeight: "bold",
    },
    statLabel: {
      fontSize: "14px",
      opacity: 0.9,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.hero}>
          <h1 style={styles.title}>
            About <span style={styles.gradientText}>Our Story</span>
          </h1>
          <p style={styles.subtitle}>
            We’re passionate about building simple, beautiful websites that make an impact.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.sectionText}>
            At SimplePages, we aim to design user-friendly web experiences that balance simplicity with performance. Our mission is to make modern UI accessible for students, startups, and everyone in between.
          </p>
          <p style={styles.sectionText}>
            Founded in 2023, our focus has always been clean design, smooth UX, and practical solutions. We build with care and craft each component thoughtfully.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Values</h2>
          <div style={styles.valuesGrid}>
            <div style={styles.valueCard}>
              <span style={styles.valueIcon}>💡</span>
              <h3 style={styles.valueTitle}>Innovation</h3>
              <p style={styles.valueText}>
                We enjoy experimenting with new ideas and simple creative approaches.
              </p>
            </div>
            <div style={styles.valueCard}>
              <span style={styles.valueIcon}>🎯</span>
              <h3 style={styles.valueTitle}>Quality</h3>
              <p style={styles.valueText}>
                We focus on clean code and good design that feels right.
              </p>
            </div>
            <div style={styles.valueCard}>
              <span style={styles.valueIcon}>🤝</span>
              <h3 style={styles.valueTitle}>Teamwork</h3>
              <p style={styles.valueText}>
                We believe in learning together and supporting ideas with passion.
              </p>
            </div>
          </div>
        </div>

        <div style={styles.teamSection}>
          <h2 style={styles.teamTitle}>Our Team</h2>
          <p style={styles.teamText}>
            We're a team of developers and designers who love what we do. Together, we aim to craft projects that feel smooth, look neat, and serve a purpose.
          </p>

          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>50+</span>
              <div style={styles.statLabel}>Projects Done</div>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>25+</span>
              <div style={styles.statLabel}>Clients</div>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>2+</span>
              <div style={styles.statLabel}>Years</div>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>100%</span>
              <div style={styles.statLabel}>Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
