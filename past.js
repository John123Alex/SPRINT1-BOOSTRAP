const currentDate = new Date("2023-01-01");

const pastEvents = data.events.filter(event => {
  const eventDate = new Date(event.date);
  return eventDate < currentDate;
});

const eventCardsContainer = document.getElementById("event-cards-container");

pastEvents.forEach(event => {
  const eventCard = document.createElement("div");
  eventCard.classList.add("cards");

  const eventName = document.createElement("h3");
  eventName.textContent = event.name;
  eventName.classList.add("event-name");
  eventCard.appendChild(eventName);

  const eventImage = document.createElement("img");
  eventImage.src = event.image;
  eventImage.classList.add("img");
  eventCard.appendChild(eventImage);

  const eventDate = document.createElement("p");
  eventDate.textContent = "Date: " + event.date;
  eventDate.classList.add("event-date");
  eventCard.appendChild(eventDate);

  const eventDescription = document.createElement("p");
  eventDescription.textContent = event.description;
  eventDescription.classList.add("event-description");
  eventCard.appendChild(eventDescription);

  const eventCategory = document.createElement("p");
  eventCategory.textContent = "Category: " + event.category;
  eventCategory.classList.add("event-category");
  eventCard.appendChild(eventCategory);

  const eventPlace = document.createElement("p");
  eventPlace.textContent = "Place: " + event.place;
  eventPlace.classList.add("event-place");
  eventCard.appendChild(eventPlace);

  const eventCapacity = document.createElement("p");
  eventCapacity.textContent = "Capacity: " + event.capacity;
  eventCapacity.classList.add("event-capacity");
  eventCard.appendChild(eventCapacity);

  const eventAssistance = document.createElement("p");
  eventAssistance.textContent = "Assistance: " + (event.assistance || 0);
  eventAssistance.classList.add("event-assistance");
  eventCard.appendChild(eventAssistance);

  const eventPrice = document.createElement("p");
  eventPrice.textContent = "Price: $" + event.price;
  eventPrice.classList.add("event-price");
  eventCard.appendChild(eventPrice);
  
  const eventButton = document.createElement("button");
  eventButton.textContent = "Details";
  eventButton.classList.add("card-button");
  eventCard.appendChild(eventButton);


  eventCardsContainer.appendChild(eventCard);
});