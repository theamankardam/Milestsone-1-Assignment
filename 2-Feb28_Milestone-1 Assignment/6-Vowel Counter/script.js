let button = document.querySelector("#btn")
let result = document.querySelector(".result");

button.addEventListener('click', (e) => {
    e.preventDefault();
    let name = document.querySelector("#name").value;
    console.log(name);
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    console.log(Array.from(name));
    let count = 0;
    for (const element of name) {
        if (vowels.includes(element)) {
            count++;
        }
    }
    result.innerHTML = `<h1> ${count} vowels in Your Name </h1>`;
})








