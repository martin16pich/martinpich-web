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
                    "statiku a požárně bezpečnostní řešení stavby – zpracované specializovanými projektanty",
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
                    "základní výpisy prvků (okna, dveře, překlady)",
                    "rozpočet stavby",
                    "3D náhledy a BIMx model",
                    "elektronické odevzdání v PDF, odevzdání vektorových dat, tisk 3 paré dokumentace"
                ]
            },

            {
                title: "Neobsahuje:",

                items: [
                    "projekt pro povolení stavby",
                    "stavební detaily",
                    "výpis zámečnických výrobků – zábradlí, markýzy, pergoly",
                    "výpis truhlářských výrobků – vnitřní parapety",
                    "výpis klempířských výrobků – vnější parapety, oplechování střechy, okapy"
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
                    "projekt interiéru – ten může zpracovat architekt"
                ]
            }
        ],

        note: "Podrobný rozsah doporučuji jako podklad pro samotnou realizaci stavby."
    },
"package-basic": {
    kicker: "Doporučené kombinace projektů",

    sections: [
        {
            items: [
                "kombinace rozšířeného projektu pro stavební povolení a základního prováděcího projektu",
                "vhodné především pro jednodušší stavby",
                "výhodou dvoufázového postupu je možnost projekt upravovat i po projednání s úřady"
            ]
        }
    ]
},


"package-detailed": {
    kicker: "Doporučené kombinace projektů",

    sections: [
        {
            items: [
                "kombinace rozšířeného projektu pro stavební povolení a podrobného prováděcího projektu",
                "vhodné pro nejnáročnější klienty, kteří chtějí mít stavbu před realizací co nejpodrobněji naprojektovanou",
                "výhodou dvoufázového postupu je možnost projekt upravovat i po projednání s úřady"
            ]
        }
    ]
},


"package-combined": {
    kicker: "Doporučené kombinace projektů",

    sections: [
        {
            items: [
                "téměř jednostupňový projekt – nejdůležitější části stavby jsou naprojektovány již v projektu pro povolení stavby a v navazující DPS se dopracují podrobnosti a detaily potřebné pro samotnou realizaci",
                "většina technických a konstrukčních rozhodnutí se provede již při zpracování projektu pro povolení stavby",
                "vhodné pro klienty, kteří mají jasnou představu o svém domě"
            ]
        }
    ]
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
        ]
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
        ]
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
                    "zjednodušení a urychlení povolovacího procesu, kdy zkušený inženýr zastupuje stavebníka"
                ]
            },

            {
                title: "Pro koho inženýrskou činnost zpracovávám:",

                items: [
                    "pouze pro klienty, pro které jsem vypracovával projektovou dokumentaci"
                ]
            }
        ]
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
            }
        ]
    }

};




/* ==========================================
   POROVNÁVACÍ TABULKY DSP / DPS
   ========================================== */

const comparisonDetails = {

    permit: {
        kicker: "Projekt pro povolení stavby",
       
        intro: [
            "projekt vychází z architektonické studie ",
            "statiku, PBŘ, TZB systémy (vodovod, kanalizace, vytápění, vzduchotechnika, elektroinstalace) dopravní řešení a PENB zpracovávají specialisté"

        ],

        variants: [
            {
                label: "Základní projekt DSP",
                text: [
                    "základní projekt pro stavební úřad v minimálním rozsahu, na který nebudu navazovat projektem pro provádění stavby DPS",
                    "hrozí riziko, že se bude muset před kolaudací dělat navíc ještě projekt „Změna stavby před dokončením“"
                ]
            },
            {
                label: "Rozšířený projekt DSP+",
                text: [
                    "rozšířený projekt pro stavební povolení, který vytváří kvalitní základ pro navazující projekt DPS",
                    "TZB systémy jsou vyřešeny v rozsahu potřebném pro povolení stavby",
                    "doporučená varianta při dvoustupňovém projektování - po povolení stavby zůstává prostor projekt dále upravit a teprve následně jej podrobně dopracovat pro realizaci"
                    
                ]
            },
            {
                label: "Kombinovaný projekt DSP/DPS",
                text: [
                    "podrobný projekt pro stavební povolení i provádění stavby s TZB systémy zpracovanými v prováděcím detailu, následně je možné zpracovat zjednodušenou DPS.",
                    "většina technických a konstrukčních rozhodnutí se provede již při zpracování projektu pro povolení stavby",
                    "varianta je vhodná zejména tehdy, pokud se po dokončení DSP nepředpokládají významnější změny projektu"
                    
                ]
            }
        ],

        projectLabels: ["DSP", "DSP+", "DSP/DPS"],

        rows: [
            ["Průvodní list", "yes", "yes", "yes"],
            ["Souhrnná zpráva", "yes", "yes", "yes"],
            ["Situační výkresy", "yes", "yes", "yes"],
            ["Technická zpráva", "yes", "yes", "yes"],
            ["Skladby konstrukcí", "no", "yes", "yes-detail"],
            ["Měřítko výkresů", "1:100", "1:50", "1:50"],
            ["Barevné rozlišení", "no", "no", "yes"],
            ["Výkres výkopů", "no", "no", "yes-detail"],
            ["Výkres základů", "yes", "yes", "yes-detail"],
            ["Půdorysy podlaží", "yes", "yes", "yes"],
            ["Výkres krovu", "yes", "yes", "yes-detail"],
            ["Výkres střechy", "yes", "yes", "yes"],
            ["Řezy", "yes", "yes", "yes"],
            ["Pohledy", "yes", "yes", "yes"],
            ["Statika", "yes", "yes", "yes-detail"],
            ["PBŘ", "yes", "yes", "yes"],
            ["TZB systémy", "no", "yes", "yes-detail"],
            ["Dopravní řešení", "no", "yes", "yes"],
            ["PENB", "no", "yes", "yes"],
            ["3D náhledy na dům", "no", "yes", "yes"],
            ["BIMx model", "no", "yes", "yes"],
            ["PDF", "yes", "yes", "yes"],
            ["DWG vektorová data", "no", "yes", "yes"],
            ["Tisk – 1 pare", "no", "yes", "yes"],
            ["Cena projektu",
                 '<span class="price-prefix">od</span> <span class="price-number">160 000</span> <span class="price-currency">Kč</span>',
                 '<span class="price-prefix">od</span> <span class="price-number">240 000</span> <span class="price-currency">Kč</span>',
                 '<span class="price-prefix">od</span> <span class="price-number">360 000</span> <span class="price-currency">Kč</span>',
                 "price"
]
        ],

        legend: [
            { type: "no", text: "neobsahuje" },
            { type: "yes", text: "obsahuje" },
            { type: "yes-detail", text: "obsahuje v prováděcím detailu" }
        ]
    },


    execution: {
        kicker: "Projekt pro provádění stavby",
        
        intro: [
            "projekt vychází z projektu pro stavební povolení",
            "statiku, PBŘ a TZB systémy (vodovod, kanalizace, vytápění, vzduchotechnika, elektroinstalace) zpracovávají specialisté"
        ],

        variants: [
            {
                label: "Základní projekt DPS",
                text: [
                    "projektová dokumentace pro provádění stavby v základním rozsahu"
                ]
            },
            {
                label: "Podrobný projekt DPS+",
                text: [
                    "podrobný projekt pro provádění stavby",
                    "projekt se zpracovává až po získání stanovisek dotčených orgánů stavby, takže je možné zohlednit změny a zkušenosti získané během povolovacího procesu",
                    "vhodná varianta pro klienty, kteří chtějí mít před zahájením stavby projekt co nejvíce dopracovaný a omezit rozhodování a improvizaci během realizace"
                ]
            },
            {
                label: "Kombinovaný projekt DSP/DPS",
                text: [
                    "tato varianta je určena pouze jako pokračování kombinovaného projektu DSP/DPS",
                    "navazující dokončení již podrobně zpracovaného projektu DSP/DPS pro realizaci stavby",
                    "projekt se doplní především o popisy, odkazy a výpisy jednotlivých prvků",
                    "statika a TZB systémy se znovu nezpracovávají – přebírají se z předchozí fáze",
                    
                ]
            }
        ],

        projectLabels: ["DPS", "DPS+", "DSP/DPS"],

        rows: [
            ["Průvodní list", "yes", "yes", "yes"],
            ["Souhrnná zpráva", "yes", "yes", "yes"],
            ["Situace", "yes", "yes", "yes"],
            ["Technická zpráva", "yes", "yes", "yes"],
            ["Skladby konstrukcí", "yes", "yes", "from-dsp"],
            ["Měřítko výkresů", "1:50", "1:50", "1:50"],
            ["Barevné rozlišení", "yes", "yes", "yes"],
            ["Výkres výkopů", "yes", "yes", "from-dsp"],
            ["Výkres základů", "yes", "yes", "from-dsp"],
            ["Půdorysy podlaží", "yes", "yes", "from-dsp-id"],
            ["Výkres krovu", "yes", "yes", "from-dsp"],
            ["Výkres střechy", "yes", "yes", "from-dsp-id"],
            ["Řezy", "yes", "yes", "from-dsp-id"],
            ["Pohledy", "yes", "yes", "from-dsp-id"],
            ["Detaily", "no", "yes", "yes"],
            ["Výpisy oken a dveří", "yes", "yes", "yes"],
            ["Výpis překladů", "yes", "yes", "yes"],
            ["Klempířský výpis", "no", "yes", "yes"],
            ["Zámečnický výpis", "no", "yes", "yes"],
            ["Truhlářský Výpis", "no", "yes", "yes"],
            ["Výpis žaluzií", "no", "yes", "yes"],
            ["Statika", "yes", "yes", "from-dsp"],
            ["PBŘ", "yes", "yes", "yes"],
            ["TZB systémy ", "yes", "yes", "from-dsp"],
            ["Rozpočet stavby", "no", "yes", "yes"],
            ["3D náhledy na dům", "yes", "yes", "yes"],
            ["BIMx model", "yes", "yes", "yes"],
            ["Elektronické odevzdání", "yes", "yes", "yes"],
            ["Tisk – 3 pare", "yes", "yes", "yes"],
            ["Cena projektu",
    '<span class="price-prefix">od</span> <span class="price-number">230 000</span> <span class="price-currency">Kč</span>',
    '<span class="price-prefix">od</span> <span class="price-number">335 000</span> <span class="price-currency">Kč</span>',
    '<span class="price-prefix">od</span> <span class="price-number">160 000</span> <span class="price-currency">Kč</span>',
    "price"
]
        ],

        legend: [
            { type: "no", text: "neobsahuje" },
            { type: "yes", text: "obsahuje" },
            { type: "from-dsp", text: "obsahuje z DSP" },
            { type: "from-dsp-id", text: "k výkresům z DSP doplněny popisky s odkazy na výpisy prvků" }
        ]
    }

};


const comparisonByService = {
    "permit-basic": { detail: "permit", selectedColumn: 0 },
    "permit-standard": { detail: "permit", selectedColumn: 1 },
    "permit-extended": { detail: "permit", selectedColumn: 2 },
    "execution-basic": { detail: "execution", selectedColumn: 0 },
    "execution-standard": { detail: "execution", selectedColumn: 1 },
    "execution-dsp-dps": { detail: "execution", selectedColumn: 2 }
};


/* ==========================================
   PRVKY STRÁNKY
========================================== */

const modal =
    document.getElementById("service-modal");

const dialog =
    modal?.querySelector(".service-modal__dialog");

const modalKicker =
    document.getElementById("service-modal-kicker");

const modalTitle =
    document.getElementById("service-modal-title");

const modalContent =
    document.getElementById("service-modal-content");

const serviceCards =
    document.querySelectorAll("[data-service-detail]");

const closeButtons =
    document.querySelectorAll("[data-modal-close]");

let lastFocusedElement = null;


/* ==========================================
   VYKRESLENÍ OBSAHU
========================================== */

function renderSections(sections){

    return sections.map(section => `

        <section class="service-modal__section">

          ${section.title ? `<h3>${section.title}</h3>` : ""}

            <ul>
                ${section.items
                    .map(item => `<li>${item}</li>`)
                    .join("")}
            </ul>

        </section>

    `).join("");

}


function renderComparisonCell(value, selectedColumn, columnIndex){

    const selectedClass =
        selectedColumn === columnIndex
            ? " is-selected"
            : "";

    if(typeof value === "string"){

        if(value === "yes"){
            return `<td class="service-comparison__cell service-comparison__cell--yes${selectedClass}"><span class="service-comparison__symbol" aria-label="obsahuje">✓</span></td>`;
        }

        if(value === "no"){
            return `<td class="service-comparison__cell service-comparison__cell--no${selectedClass}"><span class="service-comparison__symbol" aria-label="neobsahuje">✕</span></td>`;
        }

        if(value === "yes-detail"){
            return `<td class="service-comparison__cell service-comparison__cell--yes-detail${selectedClass}"><span class="service-comparison__symbol" aria-label="obsahuje v prováděcím detailu">✓</span></td>`;
        }

        if(value === "from-dsp"){
            return `<td class="service-comparison__cell service-comparison__cell--from-dsp${selectedClass}"><span class="service-comparison__symbol" aria-label="obsahuje z DSP">✓</span></td>`;
        }

        if(value === "from-dsp-id"){
            return `<td class="service-comparison__cell service-comparison__cell--from-dsp-id${selectedClass}"><span class="service-comparison__symbol" aria-label="k výkresům doplněny popisky s odkazy na výpisy prvků">✓</span></td>`;
        }

        return `<td class="service-comparison__cell${selectedClass}">${value}</td>`;
    }

    const type = value?.type || "";
    const text = value?.text || "";
    const typeClass = type ? ` service-comparison__cell--${type}` : "";
    const symbol = type === "no" ? "✕" : "✓";
    const aria = type === "no"
        ? "neobsahuje"
        : type === "from-dsp"
            ? "obsahuje z DSP"
            : type === "from-dsp-id"
                ? "k výkresům doplněny popisky s odkazy na výpisy prvků"
                : type === "yes-detail"
                    ? "obsahuje v prováděcím detailu"
                    : "obsahuje";

    return `
        <td class="service-comparison__cell${typeClass}${selectedClass}">
            <span class="service-comparison__symbol" aria-label="${aria}">${symbol}</span>${text ? `<span class="service-comparison__cell-note">${text}</span>` : ""}
        </td>
    `;
}


function renderComparisonLegendItem(item){

    let symbol = "✓";
    let className = "service-comparison__legend-symbol--yes";

    if(item.type === "no"){
        symbol = "✕";
        className = "service-comparison__legend-symbol--no";
    }
    else if(item.type === "yes-detail"){
        className = "service-comparison__legend-symbol--yes-detail";
    }
    else if(item.type === "from-dsp"){
        className = "service-comparison__legend-symbol--from-dsp";
    }
    else if(item.type === "from-dsp-id"){
        className = "service-comparison__legend-symbol--from-dsp-id";
    }

    return `
        <span class="service-comparison__legend-item">
            <span class="service-comparison__legend-symbol ${className}">${symbol}</span>
            <span>= ${item.text}</span>
        </span>
    `;
}


function renderComparison(detail, selectedColumn){

    const variants = detail.variants.map(variant => `
        <div class="service-comparison__variant">
            <strong>${variant.label}:</strong>
            <ul>
                ${variant.text.map(item => `<li>${item}</li>`).join("")}
            </ul>
        </div>
    `).join("");

    const bodyRows = detail.rows.map(row => {

        const isPrice = row[4] === "price";

        return `
            <tr class="${isPrice ? "service-comparison__price-row" : ""}">
                <th scope="row">${row[0]}</th>
                ${renderComparisonCell(row[1], selectedColumn, 0)}
                ${renderComparisonCell(row[2], selectedColumn, 1)}
                ${renderComparisonCell(row[3], selectedColumn, 2)}
            </tr>
        `;

    }).join("");

    return `
        <div class="service-comparison">

            <div class="service-comparison__intro">
                <ul class="service-comparison__intro-list">
                    ${detail.intro.map(item => `<li>${item}</li>`).join("")}
                </ul>

                <div class="service-comparison__variants">
                    ${variants}
                </div>
            </div>

             <div class="service-comparison__legend" aria-label="Vysvětlivky">
                <span class="service-comparison__legend-title">Vysvětlivky:</span>
                ${detail.legend.map(renderComparisonLegendItem).join("")}
            </div>

            <div class="service-comparison__table-wrap" tabindex="0" aria-label="Porovnávací tabulka variant projektu">
                <table class="service-comparison__table">
                    <thead>
                        <tr>
                            <th scope="col">Označení projektu</th>
                            ${detail.projectLabels.map((label, index) => `<th scope="col" class="${selectedColumn === index ? "is-selected" : ""}">${label}</th>`).join("")}
                        </tr>
                    </thead>
                    <tbody>
                        ${bodyRows}
                    </tbody>
                </table>
            </div>

           

        </div>
    `;
}


/* ==========================================
   OTEVŘENÍ MODÁLU
========================================== */

function openServiceModal(serviceId, card){

    if(
        !modal ||
        !dialog ||
        !card
    ){
        return;
    }

    const comparisonConfig = comparisonByService[serviceId];
    const comparisonDetail = comparisonConfig
        ? comparisonDetails[comparisonConfig.detail]
        : null;
    const detail = serviceDetails[serviceId];

    if(!comparisonDetail && !detail){
        return;
    }

    lastFocusedElement = card;

    if(comparisonDetail){

        dialog.classList.add("service-modal__dialog--comparison");

        modalKicker.textContent = comparisonDetail.kicker;
        modalTitle.textContent = comparisonDetail.title;
        modalTitle.style.display = "block";

        modalContent.innerHTML = renderComparison(
            comparisonDetail,
            comparisonConfig.selectedColumn
        );

    }else{

        dialog.classList.remove("service-modal__dialog--comparison");

        modalKicker.textContent = detail.kicker;

        if(detail.hideTitle){

            modalTitle.textContent = "";
            modalTitle.style.display = "none";

        }else{

            modalTitle.textContent =
                card
                    .querySelector(".service-card__title")
                    ?.textContent
                    .trim() || "";

            modalTitle.style.display = "block";

        }

        modalContent.innerHTML = renderSections(detail.sections);

        if(detail.note){

            modalContent.insertAdjacentHTML(
                "beforeend",
                `
                <p class="service-modal__note">
                    ${detail.note}
                </p>
                `
            );

        }

    }

    card.setAttribute(
        "aria-expanded",
        "true"
    );

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    modal.classList.add(
        "is-open"
    );

    document.body.classList.add(
        "modal-open"
    );

    dialog.scrollTop = 0;

    requestAnimationFrame(() => {
        dialog.focus();
    });

}


/* ==========================================
   ZAVŘENÍ MODÁLU
========================================== */

function closeServiceModal(){

    if(
        !modal?.classList.contains("is-open")
    ){
        return;
    }


    modal.classList.remove(
        "is-open"
    );

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );


    serviceCards.forEach(card => {

        card.setAttribute(
            "aria-expanded",
            "false"
        );

    });


    if(lastFocusedElement){

        lastFocusedElement.focus();

    }

}


/* ==========================================
   KLIKNUTÍ NA DLAŽDICI
========================================== */

serviceCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            openServiceModal(
                card.dataset.serviceDetail,
                card
            );

        }
    );


    card.addEventListener(
        "keydown",
        event => {

            if(
                event.key === "Enter" ||
                event.key === " "
            ){

                event.preventDefault();

                openServiceModal(
                    card.dataset.serviceDetail,
                    card
                );

            }

        }
    );

});


/* ==========================================
   KŘÍŽEK
========================================== */

closeButtons.forEach(button => {

    button.addEventListener(
        "click",
        closeServiceModal
    );

});


/* ==========================================
   KLIKNUTÍ MIMO MODAL
========================================== */

modal?.addEventListener(
    "click",
    event => {

        if(event.target === modal){

            closeServiceModal();

        }

    }
);


/* ==========================================
   ESC + OVLÁDÁNÍ KLÁVESNICÍ
========================================== */

document.addEventListener(
    "keydown",
    event => {

        if(
            !modal?.classList.contains("is-open")
        ){
            return;
        }


        if(event.key === "Escape"){

            event.preventDefault();

            closeServiceModal();

            return;
        }


        if(
            event.key !== "Tab" ||
            !dialog
        ){
            return;
        }


        const focusable =
            dialog.querySelectorAll(
                'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );


        if(focusable.length === 0){

            event.preventDefault();

            dialog.focus();

            return;
        }


        const first =
            focusable[0];

        const last =
            focusable[
                focusable.length - 1
            ];


        if(
            event.shiftKey &&
            document.activeElement === first
        ){

            event.preventDefault();

            last.focus();

        }
        else if(
            !event.shiftKey &&
            document.activeElement === last
        ){

            event.preventDefault();

            first.focus();

        }

    }
);