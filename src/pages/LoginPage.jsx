import React, { useState, useContext } from "react"; // Adicionado useContext
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext"; // Importado Contexto
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
  const { setUserName } = useContext(UserContext); // Puxando a função do contexto
  const [username, setUsername] = useState("");
  const updateName = (e) => setUsername(e.target.value);

  const [isUserLogging, setIsUserLogging] = useState(true);

  const [password, setPassword] = useState("");
  const updatePassword = (e) => setPassword(e.target.value);

  const [email, setEmail] = useState("");
  const updateEmail = (e) => {
    setEmail(e.target.value);
    if (errorMessage) setErrorMessage("");
  };

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoginAction = () => {
    const loggedUser = LoginCondition(email, password);

    if (loggedUser) {
      setErrorMessage("");
      setUserName(loggedUser.nome); // Alimenta o contexto
      navigate("/home");
    } else {
      setErrorMessage("E-mail ou senha incorretos.");
    }
  };

  const handleRegisterAction = async () => {
    // Await aqui para esperar o bcrypt terminar de gerar o hash.
    const registration = await RegisterCondition(username, email, password);

    // Tenta buscar o "arquivo" de usuários no navegador.
    // Se não existir nada, ele cria uma lista vazia [].
    //Banco de dados manual. Não utilizar na versao final!!
    const bancoDeDadosManual = JSON.parse(
      localStorage.getItem("meus_usuarios_json") || "[]",
    );

    if (registration && registration.success) {
      setIsUserLogging(true);
      const newUser = {
        nome: username,
        email: email,
        senha: registration.hashPassword,
        dataCadastro: new Date().toLocaleDateString(),
      };
      bancoDeDadosManual.push(newUser);
      localStorage.setItem(
        "meus_usuarios_json",
        JSON.stringify(bancoDeDadosManual),
      );
      setUsername("");
      setEmail("");
      setPassword("");
      setErrorMessage("");
    }
  };

  return (
    <main className="main-content">
      <div className="login-container">
        <Header />
        <LoginNavBar
          isLogging={isUserLogging}
          setIsLogging={setIsUserLogging}
        />
        <form onSubmit={(e) => e.preventDefault()}>
          {isUserLogging ? (
            <div className="login-section">
              <LoginForm
                onUserInputChange={updateEmail}
                onPassInputChange={updatePassword}
              />
              {errorMessage && (
                <div className="error-message">{errorMessage}</div>
              )}
              <div className="button-container-login">
                <Button
                  isButtonClicked={handleLoginAction}
                  buttonName={"Entrar"}
                />
              </div>
            </div>
          ) : (
            <div className="register-section">
              <RegisterForm
                onUserInputRegister={updateName}
                onEmailInputRegister={updateEmail}
                onPassInputRegister={updatePassword}
              />
              <div className="button-container-register">
                <Button
                  isButtonClicked={handleRegisterAction}
                  buttonName={"Inscrever-se"}
                />
              </div>
            </div>
          )}
          <hr />
        </form>
        <Footer />
      </div>
    </main>
  );
}

export default LoginPage;
