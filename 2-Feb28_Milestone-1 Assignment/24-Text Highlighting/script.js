const button = document.querySelector('#btn')
button.addEventListener('click', () => {
    var paragraph = document.getElementById('para');
    var words = paragraph.textContent.split(' ');
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.length >= 8) {
            var span = document.createElement('span');
            span.style.backgroundColor = 'yellow';
            span.textContent = word;
            words[i] = span.outerHTML;
        }
    }
    paragraph.innerHTML = words.join(' ');
})



