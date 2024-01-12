const result = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const checkTel = () => {
  const userInput = document.getElementById("user-input").value;
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  
  /*
^: Indica que la coincidencia debe comenzar al principio de la cadena.
(1\s?)?: El primer grupo de captura ((1\s?)) maneja la posibilidad de que el número de teléfono comience con "1" (código de país de EE. UU.) seguido opcionalmente por un espacio (\s?).
(\(\d{3}\)|\d{3}): El segundo grupo de captura maneja el código de área del número de teléfono. Puede estar entre paréntesis o no, y debe contener tres dígitos \d{3}.
([\s\-]?): Después del código de área, puede haber un espacio o un guión opcional.
\d{3}: Representa los siguientes tres dígitos del número de teléfono.
([\s\-]?): Después de los tres dígitos, puede haber otro espacio o guión opcional.
\d{4}: Representa los últimos cuatro dígitos del número de teléfono.
$: Indica que la coincidencia debe terminar al final de la cadena.
  */

  if (userInput === "") {
    alert("Please provide a phone number");
  } else if (regex.test(userInput)) {
    result.innerHTML += `<p>Valid US number: <span>${userInput}</span>.</p>`;
  } else {
    result.innerHTML += `<p>Invalid US number: <span>${userInput}</span>.</p>`;
  }
};

checkBtn.addEventListener("click", checkTel);
clearBtn.addEventListener("click", () => (result.innerHTML = ""));
