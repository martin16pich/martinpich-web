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
                    "základní skladby konstrukcí",
                    "elektronické odevzdání v PDF"
                ]
            },
            {
                title: "Neobsahuje:",
                items: [
                    "statiku ani požárně bezpečnostní řešení stavby",
                    "řešení systémů TZB – vytápění, větrání, kanalizace, vodovod a elektroinstalace",
                    "energetické hodnocení stavby ani PENB",
                    "rozpočet stavby",
                    "poskytnutí 3D náhledů z modelu ani BIMx model",
                    "tisk projektu ani odevzdání vektorových dat"
                ]
            }
        ],
        note: "Základní rozsah je určen především pro povolení stavby. Je vhodný pro klienty, kteří mají svého statika a projektanta PBŘ."
    },

    "permit-standard": {
        kicker: "Projekt pro povolení stavby",
        sections: [
            {
                title: "Obsahuje:",
                items: [
                    "všechny náležitosti základního rozsahu",
                    "konzultace s autory studie stavby",
                    "statiku a požárně bezpečnostní řešení stavby - zpracované specializovanými projektanty",
                    "základní rozvahu řešení systémů TZB",
                    "3D náhledy z modelu",
                    "elektronické odevzdání v PDF"
                    
                ]
            },
            {
                title: "Neobsahuje:",
                items: [
                    "koordinaci TZB systémů ani jejich podrobné řešení",
                    "energetické hodnocení stavby ani PENB",
                    "rozpočet stavby",
                    "BIMx model pro klienta",
                    "tisk projektu ani odevzdání vektorových dat"
                    
                ]
            }
        ],
        note: "Standardní rozsah je určen především pro povolení stavby. Je vhodný pro klienty, kteří potřebují projekt pro povolení stavby bez komplexní koordinace TZB systémů."
    },

    "permit-extended": {
        kicker: "Projekt pro povolení stavby",
        sections: [
            {
                title: "Obsahuje:",
                items: [
                    "všechny náležitosti standardního rozsahu",
                    "základní koordinaci TZB systémů, kdy jednotlivé profese zpracovávají specializovaní projektanti",
                    "podrobnější skladby konstrukcí",
                    "půdorysy, řezy a pohledy v černobílém tisku a v měřítku 1:50",
                    "energetické hodnocení stavby včetně PENB",
                    "3D náhledy a BIMx model",
                    "elektronické odevzdání v PDF, odevzdání vektorových dat, tisk 1 paré dokumentace"
                ]
            },
            {
                title: "Neobsahuje:",
                items: [
                    "rozpočet stavby",
                    "projektovou dokumentaci pro provádění stavby",
                    "výpisy dílčích prvků a výrobků",
                    "detailní dokumentaci systémů TZB"
                    
                ]
            }
        ],
        note: "Rozšířený rozsah lépe připravuje projekt pro navazující prováděcí dokumentaci a v jistých případech se podle něho dá dům realizovat. Je vhodný pro klienty, kteří chtějí mít projekt domu více promyšlený a vyhnout se dodatečným změnám během realizace stavby."
    },

    "execution-basic": {
        kicker: "Projekt pro provádění stavby",
        sections: [
            {
                title: "Obsahuje:",
                items: [
                    "podrobnější půdorysy, řezy a pohledy v barevném tisku a v měřítku 1:50",
                    "koordinaci TZB systémů, kdy jednotlivé profese zpracovávají specializovaní projektanti",
                    "podrobnější skladby konstrukcí",
                    "základní výpisy prvků (okna, dveře, překlady) ",
                    "rozpočet stavby",
                    "3D náhledy a BIMx model",
                    "elektronické odevzdání v PDF, odevzdání vektorových dat, tisk 3 paré dokumentace",
            
                ]
            },
            {
                title: "Neobsahuje:",
                items: [
                    "projekt pro povolení stavby",
                    "stavební detaily",
                    "výpis zámečnických výrobků - zábradlí, markýzy, pergoly",
                    "výpis truhlářských výrobků - vnitřní parapety",
                    "výpis klempířských výrobků - vnější parapety, oplechování střechy, okapy"
        
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
                    "všechny náležitosti základního rozsahu",
                    "podrobné konstrukční řešení stavby",
                    "podrobné skladby konstrukcí včetně referenčních výrobků",
                    "stavební detaily",
                    "výpisy všech prvků a výrobků",
                    "rozpočet stavby",              
                    "3D náhledy a BIMx model",
                    "elektronické odevzdání v PDF, odevzdání vektorových dat, tisk 3 paré dokumentace"
                ]
            },
            {
                title: "Neobsahuje:",
                items: [
                    "projekt interiéru - ten může zpracovat architekt",
                   
                    
                ]
            }
        ],
        note: "Podrobný rozsah doporučuji jako podklad pro samotnou realizaci stavby."
    },

   
    "passport": {
        kicker: "Pasport stavby",
        hideTitle: true,
        sections: [
            {
                title: "Obsahuje:",
                items: [
                    "studium archivní dokumentace",
                    "zaměření stávajícího stavu",
                    "půdorysy jednotlivých podlaží",
                    "řezy a pohledy",
                    "základní technický popis stavby",
                    "elektronické odevzdání v PDF a tisk 1 paré dokumentace"
                ]
            },
            {
                title: "K čemu pasport slouží:",
                items: [
                    "základní vstup pro projekt stavebních úprav (rekonstrukce) i odstranění stavby",
                    "podklad pro vypracování energetického hodnocení stavby a PENB",
                    "podklad pro zpracování žádostí v dotačních programech"
                   
                ]
            }
        ],
           },

    "demolition": {
        kicker: "Projekt odstranění stavby",
        hideTitle: true,
        sections: [
            {
                title: "Obsahuje:",
                items: [
                    "studium archivní dokumentace",
                    "zaměření stávajícího stavu",
                    "náležitosti podle vyhlášky o dokumentaci staveb",
                    "technické zprávy",
                    "situační výkresy",
                    "výkresy stávajícího stavu",
                    "popis způsobu a postupu odstranění stavby",
                    "výpis předpokládaných odpadů a způsob jejich likvidace",
                    "elektronické odevzdání v PDF a tisk 1 paré dokumentace"
                ]
            },
            {
                title: "K čemu projekt bouracích prací slouží:",
                items: [
                    "před odstraněním stavby je ze zákona nutné demolici schválit stavebním úřadem"
                ]
            }
        ],
       
    },

    "engineering": {
        kicker: "Inženýrská činnost",
        hideTitle: true,
        sections: [
            {
                title: "Obsahuje:",
                items: [
                   "zajištění stanovisek dotčených orgánů",
                   "zajištění vyjádření správců technické infrastruktury",
                    "kompletaci podkladů pro podání žádosti na stavební úřad",
                    "komunikaci se stavebním úřadem",                  
                    "koordinaci doplnění požadovaných podkladů",
                    "podání žádosti, sledování průběhu řízení a informování stavebníka"
                ]
            },
            {
                title: "K čemu inženýrská činnost slouží:",
                items: [
                    "zjednodušení a urychlení povolovacího procesu kdy zkušený inženýr zastupuje stavebníka",
                  ]

                  
            },
              {
                title: "Pro koho inženýrskou činnost zpracovávám:",
                items: [
                    "pouze pro klienty, pro které jsem vypracovával projektovou dokumentaci",
                  ]

                  
            }
        ],
     
    },

    "author-supervision": {
        kicker: "Autorský dozor",
        hideTitle: true,
        sections: [
            {
                title: "Obsahuje:",
                items: [
                    "kontrolu souladu provádění stavby s projektovou dokumentací",
                    "vysvětlení projektového řešení zhotoviteli",
                    "konzultace změn vzniklých během realizace",
                    "účast na vybraných kontrolních dnech",
                    "konzultace stavebních detailů"
                ]
            },
           
        ],
      
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

   if(detail.hideTitle){
    modalTitle.textContent = "";
    modalTitle.style.display = "none";
}else{
    modalTitle.textContent = card.querySelector(".service-card__title")?.textContent.trim() || "Podrobnosti";
    modalTitle.style.display = "block";
}
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
