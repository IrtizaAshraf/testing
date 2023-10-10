const registrationForm = document.getElementById('registrationForm');

const Userpassword = []

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userstored = {
        username: username,
        email: email,
        password: password
    };
    console.log(userstored);
    const Userpassword = JSON.parse(localStorage.getItem('user')) || []
    Userpassword.push(userstored)
    // Store user data in local storage
    localStorage.setItem('user', JSON.stringify(Userpassword));


    Swal.fire({
        title: 'Registerd the User Successfully',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    }).then(() => {
        // Optionally, you can redirect to another page after successful registration
        window.location.href = 'loign.html';
    })

    
});






