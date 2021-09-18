window.onload = function() {
    const university_name = document.getElementById("university-title");

    var retrieved_name = sessionStorage.getItem("University_name");
    var universities_list = sessionStorage.getItem("University_list").split(',');
    
    console.log(universities_list.length);
    console.log(retrieved_name);
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
    
    console.log(retrieved_name);
    
    university_name.innerHTML = retrieved_name;
}
