# React TS boilerplate app

React TS boilerplate app with support for [Typescript](https://www.typescriptlang.org/) and other common library which provide for you ready starter application. This application is linked to the backend application based on Node.js (repository: [Express Rest Api Boilerplate](https://github.com/r0ndi/express-rest-api-boilerplate)) 

Functionalities:
- code based on [Typescript](https://www.typescriptlang.org/)
- support for http requests [axios](https://www.npmjs.com/package/axios)
- transaltions support via [i18next](https://www.i18next.com/overview/introduction)
- environments via `.env` files
- linting via [eslint](https://github.com/eslint/eslint)
- basic tests for components with [Jest](https://github.com/facebook/jest) and [Enzyme](https://www.npmjs.com/package/enzyme)
- built with [npm sripts](#npm-scripts)
- git hooks via [husky](https://www.npmjs.com/package/husky)
- styles and design with [material-ui](https://material-ui.com/getting-started/installation/)
- example User & Auth components

## Installation and usage guide for development

Before start: 
- Setup backend application: [Express Rest Api Boilerplate](https://github.com/r0ndi/express-rest-api-boilerplate)
- Clone this repository: `git clone https://github.com/r0ndi/react-ts-boilerplate.git`

```sh
# cd into project
$ cd react-ts-boilerplate
# change .env.disc file to .env.local / .env for yourself
# install dependencies
$ npm install
# run application
$ npm start
```

## Npm scripts

`npm start` - starting development server\
`npm test` - run tests for application\
`npm lint` - checking code structure\
`npm build` - compile project into `/build`

## Licence

MIT @ Konrad Sądel