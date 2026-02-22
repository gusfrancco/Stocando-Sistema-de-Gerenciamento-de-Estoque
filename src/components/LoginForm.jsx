import "./style.css";

function LoginForm({ onUserInputChange, onPassInputChange }) {
  return (
    <section>
      <div className="login-input">
        <input onChange={onUserInputChange} type="text" placeholder="Email" />
        <input
          onChange={onPassInputChange}
          type="password"
          placeholder="Senha"
        />
      </div>
    </section>
  );
}
export default LoginForm;
