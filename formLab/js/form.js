/**
 * Retrieves the data stored in local storage
 */
window.onload = function getData() {
    const name = document.forms["form"]["name"];
    const email = document.forms["form"]["email"];
    const age = document.forms["form"]["age"];

    if (typeof Storage !== "undefined") {
        name.value = String(localStorage.getItem("name"));
        email.value = String(localStorage.getItem("email"));
        age.value = parseInt(String(localStorage.getItem("age")));
    }
};

/**
 * Used to display an extra error message when an invalid email is entered
 */
document.querySelector("input[type=submit]").onclick = function invalidEmail() {
    const email = document.forms["form"]["email"];

    if (email.validity.patternMismatch) {
        alert(
            "Email is in the incorrect format, it should look something like this: example@gmail.com"
        );
    }
};

/**
 * Validates the data that was entered
 *
 * @returns a Boolean value (true or false)
 */
function validation() {
    var errors = false; // determines if any errors were found

    // Validates name
    const name = document.forms["form"]["name"];
    if (name.value == "") {
        alert("Name was not entered");
        errors = true;
    }

    // Validates age
    const age = document.forms["form"]["age"];
    if (age.value < 0) {
        alert("Age should be greater than or equal to 0");
        errors = true;
    }

    // Validates email
    const email = document.forms["form"]["email"];
    if (email.value != "") {
        if (email.validity.patternMismatch) {
            errors = true;
        }
    }

    if (errors) {
        return false;
    } else {
        alert("The form was submitted");
        storeData();
        return true;
    }
}

/**
 * Stores the data that was entered in local storage
 */
function storeData() {
    const name = document.forms["form"]["name"];
    const email = document.forms["form"]["email"];
    const age = document.forms["form"]["age"];

    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("age", age.value);
}