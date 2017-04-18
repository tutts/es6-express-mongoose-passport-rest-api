# Node boilerplate

This is my node boilerplate starter kit. I will continue to update with the latest tech to help make make node services
super easy and efficient to kick start.

## Whats out the box?

### Frameworks
- Node 7 + ES6 (Babel)
- Express
- Passport
- Mongoose
- Joi

### Developer tools
- Jest
- Docker
- Husky (Githooks)

## Instructions

Install [mongodb](https://www.mongodb.com/download-center?jmp=nav#community) and fire up the server

```
mongod
```

Install [`yarn`](https://www.npmjs.com/package/yarn). Not used yarn yet? Do its awesome... and required

```
npm install -g yarn
```

Pull down the repository

```
git clone https://github.com/tutts/node-es6-express-mongoose-passport
```

Run yarn in the root of your project to install its dependencies

```
yarn
```

### Server

Start in development mode http://localhost:4040/health-check

```
yarn dev
```

Build the distributable

```
yarn build
```

Build the distributable + start node server http://localhost:8080/health-check

```
yarn start
```

### Tests

Run tests or code coverage in Jest

```
yarn test
yarn test:coverage
```

Running lint **(deprecated)**

** ESLint has now been removed in favour of Prettier. As of version 1.0.0, semi colons are now optional and disabled as
default. **

```
yarn lint
yarn lint:watch
yarn lint:fix // attempts to fix your lint issues for you
```


## Todo
- [ ] add dotenv

Inspired by [KunalKapadia](https://github.com/KunalKapadia/express-mongoose-es6-rest-api) and  [Developit](https://github.com/developit/express-es6-rest-api)
