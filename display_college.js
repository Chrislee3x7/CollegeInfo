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
        var index = currRow.indexOf(',', retrieved_name.length + 1);
        var currName = currRow.substr(0, retrieved_name.length);
        //console.log(currRow[1]);
        if (currName == retrieved_name) {
            console.log("This was true");

            const arwu = document.getElementById("arwu");
            const arwu_card = document.getElementById("arwu-card");
            arwu_card.style.display = "flex";
            var nextIndex = currRow.indexOf(',', index + 1);
            arwu.innerHTML = "<strong>Global Ranking:</strong> " + currRow.substr(index + 1, nextIndex-index-1);

            const qs = document.getElementById("qs");
            const qs_card = document.getElementById("qs-card");
            qs_card.style.display = "block";
            index = nextIndex;
            nextIndex = currRow.indexOf(',', index + 1);
            qs.innerHTML = "<strong>Global Ranking:</strong> " + currRow.substr(index + 1, nextIndex-index-1);

            const the = document.getElementById("the");
            const the_card = document.getElementById("the-card");
            the_card.style.display = "block";
            index = nextIndex;
            nextIndex = currRow.indexOf(',', index + 1);
            the.innerHTML = "<strong>Global Ranking:</strong> " + currRow.substr(index + 1, nextIndex-index-1);

            const artu = document.getElementById("artu");
            const artu_card = document.getElementById("artu-card");
            artu_card.style.display = "block";
            index = nextIndex;
            artu.innerHTML = "<strong>Global Ranking:</strong> " + currRow.substr(index + 1);
        }
    }
    
//    const rur = document.getElementById("RUR");
//    rur.innerHTML = all_data.get("Stanford University");
    
    
    
    university_name.innerHTML = retrieved_name;
}
