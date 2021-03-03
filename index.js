const baseUrl = 'http://localhost:3000/tacos'

document.addEventListener("DOMContentLoaded", () => {
  getTacos();
})

function getTacos(){
  fetch(baseUrl)
  .then(resp => resp.json())
  .then(tacos => {
    tacos.data.forEach(taco => {
      const tacoMarkup = `
      <div data-id=${taco.id}>
      <h3>${taco.attributes.name}</h3>
      <p>${taco.attributes.description}</p>
      <p>${taco.attributes.restaurant.name} - <a href="${taco.attributes.restaurant.url}">${taco.attributes.restaurant.url}</a></p>
      <p>${taco.attributes.restaurant.location}</p>
      <p>${taco.attributes.rating}</p>
      <button data-id=${taco.id}>edit</button>
      </div>
      <br></br>`;

      document.querySelector('#taco-container').innerHTML += tacoMarkup
    })
  })
}