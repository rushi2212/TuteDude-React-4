import React from 'react';

const Home = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #faf5ff 100%)',
      fontFamily: 'Arial, sans-serif'
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '64px 16px'
    },
    hero: {
      textAlign: 'center',
      marginBottom: '64px'
    },
    title: {
      fontSize: '48px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '24px',
      lineHeight: '1.2'
    },
    gradientText: {
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: '20px',
      color: '#6b7280',
      maxWidth: '768px',
      margin: '0 auto 32px auto',
      lineHeight: '1.6'
    },
    button: {
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '8px',
      fontSize: '18px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
    },
    cardsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
      marginBottom: '64px'
    },
    card: {
      background: 'white',
      padding: '32px',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    cardIcon: {
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '32px',
      marginBottom: '24px'
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '16px'
    },
    cardText: {
      color: '#6b7280',
      lineHeight: '1.6'
    },
    ctaSection: {
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      padding: '32px',
      textAlign: 'center'
    },
    ctaTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '16px'
    },
    ctaText: {
      color: '#6b7280',
      marginBottom: '24px'
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
      flexWrap: 'wrap'
    },
    primaryBtn: {
      background: '#3b82f6',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background 0.3s ease'
    },
    secondaryBtn: {
      border: '2px solid #3b82f6',
      color: '#3b82f6',
      background: 'transparent',
      padding: '12px 24px',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    }
  };


  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.hero}>
          <h1 style={styles.title}>
            Welcome to <span style={styles.gradientText}>CoderRishi</span>
          </h1>
          <p style={styles.subtitle}>
            A beautiful and simple multi-page application showcasing modern web design principles with clean navigation and engaging user interfaces.
          </p>
          <button 
            style={styles.button}
          >
            Explore More
          </button>
        </div>

        <div style={styles.cardsGrid}>
          <div 
            style={styles.card}
          >
            <div style={{...styles.cardIcon, background: '#dbeafe'}}>
              🚀
            </div>
            <h3 style={styles.cardTitle}>Fast & Modern</h3>
            <p style={styles.cardText}>Built with modern React and styled with clean CSS for optimal performance.</p>
          </div>
          
          <div 
            style={styles.card}
          >
            <div style={{...styles.cardIcon, background: '#ede9fe'}}>
              🎨
            </div>
            <h3 style={styles.cardTitle}>Beautiful Design</h3>
            <p style={styles.cardText}>Clean, attractive interface with smooth animations and modern aesthetics.</p>
          </div>
          
          <div 
            style={styles.card}
          >
            <div style={{...styles.cardIcon, background: '#dcfce7'}}>
              📱
            </div>
            <h3 style={styles.cardTitle}>Responsive</h3>
            <p style={styles.cardText}>Perfectly optimized for all devices, from mobile phones to desktop computers.</p>
          </div>
        </div>

        <div style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Ready to Get Started?</h2>
          <p style={styles.ctaText}>Explore our About page to learn more about our mission and values.</p>
          <div style={styles.buttonGroup}>
            <button 
              style={styles.primaryBtn}
            >
              Learn More
            </button>
            <button 
              style={styles.secondaryBtn}
            >
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;