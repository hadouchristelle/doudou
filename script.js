const eursInput = document.getElementById("input-eur");

const fcfasInput = document.getElementById("input-fcfa");

eursInput.addEventListener("input", () => {
  const eur = eursInput.value;

  const eurNombre = parseFloat(eur);

  const taux = fcfasInput.getAttribute("data-taux");

  const tauxNombre = parseFloat(taux);

  document.getElementById("a").addEventListener("click", function () {
    const nouvelleConversion = eurNombre * tauxNombre;

    console.log(nouvelleConversion);

    fcfasInput.value = nouvelleConversion;

    console.log(" tesyt hadou ", nouvelleConversion);
  });
});

function testFunction() {
  alert("tu as cliqué sur hadou ");
}
fcfas.addEventListener("input", () => {});
