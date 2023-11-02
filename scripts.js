const select = document.querySelector("#tamano");
const personalizadoDiv = document.querySelector(".personalizado");

select.addEventListener("change", function () {
  if (select.value === "7") {
    personalizadoDiv.style.display = "block";
    personalizadoDiv.style.display = "flex";
  } else {
    personalizadoDiv.style.display = "none";
  }
});
