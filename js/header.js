let html = ` 
    <li><a href="./index.html">FIRST PAGE</a></li>
    <li><a href="./about.html">ABOUT US</a></li>
    <li><a href="./hire.html">HIRING OPTIONS</a></li>
    <li><a href="./job.html">JOB SEEKERS</a></li>
    <li><a href="mailto:contact@aizenrecruitment.com?Subject=CV">SEND CV</a></li>      
    <li><a href="./contact.html">CONTACT</a></li>`
$('.header').append(html);

let headeMobile = `
    <li><a href="./index.html">FIRST PAGE</a></li>
    <li><a href="./about.html">ABOUT US</a></li>
    <li><a href="./hire.html">HIRING OPTIONS</a></li>
    <li><a href="./job.html">JOB SEEKERS</a></li>
    <li><a href="mailto:contact@aizenrecruitment.com?Subject=CV">SEND CV</a></li>      
    <li><a href="./contact.html">CONTACT</a></li>
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
    console.log("header")

    if (headerMobile.style.display === "flex") {
        headerMobile.style.display = "none";
    } else {
        headerMobile.style.display = "flex";
    }
  }