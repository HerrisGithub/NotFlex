import React, { useState } from "react";
import ProfileHCompound from "../compounds/ProfileHCompound";
import RecommendationCompound from "../compounds/RecommendationCompound";
import DownloadedCompound from "../compounds/DownloadedCompound";
import { useHistory } from "react-router-dom";
import ProfileHeader from "../compounds/ProfileHeader";

function ProfilePage() {
  const history = useHistory();
  const [user, setUser] = useState({
    FullName: localStorage.getItem("FullName"),
    Avatar: "https://www.gravatar.com/avatar/",
  });
  function onSignOut() {
    localStorage.clear();
    history.push("/");
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "100vh",
        backgroundColor: "#141414",
      }}
    >
      <ProfileHeader
        title="Profile"
        onButton1Click={() => history.push("/profile/edit")}
        onButton2Click={onSignOut}
        button1Text="Edit Profile"
        button2Text="Sign Out"
      />
      <ProfileHCompound user={user} onSignOut={onSignOut} />
      <RecommendationCompound />
      <DownloadedCompound />
      {/* Popup Example */}
      {true && (
        <div
          style={{
            position: "fixed",
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            zIndex: 1000,
            bottom: "10px",
          }}
          onClick={() => setUser({ ...user, showPopup: false })}
        >
          <div
            style={{
              background: "#222",
              padding: "32px",
              borderRadius: "8px",
              color: "#fff",
              minWidth: "500px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Popup Title</h2>
            <p>This is a popup message.</p>
            <button
              style={{
                marginTop: "16px",
                padding: "8px 16px",
                background: "#e50914",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => setUser({ ...user, showPopup: false })}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
