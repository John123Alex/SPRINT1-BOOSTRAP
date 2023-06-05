

/*  var imagen = document.createElement('img');
 imagen.src = 'https://img.freepik.com/vector-premium/libro-abierto-leer-vector-simbolo_599395-337.jpg?w=2000';
imagen.alt = 'imagen';

 var card = document.createElement('div');
 card.classList.add('card'); // Agrega una clase a la card si es necesario
 card.appendChild(imagen);
 var contenedor = document.getElementById('contenedor'); // Reemplaza 'contenedor' con el ID o selector del contenedor deseado
 contenedor.appendChild(card);


  const cardContainer = document.getElementById("card");
  card.innerHTML += ` <div class="card" style="width: 18rem;" id="contenedor">
  <img src="${data.image}">
  <div class="card-body">
    <h5 class="card-title">${object.name}</h5>
    <p class="card-text">${object.description}</p>
    <a href="./description.html" class="btn btn-primary style-btn">More Information</a>
  </div>
</div>` */

var cardsContainer = document.getElementById("cards-container");

for (var i = 0; i < data.events.length; i++) {
  var evento = data.events[i];
  console.log([evento])

  var cardElement = document.createElement("div");
  cardElement.className = "card";
  cardElement.style = "width: 18rem;";

  var imageElement = document.createElement("img");
  imageElement.src = evento.image;
  imageElement.className= "img";
  cardElement.appendChild(imageElement);

  var titleElement = document.createElement("h5");
  titleElement.className = "card-title";
  titleElement.textContent = evento.name;
  cardElement.appendChild(titleElement);

  var descriptionElement = document.createElement("p");
  descriptionElement.className = "card-description";
  descriptionElement.textContent = evento.description;
  cardElement.appendChild(descriptionElement);

  var priceElement = document.createElement("p");
  priceElement.className = "card-price";
  priceElement.textContent = "$" + evento.price;
  cardElement.appendChild(priceElement);

  var buttonElement = document.createElement("button");
  buttonElement.textContent = "Details";
  buttonElement.className = "card-button";
  cardElement.appendChild(buttonElement);

  cardsContainer.appendChild(cardElement);
}
