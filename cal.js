let answer = document.getElementById("ans");
let signAlign = document.getElementById('signed');
buttons = document.querySelectorAll("button");
let screenValue = "";

for (const items of buttons) {
  items.addEventListener("click", (e) => {
    buttonText = e.target.value;

    if (buttonText == "x") {
      signAlign.value=buttonText;
      buttonText = "*";
      sign = buttonText;
      temp = answer.value;
      answer.value = "";
      screenValue = "";
    } else if (buttonText == "+") {
      buttonText = "+";
      signAlign.value=buttonText;
      sign = buttonText;
      temp = answer.value;
      answer.value = "";
      screenValue = "";
    } else if (buttonText == "-") {
      buttonText = "-";
      signAlign.value=buttonText;
      sign = buttonText;
      temp = answer.value;
      answer.value = "";
      screenValue = "";
    } else if (buttonText == "/") {
      buttonText = "/";
      signAlign.value=buttonText;
      sign = buttonText;
      temp = answer.value;
      answer.value = "";
      screenValue = "";
    } else if (buttonText == "c") {
      screenValue = "";
      answer.value = "";  
    } else if (buttonText == "=") {
      if (sign == "+") {
        answer.value = Number(temp) + Number(answer.value);
        signAlign.value='';
      } else if (sign == "*") {
        answer.value = Number(temp) * Number(answer.value);
        signAlign.value='';
      } else if (sign == "-") {
        answer.value = Number(temp) - Number(answer.value);
        signAlign.value='';
      } else {
        answer.value = Number(temp) / Number(answer.value);
        signAlign.value='';
      }
    } else {
      screenValue += buttonText;
      answer.value = screenValue;
    }
  });
}
