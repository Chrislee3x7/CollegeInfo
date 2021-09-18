const search = document.getElementById("search_uni");

search.addEventListener("keyup", function() {
    if (event.keyCode == 13) {
        switchScreen();
    }
})

/*
    Function that switches screen
    Called for search.addEventListener
        When the enter key is pressed
    Called for b.addEventListener
        When an item in autocomplete is clicked
*/
function switchScreen() {
    window.location.href = "college-profile.html";
    sessionStorage.setItem("University_name", search.value);
    sessionStorage.setItem("University_list", universities);
    sessionStorage.setItem("Complete_data", all_data);
}

// Loads universities from csv
var universities = [];
var all_data = [];
$.ajax({
    url: 'rur.tsv',
    dataType: 'text',
}).done(fetchData);
/*
    @parameter data: csv file
*/
function fetchData(data) {
    var allRows = data.split(/\r?\n|\r/);
    for (var i = 0; i < allRows.length; ++i) {
        if (i == 0) continue;
        var row = allRows[i].split('\t');
        universities.push(row[1]);
        all_data.push(row);
    }
    universities.sort();
    universities = universities.join('\t');
    all_data = all_data.join('\n');
}


/*
  @parameter inp: html object arr: array to get the list from
*/
function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function() {
        var a, b, i, val = this.value;
        var counter = 0;

        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;

        //console.log("Val is " + val);

        // a will hold the items
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

        this.parentNode.appendChild(a);
        
        // Check if there are matching elements
        for (i = 0; i < arr.length; ++i) { 
            var index = arr[i].toUpperCase().indexOf(val.toUpperCase());
            if(index >= 0) {
                counter++;
                b = document.createElement("DIV");
                b.innerHTML = arr[i].substr(0, index);
                b.innerHTML += "<strong>" + arr[i].substr(index, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(index + val.length);

                //console.log("length of b is " + val.length);
                //console.log("Curr index is " + index);
                //console.log("b.innerHTML = " + b.innerHTML);

                b.addEventListener("click", function() {
                    //inp.value = this.getElementsByTagName("input")[0].value;
                    
                    /*
                    var temp = b.innerHTML.substr(0, b.innerHTML.indexOf("<")) + b.innerHTML.substr(b.innerHTML.indexOf(">"));
                    temp = temp.substr(0, temp.indexOf("<")) + temp.substr(temp.indexOf(">") + 1);
                    */
                    var temp = this.innerText || this.textContent;
                    inp.value = temp;           
                    closeAllLists();
                    switchScreen();
                });

                if (counter == 5) break;

                a.appendChild(b);
             }
        }
        
        if (counter == 0) {
            b = document.createElement("DIV");
            b.innerHTML = "No universities found";
            a.appendChild(b);
        }
    });
    function closeAllLists(except_this) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; ++i) {
            if (x[i] == except_this) continue;
            x[i].parentNode.removeChild(x[i]);
        }
    }
    /*
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");

        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        }
        else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        }
    })
    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = x.length - 1;
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; ++i) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    */
    
}


autocomplete(search, universities);