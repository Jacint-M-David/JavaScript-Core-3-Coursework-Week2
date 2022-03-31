let content = document.getElementById("content"),
img = document.createElement("img");
content.append(img);

fetch("https://xkcd.now.sh/?comic=latest")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.img);
        img.src = data.img;
    })
    .catch(error => console.log(error));