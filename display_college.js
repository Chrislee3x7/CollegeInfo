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
        var currName = currRow.substr(index + 1, retrieved_name.length);
        //console.log(currRow[1]);
        if (currName == retrieved_name) {
            console.log("This was true");
            const rur = document.getElementById("RUR");
            rur.innerHTML = currRow.substr(0, index);
            
            while (index < currRow.length && (currRow.charAt(index) < '0' || currRow.charAt(index) > '9')) {
                index++;
            }
            
            const score = currRow.substr(index, currRow.indexOf(',', index) - index);
            rur.innerHTML += " ( " + score + " ) "; 
        }
    }
    
//    const rur = document.getElementById("RUR");
//    rur.innerHTML = all_data.get("Stanford University");
    
    
    
    university_name.innerHTML = retrieved_name;
}
