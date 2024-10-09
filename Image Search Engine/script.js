

let searchInput = document.querySelector("#searchInput")

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    search(searchInput.value);
  }
})

document.getElementById("searchBtn").addEventListener("click", () => {
  search(searchInput.value);
})


// let apiKey = import.meta.env.VITE_API_KEY_ISE;
let apiKey = "FVgqKhVRWSefcpjUQqxQNnJ_sVY-4sO0TlDfy2gGPXY";



async function search(query) {


  try {

    const d = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${apiKey}`)
    const data = await d.json();

    let imageDiv = document.querySelector("#imageDiv")

    imageDiv.innerHTML = "";

    document.body.style.height = "";

    if (data.results.length!==0) {

      data.results.map( item => {

        let img = document.createElement("img");
        img.id = "image";
        img.src = item.urls.full;
        img.alt = item.title || "image";
        let imgLink = document.createElement("a");
        imgLink.href = item.links.html;
        imgLink.target = "_blank";

        // imgdiv
          // a
            // img
          //a
           //img
          // a
            //img

        imgLink.appendChild(img);
        imageDiv.appendChild(imgLink);


        // console.log( data.results );


      })

    } else {
      let p = document.createElement("p");
      p.id = "noElementsFound"
      p.innerText = "No Element Found for input " + query.charAt(0).toUpperCase() + query.slice(1).toLowerCase();;
      imageDiv.appendChild(p);
      console.log("no results found");
    }

  } catch (err) {
    console.log("error at fetching data: ", err.message);
  }

}