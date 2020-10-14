// Create Map
const map = L.map('mapid').setView([-27.2216447,-49.6492922], 16);

// Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create Icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [59, 68],
    popupAnchor: [170, 2]
});

// Create popup overlay
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>');

// Create and Add Marker
L.marker([-27.2216447,-49.6492922], { icon }).addTo(map)
    .bindPopup(popup)
    .openPopup();