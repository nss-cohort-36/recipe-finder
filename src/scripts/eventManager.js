const handleSearch = event => {
  console.log(event)
}

const attachEventListenerToSearchButton = () => {
  const searchButton = document.getElementById("search-button")
  searchButton.addEventListener("click", handleSearch)
}
