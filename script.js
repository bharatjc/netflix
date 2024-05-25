let navSearch = document.getElementById('navSearch')
let navInput = document.getElementById('navInput')


function navigateToSection() {
  const input = navInput.value; 
  const targetDiv = document.getElementById(input)
  if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth' }); 
  } else {
      navInput.value = "No results found";
  }
}

navSearch.addEventListener('click', navigateToSection);

navInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { 
        navigateToSection();
    }
});



