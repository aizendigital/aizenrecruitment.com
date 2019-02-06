var contact = [
    {
        country: "FRANCE",
        city: "PARIS",
        contactInfo: {
            address:[
                "9 Rue du 4 Septembre, 75002 Paris",
                "14 Rue de Dunkerque 75010 Paris"
            ],
            tell:[
                "+33 1 70 98 34 33",
                "+33  1 73 06 04 94 "
            ]
        }
    },
    {
        country: "TURKEY",
        city: "ISTANBUL",
        contactInfo: {
            address:[
                "Tomtom Mah. İstiklal Cad. No:189 Kat:2 Daire:3 Beyoğlu / İstanbul"
            ],
            tell:[
                " +90 212 963 17 65"
            ]
        }
    },
    {
        country: "SENEGAL",
        city: "",
        contactInfo: {
            address:[
                " Immeuble SIA, 1er étage Route de Ngor les Almadies Dakar, Senegal"
            ],
            tell:[
                "+221 33 839 72 34"
            ]
        }
    },
]
function setContact() {
    for (var i = 1; i <= contact.length; i++) {
        contactInfo = contact[i-1];
    
        html = `
        <div class='coloumn'>
            <div class='location'>
                <span>`+ contactInfo.country +`</span>
                <span>`+ contactInfo.city +`</span>
            </div>`+addressInfo+`
            <div class="address" >
                Address:
            </div>
            <div class="phone">
                Tel: 
            </div>
        </div>
        `;
        $("#contact-infor").append(html);

    }
}

$(document).ready(function() {
    setContact();
});