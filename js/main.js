const intro = document.getElementById("intro");
const header = document.querySelector(".header");
const hero = document.querySelector(".hero");

if (intro && header && hero) {

    const firstVisit = !sessionStorage.getItem("introPlayed");

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

            document.body.style.overflow = "auto";

        }, 3000);

        sessionStorage.setItem("introPlayed", "1");

    }

    if (firstVisit) {

        if (window.innerWidth > 900) {

            document.body.style.overflow = "hidden";

        }

        setTimeout(reveal, 650);

    } else {

        intro.remove();

        header.classList.remove("hidden");
        hero.classList.remove("hidden");

        header.classList.add("show");
        hero.classList.add("show");

        document.body.style.overflow = "auto";

    }

}