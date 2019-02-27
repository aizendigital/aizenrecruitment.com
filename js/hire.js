document.writeln("<script type='text/javascript' src='config/config.js'></script>");

  $(document).ready(function () {

    //Hire Form
    $('#hire #name').on('input', function() {
		if($(this).val()){$(this).removeClass("invalid").addClass("valid")}
		else{$(this).removeClass("valid").addClass("invalid")}
    })
    $('#hire #company').on('input', function() {
		if($(this).val()){$(this).removeClass("invalid").addClass("valid")}
		else{$(this).removeClass("valid").addClass("invalid")}
    })
    $('#hire #email').on('input', function() {
		if($(this).val() && $(this).val().includes('@') && $(this).val().includes('.')){$(this).removeClass("invalid").addClass("valid")}
		else{$(this).removeClass("valid").addClass("invalid")}
    })
    $('#hire #phone').on('input', function() {
		if($(this).val()){$(this).removeClass("invalid").addClass("valid")}
		else{$(this).removeClass("valid").addClass("invalid")}
    })
    $('#hire #position-hire').on('input', function() {
		if($(this).val()){$(this).removeClass("invalid").addClass("valid")}
		else{$(this).removeClass("valid").addClass("invalid")}
    })
    $('#hire #position-type').on('input', function() {
		if($(this).val()){$(this).removeClass("invalid").addClass("valid")}
		else{$(this).removeClass("valid").addClass("invalid")}
    })
    $('#hire #comment').on('input', function() {
		if($(this).val()){$(this).removeClass("invalid").addClass("valid")}
		else{$(this).removeClass("valid").addClass("invalid")}
            })
    $("#hire #submit-hire").click(function(e) {
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
            data.append('name', $("#hire #name").val())
            data.append('company', $("#hire #company").val())
            data.append('email', $("#hire #email").val())
            data.append('phone', $("#hire #phone").val())
            data.append('position hire', $("#hire #position-hire").val())
            data.append('position type', $("#hire #position-type").val())
            data.append('comment', $("#hire #comment").val())

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