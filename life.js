document.addEventListener("DOMContentLoaded", () => {
  const btnSobre = document.querySelector(".button1");
  const btnProjetos = document.querySelector(".button2");
  const btnContato = document.querySelector(".button3");

  btnSobre.addEventListener("click", () => {
    window.location.href = "index.html";
  });

  btnProjetos.addEventListener("click", () => {
    window.location.href = "projetos.html";
  });

  btnContato.addEventListener("click", () => {
    window.location.href = "contato.html";
  });
});

  