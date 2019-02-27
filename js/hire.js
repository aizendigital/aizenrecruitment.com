$("#submit-button").click(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "localhost:4010/submit",
        data: {
            email: emailInput.value,
            name: nameInput.value,
            phone: document.getElementById('phone').value,
            company: document.getElementById('company').value,
            position: document.getElementById('element').value,
            positionType: document.getElementById('positionType').value
        },
        success: function (result) {
            return e.statusCode()
        },
        error: function(result) {
           return e.statusCode()
        }
    });
});

}
