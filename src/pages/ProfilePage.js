import React, { useState } from "react";
import ProfileHCompound from "../compounds/ProfileHCompound";
// import UserInfo from "../components/UserInfo";
// import SubscriptionStatus from "../components/SubscriptionStatus";
// import RecentlyWatched from "../components/RecentlyWatched";~



function ProfilePage() {
    const [user, setUser] = useState({
        name: 'Test',
        avatar: 'test'
    });
    function onSignOut(){
        console.log('masuk')
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <ProfileHCompound user={user} onSignOut={onSignOut}/>
            {/* <UserInfo /> */}
            {/* <SubscriptionStatus /> */}
            {/* <RecentlyWatched /> */}
        </div>
    );
}

export default ProfilePage;