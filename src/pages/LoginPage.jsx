import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginCondition from "../components/LoginCondition";
import RegisterCondition from "../components/RegisterCondition";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import Button from "../components/Button";
import "./style.css";
import RegisterForm from "../components/RegisterForm";
import LoginNavBar from "../components/LoginNavBar";

function LoginPage() {
  const [username, setUsername] = useState("");
  const updateName = (e) => setUsername(e.target.value);

  const [isUserLogging, setIsUserLogging] = useState(true);

  const [password, setPassword] = useState("");
  const updatePassword = (e) => setPassword(e.target.value);

  const [email, setEmail] = useState("");
  const updateEmail = (e) => setEmail(e.target.value);

  const navigate = useNavigate();

  const handleLoginAction = () => {
    const isLoginValid = LoginCondition(username, password);
    if (isLoginValid) {
      navigate("/home", { state: { user: username } });
    }
  };

  const handleRegisterAction = () => {
    const isRegisterValid = RegisterCondition(username, email, password);
    if (isRegisterValid) {
      setIsUserLogging(true);
    }
  };

  if (isUserLogging) {
    return (
      <main className="main-content">
        <div className="login-container">
          <Header />
          <LoginNavBar
           isLogging={isUserLogging} 
           setIsLogging={setIsUserLogging} />
          <form onSubmit={(e) => e.preventDefault()}>
            <LoginForm
              onUserInputChange={updateName}
              onPassInputChange={updatePassword}
            />
            <div className="button-container-login">
              <Button
                isButtonClicked={handleLoginAction}
                buttonName={"Entrar"}
              />
            </div>
            <hr></hr>
          </form>
          <Footer />
        </div>
      </main>
    );
  }
  if(!isUserLogging){
    return (
    <main className="main-content">
      <div className="login-container">
        <Header />
        <LoginNavBar
        isLogging={isUserLogging} 
        setIsLogging={setIsUserLogging}/>
        <RegisterForm
          onUserInputRegister={updateName}
          onEmailInputRegister={updateEmail}
          onPassInputRegister={updatePassword}
        />
        <div className="button-container-register">
          <Button
            buttonName={"Inscrever-se"}
            isButtonClicked={() => {
              handleRegisterAction();
            }}
          />
        </div>
        <hr></hr>
        <Footer />
      </div>
    </main>
  );
}
}
export default LoginPage;
