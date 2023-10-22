const button = document.querySelector("#btn");
button.addEventListener('click', (e) => {
    e.preventDefault();
    let input = document.getElementById("in").value;
    const para = document.createElement("p");
    para.innerText = input;
    const element = document.getElementById("works");
    element.appendChild(para);
    document.getElementById("in").value = '';
})


