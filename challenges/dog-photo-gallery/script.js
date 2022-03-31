// INITIALISATION
let content = document.getElementById("content"),
dogBtn = document.getElementById("dogBtn");


// CALL API ENDPOINT WHEN BUTTON IS CLICKED
dogBtn.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => {
            return response.json();
        })
        .then(data => {

            // CREATE AND ADD NEW IMG WHEN DATA IS RECIEVED 
            let li = document.createElement("li"),
            newImg = document.createElement("img");
            console.log(data);
            newImg.src = data.message;
            newImg.alt = "doggo";
            li.append(newImg);
            content.append(li);
        })

        // ERROR HANDLING
        .catch(error => {
            console.log("See Error Here:", error);
        })
});