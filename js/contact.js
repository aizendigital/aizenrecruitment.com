document.writeln("<script type='text/javascript' src='config/config.js'></script>");

console.log(apiEngineForm)
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


  $(document).ready(function () {
    //set contact information
    setContact();

    //contactform
    $('#name').on('input', function() {
		if($(this).val()){$(this).removeClass("invalid").addClass("valid")}
		else{$(this).removeClass("valid").addClass("invalid")}
    })
    $('#email').on('input', function() {
		if($(this).val() && $(this).val().includes('@') && $(this).val().includes('.')){$(this).removeClass("invalid").addClass("valid")}
		else{$(this).removeClass("valid").addClass("invalid")}
			})
    $('#comment').on('input', function() {
		if($(this).val()){$(this).removeClass("invalid").addClass("valid")}
		else{$(this).removeClass("valid").addClass("invalid")}
            })
    $("#submit-contact").click(function(e) {
          e.preventDefault()

        if(!$('#contact #name').hasClass('valid') || 
           !$('#contact #email').hasClass('valid') ||
           !$('#contact #comment').hasClass('valid') ) {
                $('#contact .error').addClass("showError");
                $('#contact input, #contact textarea').addClass("invalid");
           } else {
            $('#contact .error').removeClass("showError");

            var data = new FormData()
            data.append('name', $("#name").val())
            data.append('email', $("#email").val())
            data.append('comment', $("#comment").val())
          $.ajax({
              type: "POST",
              url: apiEngineForm,
              data: data,
              processData: false,
              contentType: false,
              success: function (result, stat, xhr){
              },
              error: function(result){
              }
          })
          $("#contact").find("input, textarea").val("");
          $('#contact .error').removeClass("showError");
          $('#contact input, #contact textarea').removeClass("valid");
          $('#contact .success').addClass("showSuccess");
          setTimeout(function() {
            $('#contact .success').removeClass("showSuccess");
         }, 10000);
        }
      })
  })