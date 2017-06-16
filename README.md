# Rokk3rLabs_backend
Shopping cart using Nodejs

#### The project implements the following functionality:

- The main page should show a list of 20 products, each one with a different name and price, and stock amount.
- The products can be added to the shopping cart using a [Buy] button for each row.
- If the user clicks on the [Buy] button, the product disappear from the product table, and should increment a counter in the right corner of the screen.
- Beside the counter, should appear the sum of the prices of the items added.
- If the user clicks on the counter, a dialog window should appear with the list of products added previously, and each product should have a [Delete] button.
- If the user refreshes the page, the counter should show the amount of items already added, and if clicks on the counter, should display the dialog window.
- If the user adds a product to the shopping cart, the amount of products on stock, should be decremented.
- If the user deletes the product from the shopping cart, the amount of that products on stock should be incremented again.

#### Missing functionality:
 
- If the user adds the same amount of products in stock, the product should disappear from the main product table.
- Same products added to the shopping cart should be appear as one row, and should display the amount of products added.
- Shopping cart is displayed in sepparate window, not in dialog
- If the user adds the same amount of products in stock, the product should disappear from the main product table.


# Instalation

Restore the backup of the database using
 
``
mongorestore --db database_name path_to_bson_file
``

The backup is in the dump folder

To run the app first start the mongodb server, then run npm install in the project folder.
Finally run npm start from the terminal.
