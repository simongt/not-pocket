# notpocket

notpocket is an application that allows users to manage articles found on the Internet.

The articles are scraped from URLs and formatted as cards. 
An unregistered user can view cards on the notpocket homepage. To create their own stash of cards, they must register. Once registered/logged in, they are permitted to create cards by submitting a URL into a form. They are then given the option of storing a card privately, or publicly. If they chose public, the card will be displayed both on their personal page and on the notpocket homepage. Cards stored privately are only displayed on the user's personal page. Cards can also be deleted, but only on the personal page. 

notpocket was conceived by Yaakov David, Darrell DeCosta, Simon Tsegay, and Eryl Murphy  in the summer of 2018, when they sought a more aesthetically accessible version of google bookmarks. 

## User stories:
As an avid consumer of web content, I want to easily access and manage articles I have selected to read in my own time. 

As a curious individual, I want to see trending articles.

As a member of the online community, I want to share articles that will be of interest to others.

## Wireframes: 
Home:

![Imgur Image](https://imgur.com/h5ARjh5.jpg)

Home with sidebar:

![Imgur Image](https://imgur.com/jvvgB9b.jpg)

Add a card (personal page):

![Imgur Image](https://imgur.com/qN24iP4.jpg)

Personal page:

![Imgur Image](https://imgur.com/k6yYfKv.jpg)

## Tech:
 - Built with React.js. 
 - CRD functionality.
 - Posgres and Express API. 
 - Unit tests written in Jest.
 - NPM packages:
    - Bcrypt for authorization. 
    - Express-Session.
    - Open-Graph - when given a URL open-graph provides the open graph meta properties scraped from that URL. 
    - Helmet - sets HTTP headers, preventing unintended elements from being included in our page, e.g. frames, images, tracking scripts, etc.

## Challenges: 
- Scraping cards from URLs.
- Manipulating the sidebar.
- Tags.

## ERDs: 
The database features the tables users, stash, tags, and stash_tags. "Stash" refers to the individual cards that host a URL. Not all tables were used. Tags were not realized upon project delivery, but the team intends to revisit this. 

Example of schema: 

![Imgur Image](https://imgur.com/5hghPtE.jpg)

Two models - Users and Stash. 

Users:

![Imgur Image](https://imgur.com/P6tcL6h.jpg)

Tags: 

![Imgur Image](https://imgur.com/kNlwgsC.jpg)

Tag groups:

![Imgur Image](https://imgur.com/cvDxXUG.jpg)

Stash: 

![Imgur Image](https://imgur.com/7PM8PD0.jpg)

## Future endevors: 
- Implement tags.
- Embed videos. 
- Resolve why certain links cannot be scraped.
- Implement "friends", so a user can give permission to another user to view their personal page.

## Screenshots:
Home:  

![Imgur Image](https://imgur.com/TJQck6r.jpg)

Add:

![Imgur Image](https://imgur.com/BYctOWI.jpg)

## Installation instructions: 
- npm install
- npm start
- nodemon server.js