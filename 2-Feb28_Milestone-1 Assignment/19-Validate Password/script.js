const submit = document.querySelector("#submit");
let result = document.querySelector('#result');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    if (email.includes("@") && password.length >= 8) {
        result.innerHTML = '<h1> Valid email and Password </h1>';
        result.style.color = "red";
    }
    else {
        result.innerHTML = '<h1> Invalid email or Password </h1>';
        result.style.color = "green";
    }
})