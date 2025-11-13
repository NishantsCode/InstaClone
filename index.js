const usernameInput = document.getElementById('name');
const passwordInput = document.getElementById('Pass');
const Login_btn = document.querySelector(".form-btn");
const credentials = [
    {username :'nishant_nitian', password:'Nishant' },
    {username :'nishant', password:'hant' }
];
Login_btn.addEventListener ('click', function(){
    const enteredUsername = usernameInput.value.trim(); // Trim whitespace from username
    const enteredPassword = passwordInput.value.trim();
    if (!enteredUsername || !enteredPassword) {
        window.alert("Please enter both username and password.");
        // document.getElementById('check').innerHTML = "Please check";
        return; // Prevent further execution if input is missing
    }
    let isMatchFound = false;
    for (const credential of credentials) {
        if (credential.username === enteredUsername && credential.password === enteredPassword) {
        isMatchFound = true;
        break; // Exit the loop once a match is found
        }
    }
    // for(let i = 0; i<credentials.length; i++){
    //     if(credentials[i].username == enteredUsername && credentials[i].password == enteredPassword){
    //         isMatchFound = true;
    //         break;
    //     }
    // }

    if (isMatchFound) {
        window.alert("Login successful!");
        // Handle successful login (e.g., redirect to another page, display success message)
    } else {
        window.alert("Invalid username or password.");
    }
})

const login = document.getElementById('login');

login.addEventListener('click', function(){
    // if(window.location.herf != "instClone.html"){
        window.location.herf = "instaClone.html";
    // }
    document.querySelector(".phone-app-demo").style.display = "none";
    document.querySelector(".formdata").style.margin = "0 auto";
})

const signUp = document.getElementById('signup');

signUp.addEventListener('click', function(){
    window.location.href = "signUp.html";
})
