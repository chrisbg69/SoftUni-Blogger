[![HitCount](http://hits.dwyl.io/{chrisbg69}/{SoftUni-Blogger}.svg)](http://hits.dwyl.io/{chrisbg69}/{SoftUni-Blogger})
![GitHub language count](https://img.shields.io/github/languages/count/chrisbg69/SoftUni-Blogger)
![GitHub top language](https://img.shields.io/github/languages/top/chrisbg69/SoftUni-Blogger)
![GitHub repo size](https://img.shields.io/github/repo-size/chrisbg69/SoftUni-Blogger)

# SoftUni Blogger

> This project uses the following technologies:

- [React](https://reactjs.org) and [React Router](https://reacttraining.com/react-router/) for frontend
- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
- [MongoDB](https://www.mongodb.com/) for the database
- [Redux](https://redux.js.org/basics/usagewithreact) for state management between React components

It is a small blog app that includes authentication, profiles and forum posts.

## Quick Start

```
# change default.json file in config folder

# this file is located in config/default.json

# add uri of your mongodb connection for example:

 "mongoURI": "mongodb+srv://<your_username>:<your_password>@<your_app>.mongodb.net/..."  
```
> Note:
   > I will leave the database configured for ease of checking, then it will be deleted.

```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install

# Run both Express & React from root
npm run dev

# Build for production
cd client
npm run build
```

## App Info

> Live version of the app:

- [https://softuni-blogger.herokuapp.com](https://softuni-blogger.herokuapp.com)


