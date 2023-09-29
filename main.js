const calcOperationsTextElm = document.querySelector("#calc_operations_text");
const calcResultTextElm = document.querySelector("#calc_result_text");
const writeActions = document.querySelectorAll(".write-action-btn");
const resetCalcAction = document.querySelector("#reset_calc_action");
const deleteCharAction = document.querySelector("#delete_char_action");
const resultCalcAction = document.querySelector("#result_calc_action");

let calcOperationsText = "";
let calcResultText = "";
let calculatorWritable = true;

window.addEventListener("load", () => {
  updateCalcOperationsText();
  updateCalcResultText();
});

resetCalcAction.addEventListener("click", () => {
  resetCalculator();
});

deleteCharAction.addEventListener("click", () => {
  deleteCalcOperationsCharacter();
});

resultCalcAction.addEventListener("click", () => {
  showCalcResult();
});

writeActions.forEach((writeAction) => {
  writeAction.addEventListener("click", () => {
    if (!calculatorWritable) return;

    const writeActionText = writeAction.children[0].textContent;

    correctCalcOperationsText(writeActionText);
  });
});

function correctCalcOperationsText(writeActionText) {
  const lastChar = calcOperationsText.charAt(calcOperationsText.length - 1);
  const prevLastChar = calcOperationsText.charAt(calcOperationsText.length - 2);

  if (lastChar === "+" && writeActionText === "+") return;

  if (lastChar === "+" && writeActionText === "-") return;

  if (lastChar === "+" && writeActionText === "*") return;

  if (lastChar === "+" && writeActionText === "/") return;

  if (lastChar === "+" && writeActionText === "%") return;

  if (lastChar === "+" && writeActionText === ".") return;

  if (lastChar === "-" && writeActionText === "+") return;

  if (lastChar === "-" && writeActionText === "-") return;

  if (lastChar === "-" && writeActionText === "*") return;

  if (lastChar === "-" && writeActionText === "/") return;

  if (lastChar === "-" && writeActionText === "%") return;

  if (lastChar === "-" && writeActionText === ".") return;

  if (calcOperationsText === "" && writeActionText === "/") return;

  if (lastChar === "/" && writeActionText === "+") return;

  if (lastChar === "/" && writeActionText === "-") return;

  if (lastChar === "/" && writeActionText === "*") return;

  if (lastChar === "/" && writeActionText === "/") return;

  if (lastChar === "/" && writeActionText === "%") return;

  if (lastChar === "/" && writeActionText === ".") return;

  if (calcOperationsText === "" && writeActionText === "*") return;

  if (lastChar === "*" && writeActionText === "+") return;

  if (lastChar === "*" && writeActionText === "-") return;

  if (lastChar === "*" && writeActionText === "/") return;

  if (lastChar === "*" && writeActionText === "%") return;

  if (lastChar === "*" && writeActionText === ".") return;

  if (lastChar === "*" && writeActionText === "*" && prevLastChar === "*") return;

  if (calcOperationsText === "" && writeActionText === "%") return;

  if (lastChar === "%" && writeActionText === "+") return;

  if (lastChar === "%" && writeActionText === "-") return;

  if (lastChar === "%" && writeActionText === "*") return;

  if (lastChar === "%" && writeActionText === "/") return;

  if (lastChar === "%" && writeActionText === "%") return;

  if (lastChar === "%" && writeActionText === ".") return;

  if (calcOperationsText === "" && writeActionText === ".") return;

  if (lastChar === "." && writeActionText === "+") return;

  if (lastChar === "." && writeActionText === "-") return;

  if (lastChar === "." && writeActionText === "*") return;

  if (lastChar === "." && writeActionText === "/") return;

  if (lastChar === "." && writeActionText === ".") return;

  if (calcOperationsText === "" && writeActionText === "0") return;

  if (calcOperationsText === "" && writeActionText === "00") return;

  calcOperationsText += writeActionText;

  updateCalcOperationsText();
}

function resetCalculator() {
  calcOperationsText = "";

  calcResultText = "";

  updateCalcOperationsText();

  updateCalcResultText();

  calcResultTextElm.classList.remove("active");

  calcOperationsTextElm.classList.add("active");

  calculatorWritable = true;
}

function deleteCalcOperationsCharacter() {
  if (!calculatorWritable) return;

  let newCalcOperationsText = "";

  for (let i = 0; i < calcOperationsText.length; i += 1) {
    if (i === calcOperationsText.length - 1) continue;

    newCalcOperationsText += calcOperationsText[i];
  }

  calcOperationsText = newCalcOperationsText;

  updateCalcOperationsText();
}

function showCalcResult() {
  if (calcOperationsText === "") return;

  calcResultText = eval(calcOperationsText);

  updateCalcResultText();

  calcOperationsTextElm.classList.remove("active");

  calcResultTextElm.classList.add("active");

  calculatorWritable = false;
}

function updateCalcOperationsText() {
  calcOperationsTextElm.textContent = calcOperationsText;
}

function updateCalcResultText() {
  calcResultTextElm.textContent = calcResultText;
}
