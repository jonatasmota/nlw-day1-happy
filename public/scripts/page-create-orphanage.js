// Create Map
const map = L.map('mapid').setView([-27.2216447,-49.6492922], 16);

// Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create Icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [59, 68]

});

let marker;


// Create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
});


// Add photos field
function addPhotoField () {
    // pick photos container #images
    const container = document.querySelector('#images')
    // pick the container to duplicate .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // Clone the last image added
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    // Verify if field is empty, if is true do not add 
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }
    // Clean field after add
    input.value=""
    // Add clone to #images container
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
    // clean field
    span.parentNode.children[0].value = ""
        return
    }

    // delete field
    span.parentNode.remove();
}

// Select yes or no
function toggleSelect(event) {
    // Remove .active class
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
})

// Put the .active class in this clicked button
    const button = event.currentTarget
    button.classList.add('active')

    // Update hidden input with selected value
    const input = document.querySelector('[name="open_on_weekends"]')

    // Verify if yes or no
    input.value = button.dataset.value

}

