# !Pocket (*Not Pocket*)

!Pocket was first conceived by [Simon Tsegay](https://github.com/simongt), [Yaakov David](https://github.com/YaakovDavid), [Darrell DeCosta](https://github.com/drldcsta) and [Eryl Murphy](https://github.com/ErylMurphy) in the summer of 2018 amidst a week-long code sprint, when they sought a more aesthetically accessible version of [Google Bookmarks](https://www.google.com/bookmarks/), while also being inspired by [Pinterest](https://www.pinterest.com/) and especially [Pocket](https://getpocket.com/) in particular.

## In a Nut-Shell
!Pocket is a full-stack, CRUD application that allows users to manage articles found on the Internet.

## Features
A registered user enters a URL for an article, then the article is scraped and formatted to display as a card.

An unregistered user can view cards on the !Pocket homepage. To create their own stash of cards, they must register. Once registered/logged in, they are permitted to create cards by submitting a URL into a form.

Registered users are then given the option of storing a card privately, or publicly. If they chose public, the card will be displayed both on their personal page and on the !Pocket homepage. Cards stored privately are only displayed on the user's personal page.

Cards can also be deleted, but only on the user's personal page. 

## Screenshots

### Home

![Imgur Image](https://imgur.com/TJQck6r.jpg)

### Add

![Imgur Image](https://imgur.com/BYctOWI.jpg)

## Installation Instructions
1. Install dependencies: `npm install`.
2. Launch Node server: `npm start`.
3. Launch Express server: `nodemon server.js`.

# Design Process

## User Stories

As an avid consumer of web content, I want to easily access and manage articles I have selected to read in my own time. 

As a curious individual, I want to see trending articles.

As a member of the online community, I want to share articles that will be of interest to others.

## Wireframes

### Home

![Home](https://imgur.com/h5ARjh5.jpg)

### Home with sidebar

![Home with sidebar](https://imgur.com/jvvgB9b.jpg)

### Add a card (personal page)

![Add a card](https://imgur.com/qN24iP4.jpg)

### Personal page

![Personal page](https://imgur.com/k6yYfKv.jpg)

# Implementation

## Tech Stack
 - Built with React.js. 
 - CRUD functionality.
 - Posgres and Express API.
 - Unit tests written in Jest.
 - NPM package breakdown:
    - Bcrypt for user authorization. 
    - Express-Session.
    - Open-Graph - when given a URL open-graph provides the open graph meta properties scraped from that URL. 
    - Helmet - sets HTTP headers, preventing unintended elements from being included in our page, e.g. frames, images, tracking scripts, etc.

## Challenges
- Scraping cards from URLs.
- Manipulating the sidebar.
- Tags.

# Back-End Design

## ERDs
The database features the tables `users`, `stash`, `tags`, and `stash_tags`.

***Stash*** refers to the individual cards that host a URL. Not all tables were used. Tags were not realized upon project delivery, but the team intends to revisit this. 

### Sample schema

![Imgur Image](https://imgur.com/5hghPtE.jpg)

### Two models: `Users` + `Stash`. 

#### Users

![Imgur Image](https://imgur.com/P6tcL6h.jpg)

#### Tags

![Imgur Image](https://imgur.com/kNlwgsC.jpg)

#### Tag groups

![Imgur Image](https://imgur.com/cvDxXUG.jpg)

#### Stash

![Imgur Image](https://imgur.com/7PM8PD0.jpg)

# Backlog

### Future Endeavors

- Implement tags.
- Embed videos. 
- Resolve why certain links cannot be scraped.
- Implement a ***friends*** feature, so a user can give permission to another user to view their personal page.
