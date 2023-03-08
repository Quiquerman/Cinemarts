function generateSit() {
  //   var cod = document.getElementById("salas").value;
    let asientos = ["A", "B", "C", "D", "E"];

    const asiento = Math.floor(Math.random() * asientos.length);

  document.getElementById("asientos-field").innerHTML = asientos[asiento] +
    Math.floor(Math.random() * (11 - 1 + 1));
}

function nTAb(){
  window.open("http://127.0.0.1:5500/sobrenosotros.html");
}