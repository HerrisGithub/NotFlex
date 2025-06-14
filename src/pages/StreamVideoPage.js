import React from "react";
import de from "dotenv";
de.config();

const StreamVideoPage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        width="80%"
        height="auto"
        controls
        autoPlay
        style={{ background: "#222", borderRadius: "8px" }}
      >
        <source
          src={
            process.env.REACT_APP_VIDEO_URL + "/Pacman2024-12-2323-49-23.mp4"
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default StreamVideoPage;
