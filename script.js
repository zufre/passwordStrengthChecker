function measureStrength() {

  let passwordElem = document.getElementById("password-input");
  let strengthElem = document.getElementById("strength-level");
  let strengthLevel = "Weak";
  strengthElem.innerText = strengthLevel;

  let password= passwordElem.value;

  let numberRegex = /\d/
  if (numberRegex.test(password)){
    if (password.length >= 8 && password.length < 12){
      strengthLevel = "Strong";
    }else if (password.length >= 12) {
      strengthLevel = "Very Strong";
    }
  }else {
    strengthLevel = 'Weak';
  }
  strengthElem.className = strengthLevel.toLowerCase().replace(" ","-");
  strengthElem.innerText = strengthLevel;

}