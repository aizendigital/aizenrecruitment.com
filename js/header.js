document.writeln("<script type='text/javascript' src='config/config.js'></script>");

let html = ` 
    <li><a href="./index.html">FIRST PAGE</a></li>
    <li><a href="./about.html">ABOUT US</a></li>
    <li><a href="./hire.html">HIRING OPTIONS</a></li>
    <li><a href="./job.html">JOB SEEKERS</a></li>
    <li><a class="mySendBtn">SEND CV</a></li>      
    <li><a href="./contact.html">CONTACT</a></li>`
$('.header').append(html);

let headeMobile = `
    <li><a href="./index.html">FIRST PAGE</a></li>
    <li><a href="./about.html">ABOUT US</a></li>
    <li><a href="./hire.html">HIRING OPTIONS</a></li>
    <li><a href="./job.html">JOB SEEKERS</a></li>
    <li><a class="mySendBtn">SEND CV</a></li>     
    <li><a id="myBtnMobile" href="./contact.html">CONTACT</a></li>
    <div class="social">
        <a class="fab fa-facebook-square" href="" ></a>
        <a class="fab fa-twitter-square" href="" ></a>
        <a class="fab fa-linkedin" href="" ></a>
    </div>
`;
$('#header-mobile').append(headeMobile);

// menu in mobile

function checkMobileNavigation() {
    var headerMobile = document.getElementById("header-mobile");
    if (headerMobile.style.display === "flex") {
        headerMobile.style.display = "none";
    } else {
        headerMobile.style.display = "flex";
    }
  }

let modalView = `
    <div class="modal-content">
        <div class="modal-header">
            <span class="close">&times;</span>
            <h2>Send CV</h2>
            <h4>Please insert requeired field.</h4>
        </div>
        <div class="modal-body">
            <div id="sendCV">
                <label for="name">name</label>
                <input 
                class="signup-input" type="text" 
                autocomplete="off" name="name"  autocomplete="off"
                placeholder="Name" id="name" />
                <label for="email">email</label>
                <input name="email" class="signup-input"
                 type="email" id="email"  autocomplete="off">
                <label for="phone">Phone</label>
                <input name="phone" class="signup-input"
                 autocomplete="off" type="tel" id="phone" >
                <label for="cv">Upload CV</label>
                <input class="upload-file" type="file" id="inputFile" name="inputFile" accept="application/pdf,application/vnd.ms-excel" />
                <p class="error" style="display: none;"></p>
                <div class="error">
                    <span>There are all required!!! (--__--) Fill All Fields Please!</span>
                </div>
                <div class="success">
                    <span >Success!!! (^____^)</span>
                </div>
                <div class="absolute-container">
                    <button type="submit" id="submit-cv" class="btn send-submit">Send</button>
                </div>
            </div>
        </div>
    </div>
`;
$('#myModal').append(modalView);

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

$( '.mySendBtn' ).click (function(e) {
  modal.style.display = "flex";
});

span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


$(document).ready(function () {

    //send CV
    $('#sendCV #name').on('input', function() {
		if($(this).val()){$(this).removeClass("invalid").addClass("valid")}
		else{$(this).removeClass("valid").addClass("invalid")}
    })
    $('#sendCV #email').on('input', function() {
		if($(this).val() && $(this).val().includes('@') && $(this).val().includes('.')){$(this).removeClass("invalid").addClass("valid")}
		else{$(this).removeClass("valid").addClass("invalid")}
    })
    $('#sendCV #phone').on('input', function() {
		if($(this).val()){$(this).removeClass("invalid").addClass("valid")}
		else{$(this).removeClass("valid").addClass("invalid")}
    })

    $('#sendCV #inputFile').on('input', function() {
		if($(this).val()){$(this).removeClass("invalid").addClass("valid")}
		else{$(this).removeClass("valid").addClass("invalid")}
    })  

    $("#submit-cv").click(function(e) {
          e.preventDefault()

        if(!$('#sendCV #name').hasClass('valid') || 
           !$('#sendCV #email').hasClass('valid') ||
           !$('#sendCV #phone').hasClass('valid') ||
           !$('#sendCV #inputFile').hasClass('valid')) {
                $('#sendCV .error').addClass("showError");
                $('#sendCV input').addClass("invalid");
           } else {
            $('#sendCV .error').removeClass("showError");

            var data = new FormData()
            data.append('name', $("#sendCV #name").val())
            data.append('email', $("#sendCV #email").val())
            data.append('phone', $("#sendCV #phone").val())
            data.append('inputFile', $('#sendCV #inputFile').prop('files')[0])

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
          $("#sendCV").find("input").val("");
          $('#sendCV .error').removeClass("showError");
          $('#sendCV input').removeClass("valid");
          $('#sendCV .success').addClass("showSuccess");
          setTimeout(function() {
          $('#contact .success').removeClass("showSuccess");
          }, 8000);
          modal.style.display = "none";
        }
      })
  })