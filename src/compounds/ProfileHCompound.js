import React from "react";
// import './ProfileHCompound.css';

const ProfileHCompound = ({ user, onSignOut }) => {
return (
    <div
        className="profile-header"
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            backgroundColor: "#141414",
            alignItems: "center",
            padding: "20px",
        }}
    >
        <div className="profile-header__info">
            <img
                className="profile-header__avatar"
                src={user.Avatar || "/default-avatar.png"}
                alt="User Avatar"
                style={{
                    borderRadius: "50%", // Make avatar circular
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    border: "2px solid var(--border-color, white)"
                }}
            />
            <h2 className="profile-header__name">{user.FullName}</h2>
        </div>
        <button
            className="profile-header__signout"
            onClick={onSignOut}
            style={{
                padding: "10px 20px",
                backgroundColor: "var(--button-bg, )",
                color: "var(--button-color, darkgray)",
                borderRadius: "12px" // Rounded button
            }}
        >
            Sign Out
        </button>
    </div>
);
};

export default ProfileHCompound;
