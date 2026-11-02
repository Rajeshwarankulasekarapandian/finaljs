// Requirement 35 & 37: Reference .api container & set loading message
const apiDiv = document.querySelector('.api');
const container = document.querySelector('#product-container');

apiDiv.innerHTML = 'Loading...';

// Fetch products using FakeStoreAPI
fetch('https://fakestoreapi.com/products')
  .then(function(response) {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(function(products) {
    // Requirement 35: Display success message in .api
    apiDiv.innerHTML = 'Data successfully loaded!';

    // Requirement 21: Slice to process only first 5 products
    const firstFiveProducts = products.slice(0, 5);

    firstFiveProducts.forEach(function(product) {
      // Requirement 31: Console log product titles
      console.log('Product Title:', product.title);

      // Requirement 5 & 29: Limit title to 50 characters (or 30 for requirement 5)
      const slicedTitle = product.title.slice(0, 50);

      // Requirement 7 & 29: Limit description to 100 characters (or 50 for requirement 29)
      const slicedDescription = product.description.slice(0, 100);

      // Requirement 17: Upper-case title variable
      const uppercaseTitle = product.title.toUpperCase();

      // Requirement 19: Total character count of title
      const titleCharCount = product.title.length;

      // Requirement 27 & Mini Project requirement: Card wrapper element
      const card = document.createElement('div');
      card.className = 'card';

      // Requirement 1, 3, 9, 11, 13, 15, 23, 25, 33: Inject HTML elements into card
      card.innerHTML = 
        // Requirement 9 & 25: Image in a div wrapper with 200px width constraint
        '<div class="image-wrapper">' +
          '<img src="' + product.image + '" alt="' + slicedTitle + '" width="200">' +
        '</div>' +
        
        // Requirement 15 & 33: Category inside <h3>
        '<h3>' + product.category + '</h3>' +
        
        // Requirement 3 & 23: Product ID and Title inside <h2>
        '<h2>#' + product.id + ' - ' + slicedTitle + '</h2>' +
        
        // Requirement 13 & 23: Price inside <p>
        '<p class="price">\$' + product.price + '</p>' +
        
        // Requirement 7 & 29: Limited description
        '<p class="description">' + slicedDescription + '...</p>' +
        
        // Requirement 19: Title character count metadata
        '<p class="meta-info">Title chars: ' + titleCharCount + '</p>';

      // Append card to main container
      container.appendChild(card);
    });
  })
  .catch(function(error) {
    // Requirement Mini Project: Red error message in .api on fetch failure
    apiDiv.innerHTML = 'Error loading products: ' + error.message;
    apiDiv.style.color = 'red';
  })
  .finally(function() {
    // Requirement 39 & Mini Project: Run after request finishes
    console.log('API request completed');
  });