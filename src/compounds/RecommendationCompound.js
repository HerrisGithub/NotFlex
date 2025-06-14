import React from "react";
// import './ProfileHCompound.css';

const Recommendation = () => {
return (
    <div className="recommendation">
        <h2 className="recommendation__title">Recommended for You</h2>
        <div className="recommendation__list">
            <div className="recommendation__item">Movie 1</div>
            <div className="recommendation__item">Movie 2</div>
            <div className="recommendation__item">Movie 3</div>
            <div className="recommendation__item">Movie 4</div>
        </div>
    </div>
);
};

export default Recommendation;
