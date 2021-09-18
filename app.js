const search = document.getElementById("search_uni");

search.addEventListener("keyup", function() {
    if (event.keyCode == 13) {
        console.log("Enter is pressed");
        window.location.href = "college-profile.html";
    }
})

// Loads universities from csv
var universities = ["Purdue"];

$.ajax({
    url: 'example.csv',
    dataType: 'text',
}).done(fetchData);

function fetchData(data) {
    var allRows = data.split(/\r?\n|\r/);
    for (var i = 0; i < allRows.length; ++i) {
        if (i == 0) continue;
        var row = allRows[i].split(',');
        universities.push(row[1]);
        console.log(row[1]);
    }
}


/*
  @parameter inp: html object arr: array to get the list from
*/
function autocomplete(inp, arr) {
    var curr;
    inp.addEventListener("input", function() {
        var a, b, i, val = this.value;
        var counter = 0;

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
                counter++;
                b = document.createElement("DIV");
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                
                console.log("b was " + b.innerHTML);
                //b.innerHTML += "<input type='hidden' value='" + arr[i] > "'>";
                console.log("b became " + b.innerHTML);

                b.addEventListener("click", function() {
                    inp.value = this.getElementByTagName("input")[0].value;
                    closeAllLists();
                });

                a.appendChild(b);
             }
            if (counter == 5) {
                break;
            }
        }
        
        if (counter == 0) {
            b = document.createElement("DIV");
            b.innerHTML = "No universities found";
            a.appendChild(b);
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