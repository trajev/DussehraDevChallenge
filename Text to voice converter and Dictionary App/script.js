let t2vBtn = document.querySelector("#t2vBtn");
let dictBtn = document.querySelector("#dictBtn");
let t2vConverter = document.querySelector("#t2vConverter");
let dictDiv = document.querySelector("#dictDiv");

t2vBtn.addEventListener("click", () => {
  t2vConverter.style.display = "flex";
  dictDiv.style.display = "none";
  t2vBtn.classList.add("active");
  dictBtn.classList.remove("active");
  document.getElementById("title").style.display = "none";
})

dictBtn.addEventListener("click", () => {
  t2vConverter.style.display = "none";
  dictDiv.style.display = "flex";
  t2vBtn.classList.remove("active");
  dictBtn.classList.add("active");
  document.getElementById("title").style.display = "none";

})


let voices = []
let inputSelect = document.querySelector("#inputSelect");
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, i) => {
    inputSelect.options[i] = new Option(voice.name, i);
  })

}


inputSelect.addEventListener("change", () => {
  speech.voice = voices[inputSelect.value];
})

let speech = new SpeechSynthesisUtterance();
let generateBtn = document.querySelector("#generateVoiceBtn");
generateBtn.addEventListener("click", () => {
  let textInput = document.querySelector("#textInput");
  speech.text = textInput.value;
  window.speechSynthesis.speak(speech);
})









let searchInput = document.querySelector("#searchInput");
let wordSearch = document.querySelector("#wordSearch");

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getData(searchInput.value);
    document.querySelector("#altSolDiv").style.display = "none";
    document.querySelector("#solDiv").style.display = "block";
  }
})

wordSearch.addEventListener("click", () => {
  getData(searchInput.value);
  document.querySelector("#altSolDiv").style.display = "none";
  document.querySelector("#solDiv").style.display = "block";
})
async function getData(query) {
  try {
    const d = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`);
    const data = await d.json();

    if (data.title === "No Definitions Found") {
      document.querySelector("#altSolDiv").style.display = "block";
      document.querySelector("#solDiv").style.display = "none";
      document.querySelector("#altSolDiv").innerText = data.title;
      return;
    }

    console.log(data[0]);

    /// Set word and phonetic
    document.querySelector("#word").innerText = data[0].word;

    // Initialize variables for phonetic text and audio
    let phoneticText = "";
    let phoneticAudio = "";

    // Loop through the phonetics array to find a valid phonetic text and audio
    data[0].phonetics.forEach((phonetic) => {
      if (phonetic.text && !phoneticText) {
        phoneticText = phonetic.text;
      }
      if (phonetic.audio && !phoneticAudio) {
        phoneticAudio = phonetic.audio;
      }
    });

    // Set phonetic text if available
    if (phoneticText) {
      document.querySelector("#phonetic").innerText = phoneticText;
    } else {
      document.querySelector("#phonetic").innerText = "";
    }

    // Display the sound icon if audio is available
    if (phoneticAudio) {
      document.querySelector("#soundIcon").style.display = "flex";
      document.querySelector("#soundIcon").onclick = function () {
        let audio = new Audio(phoneticAudio);
        audio.play();
      };
    } else {
      document.querySelector("#soundIcon").style.display = "none";
    }

    let meaningDiv = document.querySelector("#meaningDiv");

    // Clear previous meanings if necessary
    meaningDiv.innerHTML = ' ';

    // Loop through meanings and create the structure dynamically
    data[0].meanings.forEach((item) => {
      // Create the parent div for meanings
      let meaningsDiv = document.createElement("div");
      meaningsDiv.classList.add("meaningsDiv");

      // Create the meaning section
      let meaning = document.createElement("div");
      meaning.id = "meaning";

      // Create and append part of speech
      let pos = document.createElement("span");
      pos.id = "pos";
      pos.innerText = "[" + item.partOfSpeech + "]";
      meaning.appendChild(pos);

      // Create and append the meaning text
      let meaningText = document.createElement("p");
      meaningText.id = "meaningText";
      meaningText.innerText = item.definitions[0].definition;
      meaning.appendChild(meaningText);

      // Append meaning to meaningsDiv
      meaningsDiv.appendChild(meaning);

      // Create the synonyms section
      if (item.synonyms.length !== 0) {
        let synonymsDiv = document.createElement("div");
        synonymsDiv.classList.add("synonymsDiv");

        // Create and append 'Synonyms' label
        let synonymsLabel = document.createElement("h6");
        synonymsLabel.innerText = "Synonyms: ";
        synonymsDiv.appendChild(synonymsLabel);

        // Create and append synonyms list
        let synonyms = document.createElement("p");
        synonyms.id = "synonyms";
        synonyms.innerText = item.synonyms.join(", ");
        synonymsDiv.appendChild(synonyms);

        // Append synonymsDiv to meaningsDiv
        meaningsDiv.appendChild(synonymsDiv);
      }

      // Append the entire meaningsDiv to the main container
      meaningDiv.appendChild(meaningsDiv);
    });

  } catch (err) {
    console.log("Error while fetching data - ", err.message);
  }
}
