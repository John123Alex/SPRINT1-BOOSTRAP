/* 

  
  var cardsContainer = document.getElementById("upcoming-events-container");

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
  function displayEvents(data) {
    const currentDate = new Date(data.currentDate);
    const upcomingEventsContainer = document.getElementById("upcoming-events-container");
  
    for (let i = 0; i < data.events.length; i++) {
      const event = data.events[i];
      const eventDate = new Date(event.date);
  
      if (eventDate >= currentDate) {
        const card = createCard(event);
        card.classList.add("future-event");
        upcomingEventsContainer.appendChild(card);
      }
    }
  
    // Guardar en archivo HTML
    saveCardsToHTML(upcomingEventsContainer.innerHTML, "upcoming.html");
  }
  
  // Resto del código...
  
  displayEvents(data);
  
 */

  function displayEvents(data) {
    const currentDate = new Date(data.currentDate);
    const pastDates = [];
    const futureDates = [];
  
    data.events.forEach((event) => {
      const eventDate = new Date(event.date);
  
      if (eventDate >= currentDate) {
        futureDates.push(event);
      } else if (eventDate < currentDate) {
        pastDates.push(event);
      }
    });
  
    const cardsContainer = document.getElementById("upcoming-events-container");
  
    futureDates.forEach((event) => {
      const card = createCard(event);
      card.classList.add("future-event");
      cardsContainer.appendChild(card);
    });
  }
  
 
  
  function createCard(event) {
    let card = document.createElement("div");
   
    card.classList.add("cards");
   
    
  
    image = document.createElement("img");
    image.src = event.image;
    image.classList.add("img")
    image.alt = event.name;
    card.appendChild(image);
  
    let name = document.createElement("h3");
    name.textContent = event.name;
    card.appendChild(name);
  
    let date = document.createElement("p");
    date.textContent = "Date: " + event.date;
    card.appendChild(date);
  
    let description = document.createElement("p");
    description.textContent = event.description;
    card.appendChild(description);
  
    let category = document.createElement("p");
    category.textContent = "Category: " + event.category;
    card.appendChild(category);
  
    let place = document.createElement("p");
    place.textContent = "Place: " + event.place;
    card.appendChild(place);

    let price = document.createElement("p");
    price.textContent = "Price: $" + event.price;
    card.appendChild(price);

    let button = document.createElement("button");
    button.textContent = "Details";
    button.classList.add("card-button");
    card.appendChild(button);
  



  
    return card;
  }

  displayEvents(data);