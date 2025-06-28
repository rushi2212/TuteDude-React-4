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
    bio: "Creative full-stack developer with a passion for clean UIs and smooth user experiences. Focused on building scalable and maintainable web apps.",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "CSS",
      "Python",
      "Git",
      "Figma",
    ],
    hobbies: ["Photography", "Hiking", "Reading", "Rideing"],
    college: "MIT Pune",
    image: "https://icon-library.com/images/boy-icon-png/boy-icon-png-10.jpg",
  };

  const styles = {
    wrapper: {
      backgroundColor: "#ffffff",
      fontFamily: "Segoe UI, sans-serif",
      color: "#1f2937",
      padding: "40px 20px",
      maxWidth: "960px",
      margin: "0 auto",
    },
    header: {
      display: "flex",
      alignItems: "center",
      gap: "24px",
      marginBottom: "40px",
    },
    image: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "3px solid #4f46e5",
    },
    nameBlock: {
      flexGrow: 1,
    },
    name: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "4px",
    },
    profession: {
      fontSize: "16px",
      color: "#6366f1",
      fontWeight: "500",
    },
    section: {
      borderTop: "1px solid #e5e7eb",
      paddingTop: "24px",
      marginTop: "24px",
    },
    sectionTitle: {
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "16px",
      color: "#4b5563",
    },
    paragraph: {
      fontSize: "15px",
      lineHeight: "1.7",
      color: "#374151",
      marginBottom: "16px",
    },
    infoGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "16px",
    },
    infoBox: {
      backgroundColor: "#f9fafb",
      padding: "14px",
      borderRadius: "8px",
      border: "1px solid #e2e8f0",
    },
    label: {
      fontSize: "12px",
      color: "#6b7280",
      textTransform: "uppercase",
      marginBottom: "4px",
    },
    value: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#1e293b",
    },
    tagList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
    },
    tag: {
      backgroundColor: "#6366f1",
      color: "white",
      fontSize: "13px",
      padding: "6px 12px",
      borderRadius: "20px",
    },
    hobbiesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
      gap: "12px",
    },
    hobbyCard: {
      backgroundColor: "#fef9c3",
      padding: "12px",
      textAlign: "center",
      borderRadius: "8px",
      border: "1px solid #fde68a",
    },
    hobbyIcon: {
      fontSize: "20px",
      marginBottom: "4px",
    },
    hobbyText: {
      fontSize: "14px",
      fontWeight: "500",
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
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <img src={userData.image} alt="Profile" style={styles.image} />
        <div style={styles.nameBlock}>
          <h1 style={styles.name}>{userData.name}</h1>
          <p style={styles.profession}>{userData.profession}</p>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <p style={styles.paragraph}>{userData.bio}</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Personal Info</h2>
        <div style={styles.infoGrid}>
          <div style={styles.infoBox}>
            <div style={styles.label}>Age</div>
            <div style={styles.value}>{userData.age} years</div>
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

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Skills</h2>
        <div style={styles.tagList}>
          {userData.skills.map((skill, index) => (
            <span key={index} style={styles.tag}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Hobbies & Interests</h2>
        <div style={styles.hobbiesGrid}>
          {userData.hobbies.map((hobby, index) => (
            <div key={index} style={styles.hobbyCard}>
              <div style={styles.hobbyIcon}>{getHobbyIcon(hobby)}</div>
              <div style={styles.hobbyText}>{hobby}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User_Info;
