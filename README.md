# Table of Contents 

- [Intro](#intro)
- [Installation and Usage](#installation-and-usage)


# Intro

This project display a list of Restaurants which provided in a JSON file and show detail by click in each item.

To have a clear code utilized Atomic system design.

project implement with `Vue.js` and `Typescript`.

## Components

### Atoms: 

- HeaderBar: Header of Application that get Name as props
- RestaurantItem: Get a Restaurant data as props and display name and address
- ReviewItem: Get a Review item as props and display in `RestaurantDetail` page

### Molecules: 
- RestaurantList: Get list of restaurant as props and display RestaurantItem in a loop
- RestaurentDetail: Display all data of a restaurant which get as props

### Organisms: 
- Restaurant: display 2 `RestaurantList` and `RestaurantDetail` component


# Installation and Usage

To install and run the project, follow these steps:

1. Navigate to the project directory
2. Run `yarn install` or `npm install` to install dependencies
3. Run `yarn dev` or `npm dev` to start the project in development mode
4. Run `yarn test` or `npm test` to run the tests in watch mode

