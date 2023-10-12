
// const loginForm = document.getElementById('loginForm');

// loginForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const enteredUsername = document.getElementById('username').value;
//     const enteredPassword = document.getElementById('password').value;

//     // Retrieve user data from local storage
//     const storedUser = JSON.parse(localStorage.getItem('user')) || [];

//     const matchedUserdata = storedUser.find(user => user.name === enteredUsername && user.password === enteredPassword); 
// //   console.log(matchedUserdata);
//     if (matchedUserdata) {
//         Swal.fire({
//             title: 'Custom animation with Animate.css',
//             showClass: {
//               popup: 'animate__animated animate__fadeInDown'
//             },
//             hideClass: {
//               popup: 'animate__animated animate__fadeOutUp'
//             }
//         })
//         // Redirect to another page or perform other actions after successful login
//         window.location.href = 'index.html';
//     } else {
//         alert('Login Failed. Please check your username and password.');
//     }
   
// });




// storedUser && enteredUsername === storedUser.username && enteredPassword === storedUser.password



// const loginForm = document.getElementById('loginForm');

// loginForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const enteredUsername = document.getElementById('username').value;
//     const enteredPassword = document.getElementById('password').value;

//     // Retrieve user data from local storage
//     const storedUser = JSON.parse(localStorage.getItem('user')) || [];

//     const matchedUserdata = storedUser.find(user => user.name === enteredUsername && user.password === enteredPassword); 

//     if (matchedUserdata) {
//         Swal.fire({
//             title: 'Login Successful!',
//             text: 'Redirecting to the homepage...',
//             icon: 'success',
//             showConfirmButton: false,
//             timer: 1500,
//             willClose: () => {
//                 window.location.href = 'index.html'; // Redirect after the alert is closed
//             }
//         });
//     } else {
//         Swal.fire({
//             title: 'Login Failed!',
//             text: 'Please check your username and password.',
//             icon: 'error'
//         });
//     }
// });



// document.querySelector('#loginForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const enteredUsername  = document.getElementById('username').value;
//     const enterdedPasswor   = document.getElementById('password').value;

//     const userData = JSON.parse(localStorage.getItem('user')) || [];
    
//     // Initialize a variable to check if a matching user is found
//     let isMatchingUser = false;

//     // Loop through user data to check for a match
//     for (const user of userData) {
//         if (user.name === enteredUsername && user.password === enterdedPasswor) {
//             isMatchingUser = true;
//             break; // Exit the loop once a match is found
//         }
//     }

//     if (isMatchingUser) {
//         // Login is successful
//         window.location.href = 'index.html';
//     } else {
//         alert('Invalid login credentials. Please try again.');
//     }
// });








const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
    const printname = document.getElementById('userprint');

    // Retrieve user data from local storage
    const storedUsers = JSON.parse(localStorage.getItem('user')) || [];

    const matchedUser = storedUsers.find(user => user.username === enteredUsername && user.password === enteredPassword); 

    if (matchedUser) {
        // let printname = document.getElementById('#userprint')
        Swal.fire({
            title: 'Login Successful!',
            text: `Welcome, ${matchedUser.username}! Redirecting to your cart...`,
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
            willClose: () => {
                window.location.href = 'cart.html'; // Redirect after the alert is closed
                printname.innerHTML = `<i class="fa-solid fa-user fa-beat-fade"></i> Hi ${matchedUser.username}`;
                console.log(matchedUser.username);
                
                // printname.innerHTML= ` ${matchedUser.username}`

            }
        });
    } else {
        Swal.fire({
            title: 'Login Failed!',
            text: 'Please check your username and password.',
            icon: 'error'
        });
    }
});



// script.js
// const loginForm = document.getElementById('loginForm');

// Check if there are stored users in local storage
// const storedUsers = JSON.parse(localStorage.getItem('user')) || [];

// loginForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const username = event.target.username.value;
//     const password = event.target.password.value;

//     // Check if the entered username and password match any stored user
//     const loggedInUser = storedUsers.find(user => user.username === username && user.password === password);

//     if (loggedInUser) {
//         // Set the innerHTML of the element with the logged-in user's name
//         printname.innerHTML = `<i class="fa-solid fa-user fa-beat-fade"></i> Hi ${loggedInUser.username}`;
//     } else {
//         // Handle the case when the entered credentials are incorrect
//         printname.innerHTML = 'Incorrect username or password';
//     }
// });
