import React from "react";
// import './ProfileHCompound.css';

const Recommendation = () => {
return (
    <div
        className="recommendation"
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            backgroundColor: "#141414",
            alignItems: "center",
            padding: "20px",
            border: "2px solid #fff",
            borderRadius: "30px", // Added circular edged border
            marginLeft: "5%", // Added margin for spacing
            marginRight: "5%", // Added margin for spacing
        }}
    >
        <h2 className="recommendation__title">Recommended for You</h2>
        <div className="recommendation__list">
            {["Movie 1", "Movie 2", "Movie 3", "Movie 4"].map((movie, idx) => (
                <div className="recommendation__item" key={idx}>
                    {movie}
                </div>
            ))}
        </div>
    </div>
);
};

export default Recommendation;
