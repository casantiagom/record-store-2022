# Record Store

This project is and E-commerce site that you can buy music records,search albums, see details of each album, add it to cart, check it out with paypal, register as a user.

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

### Detailed Description

-The site uses the discogs API(https://www.discogs.com/developers) that is a Database of music records, artists, albums, labels. the data is pulled out with axios and is accessible by the entire app through createContext hook.
-You can create a user with password that is managed by Firebase, Log in and Log out.
-It has a cart, the state that contains the info about the item in the cart is stored in the localStorage.
-It has search capability, you can search albums by artists or album.
-When you click on the album it goes to the details of that album(songs list, artist name and photo, and "add to cart" button )

## Authors

Carlos Santiago

## GIF of the running project

- Hat tip to anyone whose code was used
- Inspiration
- etc
