BlissOS Website
===============

The official website for BlissOS - Android for your PC.

Project Overview
----------------
This is a Node.js/Express.js web application that serves the BlissOS website.
It was converted from a Hugo static site generator to use npm by default.

Features
--------
- Built with Express.js and EJS templating
- Styled with Tailwind CSS
- Dark mode support
- Mobile-first responsive design
- SEO-friendly with meta tags
- Alpine.js for interactive components
- Runs on port 3010 by default

Technology Stack
----------------
- Node.js
- Express.js (web server)
- EJS (templating engine)
- Tailwind CSS (styling)
- Alpine.js (JavaScript framework)
- Splide.js (carousel/slider)
- Concurrently (run multiple npm scripts)
- Nodemon (development auto-restart)

Project Structure
-----------------
blissweb/
├── assets/           Static assets (CSS, JS, images)
├── views/            EJS templates
│   └── partials/     Reusable template parts
├── server.js         Express.js server
├── package.json      Node.js dependencies and scripts
└── tailwind.config.js Tailwind CSS configuration

Quick Start
-----------
1. Install Node.js (https://nodejs.org/)
2. Clone this repository
3. Run: npm install
4. Run: npm start
5. Open: http://localhost:3010

The site will be available with hot reloading for development.

License
-------
Apache 2.0 License