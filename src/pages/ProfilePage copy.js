import React, { useState } from "react";
import ProfileHCompound from "../compounds/ProfileHCompound";
import { useHistory } from "react-router-dom";
// import UserInfo from "../components/UserInfo";
// import SubscriptionStatus from "../components/SubscriptionStatus";
// import RecentlyWatched from "../components/RecentlyWatched";~

function ProfilePage() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "Test",
    avatar: "test",
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
        alignItems: "center",
        gap: "20px",
      }}
    >
      <ProfileHCompound user={user} onSignOut={onSignOut} />
      {/* <UserInfo /> */}src/pages/ProfilePage.jssrc/pages/ProfilePage.js
      {/* <SubscriptionStatus /> */}
      {/* <RecentlyWatched /> */}
    </div>
  );
}

export default ProfilePage;
