let button = document.querySelector("#btn")
let result = document.querySelector(".result");

button.addEventListener('click', (e) => {
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let v = isLowerCase(name.charAt(0));
    let newname = v ? result.innerHTML = `<h1> ${firstLetterUpperCase(name)} </h1>` : result.innerHTML = `<h1> ${name} </h1>`; // by using ternary operator 
    function firstLetterUpperCase(name) {
        let newString = (name.charAt(0)).toUpperCase() + (name.slice(1));
        return newString;
    }
})


function isLowerCase(character) {
    return character === character.toLowerCase();
}

