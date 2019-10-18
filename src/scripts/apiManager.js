// base url for api standard search will return entire api
const apiBaseUrl = "https://www.food2fork.com/api/"

// variable to hold function calling api by specific target i e chicken or beef etc
// to get fetch format, search something in api, then fill in blanks for other data
// in this case, apiBaseUrl to avoid long string of data, food2ForkKey so a variable shows up instead of your key, and searchInput which is the paramater defined in the function you are creating
const searchRecipes = searchInput => fetch(`${apiBaseUrl}search?key=${food2ForkKey}&q=${searchInput}`)
// .then promise making info a json file - other .then is chained but is in eventManager.js file because they are tied together by function use
.then(response => response.json())
