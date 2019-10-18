// function called on main page - built here
// variable searchForm is the interpolated html passed to dom and populated on page
// classes given to section and div for targeting at need
const buildAndAppendSearchForm = () => {
  const searchForm = `
  <section class="search-form">
    <h3>Search for recipes containing: </h3>
    <input type="text">
    <button id = "search-button">Search</button>
  </section>
  <section class="search-results"></section>
  `
  // console.log(searchForm)
// code to send to dom & show on page
  const containerDiv = document.querySelector("#container")
  containerDiv.innerHTML = searchForm
}
