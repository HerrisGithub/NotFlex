import React from 'react';
// import './ProfileHCompound.css';

const ProfileHeader = ({ user, onSignOut }) => {
    return (
        <div className="profile-header">
            <div className="profile-header__info">
                <img
                    className="profile-header__avatar"
                    src={user.avatar || '/default-avatar.png'}
                    alt="User Avatar"
                />
                <h2 className="profile-header__name">{user.name}</h2>
            </div>
            <button className="profile-header__signout" onClick={onSignOut}>
                Sign Out
            </button>
        </div>
    );
};

export default ProfileHeader;