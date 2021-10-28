    const form = document.getElementById("form")
    const email = document.getElementById("inputemail");
    const password = document.getElementById("inputpassword");
    const passwordconfirmation = document.getElementById("inputpasswordconfirmation");
    const phone = document.getElementById("inputphone");
    const country = document.getElementById("inputcountry");
    const plan = document.getElementById("inputplan");

    form.addEventListener('submit', e => {
        e.preventDefault();
        
        checkInputs();
    });

    function checkInputs() {

        const emailCheck = email.value
        const passwordCheck = password.value
        const passwordconfirmationCheck = passwordconfirmation.value
        const phoneCheck = phone.value
        const countryCheck = country.value
        
        if(emailCheck === '') {
            setErrorFor(inputemail, 'Email cannot be blank');
        } else if (!isEmail(emailCheck)) {
            setErrorFor(inputemail, 'Not a valid email');
        } else {
            setSuccessFor(inputemail);
        }
        
        if(passwordCheck === '') {
            setErrorFor(inputpassword, 'Password cannot be blank');
        } else {
            setSuccessFor(inputpassword);
        }
        
        if(passwordconfirmationCheck === '') {
            setErrorFor(inputpasswordconfirmation, 'Password cannot be blank');
        } else if(passwordconfirmationCheck !== passwordCheck) {
            setErrorFor(inputpasswordconfirmation, 'Passwords do not match');
        } else{
            setSuccessFor(inputpasswordconfirmation);
        }

        if(phoneCheck === '') {
            setErrorFor(inputphone, 'Phone Number cannot be blank');
        } else {
            setSuccessFor(inputphone);
        }

        if(countryCheck === '') {
            setErrorFor(inputcountry, 'Country cannot be blank');
        } else {
            setSuccessFor(inputcountry);
        }
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-row error';
        small.innerText = message;
    }
    
    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-row success';
    }
        
    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }