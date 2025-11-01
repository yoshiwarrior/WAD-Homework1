const avatar = document.getElementById("avatar");
let isVisible = false;

let container = document.createElement("div");
let username = document.createElement("p");
let email = document.createElement("p");
let logout = document.createElement("p");

container.id = "usermenu"

username.textContent = "Max Mustermann";
email.textContent = "max.mustermann@ut.ee"
logout.textContent = "Log out";

container.appendChild(username);
container.appendChild(email);
container.appendChild(logout);

avatar.onclick = () => {
    if (isVisible) {
        document.body.removeChild(container);
        isVisible = false;
    }
    else {
        document.body.appendChild(container);
        isVisible = true;
    }

} 
