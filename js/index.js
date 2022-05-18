// // Initializes and adds the map
// function initMap() {
//   // Location of Iron Tusk Art
//   const ironTuskArt = { lat: 35.68, lng: -85.77 };
//   // Centers map on Iron Tusk Art
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: ironTuskArt,
//   });
//   // The marker on the map
//   const marker = new google.maps.Marker({
//     position: ironTuskArt,
//     map: map
//   });
// }
// window.initMap = initMap;

function navbarCollapse() {
  var x = document.getElementById("mainNavbar");
  if (x.className === "main-navigation") {
    x.className += " responsive";
  } else {
    x.className = "main-navigation";
  }
}


// var collapse = document.getElementsByClassName("collapsible-button");
// var i;

// for (i = 0; i < collapse.length; i++) {
//   collapse[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

let myLabels = document.querySelectorAll('.lbl-toggle');

Array.from(myLabels).forEach(label => {
  label.addEventListener('keydown', e => {
    // 32 === spacebar
    // 13 === enter
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      label.click();
    };
  });
});

