const toggleButton = document.getElementById("toggle-theme");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const modoEscuroAtivo = document.body.classList.contains("dark");
  toggleButton.textContent = modoEscuroAtivo ? "☀️ Modo Claro" : "🌙 Modo Escuro";
  toggleButton.setAttribute("aria-label", modoEscuroAtivo ? "Alternar para modo claro" : "Alternar para modo escuro");
});
