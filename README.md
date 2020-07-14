# A React-JS assessment

This repo includes a set of tests that can be used to assess the skills of
a candidate for a ReactJS position.

## I want to work on the tests; what do I do?
To use the tests, you will need to install [Node](https://nodejs.org/). Note
that on Windows, there are some reports that you will need to restart
after installing Node - see #12.

You can clone or download this repo. Once you have done so, from the root
directory of the repo, run:

    npm install
    npm start

You can then view the app in your browser at
[http://localhost:4001](http://localhost:4001).

Additionally, you can start rest-service by run:

    npm run start:api
    
You can then view the API in your browser at
[http://localhost:4002](http://localhost:4002). Available API endpoints:

 * [product](http://localhost:4002/products)
 * [cart](http://localhost:4002/products)
 * [featured-deals](http://localhost:4002/products)
 * [session](http://localhost:4002/products)
 
# Features

  * [Numeric Input](#numeric-Input)
  * [Ajax](#ajax)
  * [Counter](#counter)

## Numeric Input `#Numeric Input`

Component Location: src/features/NumericInput/index.js
Requirement:

 * write an input component  that will take only number 0 to 9 
 * if user enter invalid charater, display error messsage 
 below text input and change border-color of input to red
 * write a unit test for this component

![Initial Sate](tree/master/img/numeric-input-initial-state.png?raw=true "Title")


## Ajax `#ajax`

Component Location: src/features/FeaturedDeals/index.js
Requirement:
 * write a component to fetch & display products of Featured Deal
   * [localhost:4002/featured-deals](localhost:4002/featured-deals): return ```int[]``` of product-id
   * [localhost:4002/products](localhost:4002/products): return ```{product}[]``` 
 * write a unit test for this component

## Counter `#counter`

Component Location: src/features/Counter/index.js
Requirement: 
 * write a component with buttons to increase or decrease redux-state value
   * [+] button will increase value by 1 
   * [-] button will decrease value by 1
 * write a unit test for this component

# Packages

 * [react 16.13.1](https://reactjs.org/)
 * [react-jss 10.3.0](https://cssinjs.org/react-jss?v=v10.3.0)
 * [react-redux 4.0.5](https://react-redux.js.org/)
 * [reselector 0.17.0](https://github.com/reduxjs/reselect)
 * [json-server 0.16.1](https://github.com/typicode/json-server)
 * [react-router-dom 5.2.0](https://reactrouter.com/web/guides/quick-start)

# License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
<img alt="Creative Commons License" style="border-width:0" 
src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

<br/>This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.