window.addEventListener("load", function () {
  document.getElementById("button").addEventListener("click", function () {
    var valNum = document.getElementById("heightInput").value;
    LengthConverter(valNum);
  });

  document.getElementById("close").addEventListener("click", function () {
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("modal").classList.remove("visible");
  });

  window.addEventListener("click", function (event) {
    if (event.target == document.getElementById("modal")) {
      document.getElementById("modal").classList.add("hidden");
      document.getElementById("modal").classList.remove("visible");
    }
  });
});

function LengthConverter(valNum) {
  var outputMeters = valNum / 100;

  document.getElementById("modalContent").innerHTML =
    "<p>Your height in meters is: " + outputMeters + "m</p>";

  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal").classList.add("visible");
}
