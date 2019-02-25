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
            <form id="sendCV" action="http://localhost:4012/submit" method="post" enctype="multipart/form-data">
                <label for="name">name</label>
                <input name="name" class="signup-input" type="text">
                <label for="email">email</label>
                <input name="email" class="signup-input" type="email">
                <label for="phone">Phone</label>
                <input name="phone" class="signup-input" 
                 pattern="\d*" inputmode="numeric" type="number" >
                <label for="cv">Upload CV</label>
                <input class="upload-file" type="file" name="inputFile" accept="application/pdf,application/vnd.ms-excel" />
                <p class="error" style="display: none;"></p>
                <div class="absolute-container">
                    <button type="submit" class="btn send-submit">Send</button>
                </div>
            </form>
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

// $('.send-submit').click(function() {
//   var t = $("Form#sendCV input").map(function(){
//       var hireFormInput = $(this).attr("name") + ":" + $(this).val();
//       return (hireFormInput);
//   }).get();
// });


$(function () {
  $('Form#sendCV').on('submit', function (e) {
   if (!e.isDefaultPrevented()) {
    $.ajax({
     type: "POST",
     url: "http://localhost:4012/submit",
     data: new FormData(this),
     processData: false,
     contentType: false,
     success: function (data) {
          alert(data)
     }
    })
    return false
   }
  })
})
