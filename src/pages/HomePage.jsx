import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import UserGreeting from "../components/UserGreeting";
function HomePage() {
  //pega o username do LoginPage e tras pra ca
  const location = useLocation();
  const userImport = location.state?.user;
  //verifica se o usuário foi inserido e manda de volta caso !
  const navigate = useNavigate();
  useEffect(() => {
    if (!location.state?.user) {
      navigate("/");
    }
  }, [location.state, navigate]);

  return (
    <main>
      <div>
        <UserGreeting user={userImport} />
      </div>
    </main>
  );
}
export default HomePage;
