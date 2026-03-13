import bcrypt from "bcryptjs";
function RegisterCondition(username, email, password) {
  const dataBase = JSON.parse(
    localStorage.getItem("meus_usuarios_json") || "[]",
  );
  //trim serve para evitar que o usuario digite somente espaço.
  if (!username.trim() || !email.trim() || !password.trim()) {
    alert("Por favor, preencha todos os campos.");
    return false;
  }
  //verifica se o email é valido.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, insira um e-mail válido.");
    return false;
  }
  const userFound = dataBase.find((user) => user.email === email);

  if (userFound) {
    alert("E-mail já cadastrado.");
    return false;
  }
  if (password.length < 6) {
    alert("Sua senha deve conter no mínimo 6 dígitos.");
    return false;
  }
  alert("Usuário registrado com sucesso.");
  //sistema de hash com biblioteca bcrypt.
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  return { success: true, hashPassword };
}

export default RegisterCondition;
