window.document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnMaiuscula").addEventListener("click", () => {
        let inputText = document.querySelector("#input-text").value
        document.getElementById("resultado").innerHTML = inputText.toUpperCase()
    })
    document.getElementById("btnMinuscula").addEventListener("click", () => {
        let inputText = document.getElementById("input-text").value
        document.getElementById("resultado").innerHTML = inputText.toLowerCase()
    })
})