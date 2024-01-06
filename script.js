var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link"); // Fixed class name here
  document.getElementById(tabname).classList.add("active-tab");
  
}


var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

const scriptURL = "https://script.google.com/macros/s/AKfycbzn-vjZz_z-jAA9cVwzH438C7A8nxfz4isFXkBSMM-uMocKpAKSuhSjPSHc8kQ2Q92P/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jsonResponse = await response.json();

    if (jsonResponse.result === "success") {
      console.log("Form submitted successfully!");
      console.log("Inserted into row:", jsonResponse.row);
    } else {
      console.error("Form submission failed!");
      // Additional error handling if needed
    }
  } catch (error) {
    console.error("Error!", error.message);
  }
});
