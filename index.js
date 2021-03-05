let tacos = []

const baseUrl = 'http://localhost:3000'

document.addEventListener("DOMContentLoaded", () => {
  getTacos();
  formLinkEvent();

})

function main(){
  return document.getElementById('main');
}

function resetMain(){
  main().innerHTML = '';
}

function nameInput(){
  return document.getElementById('name');
}

function descriptionInput(){
  return document.getElementById('description')
}

function restaurantNameInput(){
  return document.getElementById('restaurant-name')
}

function restaurantUrlInput(){
  return document.getElementById('restaurant-url')
}

function locationInput(){
  return document.getElementById('location')
}

function form(){
  return document.getElementById('form')
}

function formLink(){
  return document.getElementById('form-link');
}

function getTacos(){
  fetch(baseUrl + '/tacos')
  .then(resp => resp.json())
  .then(tacos => {
    tacos.data.forEach(taco => {
      const tacoMarkup = `
      <div data-id=${taco.id}>
      <h3>${taco.attributes.name}</h3>
      <p><em>Description:</em> ${taco.attributes.description}</p>
      <p><em>Location:</em></p>
      <p>${taco.attributes.restaurant.name} - <a href="${taco.attributes.restaurant.url}">${taco.attributes.restaurant.url}</a></p>
      <p>${taco.attributes.restaurant.location}</p>
      <p>Likes: ${taco.attributes.likes}</p>
      <button data-id=${taco.id}>edit</button>
      </div>
      <br></br>`;

      document.querySelector('#taco-container').innerHTML += tacoMarkup
    })
  })
}

function formTemplate(){
  return `
  <h3>Add Taco!</h3>
  <form id='form'>
    <div class = 'input-field'>
      <label for='name'>Taco Name</label>
      <input type='text' name='name' id='name'/>
    </div>
    <br>
    <div class = 'input-field'>
      <label for='description'>Taco Description</label>
      <textarea name='description' id='description' cols='30' rows='5'></textarea>
    </div>
    <br>
    <div class = 'input-field'>
      <label for='restaurant-name'>Restaurant Name</label>
      <input type='text' name='restaurant-name' id='restaurant-name'/>
    </div>
    <br>
    <div class = 'input-field'>
      <label for='restaurant-url'>Restaurant Website</label>
      <input type='text' name='restaurant-url' id='restaurant-url'/>
    </div>
    <br>
    <div class = 'input-field'>
      <label for='location'>City & State</label>
      <input type='text' name='location' id='location'/>
    </div>
    <br>
    <input type='submit' value='Add Taco' />
  </form>
  `
}

function formLinkEvent(){
  formLink().addEventListener('click', function(e){
    e.preventDefault();

    renderForm();
  })
}

function renderForm(){
  resetMain();
  main().innerHTML = formTemplate();
  form().addEventListener('submit', submitEditForm);
}

function submitForm(e){
  e.preventDefault();

  let strongParams = {
    taco: {
      name: nameInput().value,
      description: descriptionInput().value,
      restaurantName: restaurantNameInput().value,
      restaurantUrl: restaurantUrlInput().value,
      location: locationInput().value
    }
  }

  const id = e.target.dataset.id;

  fetch(baseURL + '/tacos', {
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(strongParams),
    method: 'POST'
  })
  .then(resp => resp.json())
  .then(tacos => {
    tacos.push(taco);
    
})}


function submitEditForm(e){
  e.preventDefault();

  let strongParams = {
    taco: {
      name: nameInput().value,
      description: descriptionInput().value
    }
  }
}
