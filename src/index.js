function displayPoem(response) {
  console.log("poem generated");
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

  let context = `You are a technical product marketing manager who turns complex data into short simple, impactful insights like poetry. You focus on financial markets, technology trends, and analytics. Your tone is professional, data-informed, and strategic — always clear and concise. Keep it creative but focused on business and technical impact.`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
