// Assigning the base api URL to variable "apiBaseUrl"
const apiBaseUrl = "https://www.food2fork.com/api/"

// 
const searchRecipes = (searchInput) => fetch(`${apiBaseUrl}search?key=${food2ForkKey}&q=${searchInput}`)
.then(response => response.json())
