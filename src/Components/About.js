import React from "react";

const About = () => {
  const styles = {
    container: {
      minHeight: "100vh",
      background:
        "linear-gradient(135deg, #faf5ff 0%, #ffffff 50%, #eff6ff 100%)",
      fontFamily: "Arial, sans-serif",
    },
    content: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "64px 16px",
    },
    hero: {
      textAlign: "center",
      marginBottom: "64px",
    },
    title: {
      fontSize: "48px",
      fontWeight: "bold",
      color: "#1f2937",
      marginBottom: "24px",
      lineHeight: "1.2",
    },
    gradientText: {
      background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    subtitle: {
      fontSize: "20px",
      color: "#6b7280",
      maxWidth: "768px",
      margin: "0 auto",
      lineHeight: "1.6",
    },
    section: {
      background: "white",
      borderRadius: "12px",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      padding: "48px",
      marginBottom: "32px",
    },
    sectionTitle: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#1f2937",
      marginBottom: "24px",
      textAlign: "center",
    },
    sectionText: {
      fontSize: "16px",
      color: "#6b7280",
      lineHeight: "1.8",
      marginBottom: "24px",
    },
    valuesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "32px",
      marginTop: "32px",
    },
    valueCard: {
      background: "#f8fafc",
      padding: "32px",
      borderRadius: "12px",
      border: "1px solid #e2e8f0",
      textAlign: "center",
      transition: "all 0.3s ease",
    },
    valueIcon: {
      fontSize: "48px",
      marginBottom: "16px",
      display: "block",
    },
    valueTitle: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#1f2937",
      marginBottom: "12px",
    },
    valueText: {
      color: "#6b7280",
      lineHeight: "1.6",
    },
    teamSection: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      borderRadius: "12px",
      padding: "48px",
      textAlign: "center",
    },
    teamTitle: {
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "24px",
    },
    teamText: {
      fontSize: "18px",
      lineHeight: "1.6",
      opacity: 0.9,
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "32px",
      marginTop: "48px",
    },
    statCard: {
      textAlign: "center",
      padding: "24px",
    },
    statNumber: {
      fontSize: "48px",
      fontWeight: "bold",
      marginBottom: "8px",
      display: "block",
    },
    statLabel: {
      fontSize: "16px",
      opacity: 0.8,
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
            We're passionate about creating beautiful, functional web
            experiences that make a difference in people's lives.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.sectionText}>
            At SimplePages, we believe that great design should be accessible to
            everyone. Our mission is to create clean, modern, and intuitive web
            interfaces that not only look beautiful but also provide exceptional
            user experiences. We strive to bridge the gap between aesthetic
            appeal and functional excellence.
          </p>
          <p style={styles.sectionText}>
            Founded in 2023, we've been dedicated to pushing the boundaries of
            web design while maintaining simplicity at our core. Every project
            we undertake is a testament to our commitment to quality,
            innovation, and user-centered design principles.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Values</h2>
          <div style={styles.valuesGrid}>
            <div style={styles.valueCard}>
              <span style={styles.valueIcon}>💡</span>
              <h3 style={styles.valueTitle}>Innovation</h3>
              <p style={styles.valueText}>
                We embrace new technologies and creative solutions to solve
                complex problems.
              </p>
            </div>

            <div style={styles.valueCard}>
              <span style={styles.valueIcon}>🎯</span>
              <h3 style={styles.valueTitle}>Quality</h3>
              <p style={styles.valueText}>
                Every detail matters. We maintain the highest standards in
                everything we create.
              </p>
            </div>

            <div style={styles.valueCard}>
              <span style={styles.valueIcon}>🤝</span>
              <h3 style={styles.valueTitle}>Collaboration</h3>
              <p style={styles.valueText}>
                We work closely with our clients to understand their vision and
                bring it to life.
              </p>
            </div>

            <div style={styles.valueCard}>
              <span style={styles.valueIcon}>🌱</span>
              <h3 style={styles.valueTitle}>Growth</h3>
              <p style={styles.valueText}>
                We're committed to continuous learning and improvement in our
                craft.
              </p>
            </div>
          </div>
        </div>

        <div style={styles.teamSection}>
          <h2 style={styles.teamTitle}>Our Team</h2>
          <p style={styles.teamText}>
            We're a diverse team of designers, developers, and creative thinkers
            who are passionate about crafting exceptional digital experiences.
            Our collaborative approach ensures that every project benefits from
            multiple perspectives and expertise.
          </p>

          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>50+</span>
              <span style={styles.statLabel}>Projects Completed</span>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>25+</span>
              <span style={styles.statLabel}>Happy Clients</span>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>2+</span>
              <span style={styles.statLabel}>Years Experience</span>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>100%</span>
              <span style={styles.statLabel}>Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
