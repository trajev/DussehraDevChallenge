let displayText = document.querySelector("#displayText");
let keyEquals = document.querySelector("#keyEquals");


let flag = false;

keyEquals.addEventListener("click", ()=>{
  try{

    let inputValue = displayText.value;
    if( inputValue ){
      let result = eval(inputValue);
      console.log("result: " , result , typeof result);
      displayText.value = result;
      if( displayText.value==="Infinity" || displayText.value==="-Infinity" || displayText.value==="NaN" ){
        flag = true;
      }

    }
  } catch( err ){
    console.log("Error occurred: ", err.message);
    displayText.value = "Error";
    flag = true;
  }
})


document.addEventListener("click", (e)=>{
  let key = e.target;
  // console.log("key pressed: ", key )
  if( flag && key.id!=='keyEquals' && key.id!=='keyClear' && key.id!=='keyAllClear' ){
    displayText.value = key.innerText
    flag = false;

  }

  if( key.id==='keyEquals'){
    displayText.scrollLeft = 0;
  } else {
    displayText.scrollLeft = displayText.scrollWidth;
  }



})