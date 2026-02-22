function RegisterCondition(username, email, password) {
  if (username != "" && email != "" && password != "") {
    alert("Usuário registrado com sucesso!");
    return true;
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}
export default RegisterCondition;
