// Get all elements with the class "product__accordion"
var accordionElements = document.querySelectorAll('.product__accordion');

// Loop through each element and find the nested ul elements
accordionElements.forEach(function(accordionElement) {
  var ulElements = accordionElement.querySelectorAll('ul');

  // Add the "custom-list" class to each ul element
  ulElements.forEach(function(ulElement) {
    ulElement.classList.add('custom-list');
  });
});
