const search = document.getElementById("search_uni");

search.addEventListener("keyup", function() {
    if (event.keyCode == 13) {
        console.log("Enter is pressed");
    }
})

// Array including college names
var universities = ["Purdue", "Purduz", "Purdzz", "Purzzz", "Puzzzz", "Pzzzzz"];
/*
  @parameter inp: html object arr: array to get the list from
*/
function autocomplete(inp, arr) {
    var curr;
    inp.addEventListener("input", function() {
        var a, b, i, val = this.value;

        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;

        console.log("Val is " + val);

        // a will hold the items
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

        this.parentNode.appendChild(a);
        
        // Check if there are matching elements
        for (i = 0; i < arr.length; ++i) {
            if(arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                console.log("One of the condition satisfied");
                b = document.createElement("DIV");
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);

                b.innerHTML += "<input type='hidden' value='" + arr[i] > "'>";

                b.addEventListener("click", function() {
                    inp.value = this.getElementByTagName("input")[0].value;
                    closeAllLists();
                });

                a.appendChild(b);
             }
        }
    });
}

function closeAllLists() {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; ++i) {
        x[i].parentNode.removeChild(x[i]);
    }
}

autocomplete(search, universities);