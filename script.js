const expression = document.getElementById("expression");
const clear = document.getElementById("clear");
const del = document.getElementById("delete");
const btns = document.querySelectorAll("button");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let btnVal = btns[i].innerText;

    if (btnVal === "AC") {
      expression.value = "";
    } else if (btnVal === "C") {
      expression.value = expression.value.slice(0, -1);
    } else if (btnVal === "=") {
      expression.value = eval(expression.value);
    }else if (btnVal === "%") {
      expression.value = expression.value/100;

    } else if (btnVal === "√") {
      expression.value= Math.sqrt(parseFloat(expression.value));
    }   else {
      expression.value += btnVal;
    }
  });
}




