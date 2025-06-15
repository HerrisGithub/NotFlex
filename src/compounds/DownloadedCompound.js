import React from "react";
// import './ProfileHCompound.css';

const Downloaded = () => {
return (
    <div
        className="downloaded"
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            backgroundColor: "#141414",
            alignItems: "center",
            padding: "20px",
            border: "2px solid #fff",
            borderRadius: "20px", // Added circular edged border
            marginLeft: "5%", // Added margin for spacing
            marginRight: "5%", // Added margin for spacing
        }}
    >
        <h2 className="downloaded__title">Downloaded Content</h2>
        <div className="downloaded__list">
            <div className="downloaded__item">Movie 1</div>
            <div className="downloaded__item">Movie 2</div>
            <div className="downloaded__item">Movie 3</div>
            <div className="downloaded__item">Movie 4</div>
        </div>
    </div>
);
};

export default Downloaded;
