
$(function () {
    $('Form#hire').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
        $.ajax({
        type: "POST",
        url: config.apiEngine,
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
  