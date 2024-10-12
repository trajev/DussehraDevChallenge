for (let i in countryList) {
  let fromOption = document.createElement("option");
  fromOption.value = i;
  fromOption.innerText = i;
  document.querySelector("#fromCurrency").appendChild(fromOption);

  let toOption = document.createElement("option");
  toOption.value = i;
  toOption.innerText = i;
  document.querySelector("#toCurrency").appendChild(toOption);
}

document.querySelector("#fromCurrency").value = "USD";
updateFlag( "USD" , "#fromFlag" );
document.querySelector("#toCurrency").value = "INR";
updateFlag( "INR", "#toFlag" );



async function updateFlag( currencyName, address ){
  let countryCode = countryList[currencyName]
  document.querySelector(address).src = `https://flagsapi.com/${ countryCode }/flat/64.png`;
}


document.querySelector("#fromCurrency").addEventListener("change", ()=>{
  updateFlag( document.querySelector("#fromCurrency").value, "#fromFlag" )
})
document.querySelector("#toCurrency").addEventListener("change", ()=>{
  updateFlag( document.querySelector("#toCurrency").value, "#toFlag" )
})


document.querySelector("#changeBtn").addEventListener("click", ()=>{
  let temp = document.querySelector("#fromCurrency").value;
  document.querySelector("#fromCurrency").value = document.querySelector("#toCurrency").value;
  document.querySelector("#toCurrency").value = temp;
  updateFlag( document.querySelector("#toCurrency").value, "#toFlag");

  updateFlag( document.querySelector("#fromCurrency").value, "#fromFlag");
})


document.querySelector("#convertBtn").addEventListener("click", ()=>{
  document.querySelector("#result").style.display = "block";
  getResult();
})

document.querySelector("#convertBtn").addEventListener("keydown", (e)=>{
  if( e.key === "Enter" ){
    document.querySelector("#result").style.display = "block";
    getResult();
  }
})




async function getResult() {
  const fromCurrency = document.querySelector("#fromCurrency").value;
  const toCurrency = document.querySelector("#toCurrency").value;
  const input = document.querySelector("#inputCurrency").value;


  if( !input ){
    document.querySelector("#result").innerText = "Please Provide the Proper Input Value";
    return;
  }


  const d = await fetch("https://latest.currency-api.pages.dev/v1/currencies/" + fromCurrency.toLowerCase() + ".json");

  if (!d.ok) {
      document.querySelector("#result").innerText = "Error fetching data.";
      return;
  }

  const data = await d.json();

  const conversionRate = data[fromCurrency.toLowerCase()][toCurrency.toLowerCase()];

  if (conversionRate !== undefined) {
      const ans = (input * conversionRate).toFixed(4); // Keep 4 decimal places
      document.querySelector("#result").innerText = `${input} ${fromCurrency} = ${ans} ${toCurrency}`;
  } else {
      console.log("Conversion rate not found.");
      document.querySelector("#result").innerText = "Conversion rate not found.";
  }
}
