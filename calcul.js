function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  var displayValue = document.getElementById("display").value;
  var result;
  try {
    result = eval(displayValue);
    if (isNaN(result) || !isFinite(result)) {
      throw "Invalid expression";
    }
  } catch (error) {
    result = "Error";
  }
  
  // Ajouter le calcul à l'historique
  addHistory(displayValue + " = " + result);
  
  document.getElementById("display").value = result;
}

function addHistory(entry) {
  var history = document.getElementById("history");
  var newEntry = document.createElement("div");
  newEntry.textContent = entry;
  history.appendChild(newEntry);
  
  // Limiter l'historique à 10 entrées
  if (history.childNodes.length > 10) {
    history.removeChild(history.firstChild);
  }
}
