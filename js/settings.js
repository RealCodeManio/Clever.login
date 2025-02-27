// Hello epic hacker (maybe skid) you are looking at one of the many scripts that powers the site, this script has extra comments and info to help you understand what is going on.

// This JavaScript code defines functions that manage the state of a web page's tab, such as its title and icon, and its theme. It retrieves a JSON object from local storage, which contains the current state of the tab, and updates the web page's elements with the stored values. The code provides functions to modify the tab state and settings, such as setTitle, setFavicon, resetTab, setTheme, and setThemeColor. These functions update the web page's elements and store the updated state in local storage.

// Check if there is a saved tab data in localStorage
var tab = localStorage.getItem("tab");

if (tab) {
  // If there is saved data, try to parse it
  try {
    var tabData = JSON.parse(tab);
  } catch {
    // If there is an error in parsing, create an empty object
    var tabData = {};
  }
} else {
  // If there is no saved data, create an empty object
  var tabData = {};
}

// Set the title and icon fields to the values saved in tabData, if they exist
if (tabData.title) {
  document.getElementById("title").value = tabData.title;
}
if (tabData.icon) {
  document.getElementById("icon").value = tabData.icon;
}

// Default tab settings
var settingsDefaultTab = {
  title: "Settings | 3kh0",
  icon: "./images/logo.png",
};

// Function to set the document title
function setTitle(title = "") {
  if (title) {
    document.title = title;
  } else {
    document.title = settingsDefaultTab.title;
  }

  // Update the saved tab data with the new title
  var tab = localStorage.getItem("tab");

  if (tab) {
    // If there is saved data, try to parse it
    try {
      var tabData = JSON.parse(tab);
    } catch {
      // If there is an error in parsing, create an empty object
      var tabData = {};
    }
  } else {
    // If there is no saved data, create an empty object
    var tabData = {};
  }

  if (title) {
    // If there is a new title, update tabData
    tabData.title = title;
  } else {
    // If the title is empty, delete the title field from tabData
    delete tabData.title;
  }

  // Save the updated tab data to localStorage
  localStorage.setItem("tab", JSON.stringify(tabData));
}

// Function to set the favicon
function setFavicon(icon) {
  if (icon) {
    document.querySelector("link[rel='icon']").href = icon;
  } else {
    document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  }

  // Update the saved tab data with the new icon
  var tab = localStorage.getItem("tab");

  if (tab) {
    // If there is saved data, try to parse it
    try {
      var tabData = JSON.parse(tab);
    } catch {
      // If there is an error in parsing, create an empty object
      var tabData = {};
    }
  } else {
    // If there is no saved data, create an empty object
    var tabData = {};
  }

  if (icon) {
    // If there is a new icon, update tabData
    tabData.icon = icon;
  } else {
    // If the icon is empty, delete the icon field from tabData
    delete tabData.icon;
  }

  // Save the updated tab data to localStorage
  localStorage.setItem("tab", JSON.stringify(tabData));
}
/*
Readymade Cloaks
    <select name="Premade Cloak" id="premadecloaks" title="Cloaks">
      <option value="search">Google Search</option>
      <option value="drive">Google Drive</option>
      <option value="youtube">YouTube</option>
      <option value="gmail">Gmail</option>
      <option value="calendar">Google Calendar</option>
      <option value="meets">Google Meet</option>
      <option value="classroom">Google Classroom</option>
      <option value="canvas">Canvas</option>
      <option value="zoom">Zoom</option>
      <option value="khan">Khan Academy</option>
    </select>
*/
function setCloak() { // applies only to premade cloaks
  var cloak = document.getElementById("premadecloaks").value; // cloak seems kind of weird when you spell it out
  switch (cloak) {
    case "search": // Google Search
      setTitle("Google Search");
      setFavicon("./images/cloaks/Google Search.ico");
      break;
    case "drive": // Google Drive
      setTitle("Google Drive");
      setFavicon("./images/cloaks/Google Drive.ico");
      break;
    case "youtube": // YouTube 
      setTitle("YouTube");
      setFavicon("./images/cloaks/YouTube.ico");
      break;  
    case "gmail": // Gmail
      setTitle("Gmail");
      setFavicon("./images/cloaks/Gmail.ico");
      break;
    case "calendar": // Google Calendar
      setTitle("Google Calendar");
      setFavicon("./images/cloaks/Calendar.ico");
      break;
    case "meets": // Google Meet
      setTitle("Google Meet");
      setFavicon("./images/cloaks/Meet.ico");
      break;
    case "classroom": // Google Classroom
      setTitle("Google Classroom");
      setFavicon("./images/cloaks/Classroom.png"); // could not find an icon
      break;
    case "canvas": // Canvas 
      setTitle("Canvas");
      setFavicon("./images/cloaks/Canvas.ico");
      break;
    case "zoom": // Zoom
      setTitle("Zoom");
      setFavicon("./images/cloaks/Zoom.ico");
      break;
    case "khan": // Khan Academy
      setTitle("Khan Academy"); 
      setFavicon("./images/cloaks/Khan Academy.ico");
      break;
  }
}

// Function to reset the tab settings to default
function resetTab() {
  document.title = settingsDefaultTab.title;
  document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  document.getElementById("title").value = "";
  document.getElementById("icon").value = "";
  localStorage.setItem("tab", JSON.stringify({}));
}

// Function to set the theme
function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.body.setAttribute("theme", theme);
  document.body.style = "";
  localStorage.removeItem("theme_color");

  // Find the theme color from the themes array and set the color
  themes.forEach((palette) => {
    if (palette.theme == theme) {
      document.querySelector("#theme_color").value = palette.color;
    }
  });
}

// Function to set the custom theme color
function setThemeColor(theme) {
  localStorage.setItem("theme", "custom");
  localStorage.setItem("theme_color", theme);
  document.body.setAttribute("theme", "custom");
  document.body.style = `--theme: ${theme}; --background: ${getContrastHex(theme)}; --text: ${getColorHex(theme)}; --text-secondary: ${getColorHex(theme)};`;
}
