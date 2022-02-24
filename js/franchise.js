//Resources

function checkEmpty(obj) {
    if (obj.value.trim() == "") {
        obj.style.border = "2px solid red";
        obj.focus();
        return false;
    }
    obj.style.border = "2px solid green";
    return true;
}
function checkEmail(obj) {
    var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!regexEmail.test(obj.value.trim())) {
        obj.style.border = "2px solid red";
        return false;
    }
    obj.style.border = "2px solid green";
    return true;
}
function checkPhone(obj) {
    var rePhone = /^[0-9]{8,12}$/;
    if (!rePhone.test(obj.value.trim())) {
        obj.style.border = "2px solid red";
        return false;
    }
    obj.style.border = "2px solid green";
    return true;
}
function resources() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    if (!checkEmpty(name)) {
        alert("Name cannot be left blank");
        name.focus();
        return false;
    }
    if (!checkEmpty(email)) {
        alert("Email cannot be left blank");
        email.focus();
        return false;
    }
    if (!checkEmail(email)) {
        email.style.border = "2px solid red";
        alert("Email format is wrong");
        return false;
    }
    if (!checkEmpty(phone)) {
        alert("Phone cannot be left blank");
        phone.focus();
        return false;
    }
    if (!checkPhone(phone)) {
        document.getElementById("phone").focus
        alert("Invalid phone number");
        return false;
    }
    let mess = ["Infomation", "------------", "Name: " + name.value, "Email: " + email.value, "Phone: " + phone.value]
    alert(mess.join("\n"));
}

// Become franchise

function checkEmpty(obj) {
    if (obj.value.trim() == "") {
        obj.style.border = "2px solid red";
        obj.focus();
        return false;
    }
    obj.style.border = "2px solid green";
    return true;
}
function checkEmail(obj) {
    var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!regexEmail.test(obj.value.trim())) {
        obj.style.border = "2px solid red";
        return false;
    }
    obj.style.border = "2px solid green";
    return true;
}
function checkPhone(obj) {
    var rePhone = /^[0-9]{8,12}$/;
    if (!rePhone.test(obj.value.trim())) {
        obj.style.border = "2px solid red";
        return false;
    }
    obj.style.border = "2px solid green";
    return true;
}
function become() {
    let fullName = document.getElementById("fullName");
    let gender = document.getElementsByName("Gender");
    let valueGender;
    for (let item of gender) {
        if (item.checked) {
            valueGender = item;
            break;
        }
    }
    let Email = document.getElementById("Email");
    let Phone = document.getElementById("Phone");
    let Contract = document.getElementById("Contract");
    let Money = document.getElementById("Money");
    let premises = document.getElementsByName("Premises");
    let valuePremises;
    for (let item of premises) {
        if (item.checked) {
            valuePremises = item;
            break;
        }
    }
    let Date = document.getElementById("Date");
    if (!checkEmpty(fullName)) {
        alert("Full name cannot be left blank.");
        fullName.focus();
        return false;
    }
    if (!checkEmpty(Email)) {
        alert("Email cannot be left blank.");
        Email.focus();
        return false;
    }
    if (!checkEmail(Email)) {
        Email.style.border = "2px solid red";
        alert("Email format is wrong.");
        return false;
    }
    if (!checkPhone(Phone)) {
        alert("Phone cannot be left blank.");
        Phone.focus();
        return false;
    }
    if (!checkPhone(Phone)) {
        document.getElementById("Phone").focus
        alert("Invalid phone number");
        return false;
    }
    if (!checkEmpty(Contract)) {
        alert("Contract not yet added.");
        Contract.focus();
        return false;
    }
    if (!checkEmpty(Money)) {
        alert("Have not selected the amount of capital you have.");
        Money.focus();
        return false;
    }
    if (!checkEmpty(Date)) {
        alert("You have not selected a date.");
        Date.focus();
        return false;
    }
    let mess = ["Infomation", "------------", "Full name: " + fullName.value, "Gender: " + valueGender.value, "Email: " + Email.value, "Phone: " + Phone.value, "Amount of capital: " + Money.value, "The premises: " + valuePremises.value, "Date: " + Date.value]
    alert(mess.join("\n"));
}