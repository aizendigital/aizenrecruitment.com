var products = [
    {
        product: {
            title: "Developpeur C#",
            subtitle: "",
            information: "Projet: application permettant la gestion des transactions (Front et Back). 300 Développeurs, des millions de lignes de codes et 15 base de données (Oracle principalement), une centaine D’API (http) et 230000 tests en continue Code…",
            surrey: "Paris",
            petmanet: "Freelance",
            minCost: "",
            maxCost: "",
            bens: "",
            applyLink: "https://taleez.com/apply/3q4ilf9#/apply"
        }
    },
    {
        product: {
            title: "Ingénieur Mécanique Industriel",
            subtitle: "",
            information: " Sous la supervision du CTO, l’ingénieur mécanique sera notamment en charge de: Conception du design du produit et réalisation de plans mécaniques…",
            surrey: "Paris",
            petmanet: "Full-time",
            minCost: "€35,000",
            maxCost: "€55,000 per ",
            bens: "annum",
            applyLink: "https://taleez.com/apply/1ipot8m#/apply"
        }
    },
    {
        product: {
            title: "Data Analyst",
            subtitle: "",
            information: "statistique du service pour les clients de connaître les utilisations des kiosques de leurs utilisateurs (nombre de recherches, magasins plus recherchés, etc.)…",
            surrey: "Istanbul",
            petmanet: "Full-time",
            minCost: "€10,000",
            maxCost: "€18,000 per ",
            bens: "annum",
            applyLink: "https://taleez.com/apply/29da05o#/apply"
        }
    },
    {
        product: {
            title: "Automaticien",
            subtitle: "Metteur au Point CVC H/F",
            information: "Vous assurez toute la gestion des dossiers depuis la rédaction de l’analyse fonctionnelle à la mise en service sur le site. Vous êtes en charge du secteur en France avec les déplacements à l’international occasionnels…",
            surrey: "Palaiseau (91), Ile De France",
            petmanet: "Full-time",
            minCost: "€34,000",
            maxCost: "€45,000 per",
            bens: "anum",
            applyLink: "https://taleez.com/apply/3dftt33#/apply"
        }
    },
    {
        product: {
            title: "Infirmier Anesthésiste Diplômé d’Etat. CDI",
            subtitle: "",
            information: "Equipe: – Médecins anesthésistes, chirurgiens, Equipe soignante du bloc, Plateaux médico-techniques, Laboratoires, Pharmacie, Economat, Brancardiers, Service biomédical, Radiologie…",
            surrey: "Montpellier",
            petmanet: "Full-time",
            minCost: "€28,000",
            maxCost: "€49,000 per",
            bens: "anum",
            applyLink: "https://taleez.com/apply/17kkom1#/apply"
        }
    },
    {
        product: {
            title: "Infirmier Anesthésiste Diplômé d’Etat . CDD",
            subtitle: "",
            information: "Equipe: – Médecins anesthésistes, chirurgiens, Equipe soignante du bloc, Plateaux médico-techniques, Laboratoires, Pharmacie, Economat, Brancardiers, Service biomédical, Radiologie…",
            surrey: "Montpellier",
            petmanet: "Full-time",
            minCost: "",
            maxCost: "",
            bens: "",
            applyLink: "https://taleez.com/apply/ogc9v#/apply"
        }
    }
];

function setProducts() {
    
    for(var i = 1; i<= products.length; i++) {
        var product = products[i-1].product;
        html = `<div class="job-card">
                    <div></div>
                    <div class='main-title'>
                        <p class='head'>`+product.title+`</p>
                        <span>`+product.subtitle+`</span>
                    </div>
                    <div class='main-info'><p>`+product.information+`</p></div>
                    <div class='main-cost'>
                        <b>`+product.surrey+`</b>
                        <b>`+product.petmanet+`</b>
                        <b>`+product.minCost+`</b>
                        <b>`+product.maxCost+`</b>
                        <b>`+product.bens+`</b>
                    </div>
                    <div class='main-btn'>
                        <a class="btn-apply" href='`+product.applyLink+`'> Apply</a>
                    </div>
                    <div></div>
                </div>`;
        $("#job-card").append(html);
    }
}

$(document).ready(function() {
    setProducts();
});
