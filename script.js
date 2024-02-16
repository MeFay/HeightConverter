window.onload = function () {
  document.getElementById("button").addEventListener("click", function () {
    var valNum = document.getElementById("heightInput").value;
    LengthConverter(valNum);
  });
};

function LengthConverter(valNum) {
  var outputMeters = valNum / 100;

  document.getElementById("modalContent").innerHTML =
    "<p>Your height in meters is: " + outputMeters + "m</p>";
    
  document.getElementById("modal").style.display = "block";
}

document.getElementById("close").onclick = function () {
  document.getElementById("modal").style.display = "none";
};

window.onclick = function (event) {
  if (event.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
};