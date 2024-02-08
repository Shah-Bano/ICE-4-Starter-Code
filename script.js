// JQuery Code Here
//wrap code in ready method

//select document object, called docready, with a callback function

$(document).ready(function () {
    console.log("DOM is ready to be manipulated :p")

    //animate the forms appearance

    $('#registration-form').hide().fadeIn(200);
    //handle form submission

    $('#signup-form').submit(function(event){

        //stops the page from refreshing once form is submitted
        event.preventDefault();

        // The val () method returns or sets the value attribute. trim() method cuts off any blank spaces before or after
        let name = $('#name').val().trim();
        let email = $('#email').val().trim();

        //No trim required cuz its a selecting input no typing
        let date = $('#date').val();

        let isValid = true;

        console.log(name);
        console.log(email);
        console.log(date);


        if( name== ""){
            alert("Please enter your name!!!");
            isValid = false;
        }
        if( email == ""){
            alert("ENTER UR EMAIL");
            isValid = false;
        }
        if (date == "" ){
            alert("Please SELECT a date");
            isValid = false;
        }

        if (isValid) {
            $('#confirmation-message').slideUp(function () {
                $(this).html(`
                    <p>Thank you, <strong>${name}</strong></p>
                    <p>Your registration for the show on <strong>${date}</strong> is confirmed</p>
                    <p>A confirmation email has been sent to: <strong>${email}</strong></p>
                `).slideDown();
                
                // Clear form fields after submission
                $('#signup-form').find("input[type=text], input[type=email], select").val("");

                // Call fadeOut.
                setTimeout(function () {
                    $('#confirmation-message').fadeOut(10000);
                }); 
            });
        }
    });


    // Reset button will clear all the values and slide up for the confirmation message. It is calling the id from my new button in the html
    $('#reset-button').click(function () {
        $('#signup-form').find("input[type=text], input[type=email], select").val("");
        $('#confirmation-message').html("");
    });

    $('input, select').focus(function () {
        $(this).animate(
            {
                borderColor: "#ddd"
            }, 500
        );
    }).blur(function () {
        $(this).animate(
            {
                backgroundColor: '#ddd'
            }, 500
        );
    });

    $('input, select').focus(function (){
        $(this).animate(
            {
                borderColor: "#ddd"
            }, 500
        )
    }).blur(function(){
        $(this).animate(
            {
                backgroundColor: '#ddd'
            }, 500
        )
    });

    $("#signup-form input[type=submit]").hover(
        function () {
            $(this).animate(
                {
                    backgroundColor: "#333333"
                }, 200
            );
        },
        function () {
            $(this).animate(
                {
                    backgroundColor: "#5c5c5c"
                }, 200
            )
    });

    

});