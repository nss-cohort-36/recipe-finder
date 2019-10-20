// Assigning the base api URL to variable "apiBaseUrl"
const apiBaseUrl = "https://www.food2fork.com/api/"

// Function that accepts user search input as an argument. Fetch does a GET call on a URL string to get back data. Uses api base url, my api key and the user input.
const searchRecipes = (searchInput) => fetch(`${apiBaseUrl}search?key=${food2ForkKey}&q=${searchInput}`)

// .then waits for the response to be sent back then turns the response into JSON format. .json() is a method that can be called on a response stream (which was returned by the fetch call)
.then(response => response.json())
