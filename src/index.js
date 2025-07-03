function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Technical poem based on market trends",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);


