let loginDisplay = document.querySelector(".main-container");
let username = document.getElementById("nameOfUser").value;
let password = document.getElementById("passwordOfUser").value;
let submitButton = document.querySelector(".btn");
let addPdfDisplay = document.querySelector(".upload-pdf-container");

let dropArea = document.querySelector(".drop-files");

let details = {
    username,
    password
};

submitButton.addEventListener("click",(event)=>{
    // console.log(details);
    // let validDetails = validateDetails(details);
    let validDetails = true; // for testing of upload pdf section
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

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults)
});
function preventDefaults(event) {
    event.preventDefault();
}

dropArea.addEventListener("drop",filesDropped);
function filesDropped(event) {
    let dt = event.dataTransfer;
    let files = dt.files;
    let arrayOfFiles = [...files];
    console.log(arrayOfFiles);
    addNamesToUI(arrayOfFiles);
}

function addNamesToUI(arrayOfFiles) {
    document.querySelector(".prevText").style.display = "none";
    let divElem = document.createElement("div");
    divElem.classList.add("fileNamesInUI");
    divElem.innerText = arrayOfFiles[0].name;
    dropArea.appendChild(divElem);
}