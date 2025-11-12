window.document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnMaiuscula").addEventListener("click", () => {
    let inputText = document.querySelector("#input-text").value;
    document.getElementById("resultado").innerHTML = inputText.toUpperCase();
  });
  document.getElementById("btnMinuscula").addEventListener("click", () => {
    let inputText = document.getElementById("input-text").value;
    document.getElementById("resultado").innerHTML = inputText.toLowerCase();
  });
  document.getElementById("btnCapitalize").addEventListener("click", () => {
    let inputText = document.getElementById("input-text").value.toLowerCase();
    // let firstLetter = inputText.charAt(0).toUpperCase();
    inputText = inputText
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    // document.getElementById("resultado").innerHTML = firstLetter+inputText;
    document.getElementById("resultado").innerHTML = inputText;
  });
});
