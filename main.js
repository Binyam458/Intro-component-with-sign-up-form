const form = document.getElementById("form");
const vorname = document.getElementById("vorname");
const nachname = document.getElementById("nachname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the values from Inputs
    const vornameValue = vorname.value.trim()
    const nachnameValue = nachname.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    if(vornameValue === '') {
        //show error
        //add error class
        setErrorFor(vorname, 'vorname cannot be blank')
    }else {
        //add success class
        setSuccessFor(vorname);
    }

    if(nachnameValue === '') {
        //show error
        //add error class
        setErrorFor(nachname, 'nachname cannot be blank')
    }else {
        //add success class
        setSuccessFor(nachname);
    }

    if(emailValue === '') {
        //show error
        //add error class
        setErrorFor(email, 'email cannot be blank')
    }else if(!isEmail(emailValue)) {
        setErrorFor(email, 'email is not valid')
    }else {
        //add success class
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        //show error
        //add error class
        setErrorFor(password, 'password cannot be blank')
    }else {
        //add success class
        setSuccessFor(password);
    }
    
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // this is class form-control
    const small = formControl.querySelector('small');
// add error message inside small
    small.innerText = message;
    //add error class
    formControl.className =  'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement; // this is class form-control
     //add success class
     formControl.className =  'form-control success';

}


function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}
