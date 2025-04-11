document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const mail = document.getElementById('mail');
    const type = document.querySelector('input[name="type"]:checked');
    const msg = document.getElementById('msg');
    const agree = document.getElementById('agree');

    const fnameErr = document.getElementById('fname-err');
    const lnameErr = document.getElementById('lname-err');
    const mailErr = document.getElementById('mail-err');
    const typeErr = document.getElementById('type-err');
    const msgErr = document.getElementById('msg-err');
    const agreeErr = document.getElementById('agree-err');

    const errors = [fnameErr, lnameErr, mailErr, typeErr, msgErr, agreeErr];
    errors.forEach(err => {
        err.style.display = 'none';
        err.textContent = '';
    });
    fname.classList.remove('error');
    lname.classList.remove('error');
    mail.classList.remove('error');
    msg.classList.remove('error');

    let hasError = false;

    if (!fname.value.trim()) {
        fnameErr.textContent = 'This field is required';
        fnameErr.style.display = 'block';
        fname.classList.add('error');
        hasError = true;
    }

    if (!lname.value.trim()) {
        lnameErr.textContent = 'This field is required';
        lnameErr.style.display = 'block';
        lname.classList.add('error');
        hasError = true;
    }

    const mailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!mail.value.trim()) {
        mailErr.textContent = 'This field is required';
        mailErr.style.display = 'block';
        mail.classList.add('error');
        hasError = true;
    } else if (!mailCheck.test(mail.value.trim())) {
        mailErr.textContent = 'Please enter a valid email address';
        mailErr.style.display = 'block';
        mail.classList.add('error');
        hasError = true;
    }

    if (!type) {
        typeErr.textContent = 'Please select a query type';
        typeErr.style.display = 'block';
        hasError = true;
    }

    if (!msg.value.trim()) {
        msgErr.textContent = 'This field is required';
        msgErr.style.display = 'block';
        msg.classList.add('error');
        hasError = true;
    }

    if (!agree.checked) {
        agreeErr.textContent = 'To submit this form, please consent to being contacted';
        agreeErr.style.display = 'block';
        hasError = true;
    }

    if (!hasError) {
        const toast = document.getElementById('toast');
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
        document.getElementById('form').reset();
    }
});