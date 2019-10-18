const handleSearch = event => {
  // console.log(event)
  const inputField = document.querySelector("input")
  console.log("user input", inputField.value)
}

const attachEventListenerToSearchButton = () => {
  const searchButton = document.getElementById("search-button")
  searchButton.addEventListener("click", handleSearch)
}
