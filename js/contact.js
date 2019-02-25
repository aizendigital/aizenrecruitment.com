var contact = [
    {
        country: "FRANCE",
        city: "- PARIS",
        contactLocation: [
            {
                address: "9 Rue du 4 Septembre, 75002 Paris",
                tel: "+33  1 73 06 04 94 "
            },
            {
                address: "14 Rue de Dunkerque 75010 Paris",
                tel: "+33 1 70 98 34 33",
            }
        ]
    },
    {
        country: "TURKEY",
        city: "- ISTANBUL",
        contactLocation: [
            {
                address: "Tomtom Mah. İstiklal Cad. No:189 Kat:2 Daire:3 Beyoğlu / İstanbul",
                tel: "+90 212 963 17 65 "
            }
        ]
    },
    {
        country: "SENEGAL",
        city: "",
        contactLocation: [
            {
                address: "Immeuble SIA, 1er étage Route de Ngor les Almadies Dakar, Senegal",
                tel: "+221 33 839 72 34"
            }
        ]
    },
]


function setContact() {
    for (var i = 1; i <= contact.length; i++) {
        contactInfo = contact[i - 1];
        html = `
        <div class='coloumn'>
            <h2 class='location'>
                <div class="circle"></div><span>`+ contactInfo.country +`</span>
                <span>`+ contactInfo.city +`</span>
            </h2>
            <div class="address">
                <b>Address:</b>` + contactInfo.contactLocation[0].address + `
            </div>
            <div class="phone">
                <b>Tel:</b> ` + contactInfo.contactLocation[0].tel + `
            </div>
         </fiv>`;
        $("#contact-info").append(html);

    }
}

$(document).ready(function() {
    setContact();
});


$('.contact-post').click(function() {
    var FormInput = $("Form#contact input").map(function(){
        var hireFormInput =  $(this).attr("name") + ":" + $(this).val();
        return (hireFormInput);
    }).get();
    var FormTextarea = $("Form#contact textarea").map(function(){
        var hireFomTextarea =  $(this).attr("name") + ":" + $(this).val();
        return (hireFomTextarea);
    }).get();
    console.log(FormInput + FormTextarea );
});