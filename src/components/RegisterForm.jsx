import "./style.css";

function RegisterForm({
  onUserInputRegister,
  onEmailInputRegister,
  onPassInputRegister,
}) {
  return (
    <section>
      <div className="login-input">
        <p>Nome</p>
        <input
          onChange={onUserInputRegister}
          type="text"
          placeholder="Seu Nome"
          value={undefined}
        />
        <p>E-mail</p>
        <input
          onChange={onEmailInputRegister}
          type="email"
          placeholder="seuemail@email.com"
        />
        <p>Senha</p>
        <input
          onChange={onPassInputRegister}
          type="password"
          placeholder="••••••••"
        />
      </div>
    </section>
  );
}

export default RegisterForm;
