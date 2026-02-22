import { useNavigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import UserGreeting from "./UserGreeting";

function Button({ isButtonClicked, buttonName }) {
  const handleClick = () => {
    isButtonClicked(true);
  };

  return (
    <content>
      <div className="button">
        <button onClick={handleClick}>{buttonName}</button>
      </div>
    </content>
  );
}
export default Button;
