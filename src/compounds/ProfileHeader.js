import React from "react";
import { FaUserEdit, FaSignOutAlt } from "react-icons/fa";

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 24px",
    background: "#141414",
    color: "#fff",
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  buttonGroup: {
    display: "flex",
    gap: "12px",
  },
  button: {
    padding: "8px 16px",
    background: "#e50914",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

// You need to install react-icons: npm install react-icons

const iconButtonStyle = {
  background: "none",
  border: "none",
  color: "#fff",
  cursor: "pointer",
  fontSize: "1.5rem",
  padding: "8px",
  borderRadius: "50%",
  transition: "background 0.2s",
};

const iconButtonHoverStyle = {
  background: "#333",
};

const IconButton = ({ onClick, children, ariaLabel }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      style={
        hover
          ? { ...iconButtonStyle, ...iconButtonHoverStyle }
          : iconButtonStyle
      }
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </button>

    );
};

const ProfileHeader = ({ title, onButton1Click, onButton2Click }) => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>{title}</h1>
      <div style={styles.buttonGroup}>
        <IconButton onClick={onButton1Click} ariaLabel="Search">
          <FaUserEdit />
        </IconButton>
        <IconButton onClick={onButton2Click} ariaLabel="Library">
          <FaSignOutAlt />
        </IconButton>
      </div>      
    </header>
  );
};

export default ProfileHeader;
