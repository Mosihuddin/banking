document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail); 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail == "kinu@1.com" && userPassword == "secret") {
        // console.log('valid user');
        window.location.href = 'banking.html';
    }

});
//  deposit handler
