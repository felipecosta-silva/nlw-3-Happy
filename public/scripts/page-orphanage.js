const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

//create map
const map = L.map('mapid', options).setView([-8.1251457,-34.9942111], 15);

//create and add TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58,68],
  iconAnchor: [29,68],
  popupAnchor: [170,2]
})

// create and add marker
L.marker([-8.1251457,-34.9942111],{ icon}).addTo(map);

/* image galery */

function selectImage(event) {
  const button  = event.currentTarget;

  // remover todas as classes .active
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach((button) => {
    button.classList.remove("active");
  })

  //selecionar imagens ao clicar
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  //atualizar o container de imagem
  imageContainer.src = image.src

  //adicionar a class .active para o botão
  button.classList.add("active");
}
