function generatePoem(event){
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["Technical Poem based on Market Trends"],
    delay: 1,
    cursor: "",
  });
}



let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);