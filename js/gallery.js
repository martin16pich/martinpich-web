let kategorie = "bytove";
let aktualni = 0;

const image = document.getElementById("project-image");
const title = document.getElementById("project-title");
const description = document.getElementById("project-description");
const architect = document.getElementById("project-architect");

const thumbs = document.getElementById("project-thumbs");

const left = document.querySelector(".gallery-arrow.left");
const right = document.querySelector(".gallery-arrow.right");

const menu = document.querySelectorAll(".project-menu button");


function zobrazProjekt(index){

    const projekt = projekty[kategorie][index];

    aktualni = index;

    image.src = projekt.image;
    image.alt = projekt.title;

    title.textContent = projekt.title;

    description.textContent = projekt.description;

    const wrapper = document.querySelector(".architect");

architect.innerHTML = "";

if (projekt.collaborators && projekt.collaborators.length > 0) {

    wrapper.style.display = "block";

    projekt.collaborators.forEach((person, index) => {

        const a = document.createElement("a");

        a.href = person.url;
        a.target = "_blank";
        a.textContent = person.name;

        architect.appendChild(a);

        if (index < projekt.collaborators.length - 1) {
            architect.appendChild(document.createTextNode(", "));
        }

    });

} else {

    wrapper.style.display = "none";

}

    vytvorMiniatury();

}


function vytvorMiniatury() {

    thumbs.innerHTML = "";

    const seznam = projekty[kategorie];

    const visible = 5;

    for (let slot = 0; slot < visible; slot++) {

        const index =
    (aktualni - 2 + slot + seznam.length) % seznam.length;

        const projekt = seznam[index];

        const img = document.createElement("img");

        img.src = projekt.image;
        img.alt = projekt.title;

        if (index === aktualni) {
            img.classList.add("active");
        }

        img.addEventListener("click", () => {
            zobrazProjekt(index);
        });

        thumbs.appendChild(img);

    }

}


right.addEventListener("click",()=>{

    aktualni++;

    if(aktualni >= projekty[kategorie].length){

        aktualni = 0;

    }

    zobrazProjekt(aktualni);

});


left.addEventListener("click",()=>{

    aktualni--;

    if(aktualni < 0){

        aktualni = projekty[kategorie].length - 1;

    }

    zobrazProjekt(aktualni);

});


menu.forEach(button=>{

    button.addEventListener("click",()=>{

        menu.forEach(b=>b.classList.remove("active"));

        button.classList.add("active");

        kategorie = button.dataset.category;

        aktualni = 0;

        zobrazProjekt(0);

    });

});


zobrazProjekt(0);