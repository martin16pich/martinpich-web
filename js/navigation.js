const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("show");

    });

}

const logo = document.getElementById("logo-link");

if (logo) {

    logo.addEventListener("click", () => {

        sessionStorage.setItem("introPlayed", "1");

    });

}