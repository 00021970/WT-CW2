# WT-CW2

This is a simple app to create to-do lists of topic-based tasks and manage them. It was created using basic node and express principles, the data is stored in a .json file and pages are rendered with pug.

## To run the app locally:

1. Clone the repository from `https://github.com/00021970/WT-CW2.git` or download the .zip file
2. Install dependencies by running `npm i express pug express-validator` in the terminal
3. Start the server by running `npm start` in the terminal
4. Open `http://localhost:3000`

## Dependencies
    - express
    - pug
    - express-validator

## Project structure
WT-CW2/
│
├── controllers/
│   └── lists.js
│
├── data/
│   └── lists.json
│
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── scripts.js
│
├── routes/
│   ├── create.js
│   ├── delete.js
│   ├── index.js
│   ├── list.js
│   └── update.js
│
├── services/
│   └── lists.js
│
├── validations/
│   └── create.js
│
├── views/
│   ├── create.pug
│   ├── index.pug
│   └── list.pug
│
├── app.js
├── package-lock.json
├── package.json
└── README.md

## Link to repository
https://github.com/00021970/WT-CW2.git

## Link to hosted website
wt-cw2-production.up.railway.app