document.writeln("<script type='text/javascript' src='config/config.js'></script>");

  $(document).ready(function () {

    //Hire Form
    $('#name').on('input', function() {
		if($(this).val()){$(this).removeClass("invalid").addClass("valid")}
		else{$(this).removeClass("valid").addClass("invalid")}
    })
    $('#company').on('input', function() {
		if($(this).val()){$(this).removeClass("invalid").addClass("valid")}
		else{$(this).removeClass("valid").addClass("invalid")}
    })
    $('#email').on('input', function() {
		if($(this).val() && $(this).val().includes('@') && $(this).val().includes('.')){$(this).removeClass("invalid").addClass("valid")}
		else{$(this).removeClass("valid").addClass("invalid")}
    })
    $('#phone').on('input', function() {
		if($(this).val()){$(this).removeClass("invalid").addClass("valid")}
		else{$(this).removeClass("valid").addClass("invalid")}
    })
    $('#position-hire').on('input', function() {
		if($(this).val()){$(this).removeClass("invalid").addClass("valid")}
		else{$(this).removeClass("valid").addClass("invalid")}
    })
    $('#position-type').on('input', function() {
		if($(this).val()){$(this).removeClass("invalid").addClass("valid")}
		else{$(this).removeClass("valid").addClass("invalid")}
    })
    $('#comment').on('input', function() {
		if($(this).val()){$(this).removeClass("invalid").addClass("valid")}
		else{$(this).removeClass("valid").addClass("invalid")}
            })
    $("#submit-hire").click(function(e) {
          e.preventDefault()

        if(!$('#hire #name').hasClass('valid') || 
           !$('#hire #company').hasClass('valid') ||
           !$('#hire #email').hasClass('valid') ||
           !$('#hire #phone').hasClass('valid') ||
           !$('#hire #position-hire').hasClass('valid') ||
           !$('#hire #position-type').hasClass('valid') ||
           !$('#hire #comment').hasClass('valid') ) {
                $('#hire .error').addClass("showError");
                $('#hire input, #hire textarea').addClass("invalid");
           } else {
            $('#hire .error').removeClass("showError");

            var data = new FormData()
            data.append('name', $("#name").val())
            data.append('company', $("#company").val())
            data.append('email', $("#email").val())
            data.append('phone', $("#phone").val())
            data.append('position hire', $("#position-hire").val())
            data.append('position type', $("#position-type").val())
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
          $("#hire").find("input, textarea").val("");
          $('#hire .error').removeClass("showError");
          $('#hire input, #hire textarea').removeClass("valid");
          $('#hire .success').addClass("showSuccess");
        }
      })
  })