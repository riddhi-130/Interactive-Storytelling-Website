/* -------------------------- Start Page JSON Data -------------------------- */

let stories = [
  {
    id: 1,
    title: "The Thirsty Crow",
    cardImage: "assets/images/story-1-images/card-img.jpg"
  },
  {
    id: 2,
    title: "The Boy Who Cried The Wolf",
    cardImage: "assets/images/story-2-images/card-img.jpg"
  },
  {
    id: 3,
    title: "The Lion And The Mouse",
    cardImage: "assets/images/story-3-images/card-img.jpg"
  },
  {
    id: 4,
    title: "The Little Red Hen",
    cardImage: "assets/images/story-4-images/card-img.jpeg"
  },
  {
    id: 5,
    title: "The Ugly Duckling",
    cardImage: "assets/images/story-5-images/card-img.png"
  }
];

/* ------------------------------ Start Page JS ----------------------------- */

// Render story cards on index.html
function renderStoryCards() {
    const container = document.getElementById("story-cards");
    stories.forEach((story) => {
        const card = document.createElement("div");
        card.className = "card";
    
        // Image
        const cardImage = document.createElement("img");
        cardImage.src = story.cardImage;
        card.appendChild(cardImage);
    
        // Card Content
        const cardContent = document.createElement("div");
        cardContent.className = "card-content";
    
        const cardTitle = document.createElement("h3");
        cardTitle.innerText = story.title;
        cardContent.appendChild(cardTitle);
    
        const cardDescription = document.createElement("p");
        cardDescription.innerText = "Begin your journey with this exciting story!";
        cardContent.appendChild(cardDescription);
    
        // Start Button
        const startButton = document.createElement("button");
        startButton.className = "start-button";
        startButton.innerText = "Start";
        startButton.onclick = () => {
            window.location.href = `pages/story-page.html?id=${story.id}`;
        };
        cardContent.appendChild(startButton);
    
        card.appendChild(cardContent);
        container.appendChild(card);
    });
}

// Call the function directly to render story cards
renderStoryCards();
