function displayPoem(response) {
  
  console.log("poem generated")
    new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let apiKey = "7601b0fff0179o9d5059a8db34ctbc66";
  let prompt = "Write a technical poem based on current market trends.";
  let context = "Financial markets, technology, analytics.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  
  console.log("generating poem")
  
  axios.get(apiURL).then (displayPoem);
  
  
  

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);


