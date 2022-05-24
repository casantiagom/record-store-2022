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

-The site uses the discogs API(https://www.discogs.com/developers) a database of music records, artists, albums, labels. the data is pulled out with axios and is accessible by the entire app through createContext hook.

-You can create users with password that is managed by Firebase, Log in and Log out.

-Cart: the state that contains the data about the items in the cart is stored in localStorage.

-It has search capability, you can search albums by artists or album name.

-When you click on the album it goes to the details of that album(songs list, artist name and photo, and "add to cart" button )

-In the Cart page you can delete items, modify the quantity and Check out with paypal or credit card.

## Authors

Carlos Santiago

## GIF of the running project
![pro1](https://user-images.githubusercontent.com/66339441/166740646-1dbcb658-0c88-41ce-aa7a-ce99fbab4f37.gif)
![pro2a](https://user-images.githubusercontent.com/66339441/166740688-29c022e5-b44b-425a-80dd-e741740719bb.gif)
![pro2b](https://user-images.githubusercontent.com/66339441/166740695-cfb995d4-f14e-4241-8770-0cc618556d22.gif)
![pro3](https://user-images.githubusercontent.com/66339441/166740709-e3c7a47c-afc3-422c-9e72-22f08d717b43.gif)
![pro4](https://user-images.githubusercontent.com/66339441/166740722-56f014f2-961f-4325-af16-136921c636af.gif)

