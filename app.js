const search = document.getElementById("search_uni");

search.addEventListener("keyup", function() {
    if (event.keyCode == 13) {
        console.log("Enter is pressed");
    }
})