const university_name = document.getElementById("university-title");

var retrieved_name = sessionStorage.getItem("University_name");
/*
retrieved_name = retrieved_name.substr(retrieved_name.indexOf('?') + 1);
while (retrieved_name.indexOf("%20") == -1) {
    retrieved_name
}
*/

console.log(retrieved_name);

university_name.innerHTML = retrieved_name;