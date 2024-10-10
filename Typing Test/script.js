const paragraphs = {
  easy: [
    "Typing is a valuable skill today. It allows you to share your thoughts quickly and efficiently. Whether you’re writing an email or a report, fast typing helps save time and enhances communication.",
    "Practicing typing regularly can boost your speed and accuracy. Many jobs require good typing skills, and improving them can lead to better opportunities. Everyone can get better with practice!",
    "In the digital age, typing has become essential. It's used in schools and workplaces alike. Learning to type well means being able to express your ideas clearly and swiftly.",
    "Effective communication often relies on typing. Being able to type without looking at the keyboard can greatly improve your efficiency. With practice, anyone can master this skill.",
    "Typing quickly helps in everyday tasks. From messaging friends to completing assignments, the ability to type fast is beneficial. Regular practice can lead to noticeable improvements."
  ],
  medium: [
    "Good typing skills are crucial in many aspects of life. They help you convey your thoughts effectively, whether in academic settings or the workplace. With consistent practice, you can enhance both speed and accuracy, making written communication much smoother.",
    "As technology continues to evolve, strong typing skills are more important than ever. Being able to type quickly can save time and make you more efficient in various tasks. Regular practice helps you build a rhythm, allowing for faster and more accurate typing.",
    "Effective typing is not just about speed; it’s about clarity and accuracy as well. The ability to type swiftly allows you to express your ideas without delay. By focusing on improving your typing skills, you’ll notice increased productivity in your daily activities.",
    "Typing proficiency can significantly enhance your career prospects. Many employers value candidates with strong typing skills, as they can handle tasks more efficiently. With regular practice, you’ll develop a style that balances speed and accuracy, benefiting both your personal and professional life.",
    "In an age where written communication dominates, the importance of typing cannot be overstated. Whether you’re creating documents or chatting online, being a proficient typist enhances your effectiveness. Regular practice will help you become faster and more confident in your abilities."
  ],
  hard: [
    "Typing quickly and accurately is an essential skill in our technology-driven world. The ability to express your thoughts in written form, whether through emails, reports, or instant messaging, can greatly enhance your efficiency. Regular practice not only improves speed but also fosters better comprehension and articulation of ideas. As you become more comfortable with the keyboard, you can focus less on the mechanics of typing and more on the content you wish to convey. Ultimately, mastering this skill will allow you to communicate effectively in both personal and professional environments.",
    "The benefits of proficient typing extend into numerous fields, making it a highly desirable skill. Fast and accurate typing allows individuals to handle larger workloads and respond to communication in real time. In professions like journalism, coding, and customer service, the ability to type quickly is often linked to productivity. This skill not only facilitates smoother workflows but also helps maintain the clarity of thought. By consistently honing your typing abilities, you cultivate a valuable asset that can lead to increased career opportunities and personal satisfaction in your tasks.",
    "In today's fast-paced digital landscape, effective typing is more than just a convenience; it's a necessity. Whether crafting emails, programming, or drafting reports, the ability to type swiftly enhances overall productivity. However, it’s vital to strike a balance between speed and accuracy, as frequent errors can hinder your efficiency. Developing a proper typing technique through regular practice is key. Over time, as you refine this skill, typing will feel effortless, allowing you to concentrate on the substance of your writing rather than the mechanics, thereby improving your communication.",
    "Typing is a skill that can significantly impact your effectiveness in both personal and professional settings. In an era where communication occurs primarily through text, being able to type quickly without sacrificing accuracy is invaluable. This capability streamlines your workflow, allowing you to complete tasks efficiently while minimizing frustration. Regular practice and focus on technique will not only enhance your typing speed but also help build confidence in your written communication skills. As you improve, you will find that typing becomes a natural extension of your thoughts, facilitating smoother and more coherent exchanges.",
    "The art of typing encompasses much more than mere speed; it involves a combination of technique, accuracy, and the ability to convey thoughts effectively. As we navigate a world increasingly reliant on digital communication, strong typing skills are essential for success in various fields. By dedicating time to practice, you can refine your technique, ultimately allowing for faster, more precise typing. This proficiency not only enhances your productivity but also fosters greater confidence in your ability to communicate. Thus, investing effort into improving your typing skills is a wise choice for anyone looking to thrive in today’s environment."
  ]
};


let givenText = [];
let userText = [];
let totalWordsTyped = 0;
let correctWords = 0;
let count = 0;
let timer;
let timeLimit = 30;
let timeElapsed = 0;
let currentLevel = "easy";



document.querySelector("#testType").addEventListener("change", () => {
  currentLevel = document.querySelector("#testType").value;
  document.querySelector("#time").innerText = (currentLevel==="easy") ? "00:30" : ( (currentLevel==="medium") ? "00:45" : "01:00" )
  getParagraph();

})

getParagraph();

document.querySelector("#changeParaBtn").addEventListener("click", () => {
  getParagraph();
});

function getParagraph() {
  console.log( currentLevel )
  let levelParagraphs = paragraphs[currentLevel.toLowerCase()];
  let i = Math.floor(Math.random() * levelParagraphs.length);
  let paraDisplayDiv = document.querySelector("#paraDisplayDiv");
  paraDisplayDiv.innerHTML = "";
  givenText = levelParagraphs[i].split(" ");
  givenText.forEach((item, idx) => {
    let span = document.createElement("span");
    span.innerText = item + " ";
    span.id = "span-" + idx;
    paraDisplayDiv.appendChild(span);
  });
}

document.querySelector("#textInput").addEventListener("keydown", (e) => {
  if (e.key === " ") {
    modifyUserText();
    count++;
  }
});

function modifyUserText() {
  userText = document.querySelector("#textInput").value.trim().split(" ");
  correctWords = 0;
  userText.forEach((word, index) => {
    const spanElement = document.querySelector(`#span-${index}`);
    if (spanElement) {
      if (word === givenText[index]) {
        correctWords++;
        spanElement.classList.add("correct");
        spanElement.classList.remove("wrong");
      } else {
        spanElement.classList.add("wrong");
        spanElement.classList.remove("correct");
      }
    }
  });
}

let startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", () => {
  document.querySelector("#textInput").removeAttribute("disabled");
  startBtn.innerText = (startBtn.innerText === "Start Test") ? "End Test" : "Start Test";
  (startBtn.innerText !== "Start Test") ? startTest() : endTest();
});

function startTest() {
  document.querySelector("#changeParaBtn").style.display = "none";
  document.querySelector("#paraDisplayDiv").style.display = "block";
  document.querySelector("#test").style.display = "flex";
  document.querySelector("#result").style.display = "none";
  document.querySelector("#restartBtn").style.display = "none";
  count = 0;
  totalWordsTyped = 0;
  correctWords = 0;
  document.querySelector("#textInput").value = "";

  timeLimit = currentLevel === 'easy' ? 30 : currentLevel === 'medium' ? 45 : 60;
  document.querySelector("#testType").style.display = "none";
  startTimer();
}

function endTest() {
  document.querySelector("#changeParaBtn").style.display = "flex";
  document.querySelector("#paraDisplayDiv").style.display = "none";
  document.querySelector("#test").style.display = "none";
  document.querySelector("#changeParaBtn").style.display = "none";
  document.querySelector("#startBtn").style.display = "none";
  document.querySelector("#restartBtn").style.display = "block";
  document.querySelector("#testType").style.display = "none";
  clearInterval(timer);
  calculateMetrics();
  showResult();
}

function calculateMetrics() {
  userText = document.querySelector("#textInput").value.trim().split(" ");
  totalWordsTyped = userText.length;

  let timeUsed = timeLimit - timeElapsed;
  let wpm = (totalWordsTyped / (timeUsed / 60)).toFixed(2);
  let accuracy = (totalWordsTyped > 0) ? ((correctWords / totalWordsTyped) * 100).toFixed(2) : 0;

  document.querySelector("#result").innerText = `You completed the Typing Test with ${(accuracy === "Infinity") ? 0 : accuracy}% Accuracy and ${(wpm === "Infinity") ? 0 : wpm} WPM`;
}

function showResult() {
  setTimeout(() => {
    document.querySelector("#result").style.display = "block";
  }, 500);
}

function startTimer() {
  timeElapsed = timeLimit;
  document.querySelector("#time").innerText = formatTime(timeElapsed);
  timer = setInterval(() => {
    timeElapsed--;
    document.querySelector("#time").innerText = formatTime(timeElapsed);
    if (timeElapsed <= 0) {
      clearInterval(timer);
      endTest();
    }
  }, 1000);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

document.querySelector("#restartBtn").addEventListener("click", () => {
  location.reload();
});

document.querySelector("#levelSelect").addEventListener("change", (e) => {
  currentLevel = e.target.value;
  getParagraph();
});
