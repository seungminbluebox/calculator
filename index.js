function submit() {
  const expression = document.querySelector("#input").value;
  const method = consider(expression);
  const [a, b] = expression.split(method);
  const result = calculate(a, b, method);
  document.querySelector("#result").innerHTML = `${a}${method}${b}=${result}`;
}
function handleSubmit(event) {
  event.preventDefault();
  submit();
}
function consider(expression) {
  if (expression.includes("+")) {
    return "+";
  } else if (expression.includes("-")) {
    return "-";
  } else if (expression.includes("*")) {
    return "*";
  } else if (expression.includes("/")) {
    return "/";
  } else if (expression.includes("%")) {
    return "%";
  } else {
    return "error!";
  }
}
function calculate(a, b, method) {
  const first = parseFloat(a);
  const second = parseFloat(b);
  if (method === "+") {
    return first + second;
  } else if (method === "-") {
    return first - second;
  } else if (method === "*") {
    return first * second;
  } else if (method === "/") {
    return first / second;
  } else if (method === "%") {
    return first % second;
  } else {
    return "error!";
  }
}
