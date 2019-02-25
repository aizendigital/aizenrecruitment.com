// $('.submit-post').click(function() {
//     var FormInput = $("Form#hire input").map(function(){
//         var hireFormInput = $(this).attr("name") + ":" + $(this).val();
//         return (hireFormInput);
//     }).get();
//     var FormTextarea = $("Form#hire textarea").map(function(){
//         var hireFomTextarea = $(this).attr("name") + ":" + $(this).val();
//         return (hireFomTextarea);
//     }).get();

// });
$(function () {
    $('Form#hire').on('submit', function (e) {
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
  