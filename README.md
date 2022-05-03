# Record Store

This project is an E-commerce site that you can buy music records,search albums, see details of each album, add it to cart, check it out with paypal, register as a user.

## Languages and tools used

This project was build in react.js and use the following tools:
-react.js

- react hooks(useContext, useState, useRef)
  -typescript
  -tailwind css
  -react-paypal components
  -axios
  -react router
  -firebase
  -dicogs API

### Running site demo

https://62706d40e65a4a3a46cc0043--soft-sprite-272c91.netlify.app/

### Detailed Description

-The site uses the discogs API(https://www.discogs.com/developers) that is a Database of music records, artists, albums, labels. the data is pulled out with axios and is accessible by the entire app through createContext hook.
-You can create a user with password that is managed by Firebase, Log in and Log out.
-It has a cart, the state that contains the info about the item in the cart is stored in the localStorage.
-It has search capability, you can search albums by artists or album.
-When you click on the album it goes to the details of that album(songs list, artist name and photo, and "add to cart" button )
-In the Cart page you can delete items, modify the quantity and Check out with paypal or credit card.

## Authors

Carlos Santiago

## GIF of the running project
