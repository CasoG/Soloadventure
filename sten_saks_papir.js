var computerChoice = Math.random();

function playerSten() {
  if(computerChoice >= 0.66) {
    document.getElementById("result").innerHTML = "Computeren valgte også sten, prøv igen!";
  }
  else if(computerChoice >=0.33) {
    document.getElementById("result").innerHTML = "Computeren valgte saks, du vandt!";
  }
  else if(computerChoice >=0) {
    document.getElementById("result").innerHTML = "Computeren valgte papir, du tabte!";
  }
}

function playerSaks() {
  if(computerChoice >= 0.66) {
    document.getElementById("result").innerHTML = "Computeren valgte sten, du tabte!";
  }
  else if(computerChoice >=0.33) {
    document.getElementById("result").innerHTML = "Computeren valgte også saks, prøv igen!";
  }
  else if(computerChoice >=0) {
    document.getElementById("result").innerHTML = "Computeren valgte papir, du vandt!";
  }
}
function playerPapir() {
  if(computerChoice >= 0.66) {
    document.getElementById("result").innerHTML = "Computeren valgte sten, du vandt!";
  }
  else if(computerChoice >=0.33) {
    document.getElementById("result").innerHTML = "Computeren valgte saks, du tabte!";
  }
  else if(computerChoice >=0) {
    document.getElementById("result").innerHTML = "Computeren valgte også papir, prøv igen!";
  }
}
document.getElementById("result").innerHTML = resultis;
