function formValidation() {
    clearErrors();
    var valid = password1();
    var email = validCity();
    var user = username1();
    var phone = validatePhoneNumber();
    var street = validStreet();
    var zip = checkZip();
    if (valid && email && user && phone && street && zip) {
        return true;
    } else {
        return false;
    }

}

function clearErrors() {
    document.getElementById('errors').innerHTML = "";
}


function showErrors(messages) {
    document.getElementById('errors').innerHTML += "<p>" + messages + "</p>";
}


function password1() {
    var password = document.querySelector("#password");
    var inputValue = password.value.trim();
    var newpass = document.querySelector("#r_password");
    var valid = true;
    var a = 0;
    var digit = /\d/;
    if (inputValue.length < 8) {
        valid = false;
    }
    for (var i = 0; i < inputValue.length; i++) {
        if (inputValue.charAt(i) == inputValue.match(/[A-Z]/)) {
            a = 1;
        }
    }
    if (!(digit.test(inputValue))) {
        valid = false;
    }
    if (digit.test(inputValue.charAt(0))) {
        valid = false;
    }

    if (inputValue != newpass.value.trim()) {
        valid = false;
        showErrors("* The password strings must match");
        newpass.focus();
    }

    if (valid && a != 0) {
        return true;
    } else {
        showErrors("* Please enter password 8 characters long, which starts with a character and have at least 1 digit and 1 uppercase.");
        return false;
        password.focus();
    }
}

function validCity() {
    var allAlpha = true;
    var elem = document.getElementById("city");
    var inputValue = elem.value.trim();

    inputValue = inputValue.toUpperCase();
    for (var i = 0; i < inputValue.length; i++) {

        if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z") { allAlpha = false; }
    }
    if (!allAlpha) {
        showErrors("* Please enter a meaningful city with all alphabet letters");
        elem.focus();
        return false;
    } else
        return true;
}

function username1() {
    var user = document.querySelector("#username");
    var inputValue = user.value.trim();
    var valid = true;
    var digit = /\d/;

    if (inputValue.length < 6 || digit.test(inputValue.charAt(0)))
        valid = false;

    if (!valid) {
        showErrors("* Please enter username, which starts with a letter and have at least 6 character");
        user.focus();
        return false;
    } else {
        return true;
    }
}

function validatePhoneNumber() {
    var str = document.getElementById("phone").value;
    str = str.trim();
    var valid = true;
    var stringLength = str.length;

    if (stringLength == 0) {
        valid = false;
    }
    if (str.charAt(3) !== '-' || str.charAt(7) !== '-' || stringLength !== 12) {
        valid = false;
    }
    else {
        var i, flag = true, myArray = str.split('-');
        for (i = 0; i < 3; i++) {
            if (parseInt(myArray[i]) != myArray[i]) {
                flag = false;
                break;
            }
        }
    }
    if (!flag && !valid) {
        showErrors("* The phone number is in wrong format");
        return false;
    } else {
        return true;
    }

}



function validStreet() {
    var allAlpha = true;
    var elem = document.getElementById("street");
    var inputValue = elem.value.trim();

    inputValue = inputValue.toUpperCase();
    for (var i = 0; i < inputValue.length; i++) {
        if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z") { allAlpha = false;
         }
    }
    if (!allAlpha) {
        showErrors("* Please enter a meaningful Street name with all alphabet letters");
        elem.focus();
        return false;
    }
    return true;
}


function checkZip() {
    var post1 = document.querySelector("#postalcode");
    var post = post1.value.trim();
    if ((/^([a-zA-Z]\d[a-zA-z]\d[a-zA-Z]\d)$/.test(post))) {
        return true;
    } else {
        showErrors("* Please enter a meaningful postalcode. Only Canadian format allowed");
        post1.focus();
        return false;
        
    }
}

