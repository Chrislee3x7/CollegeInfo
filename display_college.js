window.onload = function() {
    const university_name = document.getElementById("university-title");

    var retrieved_name = sessionStorage.getItem("University_name");
    var universities_list = sessionStorage.getItem("University_list").split('\t');
    var all_data = sessionStorage.getItem("Complete_data").split('\n');

    //console.log(universities_list);
    //console.log(retrieved_name);
    console.log(all_data);
    var flag = 0;
    for (var i = 0; i < universities_list.length; ++i) {
        if (universities_list[i].toUpperCase().indexOf(retrieved_name.toUpperCase()) >= 0) {
            flag++;
            retrieved_name = universities_list[i];
            break;
        }
    }
    
    if (flag == 0) {
        window.location.href = "error.html";
    }
    
    // Look for the ranking
    for (var i = 0; i < all_data.length; ++i) {
        var currRow = all_data[i];
        var index = currRow.indexOf(',');
        index = currRow.indexOf(',', index+1);
        var currName = currRow.substr(0, retrieved_name.length);
        //console.log(currRow[1]);
        if (currName == retrieved_name) {
            if (retrieved_name.indexOf(',') >= 0) {
                index = currRow.indexOf(',', index + 1);
            }
            console.log(currRow);
            console.log(index);
            const arwu = document.getElementById("arwu");
            const arwu_card = document.getElementById("arwu-card");
            const arwu_style = getComputedStyle(arwu_card);
            var nextIndex = currRow.indexOf(',', index + 1);
            if (nextIndex-index-1 > 0 && arwu_style.display == "none") {
                arwu_card.style.display = "block";
                console.log(arwu.innerHTML);
                arwu.innerHTML = "<strong>#" + currRow.substr(index + 1, nextIndex-index-1) + "</strong> @" + arwu.innerHTML;
            }
            
            const qs = document.getElementById("qs");
            const qs_card = document.getElementById("qs-card");
            const qs_style = getComputedStyle(qs_card);
            index = nextIndex;
            nextIndex = currRow.indexOf(',', index + 1);
            if (nextIndex-index-1 > 0 && qs_style.display == "none") {
                qs_card.style.display = "block";
                qs.innerHTML = "<strong>#" + currRow.substr(index + 1, nextIndex-index-1) + "</strong> @" + qs.innerHTML;
            }

            const the = document.getElementById("the");
            const the_card = document.getElementById("the-card");
            const the_style = getComputedStyle(the_card);
            index = nextIndex;
            nextIndex = currRow.indexOf(',', index + 1);
            if (nextIndex-index-1 > 0 && the_style.display == "none") {
                the_card.style.display = "block";
                the.innerHTML = "<strong>#" + currRow.substr(index + 1, nextIndex-index-1) + "</strong> @" + the.innerHTML;
            }

            const artu = document.getElementById("artu");
            const artu_card = document.getElementById("artu-card");
            const artu_style = getComputedStyle(artu_card);
            index = nextIndex;
            nextIndex = currRow.indexOf(',', index + 1);
            if (nextIndex-index-1 > 0 && artu_style.display == "none") {
                artu_card.style.display = "block";
                artu.innerHTML = "<strong>#" + currRow.substr(index + 1, nextIndex-index-1) + "</strong> @" + artu.innerHTML;
            }

            const sci = document.getElementById("sci");
            const sci_card = document.getElementById("sci-card");
            const sci_style = getComputedStyle(sci_card);
            index = nextIndex;
            nextIndex = currRow.indexOf(',', index + 1);
            if (nextIndex-index-1 > 0 && sci_style.display == "none") {
                sci_card.style.display = "block";
                sci.innerHTML = "<strong>#" + currRow.substr(index + 1, nextIndex-index-1) + "</strong> @" + sci.innerHTML;
            }

            const rur = document.getElementById("rur");
            const rur_card = document.getElementById("rur-card");
            const rur_style = getComputedStyle(rur_card);
            index = nextIndex;
            if (currRow-index-1 > 0 && rur_style.display == "none") {
                rur_card.style.display = "block";
                rur.innerHTML = "<strong>#" + currRow.substr(index + 1) + "</strong> @" + rur.innerHTML;
            }
        }
    }
    
//    const rur = document.getElementById("RUR");
//    rur.innerHTML = all_data.get("Stanford University");
    
    
    
    university_name.innerHTML = retrieved_name;
}
