function displayPoem(response) {
 
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "7601b0fff0179o9d5059a8db34ctbc66";
  let prompt = `Write a short 4-line insight about financial markets, technology, and analytics: ${instructionsInput.value}.Do not include a title. Add <br /> after each line. On a new fifth line, add 'Olga AI' inside a <strong> tag. Do not include any HTML tags in the answer. Write like a technical product marketing manager presenting data insights to executives. Be creative but clear. I want the output to look like a poem with for short concise sentences.`;

  let context =
    "You are a creative technical product marketing manager. You write short, punchy insights in poem form. Your mission is to generate a 4-line insight about finance, technology, or analytics using basic HTML with <br /> to separate lines. Do not include a title. End with 'Olga AI' inside a <strong> element on its own line. Avoid HTML tags in the answer. Follow the user's instructions.";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⌛Generating technical analysis about ${instructionsInput.value}</div>`;

  

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const button = document.querySelector(".theme-toggle");
  if (document.body.classList.contains("dark-mode")) {
    button.textContent = "☀️ Light Mode";
  } else {
    button.textContent = "🌙 Dark Mode";
  }
}
