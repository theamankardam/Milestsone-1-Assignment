const button = document.getElementById('btn');
button.addEventListener('click', () => {
    const colors = ["#FF5733", "#68FF33", "#33FFB8", "#33F0FF", "#3374FF", "#7133FF", "#FF33FF", "#FF33BE", "#FF3361", "#FF3333"];
    const randomNumber = (Math.floor((Math.random() * (colors.length))));
    document.body.style.backgroundColor = colors[randomNumber];
})


