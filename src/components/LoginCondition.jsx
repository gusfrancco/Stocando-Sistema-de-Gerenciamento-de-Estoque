function LoginCondition(username, password) {
  if (username != "" && password != "") {
    console.log("fazendo login de:", username);
    return true;
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}
export default LoginCondition;
