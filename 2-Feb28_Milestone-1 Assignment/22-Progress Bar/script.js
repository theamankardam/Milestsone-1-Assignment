document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("progressBar");
    const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.addEventListener("scroll", function () {
        const scrollProgress = (window.scrollY / maxScrollHeight) * 100;
        progressBar.style.width = scrollProgress + "%";
    });
});
