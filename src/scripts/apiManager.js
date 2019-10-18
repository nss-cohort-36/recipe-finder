
// sets variable to base url of api

const apiBaseUrl = "https://www.food2fork.com/api/"

//creates a function that takes the searchInput parameter, api url, and api key and returns the value of the fetch and then applies the json method to it

const searchRecipes = searchInput => fetch(`${apiBaseUrl}search?key=${food2ForkKey}&q=${searchInput}`)
.then(response => response.json())
