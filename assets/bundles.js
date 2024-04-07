// This event will be fired whenever a bundle widget is rendered
document.addEventListener('bundler:bundle_widget_created', function(e) {
      // Get all elements with class 'bndlr-product-title'
    var productTitles = document.querySelectorAll('.bndlr-product-title');

    // Words to remove
    var wordsToRemove = ["Bars", "Optiman", "Optislim", "Premium", "Platinum", "Plus", "Plant", "Based", "Replacement"];
    // var wordsToRemove = ["VLCD", "Bars", "Optiman", "Optislim", "For", "Her", "Him", "Premium", "Shake", "Variety", "-", "Platinum", "Plus", "Plant", "Based", "Meal", "Replacement"];

    // Function to remove words and extra spaces
    function removeWordsAndSpaces(title) {
        // Remove specified words
        wordsToRemove.forEach(word => {
            // Use regex to remove word with optional spaces before and after
            title = title.replace(new RegExp('\\s*' + word + '\\s*', 'gi'), '');
        });

        // Remove extra spaces at the beginning and end
        // title = title.trim();

        return title;
    }

    // Loop through each product title and update the text content
    productTitles.forEach(titleElement => {
        var originalTitle = titleElement.textContent;
        var revisedTitle = removeWordsAndSpaces(originalTitle);
        
        // Update the text content with the revised title
        titleElement.textContent = revisedTitle;
    });
  
});
document.addEventListener("bundler:bundle_widget_created",function(e){var productTitles=document.querySelectorAll(".bndlr-product-title"),wordsToRemove=["VLCD","Bars","Optiman","Optislim","For","Her","Him","Premium","Shake","Variety","-","Platinum","Plus","Plant","Based","Meal","Replacement"];function removeWordsAndSpaces(title){return wordsToRemove.forEach(function(word){title=title.replace(new RegExp("\\s*"+word+"\\s*","gi"),"")}),title=title.trim(),title}productTitles.forEach(function(titleElement){var originalTitle=titleElement.textContent,revisedTitle=removeWordsAndSpaces(originalTitle);titleElement.textContent=revisedTitle})});
//# sourceMappingURL=/cdn/shop/t/11/assets/bundles.js.map?v=59733319721873725851703609825