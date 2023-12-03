# Unsplash Images Search with axios and react-query

#### Project Setup

- yarn create vite unsplash-images
- yarn dev

#### Initial Structure and Global Context

Create three components - ThemeToggle, SearchForm and Gallery. Render all of them in App.jsx, and setup global context.

#### Dark Theme - Initial Setup

In the context of creating a state value called 'isDarkTheme' (boolean) and a helper function called 'toggleDarkTheme', set 'isDarkTheme' to the opposite value when 'toggleDarkTheme' is invoked. Pass 'isDarkTheme' and 'toggleDarkTheme' down to 'ThemeToggle'. In 'ThemeToggle', import two icons from the React Icons library (moon and sun) and create a button. When the button is clicked, invoke 'toggleDarkTheme', and display the appropriate icon based on the value of 'isDarkTheme' inside of the button.

#### Dark Theme Class - Code

```js
const body = document.querySelector('body');
body.classList.toggle('dark-theme', newDarkTheme);

// alternative setup
document.body.classList.toggle('dark-theme', newDarkTheme);
```
#### Unsplash Info

I signed up for an account with Unsplash to incorporate their API into my application and fetch images. This process provided me with an API key, allowing me to authenticate my requests and successfully retrieve the desired images for integration into my application.
[Unsplash Website](https://unsplash.com/)

#### Install and Setup React Query 
I installed and set up React Query to effectively handle API requests for fetching images from the Unsplash API. This integration allows to efficiently manage and retrieve images within React application using the capabilities provided by React Query. [react-query installation](https://tanstack.com/query/latest/docs/react/installation)

#### The challenge that I faced and learned
- Api Handling with axios and react-query
- use of react-query devtool
- dark mode setup
- SignIn as developer in unsplash and api handling
- .evn file setup and uses