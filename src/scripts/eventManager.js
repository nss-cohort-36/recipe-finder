const handleSearch = event => {
  // console.log(event)
  const inputField = document.querySelector("input")
  console.log("user input", inputField.value)

  searchRecipes(inputField.value)
  .then(response => console.log(response))
}

const attachEventListenerToSearchButton = () => {
  const searchButton = document.getElementById("search-button")
  searchButton.addEventListener("click", handleSearch)
}
