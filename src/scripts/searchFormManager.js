
// Function definition
const buildAndAppendSearchForm = () => {

  // Assigning a string to variable searchForm
  const searchForm = `
  <section class="search-form">
    <h3>Search for recipes containing: </h3>
    <input type="text">
    <button id = "search-button">Search</button>
  </section>
  <section class="search-results"></section>
  `
  // console.log(searchForm)

  // DOM is searched for first id named "container" and assigns it to variable "containerDiv"
  const containerDiv = document.querySelector("#container")

  // The inner HTML (space between opening and closing tags) of the tag with id "container" is populated with the value of the variable "searchForm"
  containerDiv.innerHTML = searchForm
}
