# simple-spa-demo

Just a simple demo that shows how to create a Single Page Application.

On `DOMContentLoaded` it will check for a hash value in the location. If the value exists it will redirect and display the appropriate div page. 

It will also use the `history.replaceState()` method to update the history array to include the default location and hash value if the page loads without a hash value.

When the user clicks on a link it will look for the `data-href` attribute value and use that to update the value in the location bar using the `history.pushState()` method.

A `popstate` event listener is also added on the initial load to handle any clicking of the back button.

Methods for changing the display, handling initial load, handling the back button are all in separate functions.
