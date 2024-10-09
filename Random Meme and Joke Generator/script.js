

async function getMeme(){
  const d = await fetch("https://meme-api.com/gimme/wholesomememes");
  const data = await d.json();

  console.log( data );


  let img = document.querySelector("#img");
  img.setAttribute("src", data.url );
  img.setAttribute("alt", data.title);
  img.style.display = "block";


}

async function getJoke(){

  const d = await fetch("https://icanhazdadjoke.com/", {headers: {Accept: "application/json"}});
  const data = await d.json();


  let joke = document.querySelector("#joke");
  joke.innerText = data.joke;
  joke.style.display = "block";


}