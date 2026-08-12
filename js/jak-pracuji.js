let stranka = "povoleni";

const image = document.getElementById("work-image");
const title = document.getElementById("work-title");
const text = document.getElementById("work-text");
const extra = document.getElementById("work-extra");

const menu = document.querySelectorAll(".work-menu button");


function getImagePath(path){

    return path
        .replace("images/jak-pracuji/", "images/jak-pracuji/hero/")
        .replace(".jpg", ".webp")
        .replace(".png", ".webp")
        .replace(".jpeg", ".webp")
        .replace(".JPEG", ".webp");

}


/* ==========================================
   PŘEDNAČTENÍ VŠECH OBRÁZKŮ
========================================== */

Object.values(work).forEach(item => {

    const preload = new Image();

    preload.src = getImagePath(item.image);

});


/* ==========================================
   ZOBRAZENÍ STRÁNKY
========================================== */

function zobraz(str){

    stranka = str;

    const newImage = getImagePath(work[str].image);

    image.src = newImage;

    title.textContent = work[str].title;

    text.innerHTML = work[str].text;

    extra.innerHTML = work[str].extra;

}


menu.forEach(button => {

    button.addEventListener("click", () => {

        menu.forEach(b => b.classList.remove("active"));

        button.classList.add("active");

        zobraz(button.dataset.page);

    });

});


zobraz("povoleni");