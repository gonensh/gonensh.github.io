$(function() {
    var xhr = new XMLHttpRequest();
    window.xhr=xhr;
    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = encodeURIComponent($("input#name").val());
            var email = encodeURIComponent($("input#email").val());
            var phone = encodeURIComponent($("input#phone").val());
            var message = encodeURIComponent($("textarea#message").val());
            var firstName = encodeURIComponent(name); // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }

            //var xhr = new XMLHttpRequest();
            xhr.open("POST", "http://www.temple.edu/cgi-bin/mail?gsh.dev@temple.edu", true);
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=UTF-8");
            //xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.onreadystatechange = function(){
                window.xhr=xhr;
              console.log("XHR readystate: ",xhr.readyState,"XHR: ",xhr);
              if (xhr.readyState==4 && xhr.status==200) console.log("XHR Response: ",xhr.responseText);
            }
            xhr.send("subject=GONENSH.TK Response&"+
                     "name="+name+"&"+
                     "phone="+phone+"&"+
                     "email="+email+"&"+
                     "message="+message);
            /*
            $.ajax({
                url: "http://www.temple.edu/cgi-bin/mail?gsh.dev@temple.edu",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                complete:function(jqXhr,status){
                    console.log("jqXhr: ",jqXhr,"status: ",status);
                }
            })*/
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});

