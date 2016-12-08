# Ember2.9-SFS
Ember 2.9 project - Start from scratch

## Installation Step by Step
- Install Node.js

Go to [Node website](https://nodejs.org/en/)

- Install Git

Go to [Git website](https://git-scm.com/)

Then add Git to Windows Path

- Install npm

Open command prompt

```
$ npm install npm -g
```

- Install ember-cli

A simple CLI for scaffolding Ember.js projects
```
$ npm install -g ember-cli
```

- Install bower

A package manager for the web
```
$ npm install -g bower
```

- Install json-server ([source](https://github.com/typicode/json-server))

Full fake REST API
```
$ npm install -g json-server
```
## Usage

- Clone or Download the project

- Install dependencies
```
$ cd my-project
$ npm install
$ bower install
```

- Open first command prompt

a) for dev build
```
$ cd my-project
$ ember server
```

b) for prod build

```
$ cd my-project
$ ember build --env production
```

Install http-server ([source](https://github.com/indexzero/http-server))

A command-line http server
```
$ npm install -g http-server
```
then 

```
$ cd my-project\dist
http-server
```

- Open second command prompt
```
$ cd my-project\fake_db
$ json-server --watch db.json
```

- Go to localhost

a) for dev build: [localhost:4200](http://localhost:4200/)

b) for prod build: [localhost:8080](http://localhost:8080/)

## Features

- component, model, helper
- templates (.hbs)
- include 3rd-party JS library
- [Ember Normalize](https://github.com/HeroicEric/ember-normalize)
- [Ember Bootstrap](https://github.com/kaliber5/ember-bootstrap)
- [Ember Sass](https://github.com/aexmachina/ember-cli-sass)
- [Ember Document title](https://github.com/kimroen/ember-cli-document-title)
- [Ember i18n](https://github.com/jamesarosen/ember-i18n)
- [Ember Favicon](https://github.com/davewasmer/ember-cli-favicon)
- [Ember Pace](https://github.com/vectart/ember-cli-pace)
- NO unit/integration test has been developed.

## Conclusion

This is just a simple example, I hope this will help you to understand better Ember.
