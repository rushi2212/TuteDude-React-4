import React from "react";

const User_Info = () => {
  const userData = {
    name: "Rushikesh Raut",
    age: 21,
    dateOfBirth: "July 01, 2003",
    email: "rushikesh123@email.com",
    phone: "+91 1234567890",
    location: "Pune Maharashtra, India",
    profession: "Full Stack Developer",
    bio: "Passionate web developer with 2+ years of experience creating beautiful and functional user interfaces. I love working with modern technologies and creating seamless user experiences.",
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
    image:
      "https://icon-library.com/images/boy-icon-png/boy-icon-png-10.jpg",
  };

  const styles = {
    container: {
      minHeight: "100vh",
      background:
        "linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #f3e5f5 100%)",
      fontFamily: "Arial, sans-serif",
      padding: "32px 16px",
    },
    content: {
      maxWidth: "1000px",
      margin: "0 auto",
    },
    profileCard: {
      background: "white",
      borderRadius: "20px",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      marginBottom: "32px",
    },
    header: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "48px",
      textAlign: "center",
      color: "white",
    },
    profileImage: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      border: "5px solid white",
      marginBottom: "24px",
      objectFit: "cover",
    },
    name: {
      fontSize: "36px",
      fontWeight: "bold",
      marginBottom: "8px",
    },
    profession: {
      fontSize: "18px",
      opacity: 0.9,
      marginBottom: "16px",
    },
    bio: {
      fontSize: "16px",
      lineHeight: "1.6",
      opacity: 0.8,
      maxWidth: "600px",
      margin: "0 auto",
    },
    infoSection: {
      padding: "48px",
    },
    sectionTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#1f2937",
      marginBottom: "24px",
      textAlign: "center",
    },
    infoGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "32px",
      marginBottom: "48px",
    },
    infoCard: {
      background: "#f8fafc",
      padding: "24px",
      borderRadius: "12px",
      border: "1px solid #e2e8f0",
    },
    infoLabel: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#6b7280",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      marginBottom: "8px",
    },
    infoValue: {
      fontSize: "16px",
      color: "#1f2937",
      fontWeight: "500",
    },
    skillsSection: {
      background: "white",
      borderRadius: "16px",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      padding: "32px",
      marginBottom: "32px",
    },
    skillsGrid: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      justifyContent: "center",
    },
    skillTag: {
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      color: "white",
      padding: "8px 16px",
      borderRadius: "20px",
      fontSize: "14px",
      fontWeight: "500",
      transition: "all 0.3s ease",
    },
    hobbiesSection: {
      background: "white",
      borderRadius: "16px",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      padding: "32px",
    },
    hobbiesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "16px",
    },
    hobbyCard: {
      background: "#f1f5f9",
      padding: "20px",
      borderRadius: "12px",
      textAlign: "center",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    hobbyIcon: {
      fontSize: "32px",
      marginBottom: "8px",
      display: "block",
    },
    hobbyText: {
      fontSize: "16px",
      color: "#374151",
      fontWeight: "500",
    },
    contactButton: {
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      color: "white",
      padding: "12px 32px",
      borderRadius: "25px",
      border: "none",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginTop: "24px",
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
          <div style={styles.header}>
            <img
              src={userData.image}
              alt={userData.name}
              style={styles.profileImage}
            />
            <h1 style={styles.name}>{userData.name}</h1>
            <p style={styles.profession}>
              {userData.profession}
            </p>
            <p style={styles.bio}>{userData.bio}</p>
            <button
              style={styles.contactButton}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow =
                  "0 10px 25px rgba(102, 126, 234, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              Contact Me
            </button>
          </div>

          <div style={styles.infoSection}>
            <h2 style={styles.sectionTitle}>Personal Information</h2>
            <div style={styles.infoGrid}>
              <div style={styles.infoCard}>
                <div style={styles.infoLabel}>Age</div>
                <div style={styles.infoValue}>{userData.age} years old</div>
              </div>

              <div style={styles.infoCard}>
                <div style={styles.infoLabel}>Date of Birth</div>
                <div style={styles.infoValue}>{userData.dateOfBirth}</div>
              </div>

              <div style={styles.infoCard}>
                <div style={styles.infoLabel}>Email</div>
                <div style={styles.infoValue}>{userData.email}</div>
              </div>

              <div style={styles.infoCard}>
                <div style={styles.infoLabel}>Phone</div>
                <div style={styles.infoValue}>{userData.phone}</div>
              </div>

              <div style={styles.infoCard}>
                <div style={styles.infoLabel}>Location</div>
                <div style={styles.infoValue}>{userData.location}</div>
              </div>
              <div style={styles.infoCard}>
                <div style={styles.infoLabel}>College</div>
                <div style={styles.infoValue}>{userData.college}</div>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.skillsSection}>
          <h2 style={styles.sectionTitle}>Technical Skills</h2>
          <div style={styles.skillsGrid}>
            {userData.skills.map((skill, index) => (
              <span key={index} style={styles.skillTag}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div style={styles.hobbiesSection}>
          <h2 style={styles.sectionTitle}>Hobbies & Interests</h2>
          <div style={styles.hobbiesGrid}>
            {userData.hobbies.map((hobby, index) => (
              <div key={index} style={styles.hobbyCard}>
                <span style={styles.hobbyIcon}>{getHobbyIcon(hobby)}</span>
                <span style={styles.hobbyText}>{hobby}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_Info;
