const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("show");

    });

}