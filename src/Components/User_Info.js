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
    bio: "Full-stack developer who loves building simple and useful web apps.",
    college: "MIT Pune",
    image: "https://icon-library.com/images/boy-icon-png/boy-icon-png-10.jpg",
  };

  const styles = {
    wrapper: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f6f8",
      color: "#333",
      padding: "20px",
      maxWidth: "700px",
      margin: "0 auto",
    },
    header: {
      textAlign: "center",
      marginBottom: "20px",
    },
    image: {
      width: "90px",
      height: "90px",
      borderRadius: "50%",
      objectFit: "cover",
    },
    name: {
      fontSize: "22px",
      fontWeight: "bold",
      marginTop: "10px",
    },
    profession: {
      fontSize: "14px",
      color: "#555",
    },
    section: {
      marginTop: "20px",
    },
    sectionTitle: {
      fontSize: "16px",
      fontWeight: "600",
      marginBottom: "10px",
    },
    listItem: {
      marginBottom: "6px",
      fontSize: "14px",
    },
    tag: {
      display: "inline-block",
      backgroundColor: "#d1e7dd",
      color: "#0f5132",
      fontSize: "13px",
      padding: "4px 10px",
      borderRadius: "16px",
      margin: "4px 6px 0 0",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <img src={userData.image} alt="Profile" style={styles.image} />
        <div style={styles.name}>{userData.name}</div>
        <div style={styles.profession}>{userData.profession}</div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>About</div>
        <p style={{ fontSize: "14px" }}>{userData.bio}</p>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Details</div>
        <div style={styles.listItem}>📅 Age: {userData.age}</div>
        <div style={styles.listItem}>🎂 DOB: {userData.dateOfBirth}</div>
        <div style={styles.listItem}>📧 Email: {userData.email}</div>
        <div style={styles.listItem}>📞 Phone: {userData.phone}</div>
        <div style={styles.listItem}>📍 Location: {userData.location}</div>
        <div style={styles.listItem}>🏫 College: {userData.college}</div>
      </div>
    </div>
  );
};

export default User_Info;
