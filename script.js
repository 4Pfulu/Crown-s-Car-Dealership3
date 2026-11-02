// ===================== PRODUCTS PAGE =====================
function setupProducts() {
    var vehicles = [
        {
            name: "BMW M4 Competition", type: "Sedan", price: 1250000,
            image: "_images/bmw-m4.jpg", alt: "Sedan for sale",
            description: "Reliable and fuel-efficient sedan, perfect for daily commuting."
        },
        {
            name: "Volkswagen Tiguan", type: "SUV", price: 520000,
            image: "_images/tiguan.jpg", alt: "SUV for sale",
            description: "Spacious SUV ideal for families and long-distance travel."
        },
        {
            name: "Ford Ranger", type: "Bakkie", price: 640000,
            image: "_images/ford.jpg", alt: "Bakkie for sale",
            description: "Dependable bakkie built for work and everyday use."
        }
    ];

    var grid = document.querySelector(".vehicle-grid");
    var searchInput = document.getElementById("searchInput");
    var typeFilter = document.getElementById("typeFilter");
    var sortSelect = document.getElementById("sortSelect");
    var resultCount = document.getElementById("resultCount");

    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightboxImg");
    var lightboxCaption = document.getElementById("lightboxCaption");
    var lightboxClose = document.getElementById("lightboxClose");

    // Show a list of vehicles on the page
    function showVehicles(list) {
        var html = "";

        for (var i = 0; i < list.length; i++) {
            html += '<article class="vehicle-card">';
            html += '<picture>';
            html += '<source media="(max-width: 600px)" srcset="' + list[i].image + '">';
            html += '<source media="(max-width: 900px)" srcset="' + list[i].image + '">';
            html += '<img src="' + list[i].image + '" alt="' + list[i].alt + '" loading="lazy">';
            html += '</picture>';
            html += '<h3>' + list[i].name + '</h3>';
            html += '<p>' + list[i].description + '</p>';
            html += '<p class="price">R ' + list[i].price + '</p>';
            html += '</article>';
        }

        if (list.length === 0) {
            html = '<p class="no-results">No vehicles match your search.</p>';
        }

        grid.innerHTML = html;
        resultCount.textContent = list.length + " vehicle(s) found";

        // Make each picture open the lightbox when clicked
        var pictures = grid.querySelectorAll("img");
        for (var j = 0; j < pictures.length; j++) {
            pictures[j].addEventListener("click", openLightbox);
        }
    }

    // Search, filter and sort
    function updateVehicles() {
        var searchText = searchInput.value.toLowerCase();
        var chosenType = typeFilter.value;
        var results = [];

        for (var i = 0; i < vehicles.length; i++) {
            var nameMatch = vehicles[i].name.toLowerCase().includes(searchText);
            var typeMatch = vehicles[i].type.toLowerCase().includes(searchText);
            var filterMatch = (chosenType === "all" || vehicles[i].type === chosenType);

            if ((nameMatch || typeMatch) && filterMatch) {
                results.push(vehicles[i]);
            }
        }

        if (sortSelect.value === "low") {
            results.sort(function (a, b) { return a.price - b.price; });
        } else if (sortSelect.value === "high") {
            results.sort(function (a, b) { return b.price - a.price; });
        }

        showVehicles(results);
    }

    // Lightbox
    function openLightbox(event) {
        lightboxImg.src = event.target.src;
        lightboxCaption.textContent = event.target.alt;
        lightbox.classList.add("open");
    }

    function closeLightbox() {
        lightbox.classList.remove("open");
    }

    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    searchInput.addEventListener("input", updateVehicles);
    typeFilter.addEventListener("change", updateVehicles);
    sortSelect.addEventListener("change", updateVehicles);

    // Show everything when the page loads
    updateVehicles();
}
document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector(".vehicle-grid") && document.getElementById("searchInput")) {
        setupProducts();
    }
    if (document.querySelector(".accordion-button")) {
        setupAbout();
    }
});

// ===================== ABOUT PAGE =====================
function setupAbout() {
    var buttons = document.querySelectorAll(".accordion-button");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            var panel = document.getElementById(this.getAttribute("aria-controls"));

            if (panel.hidden === true) {
                panel.hidden = false;
                this.setAttribute("aria-expanded", "true");
            } else {
                panel.hidden = true;
                this.setAttribute("aria-expanded", "false");
            }
        });
    }
}