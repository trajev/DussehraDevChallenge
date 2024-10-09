let timeDiv = document.querySelector("#time");
let dateDiv = document.querySelector("#date");


function displayTime(){
  let date = new Date();
  if( date.getHours() > 12 ){

    timeDiv.innerText = String(date.getHours()-12).padStart(2, '0') + ":" + String(date.getMinutes()).padStart(2, '0') + ":" + String( date.getSeconds() ).padStart(2, '0') + " " + "PM";
  } else {
    timeDiv.innerText = String(date.getHours()-12).padStart(2, '0') + ":" + String(date.getMinutes()).padStart(2, '0') + ":" + String( date.getSeconds() ).padStart(2, '0') + " " + "AM";
  }

}


function displayDate(){
  let date = new Date();
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" ]
  dateDiv.innerText = String(date.getFullYear()).padStart(2, '0') + "-" + String(date.getMonth()).padStart(2, '0') + "-" + String(date.getDate()).padStart(2, '0') + "  " + days[date.getDay()]
}


setInterval( displayTime, 1000 )
setInterval( displayDate, 1000 )



let menuBtn = document.querySelector("#menu-btn");
let menuDiv = document.querySelector("#menu-div");
let closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener("click", () => {
  menuDiv.classList.add("show");
  closeBtn.style.display = "block"; // Show close button
  menuBtn.style.display = "none"; // Hide menu button
});

// Hide menu
closeBtn.addEventListener("click", () => {
  menuDiv.classList.remove("show");
  closeBtn.style.display = "none"; // Hide close button
  menuBtn.style.display = "block"; // Show menu button
});