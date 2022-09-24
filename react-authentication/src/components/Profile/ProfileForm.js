import classes from "./ProfileForm.module.css";
import { useContext, useRef } from "react";
import AuthContext from "../../store/auth-context";

const ProfileForm = () => {
  const authCtx = useContext(AuthContext);
  const newPasswordRef = useRef();
  const passwordChangeHandler = (e) => {
    e.preventDefault();
    const newPasswordInput = newPasswordRef.current.value;

    // Optional validation
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBPHxWirsiaBjqjp9fizkXu790-bowm27o`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken: authCtx.token,
          password: newPasswordInput,
          returnSecureToken: false,
        }),
      }
    ).then(res => {
      // Assumption it succeeds
    });
  };
  return (
    <form className={classes.form} onSubmit={passwordChangeHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={newPasswordRef} type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
