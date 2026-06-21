const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
var typed = new Typed('#element', {
    strings: [
        'I am a Passionate Developer & ,',
        'I am a Problem Solver.',
        'I Love Building Projects.',
        'I Enjoy Learning New Technologies.'
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});