const selectedEstate = document.getElementById("selected-estado");
const estates = [
  "AC - Acre",
  "AL - Alagoas",
  "AP - Amapá",
  "AM - Amazonas",
  "BA - Bahia",
  "CE - Ceará",
  "DF - Distrito Federal",
  "ES - Espírito Santo",
  "GO - Goías",
  "MA - Maranhão",
  "MT - Mato Grosso",
  "MS - Mato Grosso do Sul",
  "MG - Minas Gerais",
  "PA - Pará",
  "PB - Paraíba",
  "PR - Paraná",
  "PE - Pernambuco",
  "PI - Piauí",
  "RJ - Rio de Janeiro",
  "RN - Rio Grande do Norte",
  "RS - Rio Grande do Sul",
  "RO - Rondônia",
  "RR - Roraíma",
  "SC - Santa Catarina",
  "SP - São Paulo",
  "SE - Sergipe",
  "TO - Tocantins",
];

for (let key in estates) {
  const optionChieldSelected = document.createElement("option");
  let optionCreate = selectedEstate.appendChild(optionChieldSelected);
  optionCreate.innerText = estates[key];
  optionCreate.value = estates[key];
}

// function stopFluxo(event) {
//   event.preventDefault();
//   console.log("ola");
// }

// const buttonSubmit = document.getElementById("button-submit");
// buttonSubmit.addEventListener("click", stopFluxo);
