import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { userName, setUserName } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserName("");
    navigate("/");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Bem-vindo ao Stocando, {userName || "Usuário"}!</h1>
      <button
        onClick={handleLogout}
        style={{ padding: "10px 20px", cursor: "pointer", marginTop: "20px" }}
      >
        Sair do Sistema
      </button>
    </div>
  );
}
export default HomePage;
