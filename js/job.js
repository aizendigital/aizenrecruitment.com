var urlParams = new URLSearchParams(window.location.search);
var JobPage = urlParams.get('jobpage');

var products = [
    {
        product: {
            id:"pr1",
            title: "Developpeur C#",
            subtitle: "",
            information: "Projet: application permettant la gestion des transactions (Front et Back). 300 Développeurs, des millions de lignes de codes et 15 base de données (Oracle principalement), une centaine D’API (http) et 230000 tests en continue Code…",
            surrey: "Paris",
            petmanet: "Freelance",
            minCost: "",
            maxCost: "",
            bens: "",
            applyLink: "https://taleez.com/apply/3q4ilf9#/apply",
            insideProduct: {
                cost: "£30,000",
                sub: "CRM & Email",
                location: "Greater London",
                type: "Permanent",
                limit: "£25000 - £30000 per annum",
                description: `
                    A leading publisher are looking for a motivated CRM Executive to join their established CRM team. Your main responsibilities will be to ensure that you are building relevant and highly targeted campaigns – that deliver results.
                    <br/><br/>This is an entry level role, so whether you have had an internship in a CRM/Email/Digital position, or if you are looking for your 2nd job in CRM/Email then this could be a great fit!`,
                responsibilities: `
                    Work closely with the CRM, broad marketing and sales team to build and deliver weekly campaigns of a high standard <br/>
                    Manage day-to-day email campaigns <br/>
                    Work on the trigger campaigns across the database <br/>
                    Check BAU email campaigns, and ensure they are fit for purpose <br/>
                    Work closely with the design team`,
                skills: `
                    Experience and proven results in creating engaging email marketing campaigns <br/>
                    Understanding of customer journeys and retention, acquisition and engagement <br/>
                    Ideally educated to degree level <br/>
                    Good team player, and confident presenting to stakeholders <br/>
                    Previous experience in a marketing/ CRM role <br/>
                    To apply, please send your CV to – mchristie@welovesalt.com<br/><br/>`,
                information: `This job ad was posted by Salt. To find out more about Salt’s Privacy Policy and how your application is processed, please visit our website https://www.welovesalt.com/privacy-policy/.<br/><br/>`,
                info: {
                    refrence: "JO-1902-145738",
                    salaryPer: "Annum",
                    jobDuration: "",
                    jobStartDate: "",
                }
            }   
        }
    },
    {
        product: {
            id:"pr2",
            title: "Ingénieur Mécanique Industriel",
            subtitle: "",
            information: " Sous la supervision du CTO, l’ingénieur mécanique sera notamment en charge de: Conception du design du produit et réalisation de plans mécaniques…",
            surrey: "Paris",
            petmanet: "Full-time",
            minCost: "€35,000",
            maxCost: "€55,000 per ",
            bens: "annum",
            applyLink: "https://taleez.com/apply/1ipot8m#/apply",
            insideProduct: {
                cost: "£30,000",
                sub: "CRM & Email",
                location: "Greater London",
                type: "Permanent",
                limit: "£25000 - £30000 per annum",
                info: {
                    refrence: "JO-1902-145738",
                    salaryPer: "Annum",
                    jobDuration: "",
                    jobStartDate: "",
                }
            }
        }
    },
    {
        product: {
            id:"pr3",
            title: "Data Analyst",
            subtitle: "",
            information: "statistique du service pour les clients de connaître les utilisations des kiosques de leurs utilisateurs (nombre de recherches, magasins plus recherchés, etc.)…",
            surrey: "Istanbul",
            petmanet: "Full-time",
            minCost: "€10,000",
            maxCost: "€18,000 per ",
            bens: "annum",
            applyLink: "https://taleez.com/apply/29da05o#/apply",
            insideProduct: {
                cost: "£30,000",
                sub: "CRM & Email",
                location: "Greater London",
                type: "Permanent",
                limit: "£25000 - £30000 per annum",
                info: {
                    refrence: "JO-1902-145738",
                    salaryPer: "Annum",
                    jobDuration: "",
                    jobStartDate: "",
                }
            }
        }
    },
    {
        product: {
            id:"pr4",
            title: "Automaticien",
            subtitle: "Metteur au Point CVC H/F",
            information: "Vous assurez toute la gestion des dossiers depuis la rédaction de l’analyse fonctionnelle à la mise en service sur le site. Vous êtes en charge du secteur en France avec les déplacements à l’international occasionnels…",
            surrey: "Palaiseau (91), Ile De France",
            petmanet: "Full-time",
            minCost: "€34,000",
            maxCost: "€45,000 per",
            bens: "anum",
            applyLink: "https://taleez.com/apply/3dftt33#/apply",
            insideProduct: {
                cost: "£30,000",
                sub: "CRM & Email",
                location: "Greater London",
                type: "Permanent",
                limit: "£25000 - £30000 per annum",
                info: {
                    refrence: "JO-1902-145738",
                    salaryPer: "Annum",
                    jobDuration: "",
                    jobStartDate: "",
                }
            }
        }
    },
    {
        product: {
            id:"pr5",
            title: "Infirmier Anesthésiste Diplômé d’Etat. CDI",
            subtitle: "",
            information: "Equipe: – Médecins anesthésistes, chirurgiens, Equipe soignante du bloc, Plateaux médico-techniques, Laboratoires, Pharmacie, Economat, Brancardiers, Service biomédical, Radiologie…",
            surrey: "Montpellier",
            petmanet: "Full-time",
            minCost: "€28,000",
            maxCost: "€49,000 per",
            bens: "anum",
            applyLink: "https://taleez.com/apply/17kkom1#/apply",
            insideProduct: {
                cost: "£30,000",
                sub: "CRM & Email",
                location: "Greater London",
                type: "Permanent",
                limit: "£25000 - £30000 per annum",
                info: {
                    refrence: "JO-1902-145738",
                    salaryPer: "Annum",
                    jobDuration: "",
                    jobStartDate: "",
                }
            }
        }
    },
    {
        product: {
            id:"pr6",
            title: "Infirmier Anesthésiste Diplômé d’Etat . CDD",
            subtitle: "",
            information: "Equipe: – Médecins anesthésistes, chirurgiens, Equipe soignante du bloc, Plateaux médico-techniques, Laboratoires, Pharmacie, Economat, Brancardiers, Service biomédical, Radiologie…",
            surrey: "Montpellier",
            petmanet: "Full-time",
            minCost: "",
            maxCost: "",
            bens: "",
            applyLink: "https://taleez.com/apply/ogc9v#/apply",
            insideProduct: {
                cost: "£30,000",
                sub: "CRM & Email",
                location: "Greater London",
                type: "Permanent",
                limit: "£25000 - £30000 per annum",
                info: {
                    refrence: "JO-1902-145738",
                    salaryPer: "Annum",
                    jobDuration: "",
                    jobStartDate: "",
                }
            }
        }
    }
];

function setProducts() {
    
    for(var i = 1; i<= products.length; i++) {
        var product = products[i-1].product;
        generateViewLink = './job-inside.html?jobpage=' + product.id;

        html = `<div class="job-card">
                    <div></div>
                    <div class='main-title'>
                        <h2 class='head'>`+product.title+`</h2>
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
                        <a class="btn-apply" href='`+generateViewLink+`'> View</a>
                    </div>
                    <div></div>
                </div>`;
        $("#job-card").append(html);
    }
}
function loadJobInside(index) {
    jobPageIndex = products[index-1].product;
    JobInside = jobPageIndex.insideProduct;
    var headerHtml =`
        <div></div>
        <div class="top">
            <div class="job-inside-header-content">
                <h1>`+jobPageIndex.title+`<h1>
                <h2>`+JobInside.cost+`</h2>
                <span>`+JobInside.sub+`</span>            
                <span>`+JobInside.location+`</span>            
                <span>`+JobInside.type+`</span>            
                <span>`+JobInside.limit+`</span>            
                
            </div>
            <a class="job-inside-header-btn" href='`+jobPageIndex.applyLink+`'> Apply</a>
        </div>
        <div></div>
    `;
    var BodyHtml = `
        <div></div>
        <div class="body">
            <div>
                ` + JobInside.description +`
            </div>
            <div>
            <div class="title"> Responsibilities</div> 
                ` + JobInside.responsibilities +`
            </div>
            <div>
                <div class="title"> Skills & Experience</div>
                ` + JobInside.skills +`
            </div>
            <div>
                ` + JobInside.information +`
            </div>
            <div class="job-inside-info">
                <div class="refrence">
                    Job Reference:
                    <span>`+ JobInside.info.refrence +`</span>
                </div>
                <div>
                    Salary: 
                    <span>`+JobInside.limit+`</span>     
                </div>
                <div>
                    Salary per:
                    <span>`+ JobInside.info.salaryPer +`</span>
                </div>
                <div>
                    Job Duration:
                    <span>`+ JobInside.info.jobDuration +`</span>
                </div>
                <div>
                    Job Start Date:
                    <span>`+ JobInside.info.jobStartDate +`</span>
                </div>
            </div>
            <div class="job-inside-btn">
                <a href='`+jobPageIndex.applyLink+`'> Apply </a>
            </div>
        </div>
        <div></div>
    `
    $(".job-inside-header").append(headerHtml);
    $(".job-inside-body").append(BodyHtml);

}

switch (JobPage) {
    case "pr1" : 
        loadJobInside(1);
        break;
    case "pr2" : 
        loadJobInside(2);
        break;
    case "pr3" : 
        loadJobInside(3);
        break;
    case "pr4" : 
        loadJobInside(4);
        break;
    case "pr5" : 
        loadJobInside(5);
        break;
    case "pr6" : 
        loadJobInside(6);
        break;
}



$(document).ready(function() {
    setProducts();
});
