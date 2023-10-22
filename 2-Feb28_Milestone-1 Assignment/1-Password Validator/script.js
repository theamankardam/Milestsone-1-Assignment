const button = document.querySelector('#btn')
button.addEventListener('click', (e) => {
    e.preventDefault();
    const password = document.querySelector('#password').value;
    const cpassword = document.querySelector('#cpassword').value;
    const result = document.querySelector('.result');
    if (password == cpassword) {
        result.innerHTML = "<h3>Password Matched. Password validation Successful.</h3>";
    }
    else {
        result.innerHTML = "<h3>Password didn't match. Password validation unsuccessful</h3>";
    }
})