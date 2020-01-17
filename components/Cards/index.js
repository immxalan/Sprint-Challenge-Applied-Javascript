// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
let cardsEntry = document.querySelector(".cards-container");
axios.get("https://lambda-times-backend.herokuapp.com/articles").then(response => {
    console.log(response);
    console.log(response.data.articles);
    let articleLanguages = response.data.articles;
    // [Object.keys(response.data.articles)];

    Object.keys(articleLanguages).forEach(element =>{ 
        articleLanguages[element].forEach(item => {
            cardsEntry.appendChild(card(item))
        })
    })
})
.catch(error => {
    console.log("the data was not returned", error)
  });

  // <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
function card (item) {
    console.log(item)
    const cardDiv = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const authorSpan = document.createElement("span");
    headline.textContent = `${item.headline}`;
    img.src = `${item.authorPhoto}`;
    authorSpan.textContent = `${item.authorName}`;
    cardDiv.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    cardDiv.append(headline);
    cardDiv.append(author);
    author.append(imgContainer);
    imgContainer.append(img);
    imgContainer.append(authorSpan);
    return cardDiv;
}
// Cannot read property 'headline' of undefined
//     at card (index.js:43)
//     at index.js:28
//     at Array.forEach (<anonymous>)
//     at index.js:27
//     at Array.forEach (<anonymous>)
//     at index.js:26
// javascript js:37