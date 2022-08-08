let requestURL = "https://random.dog/woof.json";

let imageContainer = document.querySelector("img");
let videoContainer = document.querySelector("video");

function displayPhoto(data) {
    let dogPhoto = data;
    console.log(dogPhoto);

    let result = dogPhoto.url.includes(".mp4");

    if (result == true) {
        imageContainer.style.display = "none";
        videoContainer.src = dogPhoto.url;
    }
    else {
        videoContainer.style.display = "none";
        imageContainer.src = dogPhoto.url;
    }
}

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(displayPhoto)
    .catch(function (error) {
        console.log("Error during fetch:", error);
    });

