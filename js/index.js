// Initializes and adds the map
function initMap() {
  // Location of Iron Tusk Art
  const ironTuskArt = { lat: 35.68, lng: -85.77 };
  // Centers map on Iron Tusk Art
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: ironTuskArt,
  });
  // The marker on the map
  const marker = new google.maps.Marker({
    position: ironTuskArt,
    map: map
  });
}

function navbarCollapse() {
  var x = document.getElementById("mainNavbar");
  if (x.className === "main-navigation") {
    x.className += " responsive";
  } else {
    x.className = "main-navigation";
  }
}

window.initMap = initMap;