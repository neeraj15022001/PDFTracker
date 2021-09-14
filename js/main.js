let loginDisplay = document.querySelector(".main-container");
let username = document.getElementById("nameOfUser").value;
let password = document.getElementById("passwordOfUser").value;
let submitButton = document.querySelector(".btn");
let addPdfDisplay = document.querySelector(".upload-pdf-container");

let details = {
    username,
    password
};

submitButton.addEventListener("click",(event)=>{
    // console.log(details);
    let validDetails = validateDetails(details);
    // let validDetails = true; // for testing of upload pdf section
    if (validDetails) {
        loginDisplay.style.display = "none";
        addPdfDisplay.style.display = "initial";
    }
});

function validateDetails(details) {
    let {
        username,
        password
    } = details;
    console.log("fun ",details);
    console.log("typeof ",typeof(details.username));
    if (username === "") {
        alert("Enter Username");
    }
    else if (password === "") {
        alert("Enter password");
    }
}
