// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// const exampleData = response.data.examples;
// exampleData.forEach(example => {
//     examplesContainer.appendChild(tabMaker(example));
entryPoint = document.querySelector(".topics");
axios.get("https://lambda-times-backend.herokuapp.com/topics").then(response=>{

const topicData = response.data.topics;
topicData.forEach(element => {
    entryPoint.appendChild(tab(element))
})
   
})
.catch(error => {
    console.log("the data was not returned", error)
  });

function tab (element){
    const newTab = document.createElement("div");
    newTab.textContent = element
    newTab.classList.add("tab");
    return newTab;
}
