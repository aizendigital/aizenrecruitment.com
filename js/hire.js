$('.submit-post').click(function() {
    var FormInput = $("Form#hire input").map(function(){
        var hireFormInput = $(this).attr("name") + ":" + $(this).val();
        return (hireFormInput);
    }).get();
    var FormTextarea = $("Form#hire textarea").map(function(){
        var hireFomTextarea = $(this).attr("name") + ":" + $(this).val();
        return (hireFomTextarea);
    }).get();


});