import "./style.css";

function RegisterForm({
  onUserInputRegister,
  onEmailInputRegister,
  onPassInputRegister,
}) {
  return (
    <section>
      <div className="login-input">
        <input onChange={onUserInputRegister} type="text" placeholder="Nome" />
        <input
          onChange={onEmailInputRegister}
          type="text"
          placeholder="Email"
        />
        <input onChange={onPassInputRegister} type="text" placeholder="Senha" />
      </div>
    </section>
  );
}

export default RegisterForm;
