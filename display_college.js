const university_name = document.getElementById("university-title");

var retrieved_name = window.location.href;
retrieved_name = retrieved_name.substr(retrieved_name.indexOf('?') + 1);

console.log(retrieved_name);

university_name.innerHTML = retrieved_name;