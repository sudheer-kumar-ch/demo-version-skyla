
// Get today's date
const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const dd = String(today.getDate()).padStart(2, '0');

// Format the date as YYYY-MM-DD
const formattedDate = `${yyyy}-${mm}-${dd}`;

// Set the input's value to today's date
document.getElementById('dateInput').value = formattedDate;
// Set the minimum date to today
document.getElementById('dateInput').min = formattedDate;


let homeSectionOneEl = document.getElementById("homeSectionOne");
let homeSectionTwoEl = document.getElementById("homeSectionTwo");
let homeSectionThreeEl = document.getElementById("homeSectionThree");


let aboutSkylaItemEl = document.getElementById("aboutSkylaItem");
let aboutSkylaSectionEl = document.getElementById("aboutSkylaSection");

let serachResults = document.getElementById("serachResults");
//let priceDetailsPage = document.getElementById("priceDetailsPage");

let enquiryPage = document.getElementById("enquiryPage");

// Select all elements with the class 'box'
const boxes = document.querySelectorAll('.box');

// Function to handle click event
function handleClick(event) {
    // Remove 'active' class from all boxes
    boxes.forEach(box => box.classList.remove('active'));
    
    // Add 'active' class to the clicked box
    event.currentTarget.classList.add('active');
}

// Add click event listener to each box
boxes.forEach(box => {
    box.addEventListener('click', handleClick);
});

//ABOUT SKYLA LOCATIONS TEXT LINK
let gachibowliLocationLinkEl = document.getElementById("gachibowliLocationLink");
let banjaraHillsLocationLinkEl = document.getElementById("banjaraHillsLocationLink");
let hitechCityLocationLinkEl = document.getElementById("hitechCityLocationLink");
let jubileeHillsLocationLinkEl = document.getElementById("jubileeHillsLocationLink");
let kondapurLocationLinkEl = document.getElementById("kondapurLocationLink");


function locationGachibowliFunction(){
    banjaraHillsLocationLinkEl.classList.add("d-none");
    hitechCityLocationLinkEl.classList.add("d-none");
    jubileeHillsLocationLinkEl.classList.add("d-none");
    kondapurLocationLinkEl.classList.add("d-none");

    gachibowliLocationLinkEl.classList.remove("d-none");
};

function locationBanjaraHillsFunction(){
    hitechCityLocationLinkEl.classList.add("d-none");
    jubileeHillsLocationLinkEl.classList.add("d-none");
    kondapurLocationLinkEl.classList.add("d-none");
    gachibowliLocationLinkEl.classList.add("d-none");
    
    banjaraHillsLocationLinkEl.classList.remove("d-none");
};

function locationHitechCityFunction(){
    jubileeHillsLocationLinkEl.classList.add("d-none");
    kondapurLocationLinkEl.classList.add("d-none");
    gachibowliLocationLinkEl.classList.add("d-none");
    banjaraHillsLocationLinkEl.classList.add("d-none");
    
    hitechCityLocationLinkEl.classList.remove("d-none");
};

function locationJubileeHillsFunction(){
    hitechCityLocationLinkEl.classList.add("d-none");
    kondapurLocationLinkEl.classList.add("d-none");
    gachibowliLocationLinkEl.classList.add("d-none");
    banjaraHillsLocationLinkEl.classList.add("d-none");

    jubileeHillsLocationLinkEl.classList.remove("d-none");
};

function locationKondapurFunction(){
    hitechCityLocationLinkEl.classList.add("d-none");
    jubileeHillsLocationLinkEl.classList.add("d-none");
    gachibowliLocationLinkEl.classList.add("d-none");
    banjaraHillsLocationLinkEl.classList.add("d-none");

    kondapurLocationLinkEl.classList.remove("d-none");
};
//ABOUT SKYLA LOCATIONS TEXT LINK END

//HOME PAGE LOCATIONS ROOMS
let kondapurEl = document.getElementById("kondapur");
let jubileeHillsEl = document.getElementById("jubileeHills");
let hitechCityEl = document.getElementById("hitechCity");
let banjaraHillsEl = document.getElementById("banjaraHills");
let gachibowliEl = document.getElementById("gachibowli");

let homePageKondapurRoomsEl = document.getElementById("homePageKondapurRooms");
let homePageJubileeHillsRoomsEl = document.getElementById("homePageJubileeHillsRooms");
let homePageHitechCityRoomsEl = document.getElementById("homePageHitechCityRooms");
let homePageBanjaraHillsRoomsEl = document.getElementById("homePageBanjaraHillsRooms");
let homePageGachibowliRoomsEl = document.getElementById("homePageGachibowliRooms");

kondapurEl.onclick = function(){
    homePageJubileeHillsRoomsEl.classList.add("d-none");
    homePageHitechCityRoomsEl.classList.add("d-none");
    homePageBanjaraHillsRoomsEl.classList.add("d-none");
    homePageGachibowliRoomsEl.classList.add("d-none");
    homePageKondapurRoomsEl.classList.remove("d-none");

    gachibowliEl.classList.remove("color");
    banjaraHillsEl.classList.remove("color");
    hitechCityEl.classList.remove("color");
    jubileeHillsEl.classList.remove("color");
    kondapurEl.classList.add("color");
}
jubileeHillsEl.onclick = function(){
    homePageHitechCityRoomsEl.classList.add("d-none");
    homePageBanjaraHillsRoomsEl.classList.add("d-none");
    homePageGachibowliRoomsEl.classList.add("d-none");
    homePageKondapurRoomsEl.classList.add("d-none");
    homePageJubileeHillsRoomsEl.classList.remove("d-none");

    gachibowliEl.classList.remove("color");
    banjaraHillsEl.classList.remove("color");
    hitechCityEl.classList.remove("color");
    jubileeHillsEl.classList.add("color");
    kondapurEl.classList.remove("color");
}
hitechCityEl.onclick = function(){
    homePageBanjaraHillsRoomsEl.classList.add("d-none");
    homePageGachibowliRoomsEl.classList.add("d-none");
    homePageKondapurRoomsEl.classList.add("d-none");
    homePageJubileeHillsRoomsEl.classList.add("d-none");
    homePageHitechCityRoomsEl.classList.remove("d-none");

    gachibowliEl.classList.remove("color");
    banjaraHillsEl.classList.remove("color");
    hitechCityEl.classList.add("color");
    jubileeHillsEl.classList.remove("color");
    kondapurEl.classList.remove("color");
}
banjaraHillsEl.onclick = function(){
    homePageGachibowliRoomsEl.classList.add("d-none");
    homePageKondapurRoomsEl.classList.add("d-none");
    homePageJubileeHillsRoomsEl.classList.add("d-none");
    homePageHitechCityRoomsEl.classList.add("d-none");
    homePageBanjaraHillsRoomsEl.classList.remove("d-none");

    gachibowliEl.classList.remove("color");
    banjaraHillsEl.classList.add("color");
    hitechCityEl.classList.remove("color");
    jubileeHillsEl.classList.remove("color");
    kondapurEl.classList.remove("color");
}
gachibowliEl.onclick = function(){
    homePageKondapurRoomsEl.classList.add("d-none");
    homePageJubileeHillsRoomsEl.classList.add("d-none");
    homePageHitechCityRoomsEl.classList.add("d-none");
    homePageBanjaraHillsRoomsEl.classList.add("d-none");
    homePageGachibowliRoomsEl.classList.remove("d-none");

    gachibowliEl.classList.add("color");
    banjaraHillsEl.classList.remove("color");
    hitechCityEl.classList.remove("color");
    jubileeHillsEl.classList.remove("color");
    kondapurEl.classList.remove("color");
}
//HOME PAGE LOCATIONS ROOMS END
//Finding rooms 
let setLocationEl = document.getElementById("setLocation");
let statusEl = document.getElementById("status");
let locationWarningTextEl = document.getElementById("locationWarningText");
let stayTypeWarningTextEl = document.getElementById("stayTypeWarningText");

function findFunction(){
    //priceDetailsPage.classList.add("d-none");
    function warning(event){
        if (event.value !== "Select Location"){
            locationWarningTextEl.classList.add("d-none");
        }
    };
    setLocationEl.addEventListener("click",warning);
    function warningTwo(event){
        if (event.value !=="Select Stay Type"){
            stayTypeWarningTextEl.classList.add("d-none");
        }
    }
    statusEl.addEventListener("click",warningTwo);
    let locationNameEl = setLocationEl.value;
    if (setLocationEl.value==="Select Location"){
        stayTypeWarningTextEl.classList.add("d-none");
        locationWarningTextEl.classList.remove("d-none");
    }
    else{
        locationWarningTextEl.classList.add("d-none");
        if (statusEl.value==="Select Stay Type"){
            stayTypeWarningTextEl.classList.remove("d-none");
        }
        else{
            stayTypeWarningTextEl.classList.add("d-none");
            homeSectionTwoEl.classList.add("d-none");
            const spinner = document.getElementById("spinner");
            const spinnerContainer = document.getElementById("spinnerContainer");
            spinnerContainer.style.display = "block";
            if (spinner.style.display === "none" || spinner.style.display === "") {
                spinner.style.display = "block"; // Show spinner
            } else {
                spinner.style.display = "none"; // Hide spinner
            }
            setTimeout(function(){
                spinnerContainer.style.display = "none";
                enquiryPage.classList.add("d-none");
                serachResults.classList.remove("d-none")
            },1000);
            serachResults.classList.remove("d-none");
            let serachResultsLocationNameEl = document.getElementById("serachResultsLocationName");
            serachResultsLocationNameEl.textContent = "1 Proerties in "+locationNameEl;
            
        }
    }
}



// Function to validate form inputs
function validateForm(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    if (!name || !email || !mobile) {
        alert("Please fill out all fields.");
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Show success message
    alert("Message sent successfully!");
    window.location.href = "requestenquiry.html";
    // Simple validation checks
    if (name === "" || email === "" || mobile === "") {
        alert("Please fill all fields");
        return false;
    } else {
        // If the form is valid, navigate to the next page
       
        return false; // Prevent actual form submission
    }
}
/*let sendButton = document.getElementById("sendButton");
sendButton.style.color = "green";
let messagesBox = document.getElementByIdI("messagesBox");
sendButton.onclick = function(){
    let userMessage = document.getElementById("userMessage");
    let newpara = document.createElement("p");
    newpara.textContent = userMessage.value;
    newpara.classList.add("message-style");
    messagesBox.appendChild(newpara);
    userMessage.value = "";
}
*/


























//