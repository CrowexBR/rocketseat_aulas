function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // Pegar uma imagem da foto
  const img = document.querySelector("#profile img");

  // Substituir a imagem da foto
  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/rodrigo_modelight.png");
  } else {
    img.setAttribute("src", "assets/rodrigo_modedark.png");
  }

  //   if (html.classList.contains("light")) {
  //     html.classList.remove("light");
  //   } else {
  //     html.classList.add("light");
  //   }
}
