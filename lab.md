# React Practice

Today, we're going to consolidate everything we've done in React so far. You can choose from the following mini-projects.

## Countries API 

Your task is to build an app that uses [this API](https://restcountries.eu/rest/v2/all) to display information on the countries of the world :earth_africa:

Your app should be able to:
- Display the total population of all the countries the API provides.
- Allow the user to select a single country and display information about it (at least the country's name and flag).
- Allow users to add their favourite countries to a list that is also displayed in your app.

Choose this if you want to practice the following:
- Being able to make requests and displaying the data in the page
- Understanding how to traverse the data structure received from an API
- Being able to implement React `useState` and `useEffect` hooks

As an extension, you could show a list of the selected country's neighbouring countries, display the total population of these neighbouring countries and/or prevent the same country being added to the user's favourite countries list twice.

## Mortgage Calculator

Build a simple mortgage affordability calculator, which takes in a person's salary (and optionally, their partner's salary). Display the maximum value of the property that the person or couple can afford. (Use a simple calculation of `combined salary * 3` to begin with).

Choose this project if you want to practice:

- Components, state (`useState`), props and `useEffect`.
- Business logic
- Controlled form components

As an extension, you can add more fields - and therefore complexity - to the calculation. For example:

- Add a deposit field, which is added on to the maximum value of the property
- Add a field for "other monthly commitments", which should reduce the maximum possible value

As an advanced extension:

- Allow the user to enter the interest rate of the mortgage, and the length of the mortgage term in years. Output their monthly repayments.

_*Hint:*_ Think carefully about the SOLID principles, and in particular, the Single Responsibility principle. Where are the calculations going to be performed? Plan your work carefully.

## Hacker News Client

Build a filterable front-end for [Hacker News](https://news.ycombinator.com/). Using the following endpoints, allow the user to view a list of top stories, and filter them by title.

- https://hacker-news.firebaseio.com/v0/topstories.json - Latest Stories
- https://hacker-news.firebaseio.com/v0/item/{storyId}.json - Story Detail

Choose this project if you want to practice:

- - Components, state (`useState`), props and `useEffect`.
- Working with requests
- Working with forms

_*Hint:*_ How can you send multiple requests and wait for responses? Research [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).
