function myFunction() {
    var x = document.getElementById("Topnavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  