
document.querySelector("#nameInput").addEventListener("keydown", (e)=>{
  if( e.key==='Enter'){
    getDetails();
  }
})

document.querySelector("#nameBtn").addEventListener("click", ()=>{
  getDetails();
})



async function getDetails(){
  const name = document.querySelector("#nameInput").value;
  // console.log( name );

  const d = await fetch(`https://api.genderapi.io/api/?name=${name}&key=6708f9807527d819d7006b4d`);
  const data = await d.json();
  console.log( data );

  document.querySelector(".result").classList.remove("male", "female");

  if( data.probability!==0 ){
    document.querySelector("#result").style.display = "none";
    document.querySelector("#innerDiv").style.display = "flex";

    if( data.gender==="male"){
      document.querySelector(".result").classList.add("male");
      document.querySelector("#genderIcon").src = "./man.png";
    } else {
      document.querySelector(".result").classList.add("female");
      document.querySelector("#genderIcon").src = "./female.png";
    }

    document.querySelector("#name").innerText = data.name;
    document.querySelector("#gender").innerText = data.gender;
    document.querySelector("#probability").innerText = (data.probability).toFixed(2) + "%";
  } else {
    console.log("result printed -  " , typeof data.probability )
    document.querySelector("#result").style.display = "flex";
    document.querySelector("#innerDiv").style.display = 'none';
    document.querySelector("#result").innerText = "No Prediction found on that Name!";
  }

}
