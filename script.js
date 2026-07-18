// Function runs when the mouse is placed over an image
function upDate(previewPic) {

    console.log("Mouse Over");
    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    // Change the text inside the preview box
    document.getElementById("image").innerHTML = previewPic.alt;

    // Change the background image
    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}


// Function runs when the mouse leaves an image
function undo() {

    console.log("Mouse Out");

    // Remove the background image
    document.getElementById("image").style.backgroundImage = "url('')";

    // Restore the original text
    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}