const button = document.querySelector("#btn");
const heading = document.querySelector("#heading");
button.addEventListener('click', () => {
    if (heading.innerHTML == "PW Skills") {
        heading.innerHTML = "The most affordable learning platform"
    }
    else {
        heading.innerHTML = "PW Skills"
    }
})