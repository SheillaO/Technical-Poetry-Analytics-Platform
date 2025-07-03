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
  let prompt = `User instructions: Write a technical market sentiment  based on ${instructionsInput.value}.`;
  let context =
    "You are a financial markets,technology, analytics expert who loves to write short sentences covering financial markets,technology and analytics. Your mission is to generate a four line market sentiment in basic HTML and separate each line with a <br />.Include a title. Sign the poem with `SheCodes AI` inside a <strong></strong> element. Exclude the html in the answer generated. Be creative and give out of the box answers. Make sure to use user instructions below";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
