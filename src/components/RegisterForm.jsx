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
        <input onChange={onUserInputRegister} type="text" placeholder="Seu nome" />
        <p>E-mail</p>
        
        <input
          onChange={onEmailInputRegister}
          type="text"
          placeholder="seuemail@email.com"
        />
        <p>Senha</p>
        
        <input onChange={onPassInputRegister} type="text" placeholder="••••••••" />
      </div>
    </section>
  );
}

export default RegisterForm;
