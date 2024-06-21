import React, { useContext } from "react";
import { ToggleRegister } from "../../contextpage";


const LoginPage = () => {
  const { setRegister, setPresentRegister } = useContext(ToggleRegister);
  return (
    <>
      <section className="registerSection">
        <main className="mainRegister">
          <span className="cancelBtn" onClick={() => setRegister(false)}><i class="fa-solid fa-xmark"></i></span>
          <div className="registerDiv">
            <h1 className="registerHead">Log in</h1>
            <form id="registerForm">
              <input type="text" className="registerInput" placeholder="Email/User" required />
              <input type="text" className="registerInput" placeholder="Password" required />
              <p id="registerParagraph">
                <input type="checkbox" id="registerCheck" /> Remember Me 
                <span id="forgotBtn" onClick={() => setPresentRegister("FORGOTPASSWORD")}>FORGOT PASSWORD</span>
              </p>
              <button type="submit" className="registerBtn">LOGIN</button>
              <p onClick={() => setPresentRegister("CREATEACCOUNT")} className="registerNavText">REGISTER</p>
            </form>
          </div>
        </main>
      </section>
    </>
  );
}

export default LoginPage;