import React from "react";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import NavBar from "../components/Header/NavBar";
import Logo from "../components/Header/Logo";
import SigninButton from "../components/Header/SigninButton";
import FeatureWrapper from "../components/Header/FeatureWrapper";
import FeatureTitle from "../components/Header/FeatureTitle";
import Warning from "../components/Header/Warning";
import { useHistory } from "react-router-dom";

function HeaderCompound({ children }) {
  const Token = localStorage.getItem("Token");
  const Email = localStorage.getItem("Email");
  const history = useHistory();

  function switchProfileTab() {
    history.push("/profile");
  }
  return (
    <HeaderWrapper className="header-wrapper-home">
      <NavBar className="navbar-home">
        <Logo />
        {Token == null ? (
          <SigninButton>Sign In</SigninButton>
        ) : (
          <a
            className="signin-button"
            href="#"
            onClick={switchProfileTab}
            style={{
              display: "inline-block",
              minWidth: "100px",
              padding: "8px 16px",
              fontSize: "1rem",
              whiteSpace: "nowrap",
              width: "auto",
              textAlign: "center",
            }}
          >
            {Email}
          </a>
        )}
      </NavBar>
      <FeatureWrapper className="feature-wrapper-home">
        <FeatureTitle className="feature-title-home">
          Unlimited movies, TV shows and more.
        </FeatureTitle>
        <Warning>This is NOT official Netflix</Warning>
      </FeatureWrapper>
      {children}
    </HeaderWrapper>
  );
}

export default HeaderCompound;
