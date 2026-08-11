const intro = document.getElementById("intro");
const header = document.querySelector(".header");
const hero = document.querySelector(".hero");

function reveal() {

    intro.classList.add("animate");

    setTimeout(() => {

        header.classList.remove("hidden");
        hero.classList.remove("hidden");

        header.classList.add("show");
        hero.classList.add("show");

    }, 1700);

    setTimeout(() => {

        intro.classList.add("fade");

    }, 2200);

    setTimeout(() => {

        intro.remove();

    }, 3000);

    sessionStorage.setItem("introPlayed", "1");

}

const firstVisit = !sessionStorage.getItem("introPlayed");

if (firstVisit) {

    document.body.style.overflow = "hidden";

    setTimeout(() => {

        reveal();

    }, 650);

} else {

    intro.remove();

    header.classList.remove("hidden");
    hero.classList.remove("hidden");

    header.style.transition = "none";
    hero.style.transition = "none";

    header.classList.add("show");
    hero.classList.add("show");

    requestAnimationFrame(() => {

        header.style.transition = "";
        hero.style.transition = "";

    });

    document.body.style.overflow = "auto";

}