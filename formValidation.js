const form = document.getElementById("form");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cnfrmPassword = document.getElementById("cnfrm-password");
const submit = document.getElementById("btn");

form.addEventListener("submit", (obj) => {
    obj.preventDefault();

    validateInputs();
})

const validateInputs = () => {
    const userNameVal = userName.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cnfrmPasswordVal = cnfrmPassword.value.trim();
    validateUserName(userNameVal);
    validateEmailVal(emailVal);
    validatePassword(passwordVal, cnfrmPasswordVal);
}

validateUserName = (val) => {
    if (val === '') {
        SetError(userName, 'Username is required');
    } else if (val.length < 6) {
        SetError(userName, 'Username should have at least 6 letters');
    } else {
        setSuccess(userName);
    }

}

validateEmailVal = (val) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (val == '') {
        SetError(email, 'enter email Adrdress')
    } else if (val.match(validRegex)) {
        setSuccess(email);
    } else {
        SetError(email, "enter valid email address");
    }

}

validatePassword = (pass, cnfrmPass) => {
    if (cnfrmPass == '') {
        SetError(cnfrmPassword, 'Enter password');
    }
    if (pass == '') {
        SetError(password, 'Enter password');
    } else if (pass.length < 8) {
        SetError(password, 'length should be greater than 7');
    } else if (pass.match(/^[0-9]+$/)) {
        SetError(password, 'should conatin at least one number');
    } else if (pass.match(/^[a-z]+$/)) {
        SetError(password, 'should conatin at least one small letter');
    } else if (pass.match(/^[A-Z]+$/)) {
        SetError(password, 'should conatin at least one capital number');
    } else if (pass != cnfrmPass) {
        SetError(password, 'password doesnot match');
        SetError(cnfrmPassword, 'password doesnot match');
    } else {
        setSuccess(password);
    }
}


const SetError = (element, msg) => {
    const inputControl = element.parentElement;
    const errordisplay = inputControl.querySelector(".error");
    errordisplay.innerText = msg;
    inputControl.classList.remove("success");
    inputControl.classList.add("error");
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errordisplay = inputControl.querySelector(".error");
    errordisplay.innerText = "";

    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}