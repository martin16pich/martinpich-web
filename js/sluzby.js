const serviceDetails = {

    "permit-basic": {
        kicker: "Projekt pro povolení stavby",
        sections: [
            {
                title: "Obsahuje:",
                items: [
                    "náležitosti podle vyhlášky o dokumentaci staveb",
                    "technické zprávy",
                    "situační výkresy",
                    "základní půdorysy, řezy a pohledy v černobílém tisku a v měřítku 1:100",
                    "elektronické odevzdání v PDF"
                ]
            },
            {
                title: "Neobsahuje:",
                items: [
                    "řešení systémů TZB – vytápění, větrání, kanalizace, vodovod a elektroinstalace",
                    "tisk projektu ani odevzdání vektorových dat",
                    "poskytnutí 3D náhledů z modelu ani BIMx model"
                ]
            }
        ],
        note: "Základní rozsah je určen především pro povolení stavby. Dokumentace není zpracována v podrobnosti potřebné pro samotnou realizaci."
    },

    "permit-standard": {
        kicker: "Projekt pro povolení stavby",
        sections: [
            {
                title: "Obsahuje:",
                items: [
                    "všechny náležitosti základního rozsahu",
                    "základní koordinaci stavební části s profesemi TZB",
                    "zapracování hlavních požadavků profesních specialistů",
                    "vybrané 3D náhledy z modelu",
                    "BIMx model pro klienta",
                    "elektronické odevzdání v PDF"
                ]
            },
            {
                title: "Neobsahuje:",
                items: [
                    "podrobné stavební detaily pro realizaci",
                    "kompletní výpisy výrobků a prvků",
                    "podrobnou prováděcí dokumentaci profesí"
                ]
            }
        ],
        note: "Standardní rozsah je vhodný pro klienty, kteří chtějí už ve fázi povolení základně koordinovat stavební část s profesemi."
    },

    "permit-extended": {
        kicker: "Projekt pro povolení stavby",
        sections: [
            {
                title: "Obsahuje:",
                items: [
                    "všechny náležitosti standardního rozsahu",
                    "rozšířenou koordinaci stavební části a profesí",
                    "základní skladby konstrukcí",
                    "vybrané kritické návaznosti a detaily",
                    "3D náhledy a BIMx model",
                    "elektronické odevzdání v PDF"
                ]
            },
            {
                title: "Neobsahuje:",
                items: [
                    "kompletní dokumentaci pro provádění stavby",
                    "úplné výpisy všech prvků a výrobků",
                    "detailní dokumentaci jednotlivých profesí"
                ]
            }
        ],
        note: "Rozšířený rozsah lépe připravuje projekt pro navazující prováděcí dokumentaci."
    },

    "execution-basic": {
        kicker: "Projekt pro provádění stavby",
        sections: [
            {
                title: "Obsahuje:",
                items: [
                    "podrobnější půdorysy, řezy a pohledy",
                    "základní skladby konstrukcí",
                    "vybrané stavební detaily",
                    "základní výpisy prvků",
                    "elektronické odevzdání v PDF"
                ]
            },
            {
                title: "Neobsahuje:",
                items: [
                    "kompletní sadu stavebních detailů",
                    "podrobné výpisy všech výrobků",
                    "rozšířenou koordinaci všech profesí"
                ]
            }
        ],
        note: "Základní prováděcí rozsah je vhodný především pro jednodušší stavby."
    },

    "execution-standard": {
        kicker: "Projekt pro provádění stavby",
        sections: [
            {
                title: "Obsahuje:",
                items: [
                    "podrobné konstrukční řešení stavby",
                    "skladby konstrukcí",
                    "stavební detaily",
                    "výpisy prvků a výrobků",
                    "koordinaci stavební části s profesemi",
                    "podklady pro rozpočet a realizaci",
                    "3D model a BIMx model pro klienta"
                ]
            },
            {
                title: "Neobsahuje:",
                items: [
                    "nadstandardní množství atypických detailů",
                    "pravidelný autorský dozor během celé realizace",
                    "samostatné projekty profesí, pokud nejsou součástí nabídky"
                ]
            }
        ],
        note: "Standardní rozsah doporučuji jako podklad pro samotnou realizaci stavby."
    },

    "execution-detailed": {
        kicker: "Projekt pro provádění stavby",
        sections: [
            {
                title: "Obsahuje:",
                items: [
                    "všechny části standardního rozsahu",
                    "větší množství stavebních detailů",
                    "podrobnější výpisy prvků a výrobků",
                    "rozšířenou koordinaci profesí",
                    "podklady pro přesnější nacenění stavby",
                    "průběžné konzultace při dopracování dokumentace"
                ]
            },
            {
                title: "Vhodné zejména pro:",
                items: [
                    "složitější novostavby",
                    "rekonstrukce a stavební úpravy",
                    "stavby s větším množstvím atypických řešení"
                ]
            }
        ],
        note: "Konkrétní rozsah podrobné dokumentace se vždy stanoví podle charakteru projektu."
    },

    "passport": {
        kicker: "Další služby",
        sections: [
            {
                title: "Může obsahovat:",
                items: [
                    "zaměření stávajícího stavu v dohodnutém rozsahu",
                    "půdorysy jednotlivých podlaží",
                    "řezy a pohledy podle potřeby",
                    "základní technický popis stavby",
                    "elektronické odevzdání v PDF"
                ]
            },
            {
                title: "Cena závisí zejména na:",
                items: [
                    "velikosti a členitosti objektu",
                    "kvalitě dostupných podkladů",
                    "rozsahu zaměření",
                    "požadované podrobnosti dokumentace"
                ]
            }
        ],
        note: "Pasport zachycuje stávající stav objektu a může sloužit jako podklad pro evidenci nebo další projektovou přípravu."
    },

    "demolition": {
        kicker: "Další služby",
        sections: [
            {
                title: "Může obsahovat:",
                items: [
                    "technickou zprávu",
                    "situační výkres",
                    "výkresy stávajícího stavu v potřebném rozsahu",
                    "popis způsobu a postupu odstranění stavby",
                    "základní řešení nakládání se stavebním odpadem",
                    "elektronické odevzdání v PDF"
                ]
            },
            {
                title: "Neobsahuje, není-li dohodnuto jinak:",
                items: [
                    "průzkumy nebezpečných materiálů",
                    "odborné posudky a zvláštní průzkumy",
                    "samotné provedení demolice"
                ]
            }
        ],
        note: "Cena se stanoví podle velikosti objektu, způsobu odstranění a požadovaného rozsahu dokumentace."
    },

    "engineering": {
        kicker: "Další služby",
        sections: [
            {
                title: "Může obsahovat:",
                items: [
                    "kompletaci podkladů pro podání žádosti",
                    "komunikaci se stavebním úřadem",
                    "zajištění stanovisek dotčených orgánů",
                    "zajištění vyjádření správců technické infrastruktury",
                    "koordinaci doplnění požadovaných podkladů",
                    "podání žádosti a sledování průběhu řízení"
                ]
            },
            {
                title: "Cena závisí zejména na:",
                items: [
                    "druhu a umístění stavby",
                    "počtu potřebných stanovisek",
                    "rozsahu zastupování klienta",
                    "složitosti povolovacího procesu"
                ]
            }
        ],
        note: "Rozsah inženýrské činnosti se stanoví individuálně podle konkrétního projektu."
    },

    "author-supervision": {
        kicker: "Další služby",
        sections: [
            {
                title: "Může obsahovat:",
                items: [
                    "kontrolu souladu provádění stavby s projektovou dokumentací",
                    "vysvětlení projektového řešení zhotoviteli",
                    "konzultace změn vzniklých během realizace",
                    "účast na vybraných kontrolních dnech",
                    "konzultace stavebních detailů",
                    "zápis doporučení a zjištění"
                ]
            },
            {
                title: "Nejedná se o:",
                items: [
                    "každodenní kontrolu stavby",
                    "řízení zhotovitele",
                    "kontrolu množství a ceny provedených prací",
                    "technický dozor stavebníka"
                ]
            }
        ],
        note: "Rozsah a četnost autorského dozoru se sjednávají podle potřeb stavby."
    }
};

const modal = document.getElementById("service-modal");
const dialog = modal?.querySelector(".service-modal__dialog");
const modalKicker = document.getElementById("service-modal-kicker");
const modalTitle = document.getElementById("service-modal-title");
const modalContent = document.getElementById("service-modal-content");
const detailButtons = document.querySelectorAll("[data-service-detail]");
const closeButtons = document.querySelectorAll("[data-modal-close]");

let lastFocusedElement = null;

function renderSections(sections){
    return sections.map(section => `
        <section class="service-modal__section">
            <h3>${section.title}</h3>
            <ul>
                ${section.items.map(item => `<li>${item}</li>`).join("")}
            </ul>
        </section>
    `).join("");
}

function openServiceModal(serviceId, trigger){
    const detail = serviceDetails[serviceId];
    const card = trigger.closest(".service-card");

    if(!detail || !modal || !dialog || !card){
        return;
    }

    lastFocusedElement = trigger;

    modalKicker.textContent = detail.kicker;
    modalTitle.textContent = card.querySelector(".service-card__title")?.textContent.trim() || "Podrobnosti";
    modalContent.innerHTML = renderSections(detail.sections);

    if(detail.note){
        modalContent.insertAdjacentHTML(
            "beforeend",
            `<p class="service-modal__note">${detail.note}</p>`
        );
    }

    trigger.setAttribute("aria-expanded", "true");
    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("is-open");
    document.body.classList.add("modal-open");

    dialog.scrollTop = 0;

    requestAnimationFrame(() => {
        dialog.focus();
    });
}

function closeServiceModal(){
    if(!modal?.classList.contains("is-open")){
        return;
    }

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    detailButtons.forEach(button => {
        button.setAttribute("aria-expanded", "false");
    });

    if(lastFocusedElement){
        lastFocusedElement.focus();
    }
}

detailButtons.forEach(button => {
    button.addEventListener("click", () => {
        openServiceModal(button.dataset.serviceDetail, button);
    });
});

closeButtons.forEach(button => {
    button.addEventListener("click", closeServiceModal);
});

/* Kliknutí mimo bílé dialogové okno */
modal?.addEventListener("click", event => {
    if(event.target === modal){
        closeServiceModal();
    }
});

/* Zavření klávesou Esc + udržení fokusu uvnitř dialogu */
document.addEventListener("keydown", event => {
    if(!modal?.classList.contains("is-open")){
        return;
    }

    if(event.key === "Escape"){
        event.preventDefault();
        closeServiceModal();
        return;
    }

    if(event.key !== "Tab" || !dialog){
        return;
    }

    const focusable = dialog.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    if(focusable.length === 0){
        event.preventDefault();
        dialog.focus();
        return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if(event.shiftKey && document.activeElement === first){
        event.preventDefault();
        last.focus();
    }else if(!event.shiftKey && document.activeElement === last){
        event.preventDefault();
        first.focus();
    }
});
