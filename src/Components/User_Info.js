import React from "react";

const User_Info = () => {
  const userData = {
    name: "Rushikesh Raut",
    age: 21,
    dateOfBirth: "July 01, 2003",
    email: "rushikesh123@email.com",
    phone: "+91 1234567890",
    location: "Pune, Maharashtra",
    profession: "Full Stack Developer",
    bio: "Passionate web developer with 2+ years of experience creating beautiful and functional UIs using modern tech.",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "CSS",
      "Node.js",
      "Python",
      "Git",
      "Figma",
    ],
    hobbies: ["Photography", "Hiking", "Reading", "Rideing"],
    college: "MIT Pune",
    image: "https://icon-library.com/images/boy-icon-png/boy-icon-png-10.jpg",
  };

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f1f5f9",
      padding: "32px 16px",
      fontFamily: "sans-serif",
    },
    content: {
      maxWidth: "900px",
      margin: "0 auto",
    },
    profileCard: {
      background: "#fff",
      borderRadius: "16px",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.05)",
      overflow: "hidden",
      marginBottom: "32px",
    },
    rishiHeader: {
      backgroundColor: "#4f46e5",
      color: "white",
      textAlign: "center",
      padding: "32px 16px",
    },
    profileImage: {
      width: "130px",
      height: "130px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "4px solid white",
      marginBottom: "16px",
    },
    name: {
      fontSize: "28px",
      fontWeight: "bold",
    },
    profession: {
      fontSize: "16px",
      marginBottom: "12px",
      opacity: 0.9,
    },
    bio: {
      fontSize: "14px",
      lineHeight: "1.6",
      maxWidth: "600px",
      margin: "0 auto",
      opacity: 0.85,
    },
    contactBtn: {
      marginTop: "16px",
      backgroundColor: "#6366f1",
      border: "none",
      color: "white",
      padding: "10px 24px",
      borderRadius: "20px",
      cursor: "pointer",
      fontWeight: "500",
    },
    sectionTitle: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "20px",
      textAlign: "center",
      color: "#1e293b",
    },
    infoGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "16px",
    },
    infoBox: {
      backgroundColor: "#f8fafc",
      border: "1px solid #e2e8f0",
      padding: "16px",
      borderRadius: "8px",
    },
    label: {
      fontSize: "12px",
      color: "#64748b",
      marginBottom: "6px",
      textTransform: "uppercase",
    },
    value: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#1e293b",
    },
    tagSection: {
      background: "#fff",
      borderRadius: "12px",
      padding: "24px",
      marginTop: "24px",
      boxShadow: "0 8px 16px rgba(0,0,0,0.05)",
    },
    tagStyle: {
      background: "#4f46e5",
      color: "white",
      padding: "6px 14px",
      fontSize: "13px",
      borderRadius: "20px",
      margin: "6px",
      display: "inline-block",
    },
    hobbiesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
      gap: "16px",
      marginTop: "16px",
    },
    hobbyCard: {
      backgroundColor: "#e0f2fe",
      borderRadius: "8px",
      padding: "12px",
      textAlign: "center",
    },
    hobbyIcon: {
      fontSize: "24px",
      marginBottom: "6px",
    },
    hobbyText: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#1e293b",
    },
  };

  const getHobbyIcon = (hobby) => {
    const icons = {
      Photography: "📸",
      Hiking: "🥾",
      Reading: "📚",
      Rideing: "🏍️",
    };
    return icons[hobby] || "🎯";
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.profileCard}>
          <div style={styles.rishiHeader}>
            <img src={userData.image} alt={userData.name} style={styles.profileImage} />
            <h1 style={styles.name}>{userData.name}</h1>
            <p style={styles.profession}>{userData.profession}</p>
            <p style={styles.bio}>{userData.bio}</p>
            <button style={styles.contactBtn}>Contact Me</button>
          </div>

          <div style={{ padding: "32px" }}>
            <h2 style={styles.sectionTitle}>Personal Info</h2>
            <div style={styles.infoGrid}>
              <div style={styles.infoBox}>
                <div style={styles.label}>Age</div>
                <div style={styles.value}>{userData.age} yrs</div>
              </div>
              <div style={styles.infoBox}>
                <div style={styles.label}>Date of Birth</div>
                <div style={styles.value}>{userData.dateOfBirth}</div>
              </div>
              <div style={styles.infoBox}>
                <div style={styles.label}>Email</div>
                <div style={styles.value}>{userData.email}</div>
              </div>
              <div style={styles.infoBox}>
                <div style={styles.label}>Phone</div>
                <div style={styles.value}>{userData.phone}</div>
              </div>
              <div style={styles.infoBox}>
                <div style={styles.label}>Location</div>
                <div style={styles.value}>{userData.location}</div>
              </div>
              <div style={styles.infoBox}>
                <div style={styles.label}>College</div>
                <div style={styles.value}>{userData.college}</div>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.tagSection}>
          <h2 style={styles.sectionTitle}>Skills</h2>
          <div style={{ textAlign: "center" }}>
            {userData.skills.map((skill, idx) => (
              <span key={idx} style={styles.tagStyle}>{skill}</span>
            ))}
          </div>
        </div>

        <div style={styles.tagSection}>
          <h2 style={styles.sectionTitle}>Hobbies & Interests</h2>
          <div style={styles.hobbiesGrid}>
            {userData.hobbies.map((hobby, idx) => (
              <div key={idx} style={styles.hobbyCard}>
                <span style={styles.hobbyIcon}>{getHobbyIcon(hobby)}</span>
                <div style={styles.hobbyText}>{hobby}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_Info;
