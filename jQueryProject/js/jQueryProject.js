// Executes all of the code below when the page is loaded
$(document).ready(function () {
    // Displays the height of all sections in the console
    $("section.content").each(function () { // each() used to get each element that the selector finds
        console.log("This element's height is " + $(this).height() + "px");
    });

    // Removes the element that is clicked and adds a new element
    $("#remove").click(function () {
        $(this).parent().append("<b>A new element has been add!</b>");
        $(this).remove();
        alert("The old element has been removed!");  // displays a message to confirm that the old element was removed
    });

    // Plays a fade animation when an element is clicked
    $("#fade").click(function () {
        $(this).fadeOut("slow", function () {
            $("#fade").fadeIn("slow");
        });
    });

    // Plays a slide animation when an element is clicked
    $("#slide").click(function () {
        $(this).slideToggle("slow", function () {   // slides down, then slides back up
            $(this).slideToggle("slow");
        });
    });

    // Changes the styles of an element when clicked
    $("#style").click(function () {
        $(this).css({ "font-weight": "bold", "font-style": "italic", "cursor": "text" });
        $(this).html("You changed me!");    // changes the text to show the change that has been made
    });

    // Plays an animation when an element is clicked
    $("#animate").click(function () {
        $(this).animate({ opacity: ".3" }, "slow", function () {    // becomes see-through, then solid again
            $(this).animate({ opacity: "1" }, "slow");
        });
    });

    // Displays the text in the element that's been double clicked
    $("#change-text").dblclick(function () {
        $(this).text("New text!");
        $(this).css("cursor", "text");  // adds a new style to show that the new text will never change
    });

    // Hides the content of an element on hover, then redisplays it when the element is not being hovered over
    $("#hide").hover(function () {
        $(this).hide();
    },
        function () {
            $(this).show();
        });

    // Displays a message in the console when the input text field is in focus
    $("#text-input").focus(function () {
        console.log("The user is entering their name");
    });

    // Displays a message in the console when a new radio button is selected
    $(":radio").change(function () {
        console.log("The radio button '" + $(this).val() + "' was selected");    // displays which radio button was selected
    })

    // Displays messages in the console when the input number field is in focus and/or if a certain key is pressed
    $("#number-input").on({
        focus: function () {
            console.log("The user is entering a number");
        },
        keydown: function (event) {
            if (event.keyCode == 38 || event.keyCode == 40) {   // checks if an arrow up or down key was entered
                console.log("The " + event.key + " key was pressed");  // displays which key was selected
            } else if (event.key.match(/\D/) && event.key.length == 1) {    // checks data that's 1 character long to see if it's numeric
                alert("Only numeric data should be entered");
            }
        }
    });

    // Displays a message when the form is submitted
    $("form").submit(function () {
        alert("The " + $(this).attr("name") + " form was submitted!");
    });

    // Toggles the class called "class" in the element that was clicked
    $("#toggle").click(function () {
        $(this).toggleClass("class");
    });

    // Sets a "id" attribute with a value of "demo" in the element that was clicked
    $("#id").click(function () {
        $(this).attr("id", "demo");
        $(this).text("The id attribute " + $(this).attr("id") + " was set!");   // changes the text to show the id was set
    });

    // Returns the width of the parent element (section) when it's child element is clicked
    $("#width").click(function () {
        alert("The width of this section is " + $(this).parent().width() + "px");
    });

    // Returns the element's "font-size" CSS property when it's clicked
    $("#font-size").click(function () {
        alert("This element's font size is " + $(this).css("font-size"));
    });
});