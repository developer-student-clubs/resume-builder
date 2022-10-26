import Popup from "reactjs-popup";
import React from "react";
import SignIn from "../SignIN/SignIn";
import SignUp from "../SignUP/Signup";
import classes from "./AuthLink.module.css";

export default function AuthLink({initialMode="signIn", trigger}) {
    const [mode, setMode] = React.useState(initialMode);

    let currentUI;

    if (mode === "signUp") {
        currentUI = <SignUp onModeChange={newMode => setMode(newMode)}></SignUp>;
    } else if (mode === "signIn") {
        currentUI = <SignIn onModeChange={newMode => setMode(newMode)}></SignIn>;
    }

    return <Popup modal trigger={trigger} className="auth-popup">
        {currentUI}
    </Popup>;
}