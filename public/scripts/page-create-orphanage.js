//create map
const map = L.map('mapid').setView([-8.1251457,-34.9942111], 15);

//create and add TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68]
})

let marker;

// create and add marker

map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  // removendo icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat,lng],{ icon })
  .addTo(map);

})
// L.marker([-8.1251457,-34.9942111],{ icon}).addTo(map);

// //função para remover a classe button-hidden "vai mostrar o botão"
// function buttonRemove(event) {
//  const isFielld = document.querySelectorAll('.new-upload span.button-hidden');
//   isFielld.forEach((span) => {
//      span.classList.remove('button-hidden');
//   })
// }

// // função par fazer o botão desaparecer quando o usuário sair/clicar em outro do campo de entrada
// function addClassHidden(event) {
//   const isFielld = document.querySelectorAll('.new-upload span');
//   isFielld.forEach((span) => {
//      span.classList.add('button-hidden');
//   })
// }

// add the photo field
function addPhotoField() {
  //pegar o container de fotos #images
  const container = document.querySelector('#images')

  // pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload')

  // realizar a duplicação da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
  
  // Verificar se o campo esta vazio, se verdadeiro não adicionar
  const input = newFieldContainer.children[0]

  if(input.value == "") {
    return
  }

  // limpar o campo antes de adicionar imagens
  input.value = ""

  // adicionar a duplicação ao container de #images
  container.appendChild(newFieldContainer)
}

function deleteField (event) {
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload')

  if (fieldsContainer.length <= 1) {
    // limpar o valor do campo
    span.parentNode.children[0].value = ""
    return
  }

  // deletar o campo
  span.parentNode.remove();
}

// selecionar sim ou não
function toggleSelect(event) {
  //retirar a class .active dos botões
  document.querySelectorAll('.button-select button')
  .forEach((button) => {
    button.classList.remove('active');
  })
  // coloar a class .active nesse botaõ clicado
  const button = event.currentTarget;
  button.classList.add('active');

  //atualizar o meu input hideen com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]')
  console.log(input);
  
  input.value = button.dataset.value
  //
}
