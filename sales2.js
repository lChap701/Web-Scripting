// sales2.js
// Ajax JQuery code for the sales2.html document
/********************************************************/
// function getPlace
// Uses document ready to set up the event handler for the zip blur event.
// Uses the $.get to request the city and state from the server program.
// uses a URL parameter to send the zip code to server program.
// Creates a callback function that uses .val() method to get the form field for city and state to see 
//if they are empty, and if it is empty then uses.val() to set the matching city and state.
$(document).ready(function() {
    $("#zip").blur(function() {
        $.get("getCityState.php?zip=" + $("#zip").val(), function(data, status) {
            var place = data.split(', ');
            if ($("#city").val() == "")
                $("#city").val(place[0]);
            if ($("#state").val() == "")
                $("#state").val(place[1]);
        });
    });
});